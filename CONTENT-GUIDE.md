# Content Guide

This guide explains what content you need to add to complete the Halfway Up Productions website.

## Required Images

### Project Images

You'll need to add the following images to `public/images/projects/`:

#### Notification
- `notification-hero.jpg` - Main hero image (16:9 aspect ratio, min 1920x1080px)
- `notification-still-1.jpg` - Production still 1 (16:9, min 1280x720px)
- `notification-still-2.jpg` - Production still 2 (16:9, min 1280x720px)

#### New Shoes
- `new-shoes-hero.jpg` - Main hero image (16:9, min 1920x1080px)
- `new-shoes-still-1.jpg` - Production still 1 (16:9, min 1280x720px)
- `new-shoes-still-2.jpg` - Production still 2 (16:9, min 1280x720px)

#### Untitled Feature
- `feature-development.jpg` - Placeholder/concept image (16:9, min 1920x1080px)

### Team Photos

Add to `public/images/team/`:

- `evelyn-sharples.jpg` - Professional headshot (3:4 aspect ratio, min 800x1066px)

### Other Images

- `og-image.jpg` - Social media preview image (1200x630px) - place in `public/images/`

## Image Specifications

### Format
- Use JPEG for photographs
- Optimize for web (aim for < 300KB per image)
- Use descriptive filenames (kebab-case)

### Dimensions
- Hero images: 1920x1080px minimum (16:9)
- Project stills: 1280x720px minimum (16:9)
- Team photos: 800x1066px minimum (3:4 portrait)
- OG image: 1200x630px exactly

### Best Practices
- High quality but web-optimized
- Good lighting and composition
- Cinematic feel preferred
- Avoid heavy filters

## Placeholder Images

Until you have final images, you can use placeholder services:

```
https://placehold.co/1920x1080/2D3142/FFFFFF/png?text=Project+Hero
https://placehold.co/800x1066/2D3142/FFFFFF/png?text=Evelyn+Sharples
```

Or use free stock images from:
- Unsplash (unsplash.com)
- Pexels (pexels.com)

## Content to Update

### Project Information

For each project in `src/content/projects/*.md`, update:

1. **Director name** - Replace "TBC" with actual director
2. **Writer name** - Replace "TBC" with actual writer
3. **Runtime** - Confirm accurate runtime
4. **Synopsis** - Full synopsis (150-250 words)
5. **Logline** - One sentence description
6. **Festival selections** - Add as they occur
7. **Awards** - Add laurels and awards
8. **Trailer URL** - Add Vimeo/YouTube embed when available
9. **Watch URL** - Add streaming link when available

### About Page

In `src/pages/about.astro`, update:

1. **Evelyn's bio** - Personalize with accurate background
2. **Company founding date** - If different from defaults
3. **Team members** - Add additional team as company grows
4. **Partners/supporters** - Add logos if applicable (BFI, Film4, etc.)

### News Posts

In `src/pages/news.astro`, update with:

1. Real news announcements
2. Festival selections
3. Production updates
4. Industry insights
5. Award wins

Create individual news post pages in `src/pages/news/` for longer articles.

### Contact Information

Verify in `src/components/Footer.astro` and `src/pages/contact.astro`:

1. **Email address** - Confirm `evelyn@halfwayup.co.uk` is correct
2. **Instagram handle** - Update if different from `@halfwayupproductions`
3. **Other social links** - Add Twitter, LinkedIn if applicable

### SEO Metadata

Check all page descriptions in:
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/projects/index.astro`
- etc.

Ensure they're accurate, compelling, and under 160 characters.

## Copy Checklist

- [ ] All "TBC" placeholders replaced
- [ ] Director/writer credits accurate
- [ ] Company bio reflects actual story
- [ ] Evelyn's bio is accurate and approved
- [ ] All synopses proofread
- [ ] News posts are real/recent
- [ ] Contact email verified
- [ ] Social media handles confirmed
- [ ] All page descriptions optimised
- [ ] British English spelling throughout
- [ ] No Lorem Ipsum remains

## Adding New Content

### Add a New Project

1. Create markdown file in `src/content/projects/`:

```markdown
---
title: "Your Project Title"
year: 2025
status: "Completed" | "In production" | "In development"
type: "short" | "feature"
runtime: "XX mins"
director: "Director Name"
writer: "Writer Name"
producer: "Evelyn Sharples"
logline: "One sentence description"
synopsis: |
  Full synopsis here.
  Multiple paragraphs okay.
image: "/images/projects/your-project-hero.jpg"
slug: "your-project-slug"
featured: true | false
festivals:
  - name: "Festival Name"
    year: 2025
    award: "Official Selection"
awards: []
stills:
  - "/images/projects/your-project-still-1.jpg"
  - "/images/projects/your-project-still-2.jpg"
trailer: "https://vimeo.com/..."
watch: "https://..."
---
```

2. Add images to `public/images/projects/`

3. Update arrays in:
   - `src/pages/index.astro` (if featured)
   - `src/pages/projects/index.astro`
   - `src/pages/projects/[slug].astro` (getStaticPaths)

### Add a News Post

1. Add to the `newsItems` array in `src/pages/news.astro`:

```js
{
  date: '2025-MM-DD',
  title: 'Your News Title',
  excerpt: 'Brief summary (1-2 sentences)',
  slug: 'url-friendly-slug',
  category: 'Festival news' | 'Production update' | 'Company news' | 'Awards'
}
```

2. Optionally create full post page at `src/pages/news/[slug].astro`

## Voice and Tone Guidelines

### Company Voice

- **Warm and human**, not corporate
- **Confident but humble** - "emerging talent with taste"
- **Inclusive and accessible**
- **Emotionally intelligent**

### Writing Style

- Sentence case for headings (not Title Case)
- British English (favourite, colour, realise, etc.)
- Active voice preferred
- Concise - no waffle
- Focus on "why" over "what"

### Examples

✅ **Good**: "We're halfway up the mountain, still climbing, still discovering new stories to tell."

❌ **Bad**: "Halfway Up Productions is a Leading Production Company Delivering World-Class Content."

✅ **Good**: "Joyful, inclusive storytelling that reflects the world we want to live in."

❌ **Bad**: "We leverage cutting-edge narrative methodologies to synergize cross-platform engagement."

## Questions?

If you need clarification on any content requirements:
- Email: evelyn@halfwayup.co.uk
- Refer to design brief in initial project documentation
