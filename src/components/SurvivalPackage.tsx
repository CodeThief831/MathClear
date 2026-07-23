import { useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import { AlertTriangle, BookOpenCheck, CheckCircle2, ChevronDown, Clock3, ExternalLink, Eye, EyeOff, Flame, Printer, ShieldCheck, Target } from 'lucide-react'
import { m3Modules, paperPartCount, paperTotal, type FullQuestion, type PaperPart } from '../data/m3MockPaper'

type Mode = 'paper' | 'scheme'

const questionMarks = (question: FullQuestion) => question.parts.reduce((sum, part) => sum + part.marks, 0)
const stepMarks = (part: PaperPart) => part.steps.reduce((sum, step) => sum + step.marks, 0)

export function SurvivalPackage() {
  const [mode, setMode] = useState<Mode>('paper')
  const [selected, setSelected] = useState<Record<number, 'A' | 'B'>>({ 1: 'A', 2: 'A', 3: 'B', 4: 'B', 5: 'A' })
  const [openPart, setOpenPart] = useState('')
  const [completed, setCompleted] = useState<string[]>([])
  const selectedMarks = m3Modules.reduce((sum, module) => selected[module.module] ? sum + 20 : sum, 0)

  const choose = (module: number, option: 'A' | 'B') => setSelected((current) => ({ ...current, [module]: option }))
  const toggleComplete = (id: string) => setCompleted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <div className="survival-stack">
      <section className="survival-hero mock-hero">
        <div><span className="urgent-badge"><Flame size={15} /> OCR-backed survival mock</span><h1>21MAT31 Mathematics III<br /><em>Real VTU paper format</em></h1><p>Built after OCR analysis of 15 scanned pages covering five arrear examinations from 2023–2026, then cross-checked against the recurring 21MAT31 resources listed by Take It Easy Engineers.</p></div>
        <div className="survival-score"><strong>{selectedMarks}/{paperTotal}</strong><span>attempt plan selected</span><div><i style={{ width: `${selectedMarks}%` }} /></div></div>
      </section>

      <section className="reality-card"><AlertTriangle size={22} /><div><strong>No fake guarantee</strong><p>This is an independently prepared VTU-pattern mock, not a leaked or official prediction. It maximizes recurring-pattern coverage but cannot guarantee 60% or a pass. The safest strategy is to write every solution closed-book and verify current instructions on the official paper.</p></div></section>

      <section className="analysis-strip">
        <article><strong>5</strong><span>papers analyzed</span></article><article><strong>15</strong><span>pages OCR processed</span></article><article><strong>10</strong><span>full questions</span></article><article><strong>100</strong><span>marks selected</span></article>
      </section>

      <section className="panel mock-controls no-print">
        <div><span className="eyebrow"><Eye size={14} /> Display mode</span><h2>{mode === 'paper' ? 'Question-paper mode' : 'Evaluation-scheme mode'}</h2><p>{mode === 'paper' ? 'Solutions are hidden. Set a 3-hour timer and write like the real exam.' : 'Every answer is split into examiner-style mark steps.'}</p></div>
        <div className="mock-action-row"><button className={mode === 'paper' ? 'active' : ''} onClick={() => setMode('paper')}><EyeOff size={17} /> Mock test</button><button className={mode === 'scheme' ? 'active' : ''} onClick={() => setMode('scheme')}><BookOpenCheck size={17} /> Solutions</button><button onClick={() => window.print()}><Printer size={17} /> Print</button></div>
      </section>

      <section className="paper-sheet">
        <header className="paper-header"><div><strong>21MAT31</strong><span>Model Survival Paper · 2021 Scheme</span></div><h2>Transform Calculus, Fourier Series and Numerical Techniques</h2><div className="paper-meta"><span>Time: 3 Hours</span><span>Max. Marks: 100</span></div><p><b>Note:</b> Answer any FIVE full questions, choosing ONE full question from each module.</p></header>

        {m3Modules.map((module) => {
          const options: { key: 'A' | 'B'; question: FullQuestion }[] = [{ key: 'A', question: module.optionA }, { key: 'B', question: module.optionB }]
          return <section className="paper-module" key={module.module}>
            <div className="paper-module-title"><span>Module – {module.module}</span><small>{module.title}</small><em>{module.frequency}</em></div>
            {options.map(({ key, question }, optionIndex) => <div key={question.number}>
              {optionIndex === 1 && <div className="or-divider"><span>OR</span></div>}
              <article className={`full-question ${selected[module.module] === key ? 'chosen' : ''}`}>
                <div className="full-question-head"><h3>Q{question.number}</h3><span>{questionMarks(question)} Marks</span><button className="no-print" onClick={() => choose(module.module, key)}>{selected[module.module] === key ? <><CheckCircle2 size={16} /> Selected</> : 'Choose this question'}</button></div>
                {question.parts.map((part) => {
                  const id = `${question.number}${part.label}`
                  const expanded = openPart === id
                  const validScheme = stepMarks(part) === part.marks
                  return <div className="paper-part" key={id}>
                    <button className="paper-part-prompt" onClick={() => mode === 'scheme' && setOpenPart(expanded ? '' : id)} disabled={mode === 'paper'}>
                      <b>{question.number}({part.label})</b><div><span>{part.prompt}</span><small>{part.topic} · {part.recurrence}</small></div><em>[{String(part.marks).padStart(2, '0')} Marks]</em>{mode === 'scheme' && <ChevronDown size={18} />}
                    </button>
                    {mode === 'scheme' && expanded && <div className="evaluation-scheme">
                      <div className="child-explanation"><span>Explain it like I am new</span><p>{part.simpleIdea}</p></div>
                      <div className="scheme-table"><div className="scheme-row heading"><span>Expected working</span><b>Marks</b></div>{part.steps.map((step, index) => <div className="scheme-row" key={`${id}-${index}`}><span><strong>{step.label}</strong>{step.math && <MathJax dynamic>{`\\(${step.math}\\)`}</MathJax>}{step.text && <p>{step.text}</p>}</span><b>{step.marks}</b></div>)}<div className="scheme-row total"><span>Total {validScheme ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}</span><b>{stepMarks(part)}/{part.marks}</b></div></div>
                      <div className="final-answer"><span>Final answer</span><MathJax dynamic>{`\\(\\boxed{${part.finalAnswer}}\\)`}</MathJax></div>
                      <button className={completed.includes(id) ? 'complete-button completed' : 'complete-button'} onClick={() => toggleComplete(id)}>{completed.includes(id) ? <><CheckCircle2 size={17} /> Written once</> : 'Mark as written closed-book'}</button>
                    </div>}
                  </div>
                })}
              </article>
            </div>)}
          </section>
        })}
      </section>

      <section className="panel day-plan no-print"><div className="section-heading"><div><span className="eyebrow"><Clock3 size={14} /> Last-day attack order</span><h2>Do not read everything equally</h2><p>Write first. Review second. Passive reading creates false confidence.</p></div></div><div className="survival-timeline"><article><b>2.5 h</b><strong>M4 Numerical PDE</strong><span>Bender–Schmidt, classification and Laplace averaging.</span></article><article><b>2.5 h</b><strong>M5 Evaluation lines</strong><span>RK pairs, Euler derivation and straight-line proof.</span></article><article><b>2 h</b><strong>M1 Procedures</strong><span>Periodic formula, convolution and ODE flow.</span></article><article><b>1.5 h</b><strong>M2 Guaranteed structure</strong><span>One full series, one half range, one table.</span></article><article><b>1.5 h</b><strong>M3 Z-transform route</strong><span>Choose Q6 and master all three parts.</span></article><article><b>3 h</b><strong>Closed-book mock</strong><span>Paper mode, five selected questions, no peeking.</span></article></div></section>

      <section className="package-summary no-print"><article><Target /><strong>Attempt plan</strong><span>Q1 or Q2, Q3 or Q4, Q5 or Q6, Q7 or Q8, Q9 or Q10.</span></article><article><ShieldCheck /><strong>Evaluation rule</strong><span>Formula → substitution → working → boxed answer.</span></article><article><CheckCircle2 /><strong>Real preparation</strong><span>{completed.length} of {paperPartCount} parts written closed-book.</span></article></section>

      <section className="panel source-audit no-print"><h2>Evidence and supporting resources</h2><p>Pattern frequencies come from the locally supplied <code>M3_ALL.pdf</code>: Dec. 2023/Jan. 2024 through Dec. 2025/Jan. 2026. Equations damaged by OCR were not copied blindly; the mock uses independently authored clean values matching recurring methods.</p><div><a href="https://takeiteasyengineers.com/21mat31/21mat31-practice-questions-23/" target="_blank" rel="noreferrer">TIE practice questions <ExternalLink size={14} /></a><a href="https://takeiteasyengineers.com/21mat31/21mat31-simp-23/" target="_blank" rel="noreferrer">TIE SIMP 2023 <ExternalLink size={14} /></a><a href="https://takeiteasyengineers.com/category/21mat31/" target="_blank" rel="noreferrer">TIE 21MAT31 archive <ExternalLink size={14} /></a></div></section>
    </div>
  )
}
