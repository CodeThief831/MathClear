import { useState } from 'react'
import { AlertTriangle, BookOpenCheck, CheckCircle2, ChevronDown, Clock3, ExternalLink, Eye, EyeOff, Flame, Printer, ShieldCheck, Target } from 'lucide-react'
import { m3Modules, paperPartCount, paperTotal, type FullQuestion, type PaperPart } from '../data/m3MockPaper'
import { ReadableMath } from './ReadableMath'
import { explainStep } from '../utils/explainStep'

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
        <div><span className="urgent-badge"><Flame size={15} /> VTU 2021 Scheme verified</span><h1>21MAT31 Mathematics III<br /><em>VTU-aligned practice paper</em></h1><p>Module coverage and question-paper structure are checked against official VTU syllabus/model-paper sources and the supplied VTU examination scans.</p></div>
        <div className="survival-score"><strong>{selectedMarks}/{paperTotal}</strong><span>attempt plan selected</span><div><i style={{ width: `${selectedMarks}%` }} /></div></div>
      </section>

      <section className="reality-card"><AlertTriangle size={22} /><div><strong>VTU-aligned, independently authored practice</strong><p>This is not an official VTU evaluation key. It follows the 2021 Scheme syllabus, module structure and conventional VTU answer-writing sequence. Always follow the instructions printed on the current official question paper.</p></div></section>

      <section className="analysis-strip">
        <article><strong>5</strong><span>papers analyzed</span></article><article><strong>15</strong><span>pages OCR processed</span></article><article><strong>10</strong><span>full questions</span></article><article><strong>100</strong><span>marks selected</span></article>
      </section>

      <section className="panel mock-controls no-print">
        <div><span className="eyebrow"><Eye size={14} /> Display mode</span><h2>{mode === 'paper' ? 'VTU practice-paper mode' : 'VTU-style solution mode'}</h2><p>{mode === 'paper' ? 'Solutions are hidden. Follow the official five-full-question instruction.' : 'Every answer follows: Given/definition → formula/theorem → substitution → working → boxed result.'}</p></div>
        <div className="mock-action-row"><button className={mode === 'paper' ? 'active' : ''} onClick={() => setMode('paper')}><EyeOff size={17} /> Mock test</button><button className={mode === 'scheme' ? 'active' : ''} onClick={() => setMode('scheme')}><BookOpenCheck size={17} /> Solutions</button><button onClick={() => window.print()}><Printer size={17} /> Print</button></div>
      </section>

      <section className="paper-sheet">
        <header className="paper-header"><div><strong>21MAT31</strong><span>VTU-Aligned Practice Paper · 2021 Scheme</span></div><h2>Transform Calculus, Fourier Series and Numerical Techniques</h2><div className="paper-meta"><span>Time: 3 Hours</span><span>Max. Marks: 100</span></div><p><b>Note:</b> Answer any FIVE full questions, choosing ONE full question from each module.</p></header>

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
                      <div className="vtu-answer-order"><b>VTU answer order</b><span>1. Given / definition</span><span>2. Formula / theorem</span><span>3. Substitution</span><span>4. Stepwise working</span><span>5. Boxed answer</span></div><div className="scheme-table"><div className="scheme-row heading"><span>VTU-style stepwise working</span><b>Marks</b></div>{part.steps.map((step, index) => <div className="scheme-row" key={`${id}-${index}`}><span><strong><i>Step {index + 1}</i>{step.label}</strong><p className="step-why"><b>Why?</b> {explainStep(step)}</p>{step.text && <p className="step-working">{step.text}</p>}{step.math && <ReadableMath math={step.math} />}</span><b>{step.marks}</b></div>)}<div className="scheme-row total"><span>Total {validScheme ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}</span><b>{stepMarks(part)}/{part.marks}</b></div></div>
                      <div className="final-answer"><span>Final answer — write this clearly and box it</span><ReadableMath math={part.finalAnswer} className="final-math" /></div>
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

      <section className="panel source-audit no-print"><h2>VTU verification sources</h2><p>Coverage is restricted to the official VTU 2021 Scheme syllabus, official model-paper structure and the supplied VTU examination scans. The solutions are independently written in VTU-style steps; they are not represented as an official VTU evaluation key.</p><div><a href="https://vtu.ac.in/b-e-scheme-syllabus/" target="_blank" rel="noreferrer">Official VTU syllabus <ExternalLink size={14} /></a><a href="https://vtu.ac.in/pdf/QP/21MAT31set1.pdf" target="_blank" rel="noreferrer">Official VTU 21MAT31 model set 1 <ExternalLink size={14} /></a><a href="https://vtu.ac.in/pdf/QP/21MAT31set2.pdf" target="_blank" rel="noreferrer">Official VTU 21MAT31 model set 2 <ExternalLink size={14} /></a></div></section>
    </div>
  )
}
