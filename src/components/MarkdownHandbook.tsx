import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { marked } from 'marked'
import { AlertTriangle, BookOpenCheck, Download, Eye, EyeOff, Maximize2, Printer, X } from 'lucide-react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

type HandbookMode = 'paper' | 'solutions'

const repairTypography = (value: string) => value
  .replaceAll('â€”', '—')
  .replaceAll('â€“', '–')
  .replaceAll('â€™', '’')
  .replaceAll('â€œ', '“')
  .replaceAll('â€', '”')
  .replaceAll('â€¦', '…')
  .replaceAll('Â°', '°')
  .replaceAll('Â', '')

type MathToken = { tex: string; display: boolean }

const extractMath = (value: string) => {
  const blocks: MathToken[] = []
  const reserve = (indentation: string, math: string, display: boolean) => {
    const token = `MATHCLEARMATH${blocks.length}TOKEN`
    blocks.push({ tex: math.trim(), display })
    return `${indentation}${token}`
  }
  const bracketProtected = value.replace(
    /^([\t ]*)\\\[[\t ]*\r?\n([\s\S]*?)^[\t ]*\\\][\t ]*$/gm,
    (_match, indentation: string, math: string) => reserve(indentation, math, true),
  )
  const multilineProtected = bracketProtected.replace(
    /^([\t ]*)\$\$[\t ]*\r?\n([\s\S]*?)^[\t ]*\$\$[\t ]*$/gm,
    (_match, indentation: string, math: string) => reserve(indentation, math, true),
  )
  const displayProtected = multilineProtected.replace(/\$\$([^\n]+?)\$\$/g, (_match, math: string) => reserve('', math, true))
  const source = displayProtected.replace(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g, (_match, math: string) => reserve('', math, false))
  return { source, blocks }
}

const renderKatex = (tex: string, displayMode: boolean) => {
  const options = {
    displayMode,
    output: 'htmlAndMathml' as const,
    strict: false as const,
    throwOnError: true,
    trust: false,
  }
  try {
    return katex.renderToString(tex, options)
  } catch {
    return `<code class="math-fallback">${tex.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</code>`
  }
}

const restoreMath = (root: Element, blocks: MathToken[]) => {
  if (!blocks.length) return
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []
  let node = walker.nextNode()
  while (node) {
    textNodes.push(node as Text)
    node = walker.nextNode()
  }

  textNodes.forEach((textNode) => {
    const value = textNode.data
    const matches = [...value.matchAll(/MATHCLEARMATH(\d+)TOKEN/g)]
    if (!matches.length || !textNode.parentNode) return
    const fragment = document.createDocumentFragment()
    let cursor = 0
    matches.forEach((match) => {
      if (match.index! > cursor) fragment.append(value.slice(cursor, match.index))
      const block = blocks[Number(match[1])]
      const math = document.createElement(block.display ? 'div' : 'span')
      math.className = block.display ? 'handbook-display-math' : 'handbook-inline-math'
      math.dataset.tex = block.tex
      if (block.display) {
        const viewport = document.createElement('div')
        viewport.className = 'handbook-math-scroll'
        viewport.innerHTML = renderKatex(block.tex, true)
        const hint = document.createElement('span')
        hint.className = 'handbook-zoom-hint'
        hint.textContent = 'Swipe equation sideways · tap to enlarge'
        math.append(viewport, hint)
        math.setAttribute('role', 'button')
        math.setAttribute('tabindex', '0')
        math.setAttribute('aria-label', 'Enlarge this formula')
        if (block.tex.includes('\\boxed')) math.classList.add('handbook-boxed-result')
      } else {
        math.innerHTML = renderKatex(block.tex, false)
      }
      fragment.append(math)
      cursor = match.index! + match[0].length
    })
    if (cursor < value.length) fragment.append(value.slice(cursor))
    textNode.parentNode.replaceChild(fragment, textNode)
  })
}

