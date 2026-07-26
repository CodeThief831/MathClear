import { useState } from 'react'
import { AlertTriangle, BookOpenCheck, CheckCircle2, ChevronDown, Clock3, ExternalLink, Eye, EyeOff, Flame, Printer, ShieldCheck, Target } from 'lucide-react'
import { m4Modules, m4PaperTotal, m4PartCount } from '../data/m4MockPaper'
import type { FullQuestion, PaperPart } from '../data/m3MockPaper'
import { ReadableMath } from './ReadableMath'
import { explainStep } from '../utils/explainStep'

type Mode = 'paper' | 'scheme'

const questionMarks = (question: FullQuestion) => question.parts.reduce((sum, part) => sum + part.marks, 0)
const stepMarks = (part: PaperPart) => part.steps.reduce((sum, step) => sum + step.marks, 0)

export function M4SurvivalPackage() {
  const [mode, setMode] = useState<Mode>('paper')
  const [selected, setSelected] = useState<Record<number, 'A' | 'B'>>({ 1: 'A', 2: 'B', 3: 'A', 4: 'A', 5: 'B' })
  const [openPart, setOpenPart] = useState('')
  const [completed, setCompleted] = useState<string[]>([])
  const selectedMarks = m4Modules.reduce((sum, module) => selected[module.module] ? sum + 20 : sum, 0)
  const choose = (module: number, option: 'A' | 'B') => setSelected((current) => ({ ...current, [module]: option }))
  const toggleComplete = (id: string) => setCompleted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return <div className="survival-stack m4-survival">
    <section className="survival-hero mock-hero m4-hero">
      <div><span className="urgent-badge"><Flame size={15} /> VTU 2021 Scheme verified</span><h1>21MATCS41 Mathematics IV<br /><em>VTU-aligned practice paper</em></h1><p>Module coverage and paper structure are checked against the official VTU syllabus/model paper and the supplied VTU examination scans.</p></div>
      <div className="survival-score"><strong>{selectedMarks}/{m4PaperTotal}</strong><span>attempt plan selected</span><div><i style={{ width: `${selectedMarks}%` }} /></div></div>
    </section>

    <section className="reality-card"><AlertTriangle size={22} /><div><strong>VTU-aligned, independently authored practice</strong><p>This is not an official VTU evaluation key. It follows the official 2021 Scheme topics, five-module paper structure and conventional VTU answer-writing sequence. Follow the instructions printed on the current official question paper.</p></div></section>

    <section className="analysis-strip"><article><strong>3</strong><span>university papers</span></article><article><strong>11</strong><span>pages OCR processed</span></article><article><strong>10</strong><span>full questions</span></article><article><strong>30</strong><span>solved parts</span></article></section>

    <section className="panel mock-controls no-print"><div><span className="eyebrow"><Eye size={14} /> Display mode</span><h2>{mode === 'paper' ? 'VTU practice-paper mode' : 'VTU-style solution mode'}</h2><p>{mode === 'paper' ? 'Set a 3-hour timer and choose one complete question per module.' : 'Each answer follows: Given/definition → formula/theorem → substitution → working → boxed result.'}</p></div><div className="mock-action-row"><button className={mode === 'paper' ? 'active' : ''} onClick={() => setMode('paper')}><EyeOff size={17} /> Practice paper</button><button className={mode === 'scheme' ? 'active' : ''} onClick={() => setMode('scheme')}><BookOpenCheck size={17} /> VTU-style solutions</button><button onClick={() => window.print()}><Printer size={17} /> Print</button></div></section>

    <section className="paper-sheet">
      <header className="paper-header"><div><strong>21MATCS41</strong><span>VTU-Aligned Practice Paper · 2021 Scheme</span></div><h2>Mathematical Foundations for Computing, Probability and Statistics</h2><div className="paper-meta"><span>Time: 3 Hours</span><span>Max. Marks: 100</span></div><p><b>Note:</b> Answer any FIVE full questions, choosing ONE full question from each module. Use statistical tables where necessary.</p></header>
      {m4Modules.map((module) => {
        const options: { key: 'A' | 'B'; question: FullQuestion }[] = [{ key: 'A', question: module.optionA }, { key: 'B', question: module.optionB }]
        return <section className="paper-module" key={module.module}>
          <div className="paper-module-title"><span>Module – {module.module}</span><small>{module.title}</small><em>{module.frequency}</em></div>
          {options.map(({ key, question }, optionIndex) => <div key={question.number}>
            {optionIndex === 1 && <div className="or-divider"><span>OR</span></div>}
            <article className={`full-question ${selected[module.module] === key ? 'chosen' : ''}`}>
              <div className="full-question-head"><h3>Q{question.number}</h3><span>{questionMarks(question)} Marks</span><button className="no-print" onClick={() => choose(module.module, key)}>{selected[module.module] === key ? <><CheckCircle2 size={16} /> Selected</> : 'Choose this question'}</button></div>
              {question.parts.map((part) => {
                const id = `m4-${question.number}${part.label}`
                const expanded = openPart === id
                const validScheme = stepMarks(part) === part.marks
                return <div className="paper-part" key={id}>
                  <button className="paper-part-prompt" onClick={() => mode === 'scheme' && setOpenPart(expanded ? '' : id)} disabled={mode === 'paper'}><b>{question.number}({part.label})</b><div><span>{part.prompt}</span><small>{part.topic} · {part.recurrence}</small></div><em>[{String(part.marks).padStart(2, '0')} Marks]</em>{mode === 'scheme' && <ChevronDown size={18} />}</button>
                  {mode === 'scheme' && expanded && <div className="evaluation-scheme">
                    <div className="child-explanation"><span>First understand this in plain English</span><p>{part.simpleIdea}</p></div>
                    <div className="vtu-answer-order"><b>VTU answer order</b><span>1. Given / definition</span><span>2. Formula / theorem</span><span>3. Substitution</span><span>4. Stepwise working</span><span>5. Boxed answer</span></div><div className="scheme-table"><div className="scheme-row heading"><span>VTU-style stepwise working</span><b>Marks</b></div>{part.steps.map((step, index) => <div className="scheme-row" key={`${id}-${index}`}><span><strong><i>Step {index + 1}</i>{step.label}</strong><p className="step-why"><b>Why?</b> {explainStep(step)}</p>{step.text && <p className="step-working">{step.text}</p>}{step.math && <ReadableMath math={step.math} />}</span><b>{step.marks}</b></div>)}<div className="scheme-row total"><span>Total {validScheme ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}</span><b>{stepMarks(part)}/{part.marks}</b></div></div>
                    <div className="final-answer"><span>Final answer — write this clearly and box it</span><ReadableMath math={part.finalAnswer} className="final-math" /></div>
                    <button className={completed.includes(id) ? 'complete-button completed' : 'complete-button'} onClick={() => toggleComplete(id)}>{completed.includes(id) ? <><CheckCircle2 size={17} /> Written closed-book</> : 'Mark after writing closed-book'}</button>
                  </div>}
                </div>
              })}
            </article>
          </div>)}
        </section>
      })}
    </section>

    <section className="panel day-plan no-print"><div className="section-heading"><div><span className="eyebrow"><Clock3 size={14} /> VTU writing practice</span><h2>Practise one complete question from every module</h2><p>The official paper requires one full 20-mark choice from each of the five modules.</p></div></div><div className="survival-timeline"><article><b>2 h</b><strong>M5 testing format</strong><span>Definitions, t-test and difference-of-means test.</span></article><article><b>2 h</b><strong>M2 graph format</strong><span>Inverse, equivalence relation and Euler trail.</span></article><article><b>1.5 h</b><strong>M1 logic format</strong><span>Truth table, inference and odd/even proof.</span></article><article><b>2 h</b><strong>M4 distribution format</strong><span>PMF, Poisson and normal standardization.</span></article><article><b>2 h</b><strong>M3 statistics format</strong><span>Ranks, normal equations and regression means.</span></article><article><b>3 h</b><strong>Full VTU simulation</strong><span>Practice-paper mode. Do not open solutions until time ends.</span></article></div></section>

    <section className="package-summary no-print"><article><Target /><strong>Recommended attempt</strong><span>Q1, Q4, Q5, Q7 and Q10—change only if the actual data are easier.</span></article><article><ShieldCheck /><strong>Partial-mark rule</strong><span>Formula → table/setup → substitution → result → sentence conclusion.</span></article><article><CheckCircle2 /><strong>Closed-book progress</strong><span>{completed.length} of {m4PartCount} parts written independently.</span></article></section>

    <section className="panel source-audit no-print"><h2>VTU verification sources</h2><p>Coverage is restricted to the official VTU 2021 Scheme syllabus, official model-paper structure and the supplied VTU examination scans. Solutions are independently written in VTU-style steps and are not represented as an official VTU evaluation key.</p><div><a href="https://vtu.ac.in/b-e-scheme-syllabus/" target="_blank" rel="noreferrer">Official VTU syllabus <ExternalLink size={14} /></a><a href="https://vtu.ac.in/pdf/QP/21MATCS41set1.pdf" target="_blank" rel="noreferrer">Official VTU 21MATCS41 model set <ExternalLink size={14} /></a><a href="https://vtu.ac.in/model-question-paper-b-e-b-tech-b-arch/1000/" target="_blank" rel="noreferrer">Official VTU model-paper index <ExternalLink size={14} /></a></div></section>
  </div>
}
