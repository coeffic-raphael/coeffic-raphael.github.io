# Raphaël Coeffic — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Stack

- React 18
- Vite 6
- Tailwind CSS 3
- Deployed on GitHub Pages

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build locally
```

## Adding your CV

Place your CV file at:

```
public/Raphael_Coeffic_CV.pdf
```

It will be accessible at `/Raphael_Coeffic_CV.pdf` and all download buttons will work automatically.

## Deploying to GitHub Pages

### First-time setup

1. Create a repository named `racoeffic.github.io` on GitHub
2. In `vite.config.js`, `base` is already set to `'/'` — correct for a `*.github.io` repo
3. Run:

```bash
git init
git remote add origin https://github.com/racoeffic/racoeffic.github.io.git
git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main
```

4. In GitHub repo settings → Pages → set source to **GitHub Actions** (or **Branch: main / root**)

### Deploying via gh-pages script

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

Make sure the `homepage` field in `package.json` matches your GitHub Pages URL if you use a custom repo name (not `*.github.io`).

## Updating content

- **Projects**: `src/data/projects.js`
- **Skills**: `src/data/skills.js`
- **Text content**: edit directly in the component files under `src/components/`
