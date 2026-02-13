# Hanson Wong - Personal Portfolio

A modern, minimalist personal portfolio built with vanilla JavaScript, Vite, and contemporary web technologies.

## Features

- 🎨 **Glass morphism design** with animated gradient background
- 👤 **Professional headshot** with overlapping glass panel effect
- 🌓 **Dark mode support** with automatic system preference detection and manual toggle
- ♿ **WCAG AA accessible** with proper semantic HTML and keyboard navigation
- 🚀 **Performance optimized** - <25KB total bundle (gzipped)
- 📱 **Fully responsive** - mobile-first design with optimized layouts for all viewports
- 🔒 **Privacy-focused** - Google Analytics with consent management
- ⚡ **Modern build stack** - Vite for fast development and optimized production builds

## Tech Stack

- **Framework**: Vanilla JavaScript (ES6+ modules)
- **Build Tool**: Vite 7
- **Fonts**: Outfit variable font (self-hosted)
- **Icons**: Inline SVG (Lucide design)
- **Deployment**: GitHub Actions → GitHub Pages
- **Analytics**: Google Analytics 4 with consent banner
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
│   │   ├── email.js        # Email reveal functionality
│   │   └── analytics.js    # GA4 with consent
│   └── assets/
│       ├── fonts/          # Self-hosted Outfit variable font
│       └── headshot.jpg    # Optimized profile photo
├── public/                 # Static assets (copied to dist/)
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # XML sitemap
│   ├── manifest.json      # PWA manifest
│   └── favicon.svg        # Favicon
├── .github/
│   └── workflows/
│       ├── deploy.yml     # Deployment pipeline (test + deploy jobs)
│       └── test.yml       # PR testing workflow
├── CNAME                   # Custom domain configuration
├── vite.config.js          # Vite configuration (multi-page setup)
├── lighthouserc.cjs        # Lighthouse CI config
├── .stylelintrc.json       # CSS linting rules
└── package.json            # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 20+
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

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch.

### GitHub Actions Workflow

The deployment pipeline runs in two jobs:

1. **Test Job**:
   - CSS linting with Stylelint
   - Build with Vite
   - HTML validation
   - Lighthouse CI (90+ scores required in all categories)

2. **Deploy Job** (runs only if tests pass):
   - Upload build artifact
   - Deploy to GitHub Pages

### Custom Domain

The site is deployed to [www.hansonwong.com.au](https://www.hansonwong.com.au) via the `CNAME` file in the repository root.

## Performance

Current bundle sizes (gzipped):

- HTML: ~2.5 KB
- CSS: ~2.3 KB
- JavaScript: ~1.4 KB
- Font (WOFF2): ~14 KB
- Headshot image: ~15.7 KB

**Total initial load: ~36 KB** (optimized for performance)

Lighthouse scores (target 90+):
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Browser Support

Modern browsers only (last 2 versions):
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Accessibility

- WCAG AA compliant color contrast (4.5:1 for normal text)
- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`
- Respects `prefers-color-scheme`

## Privacy

Google Analytics 4 is loaded only with explicit user consent via a cookie banner. Users can accept or decline tracking. The choice is stored in localStorage.

## License

See [LICENSE](LICENSE) file.

## Contact

- Website: [www.hansonwong.com.au](https://www.hansonwong.com.au)
- LinkedIn: [wonghanson](https://www.linkedin.com/in/wonghanson/)
- GitHub: [@Dismounted](https://github.com/Dismounted)
- Mastodon: [@hanson@mastodon.social](https://mastodon.social/@hanson)
