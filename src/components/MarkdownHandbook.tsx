import { useEffect, useMemo, useState } from 'react'
import { marked } from 'marked'
import { Download, Printer } from 'lucide-react'

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

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}${config.markdown}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load handbook (${response.status}).`)
        return response.text()
      })
      .then(setMarkdown)
      .catch((reason: Error) => setError(reason.message))
  }, [config.markdown])

  const html = useMemo(() => marked.parse(markdown, { async: false }) as string, [markdown])

  useEffect(() => {
    if (!html) return
    const mathJax = (window as typeof window & { MathJax?: { typesetPromise?: (elements?: Element[]) => Promise<void> } }).MathJax
    const root = document.querySelector('.markdown-handbook')
    if (root && mathJax?.typesetPromise) mathJax.typesetPromise([root]).catch(() => undefined)
  }, [html])

  if (error) return <section className="panel"><h2>Handbook unavailable</h2><p>{error}</p></section>
  if (!markdown) return <section className="panel loading-panel">Loading complete handbook…</section>

  return <article className="markdown-handbook">
    <header className="markdown-handbook-cover">
      <span>MathClear · VTU 2021 Scheme</span>
      <h1>{config.code} Complete Revision Handbook</h1>
      <h2>{config.title}</h2>
      <p>All module questions, full solutions, formula explanations, mark allocation and plain-English intuition.</p>
      <strong>60+ raw-mark preparation target</strong>
      <small>Preparation support—not an examination guarantee.</small>
      <div className="handbook-actions no-print"><a href={`${import.meta.env.BASE_URL}${config.pdf}`} download><Download size={18} /> Download PDF</a><button onClick={() => window.print()}><Printer size={18} /> Print handbook</button></div>
    </header>
    <section className="markdown-handbook-body" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
}
