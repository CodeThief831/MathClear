import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MathJax } from 'better-react-mathjax'
import { marked } from 'marked'
import { AlertTriangle, BookOpenCheck, Download, Eye, EyeOff, Maximize2, Printer, X } from 'lucide-react'

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

const extractDisplayMath = (value: string) => {
  const blocks: string[] = []
  const reserve = (indentation: string, math: string) => {
    const token = `MATHCLEARDISPLAY${blocks.length}TOKEN`
    blocks.push(math.trim())
    return `${indentation}${token}`
  }
  const bracketProtected = value.replace(
    /^([\t ]*)\\\[[\t ]*\r?\n([\s\S]*?)^[\t ]*\\\][\t ]*$/gm,
    (_match, indentation: string, math: string) => reserve(indentation, math),
  )
  const source = bracketProtected.replace(
    /^([\t ]*)\$\$[\t ]*\r?\n([\s\S]*?)^[\t ]*\$\$[\t ]*$/gm,
    (_match, indentation: string, math: string) => reserve(indentation, math),
  )
  return { source, blocks }
}

const restoreDisplayMath = (root: Element, blocks: string[]) => {
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
    const matches = [...value.matchAll(/MATHCLEARDISPLAY(\d+)TOKEN/g)]
    if (!matches.length || !textNode.parentNode) return
    const fragment = document.createDocumentFragment()
    let cursor = 0
    matches.forEach((match) => {
      if (match.index! > cursor) fragment.append(value.slice(cursor, match.index))
      const math = document.createElement('div')
      math.className = 'handbook-display-math'
      math.setAttribute('role', 'button')
      math.setAttribute('tabindex', '0')
      math.setAttribute('aria-label', 'Enlarge this formula')
      math.textContent = `\\[${blocks[Number(match[1])]}\\]`
      fragment.append(math)
      cursor = match.index! + match[0].length
    })
    if (cursor < value.length) fragment.append(value.slice(cursor))
    textNode.parentNode.replaceChild(fragment, textNode)
  })
}

const formatHandbookHtml = (markdown: string) => {
  const { source, blocks } = extractDisplayMath(markdown)
  const parsed = marked.parse(source, { async: false }) as string
  const document = new DOMParser().parseFromString(`<main>${parsed}</main>`, 'text/html')
  const root = document.querySelector('main')
  if (!root) return parsed
  restoreDisplayMath(root, blocks)

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
    if (text.includes('\\boxed')) paragraph.classList.add('handbook-boxed-result')
  })

  root.querySelectorAll('strong').forEach((strong) => {
    if (/^\[?\d+ marks?\]?$/i.test(strong.textContent?.trim() ?? '')) strong.classList.add('handbook-mark-badge')
  })

  root.querySelectorAll('ol').forEach((list) => {
    if (list.querySelector('li mjx-container, li .MathJax') || list.previousElementSibling?.classList.contains('handbook-solution-title')) {
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
  const handbookBody = useRef<HTMLElement>(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}${config.markdown}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load handbook (${response.status}).`)
        return response.text()
      })
      .then((content) => setMarkdown(repairTypography(content)))
      .catch((reason: Error) => setError(reason.message))
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
    if (formula) setZoomedFormula(formula.innerHTML)
  }

  useEffect(() => {
    const body = handbookBody.current
    if (!body) return
    const activateFormula = (event: Event) => openFormula(event.target)
    const activateFormulaByKeyboard = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      const formula = event.target instanceof Element ? event.target.closest('.handbook-display-math') : null
      if (!formula) return
      event.preventDefault()
      openFormula(formula)
    }
    body.addEventListener('click', activateFormula, true)
    body.addEventListener('keydown', activateFormulaByKeyboard, true)
    return () => {
      body.removeEventListener('click', activateFormula, true)
      body.removeEventListener('keydown', activateFormulaByKeyboard, true)
    }
  }, [html])

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
    <MathJax dynamic>
      <section
        ref={handbookBody}
        className="markdown-handbook-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </MathJax>
    {zoomedFormula && createPortal(
      <div className="formula-zoom-overlay" role="dialog" aria-modal="true" aria-label="Enlarged formula" onClick={() => setZoomedFormula('')}>
        <div className="formula-zoom-dialog" onClick={(event) => event.stopPropagation()}>
          <div className="formula-zoom-header"><strong>Formula — enlarged textbook view</strong><button type="button" onClick={() => setZoomedFormula('')} aria-label="Close enlarged formula"><X size={23} /></button></div>
          <div className="formula-zoom-content mathjax-zoom-content" dangerouslySetInnerHTML={{ __html: zoomedFormula }} />
          <p><Maximize2 size={13} /> Press Esc, click outside, or use the close button to return.</p>
        </div>
      </div>,
      document.body,
    )}
  </article>
}
