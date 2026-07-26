export type SubjectCode = '21MAT11' | '21MAT21' | '21MAT31' | '21MATCS41'

export type Subject = {
  code: SubjectCode
  title: string
  semester: string
  confidence: number
  accent: string
  modules: { title: string; topics: string; priority: 'High' | 'Medium' }[]
}

export const subjects: Subject[] = [
  {
    code: '21MAT11',
    title: 'Calculus & Differential Equations',
    semester: 'Semester 1',
    confidence: 38,
    accent: '#2dd4bf',
    modules: [
      { title: 'Differential Calculus', topics: 'Polar curves, curvature, Taylor series', priority: 'High' },
      { title: 'Multivariable Calculus', topics: 'Partial derivatives, Jacobians', priority: 'High' },
      { title: 'Vector Calculus', topics: 'Gradient, divergence and curl', priority: 'Medium' },
      { title: 'Differential Equations', topics: 'Higher-order linear equations', priority: 'High' },
      { title: 'Applications', topics: 'Oscillations and circuit models', priority: 'Medium' },
    ],
  },
  {
    code: '21MAT21',
    title: 'Advanced Calculus & Numerical Methods',
    semester: 'Semester 2',
    confidence: 46,
    accent: '#fbbf24',
    modules: [
      { title: 'Integral Calculus', topics: 'Multiple integrals and area', priority: 'High' },
      { title: 'Vector Integration', topics: 'Green, Gauss and Stokes', priority: 'High' },
      { title: 'Numerical Algebra', topics: 'Roots and interpolation', priority: 'High' },
      { title: 'Numerical Integration', topics: 'Simpson and Weddle rules', priority: 'High' },
      { title: 'Numerical ODEs', topics: 'Euler and Runge–Kutta', priority: 'Medium' },
    ],
  },
  {
    code: '21MAT31',
    title: 'Transform Calculus, Fourier Series & Numerical Techniques',
    semester: 'Semester 3',
    confidence: 61,
    accent: '#a78bfa',
    modules: [
      { title: 'Laplace Transforms', topics: 'Transforms, inverse and ODEs', priority: 'High' },
      { title: 'Fourier Series', topics: 'Full/half range and harmonics', priority: 'Medium' },
      { title: 'Fourier & Z Transforms', topics: 'Difference equations', priority: 'High' },
      { title: 'Numerical PDE', topics: 'Classification, wave, heat and Laplace mesh', priority: 'High' },
      { title: 'Numerical ODE & Variations', topics: 'RK4, Milne, Euler equation and extremals', priority: 'High' },
    ],
  },
  {
    code: '21MATCS41',
    title: 'Mathematical Foundations for Computing, Probability & Statistics',
    semester: 'Semester 4',
    confidence: 54,
    accent: '#fb7185',
    modules: [
      { title: 'Fundamentals of Logic', topics: 'Truth tables, inference, quantifiers and proofs', priority: 'High' },
      { title: 'Relations, Functions & Graphs', topics: 'Equivalence, posets, Hasse diagrams and Euler trails', priority: 'High' },
      { title: 'Statistical Methods', topics: 'Correlation, regression and curve fitting', priority: 'High' },
      { title: 'Probability Distributions', topics: 'Random variables, Binomial, Poisson and Normal', priority: 'High' },
      { title: 'Joint Distributions & Sampling', topics: 'Covariance, z/t tests and chi-square', priority: 'High' },
    ],
  },
]

