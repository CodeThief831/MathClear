import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X } from 'lucide-react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function ReadableMath({ math, className = '' }: { math: string; className?: string }) {
  const [expanded, setExpanded] = useState(false)
  const rendered = useMemo(() => {
    try {
      return {
        html: katex.renderToString(math, {
          displayMode: true,
          output: 'htmlAndMathml',
          strict: false,
          throwOnError: true,
          trust: false,
        }),
      }
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unable to render this formula.',
      }
    }
  }, [math])

  useEffect(() => {
    if (!expanded) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
    }
    document.body.classList.add('formula-zoom-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('formula-zoom-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [expanded])

  const formula = rendered.html
    ? <div className="katex-output" dangerouslySetInnerHTML={{ __html: rendered.html }} />
    : <code className="math-fallback" title={rendered.error}>{math}</code>

  return <>
    <button className={`readable-math ${className}`} type="button" aria-label={`Enlarge formula: ${math}`} onClick={() => setExpanded(true)}>
      {formula}
      <span className="formula-zoom-hint"><Maximize2 size={14} /> Click to enlarge</span>
    </button>
    {expanded && createPortal(
      <div className="formula-zoom-overlay" role="dialog" aria-modal="true" aria-label="Enlarged formula" onClick={() => setExpanded(false)}>
        <div className="formula-zoom-dialog" onClick={(event) => event.stopPropagation()}>
          <div className="formula-zoom-header"><strong>Formula — enlarged view</strong><button type="button" onClick={() => setExpanded(false)} aria-label="Close enlarged formula"><X size={23} /></button></div>
          <div className="formula-zoom-content">{formula}</div>
          <p>Press Esc, click outside, or use the close button to return.</p>
        </div>
      </div>,
      document.body,
    )}
  </>
}
