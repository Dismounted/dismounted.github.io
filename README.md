# Hanson Wong - Personal Portfolio

A modern, minimalist personal portfolio built with vanilla JavaScript, Vite, and contemporary web technologies.

## Features

- 🎨 **Glass morphism design** with animated gradient background
- 👤 **Professional headshot** with overlapping glass panel effect
- 🌓 **Dark mode support** with automatic system preference detection and manual toggle
- ♿ **WCAG AA accessible** with proper semantic HTML and keyboard navigation
- 🚀 **Performance optimized** - ~35KB total initial load (gzipped)
- 📱 **Fully responsive** - mobile-first design with optimized layouts for all viewports
- 🔍 **SEO-ready** - canonical URL, Open Graph & Twitter cards, and JSON-LD `Person` structured data
- 🔒 **Privacy-focused** - no analytics, no tracking, no cookies
- ⚡ **Modern build stack** - Vite for fast development and optimized production builds

## Tech Stack

- **Framework**: Vanilla JavaScript (ES6+ modules)
- **Build Tool**: Vite 8
- **Fonts**: Outfit variable font (self-hosted)
- **Icons**: Inline SVG (Lucide design)
- **Deployment**: GitHub Actions → Cloudflare Workers
- **Testing**: Lighthouse CI, Stylelint, html-validate

## Project Structure

```
.
├── src/
│   ├── index.html          # Main HTML file
│   ├── 404.html            # Custom 404 page
│   ├── styles/
│   │   ├── main.css        # Core styles and typography
│   │   ├── themes.css      # Light/dark theme variables
│   │   ├── glass.css       # Glass morphism effects
│   │   ├── animations.css  # Animation definitions
│   │   └── 404.css         # 404 page specific styles
│   ├── scripts/
│   │   ├── main.js         # Entry point
│   │   ├── theme.js        # Dark mode toggle
│   │   └── email.js        # Email reveal functionality
│   └── assets/
│       ├── fonts/          # Self-hosted Outfit variable font
│       └── headshot.jpg    # Optimized profile photo
├── public/                 # Static assets (copied to dist/)
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # XML sitemap
│   ├── manifest.json      # PWA manifest
│   ├── og-image.jpg       # Social share / Open Graph image
│   └── favicon.svg        # Favicon
├── .github/
│   └── workflows/
│       ├── deploy.yml     # Deployment pipeline (test + deploy jobs)
│       └── test.yml       # PR testing workflow
├── wrangler.jsonc          # Cloudflare Workers configuration
├── vite.config.js          # Vite configuration (multi-page setup)
├── lighthouserc.cjs        # Lighthouse CI config
├── .stylelintrc.json       # CSS linting rules
└── package.json            # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 22+ (CI builds on the latest LTS via `lts/*`)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm test` - Run all tests (CSS lint, HTML validation, Lighthouse)
- `npm run test:css` - Run CSS linting with Stylelint
- `npm run test:html` - Validate HTML structure
- `npm run test:lighthouse` - Run Lighthouse CI performance audit

### Updating Dependencies

This project always tracks the latest stable package versions.

```bash
# Check for outdated packages
npm outdated

# Update within the current semver range (minor/patch)
npm update

# Bump a package to its latest major version, saving it to package.json
npm install pkg@latest --save
```

Prefer `--save` explicitly when installing or bumping packages so the new version is recorded in `package.json`. After updating, run `npm test` to confirm CSS lint, HTML validation, and Lighthouse still pass.

## Deployment

The site automatically deploys to Cloudflare Workers when changes are pushed to the `master` branch.

### GitHub Actions Workflow

The deployment pipeline runs in two jobs:

1. **Test Job**:
   - CSS linting with Stylelint
   - Build with Vite
   - HTML validation
   - Lighthouse CI (90+ scores required in all categories)

2. **Deploy Job** (runs only if tests pass):
   - Download build artifact
   - Deploy to Cloudflare Workers via `wrangler-action`

### Custom Domain

The site is served from [hansonwong.au](https://www.hansonwong.au); the custom domain routes are configured in `wrangler.jsonc`.

## Performance

Current bundle sizes (gzipped):

- HTML: ~2.6 KB
- CSS: ~2.1 KB
- JavaScript: ~1.2 KB
- Font (WOFF2): ~13.7 KB
- Headshot image: ~15.3 KB

**Total initial load: ~35 KB** (optimized for performance)

The Open Graph image (`public/og-image.jpg`, ~15 KB) is fetched only by social/crawler scrapers, so it is not part of the page's initial load.

Lighthouse scores (target 90+):
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Browser Support

Modern browsers only (last 2 versions):
- Chrome/Edge 111+
- Firefox 114+
- Safari 16.4+

## Accessibility

- WCAG AA compliant color contrast (4.5:1 for normal text)
- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`
- Respects `prefers-color-scheme`

## Privacy

This site does not use analytics, tracking, or cookies.

## License

See [LICENSE](LICENSE) file.

## Contact

- Website: [hansonwong.au](https://www.hansonwong.au)
- LinkedIn: [wonghanson](https://www.linkedin.com/in/wonghanson/)
- GitHub: [@Dismounted](https://github.com/Dismounted)
- Mastodon: [@hanson@mastodon.social](https://mastodon.social/@hanson)
