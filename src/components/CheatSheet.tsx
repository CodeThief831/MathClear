import { useMemo, useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import { BookOpen, Copy, Search } from 'lucide-react'
import { formulas, type SubjectCode } from '../data'

export function CheatSheet({ subject }: { subject: SubjectCode }) {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState('')
  const groups = useMemo(() => formulas[subject].map((group) => ({ ...group, items: group.items.filter((item) => `${item.name} ${item.cue}`.toLowerCase().includes(query.toLowerCase())) })).filter((group) => group.items.length), [query, subject])

  const copy = async (name: string, formula: string) => {
    await navigator.clipboard.writeText(formula)
    setCopied(name)
    window.setTimeout(() => setCopied(''), 1200)
  }

  return (
    <section className="panel cheat-panel" aria-labelledby="cheat-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><BookOpen size={14} /> Quick recall</span>
          <h2 id="cheat-title">Formula cheat sheet</h2>
          <p>Only the formulas needed for {subject}.</p>
        </div>
      </div>
      <label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a formula or use case" /></label>
      <div className="formula-groups">
        {groups.map((group) => <div key={group.group} className="formula-group">
          <h3>{group.group}</h3>
          {group.items.map((item) => <article key={item.name} className="formula-card">
            <div><strong>{item.name}</strong><span>{item.cue}</span></div>
            <MathJax dynamic className="formula-math">{`\\(${item.formula}\\)`}</MathJax>
            <button onClick={() => copy(item.name, item.formula)} aria-label={`Copy ${item.name}`}><Copy size={15} />{copied === item.name ? 'Copied' : 'Copy'}</button>
          </article>)}
        </div>)}
        {!groups.length && <div className="empty-state">No matching formula. Try a simpler search.</div>}
      </div>
    </section>
  )
}