const formatHandbookHtml = (markdown: string) => {
  const { source, blocks } = extractMath(markdown)
  const parsed = marked.parse(source, { async: false }) as string
  const document = new DOMParser().parseFromString(`<main>${parsed}</main>`, 'text/html')
  const root = document.querySelector('main')
  if (!root) return parsed
  restoreMath(root, blocks)

  root.querySelectorAll('h1').forEach((heading) => {
    heading.classList.add(heading.textContent?.trim().startsWith('Module ') ? 'handbook-module-title' : 'handbook-paper-title')
  })
  root.querySelectorAll('h2').forEach((heading) => {
    const text = heading.textContent?.trim() ?? ''
    if (/^Q\d+\b/i.test(text)) heading.classList.add('handbook-question-title')
    if (text === 'OR') heading.classList.add('handbook-or-title')
  })
  root.querySelectorAll('h3').forEach((heading) => {
    if (/^Q\d+\([a-c]\)/i.test(heading.textContent?.trim() ?? '')) heading.classList.add('handbook-part-title')
  })
  root.querySelectorAll('h4').forEach((heading) => {
    if (/solution|marking/i.test(heading.textContent ?? '')) heading.classList.add('handbook-solution-title')
  })

  root.querySelectorAll('.handbook-solution-title').forEach((heading) => {
    const answerOrder = document.createElement('div')
    answerOrder.className = 'vtu-answer-order handbook-solution-content'
    answerOrder.innerHTML = '<b>VTU answer order</b><span>1. Given / definition</span><span>2. Formula / theorem</span><span>3. Substitution</span><span>4. Stepwise working</span><span>5. Boxed answer</span>'
    heading.insertAdjacentElement('afterend', answerOrder)
    heading.classList.add('handbook-solution-content')
    let sibling = answerOrder.nextElementSibling
    while (sibling && !sibling.matches('h1, h2, h3, hr')) {
      sibling.classList.add('handbook-solution-content')
      sibling = sibling.nextElementSibling
    }
  })

  root.querySelectorAll('p').forEach((paragraph) => {
    const text = paragraph.textContent?.trim() ?? ''
    if (text.startsWith('Intuition:')) paragraph.classList.add('handbook-intuition')
    if (text.startsWith('Prompt:')) paragraph.classList.add('handbook-prompt')
    if (/^\[?\d+ marks?\]?$/i.test(text.replace(/[()[\]*]/g, '').trim())) paragraph.classList.add('handbook-mark-line')
    if (text.startsWith('Final answer:')) {
      paragraph.classList.add('handbook-final-label')
      paragraph.nextElementSibling?.classList.add('handbook-final-math')
    }
  })

  root.querySelectorAll('strong').forEach((strong) => {
    if (/^\[?\d+ marks?\]?$/i.test(strong.textContent?.trim() ?? '')) strong.classList.add('handbook-mark-badge')
  })

  root.querySelectorAll('ol').forEach((list) => {
    if (list.querySelector('.handbook-display-math, .handbook-inline-math') || list.previousElementSibling?.classList.contains('handbook-solution-title')) {
      list.classList.add('handbook-evaluation-steps')
      list.querySelectorAll(':scope > li').forEach((step) => step.classList.add('handbook-evaluation-step'))
    }
  })
  root.querySelectorAll('blockquote').forEach((quote) => quote.classList.add('handbook-study-guide'))
  root.querySelectorAll('hr').forEach((rule) => rule.classList.add('handbook-section-rule'))

  return root.innerHTML
}

const handbookConfig = {
  m1: {
    code: '21MAT11',
    title: 'Calculus and Differential Equations',
    markdown: 'handbooks/21MAT11_Complete_Handbook.md',
    pdf: 'MathClear_21MAT11_Complete_Revision_Handbook.pdf',
  },
  m2: {
    code: '21MAT21',
    title: 'Advanced Calculus and Numerical Methods',
    markdown: 'handbooks/21MAT21_Complete_Handbook.md',
    pdf: 'MathClear_21MAT21_Complete_Revision_Handbook.pdf',
  },
} as const

