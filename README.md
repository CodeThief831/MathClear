# MathClear

**A visual, exam-focused mathematics learning platform for VTU 2021 Scheme CSE students.**

[![Live Website](https://img.shields.io/badge/Live%20Website-Open%20MathClear-2dd4bf?style=for-the-badge)](https://codethief831.github.io/MathClear/)
[![Deploy to GitHub Pages](https://github.com/CodeThief831/MathClear/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/CodeThief831/MathClear/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa.svg)](LICENSE)

## Live website

**https://codethief831.github.io/MathClear/**

MathClear is designed for engineering students carrying mathematics backlogs who need a calm, understandable path from basic intuition to exam-ready solutions. It focuses specifically on the VTU 2021 Scheme mathematics papers relevant to CSE and allied branches.

## Covered subjects

| Course code | Course | Semester |
| --- | --- | --- |
| `21MAT11` | Calculus and Differential Equations | 1 |
| `21MAT21` | Advanced Calculus and Numerical Methods | 2 |
| `21MAT31` | Transform Calculus, Fourier Series and Numerical Techniques | 3 |
| `21MATCS41` | Mathematical Foundations for CSE | 4 |

## What is inside

### Main dashboard

- Switch between all four 2021 Scheme mathematics papers
- View high-return modules and suggested study priorities
- Follow a manageable 45-minute study plan
- Open official VTU and Take It Easy Engineers reference resources
- See progress in a low-pressure, backlog-friendly interface

### Interactive concept visualizer

- Move a tangent point and see the geometric meaning of a derivative
- Rotate and stretch a shape to understand matrix transformations
- Shift and spread a probability distribution using sliders
- Read a short explanation of what each graph shows
- Connect every visual concept to a practical CSE application

### Step-by-step solver

- Work through VTU-style questions one micro-step at a time
- Reveal algebra gradually instead of skipping intermediate calculations
- Learn why each step is performed
- Practice Laplace-transform differential equations and probability problems
- Follow exam-writing patterns designed to improve method marks

### Formula cheat sheets

- Switch formulas automatically when the active subject changes
- Search by formula name or use case
- Read properly typeset mathematical notation
- Copy formulas for personal revision notes
- Focus on short recall cues rather than dense theory

### Exam-focus mode

- Highlights high-priority modules
- Encourages method-based partial-mark strategies
- Breaks revision into recall, understanding and writing practice
- Avoids streak pressure and overwhelming walls of text

## Reference sources

The learning structure and reference links are based on:

- [VTU official 2021 Scheme and syllabus](https://vtu.ac.in/b-e-scheme-syllabus/)
- [VTU official model question papers](https://vtu.ac.in/model-question-paper-b-e-b-tech-b-arch/1000/)
- [Take It Easy Engineers — 21MAT31 resources](https://takeiteasyengineers.com/category/21mat31/)
- [Take It Easy Engineers — 21MATCS41 model-paper solutions](https://takeiteasyengineers.com/m4/21matcs41-mqp-solutionfor-cse-and-allied-branches/)

MathClear is an independent educational project. It is not affiliated with or endorsed by Visvesvaraya Technological University or Take It Easy Engineers. Source names and links are provided for attribution and student convenience.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Plotly.js
- MathJax
- Lucide React
- GitHub Actions
- GitHub Pages

## Responsive design

The interface is designed for:

- Desktop and laptop browsers
- Tablets
- Android and iOS mobile browsers
- Touch controls and smaller displays
- Keyboard navigation and visible focus states

## Run locally

### Requirements

- Node.js 20 or newer
- npm

### Setup

1. Clone the repository:

   `git clone https://github.com/CodeThief831/MathClear.git`

2. Enter the project directory:

   `cd MathClear`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local address displayed by Vite.

### One-click Windows launch

Double-click `run-app.bat`. It installs missing dependencies, starts the development server and opens the website in the default browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build in `dist` |
| `npm run lint` | Check the source with ESLint |
| `npm run preview` | Preview the production build locally |

## Automatic deployment

The website is deployed through `.github/workflows/deploy-pages.yml`.

Every push to the `main` branch automatically:

1. Checks out the source
2. Installs exact dependencies with `npm ci`
3. Runs ESLint
4. Builds the production website
5. Uploads the generated `dist` directory
6. Publishes the new version to GitHub Pages

No local computer or manual server needs to remain running. GitHub hosts the static website continuously.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Application shell, navigation and active-paper state |
| `src/App.css` | Responsive dark interface and typography |
| `src/data.ts` | Subject, module, formula and reference data |
| `src/components/MainDashboard.tsx` | Dashboard and exam-focus experience |
| `src/components/ConceptVisualizer.tsx` | Plotly-based interactive mathematics |
| `src/components/StepByStepSolver.tsx` | Micro-step worked-solution interface |
| `src/components/CheatSheet.tsx` | Searchable MathJax formula sheets |
| `.github/workflows/deploy-pages.yml` | Continuous deployment workflow |

## Contributing

Improvements are welcome, especially:

- More verified VTU 2021 Scheme questions
- Additional micro-step solutions
- More visual explanations
- Accessibility and mobile improvements
- Corrections to formulas or terminology

Create a branch, make the change, run `npm run lint` and `npm run build`, then open a pull request describing what was improved.

## Educational accuracy

Students should verify course changes, examination rules, question-paper patterns and official announcements on the VTU website. Community resources can help with practice but do not replace the current official syllabus or circulars.

## License

Released under the [MIT License](LICENSE).
