# Phoenix Code Website - Vanilla HTML/CSS/JS Version

This is a vanilla HTML/CSS/JavaScript version of the Phoenix Code website, No framework line angular/react for simplicity.

## Overview

- **HTML5** - Semantic markup
- **CSS3** - Vanilla CSS with CSS custom properties (no SCSS compilation needed)
- **JavaScript (ES6+)** - Vanilla JS with no framework dependencies
- **Bootstrap 4.6.2** - Hosted locally in `thirdparty/` for offline development

## Project Structure

```
phcode.io-website/
├── index.html              # Landing page
├── about.html              # About page
├── privacy.html            # Privacy policy
├── terms-of-service.html   # Terms of service
├── css/
│   └── styles.css          # Main styles
├── js/
│   ├── index.js            # Landing page functionality
│   └── navbar.js           # Navigation behavior
├── assets/
│   ├── images/             # All image assets
│   └── fonts/              # Font files
├── thirdparty/             # Third-party dependencies (auto-generated)
│   ├── bootstrap/          # Bootstrap CSS
│   └── licenses/           # Third-party licenses
├── scripts/
│   └── build.js            # Build script to copy dependencies
├── docs/                   # Production build output (auto-generated)
├── vite.config.js          # Vite build configuration
└── package.json            # NPM dependencies and scripts
```

## Features

All features from the Angular version have been preserved:

### Visual Effects
- ✅ Mouse-move parallax animations on banner (stars, clouds, logo)
- ✅ Shooting star CSS animations
- ✅ Smooth scroll-based navbar transitions
- ✅ Hover effects on buttons and links
- ✅ Gradient backgrounds

### Functionality
- ✅ Platform detection for downloads (Windows, Mac, Linux, Chrome OS)
- ✅ Download button with dropdown menu
- ✅ Linux installation script with copy-to-clipboard
- ✅ Mobile device detection and responsive behavior
- ✅ Navigation menu toggle for mobile
- ✅ Scroll-based fixed navigation
- ✅ Dynamic video overlay loading
- ✅ API integration for download URLs and counts

### Pages
- ✅ Landing page with all sections
- ✅ About page

## Getting Started

### Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Pull in third-party dependencies:**
   ```bash
   npm run build
   ```
   This copies Bootstrap CSS and licenses from `node_modules/` to `thirdparty/` for local development.

3. **Start developing:**
   - **Recommended**: Open the project in [Phoenix Code](https://phcode.io) and use Live Preview
   - **Alternative**: Use `npm run serve` if you don't have Phoenix Code

### Local Development

The site uses vanilla HTML/CSS/JS with no build step during development.

**Recommended: Use Phoenix Code**

The easiest way to develop this site is using [Phoenix Code](https://phcode.io) with its built-in live preview:

1. Open the project folder in Phoenix Code
2. Edit HTML/CSS/JS files and see changes instantly

**Alternative: Use npm serve script**

If you don't have Phoenix Code, you can use the Node.js development server:

```bash
npm run serve
```

Then open `http://localhost:8000` in your browser.

**Development workflow:**
- Edit HTML/CSS/JS files directly
- Changes update automatically (Phoenix Code) or refresh browser (npm serve)
- No compilation or bundling required during development

### Production Build

To create an optimized production build in the `docs/` folder:

```bash
npm run release:prod
```

This command:
1. Copies Bootstrap dependencies to `thirdparty/`
2. Builds and minifies all HTML, CSS, and JS files using Vite
3. Outputs the production-ready site to `docs/` folder

**Preview production build locally:**
```bash
npm run serveDocs
```
Then open `http://localhost:8000` to preview the production build.

The `docs/` folder can be deployed to:
- GitHub Pages (configure to deploy from `/docs` folder)
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## Browser Support

The site supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## NPM Scripts

- `npm run build` - Copy Bootstrap dependencies from node_modules to thirdparty/
- `npm run serve` - Start local development server at http://localhost:8000
- `npm run serveDocs` - Preview production build from docs/ folder at http://localhost:8000
- `npm run release:prod` - Create production build in docs/ folder with minification

## Customization

### Adding Third-Party Libraries

To add a new third-party library:

1. Install via npm:
   ```bash
   npm install library-name
   ```

2. Update `scripts/build.js` to copy the library files to `thirdparty/`

3. Update `vite.config.js` if needed for production builds

4. Reference the library in your HTML files from `thirdparty/`

### Adding New Pages
1. Create a new HTML file in the root
2. Include Bootstrap CSS: `<link href="thirdparty/bootstrap/bootstrap.min.css" rel="stylesheet">`
3. Include your custom CSS: `<link rel="stylesheet" href="css/styles.css">`
4. Add to `vite.config.js` under `rollupOptions.input` for production builds
5. Include necessary JS files as ES6 modules

### Modifying Styles
Edit `css/styles.css` to change component styles and global CSS variables.

## Performance

This vanilla version is lighter and faster for development:
- No framework overhead (~500KB+ Angular bundle eliminated)
- Faster initial page load
- Better SEO (fully static HTML)
- Smaller total bundle size
-