export const formulas: Record<SubjectCode, { group: string; items: { name: string; formula: string; cue: string }[] }[]> = {
  '21MAT11': [
    { group: 'Differential Calculus', items: [
      { name: 'Taylor expansion', formula: 'f(x)=f(a)+(x-a)f\u2032(a)+\\frac{(x-a)^2}{2!}f\u2033(a)+\\cdots', cue: 'Expand near a known point' },
      { name: 'Radius of curvature', formula: '\\rho=\\frac{[1+(y\u2032)^2]^{3/2}}{|y\u2033|}', cue: 'Cartesian curve' },
    ] },
    { group: 'Vector Calculus', items: [
      { name: 'Gradient', formula: '\\nabla\\phi=\\frac{\\partial\\phi}{\\partial x}\\hat i+\\frac{\\partial\\phi}{\\partial y}\\hat j+\\frac{\\partial\\phi}{\\partial z}\\hat k', cue: 'Direction of fastest increase' },
      { name: 'Divergence', formula: '\\nabla\\cdot\\vec F=\\frac{\\partial F_x}{\\partial x}+\\frac{\\partial F_y}{\\partial y}+\\frac{\\partial F_z}{\\partial z}', cue: 'Source or sink strength' },
    ] },
  ],
  '21MAT21': [
    { group: 'Numerical Methods', items: [
      { name: 'Newton–Raphson', formula: 'x_{n+1}=x_n-\\frac{f(x_n)}{f\u2032(x_n)}', cue: 'Fast root approximation' },
      { name: 'Simpson 1/3', formula: 'I\\approx\\frac h3[y_0+y_n+4\\sum y_{odd}+2\\sum y_{even}]', cue: 'Even number of strips' },
    ] },
    { group: 'Integral Theorems', items: [
      { name: 'Gauss divergence', formula: '\\iiint_V(\\nabla\\cdot\\vec F)dV=\\iint_S\\vec F\\cdot\\hat n\\,dS', cue: 'Volume to closed surface' },
      { name: 'Stokes', formula: '\\iint_S(\\nabla\\times\\vec F)\\cdot\\hat n\\,dS=\\oint_C\\vec F\\cdot d\\vec r', cue: 'Surface to boundary' },
    ] },
  ],
  '21MAT31': [
    { group: 'Laplace Transforms', items: [
      { name: 'Power rule', formula: '\\mathcal L\\{t^n\\}=\\frac{n!}{s^{n+1}}', cue: 'Direct transform' },
      { name: 'Derivative', formula: '\\mathcal L\\{y\u2033\\}=s^2Y(s)-sy(0)-y\u2032(0)', cue: 'Solving initial-value ODEs' },
      { name: 'First shift', formula: '\\mathcal L\\{e^{at}f(t)\\}=F(s-a)', cue: 'Exponential multiplier' },
    ] },
    { group: 'Numerical ODEs', items: [
      { name: 'RK4 update', formula: 'y_{n+1}=y_n+\\frac16(k_1+2k_2+2k_3+k_4)', cue: 'Four slopes per step' },
      { name: 'Milne predictor', formula: 'y_4^{(p)}=y_0+\\frac{4h}{3}(2f_1-f_2+2f_3)', cue: 'Predict next tabulated value' },
    ] },
    { group: 'Calculus of Variations', items: [
      { name: 'Euler equation', formula: '\\frac{\\partial f}{\\partial y}-\\frac d{dx}\\left(\\frac{\\partial f}{\\partial y\u2032}\\right)=0', cue: 'Find an extremal curve' },
    ] },
  ],
  '21MATCS41': [
    { group: 'Statistical Methods', items: [
      { name: 'Karl Pearson correlation', formula: 'r=\\frac{\\sum(x-\\bar x)(y-\\bar y)}{\\sqrt{\\sum(x-\\bar x)^2\\sum(y-\\bar y)^2}}', cue: 'Measure linear correlation' },
      { name: 'Spearman rank correlation', formula: '\\rho=1-\\frac{6\\sum d^2}{n(n^2-1)}', cue: 'Compare two rankings without ties' },
      { name: 'Regression relation', formula: 'r=\\pm\\sqrt{b_{xy}b_{yx}}', cue: 'Find correlation from regression coefficients' },
    ] },
    { group: 'Probability Distributions', items: [
      { name: 'Binomial mean', formula: '\\mu=np,\\qquad \\sigma^2=npq', cue: 'Independent success/failure trials' },
      { name: 'Poisson model', formula: 'P(X=x)=e^{-\\lambda}\\frac{\\lambda^x}{x!}', cue: 'Rare events per interval' },
      { name: 'Normal standardization', formula: 'z=\\frac{x-\\mu}{\\sigma}', cue: 'Convert values to the standard normal table' },
    ] },
    { group: 'Hypothesis Testing', items: [
      { name: 'Large-sample mean test', formula: 'z=\\frac{\\bar x-\\mu_0}{\\sigma/\\sqrt n}', cue: 'Test a population mean when sigma is known' },
      { name: 'Student t-test', formula: 't=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}', cue: 'Test a mean from a small normal sample' },
      { name: 'Chi-square statistic', formula: '\\chi^2=\\sum\\frac{(O-E)^2}{E}', cue: 'Test goodness of fit or uniformity' },
    ] },
  ],
}

export const officialLinks = {
  syllabus: 'https://vtu.ac.in/b-e-scheme-syllabus/',
  modelPapers: 'https://vtu.ac.in/model-question-paper-b-e-b-tech-b-arch/1000/',
}
