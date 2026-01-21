# Halfway Up Productions Website

A professional, distinctive website for Halfway Up Productions, an independent UK film production company founded by producer Evelyn Sharples.

## Features

- **Modern Design**: Clean, warm, and cinematic aesthetic with custom color palette
- **Performance Optimised**: Built with Astro for lightning-fast load times
- **Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Ready**: Semantic HTML, meta tags, and optimised structure
- **Accessible**: WCAG-compliant with proper ARIA labels and keyboard navigation

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Deployment**: Vercel/Netlify ready

## Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── projects/       # Project images and stills
│   │   └── team/          # Team photos
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── projects/
│   │   │   ├── index.astro      # Projects index
│   │   │   └── [slug].astro     # Individual project
│   │   ├── vertical-dramas.astro
│   │   ├── co-productions.astro
│   │   ├── about.astro
│   │   ├── news.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── content/
│       ├── projects/            # Project markdown files
│       └── news/               # News/blog posts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

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

## Customisation

### Colors

The design system uses a carefully curated colour palette defined in `tailwind.config.mjs`:

- **Primary**: #2D3142 (Deep navy-charcoal)
- **Secondary**: #EF8354 (Warm coral/terracotta)
- **Accent**: #4ECDC4 (Teal)
- **Cream**: #FAF7F2 (Warm off-white background)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Source Sans 3 (sans-serif)
- **Metadata**: Space Mono (monospace)

### Adding Projects

1. Create a new markdown file in `src/content/projects/`
2. Add project data following the existing format
3. Add project images to `public/images/projects/`
4. Update the projects array in `src/pages/projects/index.astro`

### Adding News Posts

1. Create content in `src/content/news/`
2. Update the news array in `src/pages/news.astro`

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## Performance

The site is optimised for:

- Lighthouse score 95+
- Core Web Vitals passing
- Lazy-loaded images
- Minimal JavaScript
- Static generation for speed

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2025 Halfway Up Productions Ltd. All rights reserved.

## Contact

For questions or collaboration enquiries:
- Email: evelyn@halfwayup.co.uk
- Website: https://halfwayup.co.uk