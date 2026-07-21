# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Hanson Wong (www.hansonwong.au), built with vanilla JavaScript and Vite. Deployed to Cloudflare Workers from the `master` branch. The site is performance-obsessed — total initial load is ~35KB gzipped.

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

**CSS:** Vanilla CSS with custom properties for theming. Split by concern:
- `main.css` — Typography, layout, components
- `themes.css` — Light/dark theme variables (data-theme attribute on root)
- `glass.css` — Glass morphism effects, responsive layout
- `animations.css` — Keyframe animations
- `404.css` — 404 page styles

**Static assets:** `public/` directory (robots.txt, sitemap.xml, manifest.json, favicon.svg, og-image.jpg) copied as-is to `dist/`. `og-image.jpg` is a stable-URL copy of the headshot used for social/structured-data previews (crawler-only, not part of page load).

## Key Patterns

- **Theming:** CSS custom properties toggled via `data-theme="light|dark"` on the document root. An inline script in the HTML `<head>` prevents flash of wrong theme on load.
- **Responsive:** Mobile-first with breakpoints at 640px and 420px. Uses `clamp()` for fluid typography and `100dvh` for viewport height.
- **Accessibility:** WCAG AA compliance enforced by Lighthouse. 44px minimum touch targets, `prefers-reduced-motion` respected, `focus-visible` outlines, semantic HTML.
- **Stylelint:** Extends `stylelint-config-standard`, allows vendor prefixes.
- **SEO:** `index.html` carries a canonical link, Open Graph + Twitter Card meta, and JSON-LD `Person` structured data (social image at `public/og-image.jpg`). Canonical, `og:url`, and `sitemap.xml` all use the trailing-slash origin `https://www.hansonwong.au/` — keep them in sync. `404.html` is `noindex` and must not carry a canonical.

## Dependency Management

**Always use the latest package versions.** When adding or updating dependencies, check for the most recent stable releases. This project does not tolerate outdated packages — keeping dependencies current is essential for security, performance, and compatibility.

```bash
npm outdated              # Check for outdated packages
npm update                # Update to latest within semver range
npm install pkg@latest    # Install specific package at latest version
```

After updating packages, always run `npm test` to ensure everything still works.

## CI/CD

- **PRs:** `.github/workflows/test.yml` runs CSS lint → build → HTML validation → Lighthouse
- **Deploy:** `.github/workflows/deploy.yml` on push to master runs all tests then deploys to Cloudflare Workers (config in `wrangler.jsonc`)
- **Lighthouse thresholds:** 90+ required for performance, accessibility, best practices, and SEO
