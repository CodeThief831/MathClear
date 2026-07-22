import { useMemo, useState } from 'react'
import Plot from 'react-plotly.js'
import { BrainCircuit, Code2, RotateCcw, Sparkles } from 'lucide-react'

type Mode = 'derivative' | 'matrix' | 'probability'

const modes: { id: Mode; label: string }[] = [
  { id: 'derivative', label: 'Derivative' },
  { id: 'matrix', label: 'Matrix' },
  { id: 'probability', label: 'Probability' },
]

export function ConceptVisualizer() {
  const [mode, setMode] = useState<Mode>('derivative')
  const [value, setValue] = useState(1)
  const [secondary, setSecondary] = useState(1)

  const plot = useMemo(() => {
    const x = Array.from({ length: 121 }, (_, index) => -3 + index * 0.05)
    if (mode === 'derivative') {
      const a = value
      const y = x.map((point) => point ** 2)
      const tangent = x.map((point) => 2 * a * (point - a) + a ** 2)
      return {
        data: [
          { x, y, type: 'scatter' as const, mode: 'lines' as const, name: 'f(x) = x²', line: { color: '#a78bfa', width: 4 } },
          { x, y: tangent, type: 'scatter' as const, mode: 'lines' as const, name: `tangent, slope ${Number(2 * a).toFixed(1)}`, line: { color: '#2dd4bf', width: 3, dash: 'dash' } },
          { x: [a], y: [a ** 2], type: 'scatter' as const, mode: 'markers' as const, name: 'touch point', marker: { color: '#fbbf24', size: 13 } },
        ],
        insight: `At x = ${a.toFixed(1)}, the graph rises ${Math.abs(2 * a).toFixed(1)} units for every unit moved right.`,
        relevance: 'Gradients tell a machine-learning model which direction reduces its error.',
      }
    }
    if (mode === 'matrix') {
      const angle = value
      const stretch = secondary
      const baseX = [0, 1, 1, 0, 0, null, 0, 1, null, 0, 0]
      const baseY = [0, 0, 1, 1, 0, null, 0, 0, null, 0, 1]
      const transformed = baseX.map((point, index) => {
        if (point === null) return { x: null, y: null }
        const yPoint = baseY[index] as number
        return {
          x: stretch * (point * Math.cos(angle) - yPoint * Math.sin(angle)),
          y: point * Math.sin(angle) + yPoint * Math.cos(angle),
        }
      })
      return {
        data: [
          { x: baseX, y: baseY, type: 'scatter' as const, mode: 'lines+markers' as const, name: 'original basis', line: { color: '#64748b', width: 2 } },
          { x: transformed.map((p) => p.x), y: transformed.map((p) => p.y), type: 'scatter' as const, mode: 'lines+markers' as const, name: 'transformed space', line: { color: '#2dd4bf', width: 4 } },
        ],
        insight: `The matrix rotates space by ${(angle * 180 / Math.PI).toFixed(0)}° and stretches x by ${stretch.toFixed(1)}×.`,
        relevance: 'Graphics engines and neural networks transform vectors with the same matrix operation.',
      }
    }
    const mean = value
    const sigma = Math.max(0.35, secondary)
    const y = x.map((point) => Math.exp(-0.5 * ((point - mean) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI)))
    return {
      data: [{ x, y, type: 'scatter' as const, mode: 'lines' as const, fill: 'tozeroy', name: 'normal density', line: { color: '#fb7185', width: 4 }, fillcolor: 'rgba(251,113,133,.16)' }],
      insight: `The centre is μ = ${mean.toFixed(1)} and spread is σ = ${sigma.toFixed(1)}. Wider σ means more uncertainty.`,
      relevance: 'Probability distributions model response time, sensor noise and prediction confidence.',
    }
  }, [mode, value, secondary])

  const reset = () => {
    setValue(mode === 'matrix' ? 0.6 : mode === 'probability' ? 0 : 1)
    setSecondary(1)
  }

  return (
    <section className="panel visualizer-panel" aria-labelledby="visualizer-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><Sparkles size={14} /> Visual intuition first</span>
          <h2 id="visualizer-title">See the math move</h2>
          <p>Change one thing. Watch the idea respond instantly.</p>
        </div>
        <button className="icon-button" onClick={reset} aria-label="Reset visualizer"><RotateCcw size={18} /></button>
      </div>
      <div className="segmented-control" aria-label="Choose visual concept">
        {modes.map((item) => <button key={item.id} className={mode === item.id ? 'active' : ''} onClick={() => { setMode(item.id); setValue(item.id === 'matrix' ? 0.6 : item.id === 'probability' ? 0 : 1); setSecondary(1) }}>{item.label}</button>)}
      </div>
      <div className="plot-shell">
        <Plot
          data={plot.data}
          layout={{
            autosize: true,
            height: window.innerWidth < 600 ? 290 : 350,
            margin: { l: 42, r: 20, t: 25, b: 42 },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: { color: '#94a3b8', family: 'Inter, sans-serif' },
            xaxis: { gridcolor: '#263449', zerolinecolor: '#475569', range: [-3, 3] },
            yaxis: { gridcolor: '#263449', zerolinecolor: '#475569', range: mode === 'probability' ? [0, 1.2] : mode === 'matrix' ? [-2.5, 2.5] : [-1, 9] },
            legend: { orientation: 'h', x: 0, y: 1.12 },
            showlegend: true,
          }}
          config={{ displayModeBar: false, responsive: true }}
          useResizeHandler
          className="plot"
        />
      </div>
      <div className="controls-grid">
        <label>
          <span>{mode === 'derivative' ? 'Move point x' : mode === 'matrix' ? 'Rotation angle' : 'Mean μ'} <strong>{value.toFixed(1)}</strong></span>
          <input type="range" min={mode === 'matrix' ? -3.14 : -2} max={mode === 'matrix' ? 3.14 : 2} step="0.1" value={value} onChange={(event) => setValue(Number(event.target.value))} />
        </label>
        {mode !== 'derivative' && <label>
          <span>{mode === 'matrix' ? 'Horizontal stretch' : 'Standard deviation σ'} <strong>{secondary.toFixed(1)}</strong></span>
          <input type="range" min="0.4" max="2" step="0.1" value={secondary} onChange={(event) => setSecondary(Number(event.target.value))} />
        </label>}
      </div>
      <div className="insight-grid">
        <article><BrainCircuit size={20} /><div><strong>What you are seeing</strong><p>{plot.insight}</p></div></article>
        <article><Code2 size={20} /><div><strong>Why CSE uses it</strong><p>{plot.relevance}</p></div></article>
      </div>
    </section>
  )
}
