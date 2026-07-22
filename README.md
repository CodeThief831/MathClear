# MathClear

Interactive visual mathematics and exam preparation for VTU 2021 Scheme CSE students covering `21MAT11`, `21MAT21`, `21MAT31`, and `21MATCS41`.

## Features

- Responsive desktop and mobile interface
- Interactive derivative, matrix, and probability visualizations
- Micro-step VTU-style worked solutions
- Subject-specific formula sheets
- Exam-focus strategy and trusted reference links
- Automatic GitHub Pages deployment

## Local development

Requires Node.js 20 or newer.

1. Run `npm install`.
2. Run `npm run dev`.
3. Open the displayed local address.

On Windows, `run-app.bat` installs missing dependencies, starts the app, and opens it in the default browser.

## Production validation

- `npm run lint`
- `npm run build`

## Automatic public hosting

The workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main` through GitHub Pages.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. After the first successful workflow run, the public URL appears in the deployment summary and the repository **Environments** section.

No computer or local server needs to remain running. GitHub hosts the generated static site continuously.