export function MarkdownHandbook({ kind }: { kind: 'm1' | 'm2' }) {
  const config = handbookConfig[kind]
  const [markdown, setMarkdown] = useState('')
  const [error, setError] = useState('')
  const [mode, setMode] = useState<HandbookMode>('solutions')
  const [zoomedFormula, setZoomedFormula] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${import.meta.env.BASE_URL}${config.markdown}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load handbook (${response.status}).`)
        return response.text()
      })
      .then((content) => setMarkdown(repairTypography(content)))
      .catch((reason: Error) => {
        if (reason.name !== 'AbortError') setError(reason.message)
      })
    return () => controller.abort()
  }, [config.markdown])

  const html = useMemo(() => formatHandbookHtml(markdown), [markdown])

  useEffect(() => {
    if (!zoomedFormula) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setZoomedFormula('')
    }
    document.body.classList.add('formula-zoom-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('formula-zoom-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [zoomedFormula])

  const openFormula = (target: EventTarget | null) => {
    const formula = target instanceof Element ? target.closest<HTMLElement>('.handbook-display-math') : null
    if (formula?.dataset.tex) setZoomedFormula(formula.dataset.tex)
  }

  if (error) return <section className="panel"><h2>Handbook unavailable</h2><p>{error}</p></section>
  if (!markdown) return <section className="panel loading-panel">Loading complete handbook…</section>

  return <article className={`markdown-handbook handbook-mode ${kind}-handbook ${mode === 'paper' ? 'handbook-practice-mode' : ''}`}>
    <header className="markdown-handbook-cover handbook-cover">
      <span>MathClear · VTU 2021 Scheme</span>
      <h1>{config.code} Complete Revision Handbook</h1>
      <h2>{config.title}</h2>
      <p>All module questions, full solutions, formula explanations, mark allocation and plain-English intuition.</p>
      <strong>60+ raw-mark preparation target</strong>
      <small>Preparation support—not an examination guarantee.</small>
      <div className="handbook-actions no-print"><a href={`${import.meta.env.BASE_URL}${config.pdf}`} download><Download size={18} /> Download PDF</a><button onClick={() => window.print()}><Printer size={18} /> Print handbook</button></div>
    </header>
    <section className="reality-card"><AlertTriangle size={22} /><div><strong>Backlog-focused VTU preparation—not a pass guarantee</strong><p>Coverage follows the VTU 2021 Scheme and recurring paper patterns. For reliable preparation, write one complete 20-mark choice from every module without looking, then correct every missed step.</p></div></section>
    <section className="analysis-strip handbook-analysis"><article><strong>5</strong><span>complete modules</span></article><article><strong>10</strong><span>full questions</span></article><article><strong>30</strong><span>solved parts</span></article><article><strong>100</strong><span>mark mock structure</span></article></section>
    <section className="panel mock-controls no-print">
      <div><span className="eyebrow"><Eye size={14} /> Display mode</span><h2>{mode === 'paper' ? 'Closed-book practice mode' : 'VTU-style solution mode'}</h2><p>{mode === 'paper' ? 'Questions and intuition remain visible; formal solutions are hidden until you switch back.' : 'Every answer uses formula, substitution, stepwise working, marks and a boxed result.'}</p></div>
      <div className="mock-action-row"><button className={mode === 'paper' ? 'active' : ''} onClick={() => setMode('paper')}><EyeOff size={17} /> Practice paper</button><button className={mode === 'solutions' ? 'active' : ''} onClick={() => setMode('solutions')}><BookOpenCheck size={17} /> Solutions</button><button onClick={() => window.print()}><Printer size={17} /> Print</button></div>
    </section>
    <section
      className="markdown-handbook-body"
      onClick={(event) => openFormula(event.target)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          const formula = event.target instanceof Element ? event.target.closest('.handbook-display-math') : null
          if (formula) {
            event.preventDefault()
            openFormula(formula)
          }
        }
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
    {zoomedFormula && createPortal(
      <div className="formula-zoom-overlay" role="dialog" aria-modal="true" aria-label="Enlarged formula" onClick={() => setZoomedFormula('')}>
        <div className="formula-zoom-dialog" onClick={(event) => event.stopPropagation()}>
          <div className="formula-zoom-header"><strong>Formula — enlarged textbook view</strong><button type="button" onClick={() => setZoomedFormula('')} aria-label="Close enlarged formula"><X size={23} /></button></div>
          <div className="formula-zoom-content handbook-katex-zoom" dangerouslySetInnerHTML={{ __html: renderKatex(zoomedFormula, true) }} />
          <p><Maximize2 size={13} /> Press Esc, click outside, or use the close button to return.</p>
        </div>
      </div>,
      document.body,
    )}
  </article>
}
