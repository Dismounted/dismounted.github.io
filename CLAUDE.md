# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Hanson Wong (www.hansonwong.com.au), built with vanilla JavaScript and Vite. Deployed to GitHub Pages from the `master` branch. The site is performance-obsessed — total initial load is ~36KB gzipped.

## Commands

```bash
npm run dev          # Vite dev server with HMR (localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
npm test             # Run all tests (CSS lint → HTML validation → Lighthouse)
npm run test:css     # Stylelint on src/**/*.css
npm run test:html    # html-validate on dist/**/*.html (requires build first)
npm run test:lighthouse  # Lighthouse CI audit (requires build first)
```

`npm test` runs sequentially: test:css, then test:html, then test:lighthouse. The HTML and Lighthouse tests operate on `dist/`, so `npm run build` must succeed first.

## Architecture

**Build:** Vite with `src/` as root, multi-page input (index.html + 404.html), Terser minification, no source maps in production.

**JavaScript:** Vanilla ES6 modules. `src/scripts/main.js` is the entry point, importing feature modules that each export an `init*` function:
- `theme.js` — Dark/light toggle, localStorage persistence, syncs with system preference, updates iOS theme-color meta tag
- `email.js` — Click-to-reveal email, second click copies to clipboard with toast notification
- `analytics.js` — GA4 behind explicit consent banner, loads script only on accept

**CSS:** Vanilla CSS with custom properties for theming. Split by concern:
- `main.css` — Typography, layout, components
- `themes.css` — Light/dark theme variables (data-theme attribute on root)
- `glass.css` — Glass morphism effects, responsive layout
- `animations.css` — Keyframe animations
- `404.css` — 404 page styles

**Static assets:** `public/` directory (robots.txt, sitemap.xml, manifest.json, favicon.svg) copied as-is to `dist/`.

## Key Patterns

- **Theming:** CSS custom properties toggled via `data-theme="light|dark"` on the document root. An inline script in the HTML `<head>` prevents flash of wrong theme on load.
- **Responsive:** Mobile-first with breakpoints at 640px and 420px. Uses `clamp()` for fluid typography and `100dvh` for viewport height.
- **Accessibility:** WCAG AA compliance enforced by Lighthouse. 44px minimum touch targets, `prefers-reduced-motion` respected, `focus-visible` outlines, semantic HTML.
- **Stylelint:** Extends `stylelint-config-standard`, allows vendor prefixes.

## CI/CD

- **PRs:** `.github/workflows/test.yml` runs CSS lint → build → HTML validation → Lighthouse
- **Deploy:** `.github/workflows/deploy.yml` on push to master runs all tests then deploys to GitHub Pages
- **Lighthouse thresholds:** 90+ required for performance, accessibility, best practices, and SEO
