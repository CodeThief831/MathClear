import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function ReadableMath({ math, className = '' }: { math: string; className?: string }) {
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

  return <div className={`readable-math ${className}`} role="math" aria-label={math}>
    {rendered.html
      ? <div className="katex-output" dangerouslySetInnerHTML={{ __html: rendered.html }} />
      : <code className="math-fallback" title={rendered.error}>{math}</code>}
  </div>
}
