# BridgeByte — React + Tailwind

AI-powered business software landing page converted from vanilla JS/CSS to React 18 + Tailwind CSS 3.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
bridgebyte-react/
├── index.html              # HTML entry point (loads fonts from Google Fonts)
├── vite.config.js          # Vite config with React plugin
├── tailwind.config.js      # Tailwind content paths
├── postcss.config.js       # PostCSS with Tailwind + Autoprefixer
├── package.json
└── src/
    ├── main.jsx            # React DOM mount
    ├── index.css           # Tailwind directives + custom CSS (animations, pseudo-elements)
    └── App.jsx             # All page components (Navbar, Hero, Solutions, Why, Products, Process, CTA, Footer)
```

## Tech Stack

- **React 18** — functional components, hooks
- **Vite 5** — fast dev server and bundler
- **Tailwind CSS 3** — utility classes for layout, spacing, colours, responsiveness
- **Google Fonts** — Playfair Display (headings) + Bricolage Grotesque (body)

## Design Notes

- All sections use `padding: 96px 5%` for consistent horizontal margins
- `maxWidth: 1200px` + `mx-auto` constrains content width
- Scroll-triggered fade-up animations via `IntersectionObserver` (custom hook `useFadeUp`)
- Complex gradient text, `::before` pseudo-elements, and animation keyframes live in `index.css`
- Inline `style` props are used only for values Tailwind can't express (radial gradients, `clamp()`, rgba glass effects)
