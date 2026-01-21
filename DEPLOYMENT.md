# Deployment Guide

This guide covers how to deploy the Halfway Up Productions website to production.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Added all project images to `public/images/projects/`
- [ ] Added team photos to `public/images/team/`
- [ ] Updated project content in `src/content/projects/`
- [ ] Reviewed all copy for typos and accuracy
- [ ] Tested all forms (contact form)
- [ ] Verified all links work
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Tested responsive design on mobile, tablet, desktop
- [ ] Configured analytics (if using)

## Domain Setup

The site is configured for `halfwayup.co.uk`. Before deploying:

1. Ensure you have access to domain DNS settings
2. Prepare to add CNAME or A records as required by hosting provider

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers excellent Astro support with zero configuration.

#### Steps:

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```

3. **Or deploy via GitHub**
   - Connect repository at https://vercel.com
   - Vercel auto-detects Astro
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: Astro

4. **Configure custom domain**
   - Go to Project Settings → Domains
   - Add `halfwayup.co.uk`
   - Follow DNS configuration instructions

#### Environment Variables

No environment variables required for static build.

### Option 2: Netlify

Netlify provides excellent static hosting with form handling.

#### Steps:

1. **Connect to Netlify**
   - Create account at https://netlify.com
   - Connect GitHub repository
   - Or use Netlify CLI: `npm i -g netlify-cli`

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or 20

3. **Enable Netlify Forms**
   The contact form is already configured with `data-netlify="true"` attribute.
   Netlify will automatically handle form submissions.

4. **Configure Custom Domain**
   - Go to Domain Settings
   - Add custom domain `halfwayup.co.uk`
   - Configure DNS with your domain provider:
     ```
     CNAME www halfwayup.netlify.app
     A @ 75.2.60.5
     ```

5. **Enable HTTPS**
   - Netlify provides free SSL via Let's Encrypt
   - Auto-configured once domain is verified

### Option 3: GitHub Pages

For a free option using GitHub Pages:

1. **Install Astro adapter**
   ```bash
   npm install -D @astrojs/github-pages
   ```

2. **Update astro.config.mjs**
   ```js
   export default defineConfig({
     site: 'https://halfwayup.co.uk',
     base: '/',
     // ... rest of config
   });
   ```

3. **Deploy**
   ```bash
   npm run build
   # Use a GitHub Action or push dist/ to gh-pages branch
   ```

Note: Contact form won't work on GitHub Pages without additional service.

## Post-Deployment

### Verify Deployment

1. **Test all pages**
   - Home: `/`
   - Projects: `/projects`
   - Individual projects: `/projects/notification`, etc.
   - Vertical dramas: `/vertical-dramas`
   - Co-productions: `/co-productions`
   - About: `/about`
   - News: `/news`
   - Contact: `/contact`

2. **Test contact form**
   - Submit test message
   - Verify receipt (check Netlify Forms dashboard or email integration)

3. **Check mobile responsive**
   - Test on actual devices if possible
   - Use browser dev tools for various screen sizes

4. **Run Lighthouse audit**
   - Open Chrome DevTools
   - Navigate to Lighthouse tab
   - Run audit for Performance, Accessibility, Best Practices, SEO
   - Target: All scores 95+

### Analytics Setup (Optional)

#### Plausible (Recommended - Privacy Friendly)

1. Create account at https://plausible.io
2. Add site: `halfwayup.co.uk`
3. Add script to `src/layouts/BaseLayout.astro`:
   ```html
   <script defer data-domain="halfwayup.co.uk" src="https://plausible.io/js/script.js"></script>
   ```

#### Google Analytics (Alternative)

If preferred, add GA4 to BaseLayout:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Form Integration

If using Netlify, forms work automatically. For other platforms:

#### Formspree

1. Create account at https://formspree.io
2. Update form action in `src/pages/contact.astro`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Maintenance

### Adding New Projects

1. Create markdown file: `src/content/projects/project-name.md`
2. Add images: `public/images/projects/`
3. Update project lists in:
   - `src/pages/index.astro` (if featured)
   - `src/pages/projects/index.astro`
   - `src/pages/projects/[slug].astro` (add to getStaticPaths)
4. Commit and push - site auto-deploys

### Adding News Posts

1. Update `src/pages/news.astro` with new entries
2. Optionally create individual news post pages
3. Commit and push

### Content Updates

Most content can be updated directly in the `.astro` files:
- About page bio: `src/pages/about.astro`
- Company description: `src/components/Footer.astro`
- Navigation items: `src/components/Header.astro`

## Troubleshooting

### Build Failures

**Issue**: Build fails on deployment platform

**Solutions**:
- Check Node version (must be 18+)
- Verify all dependencies install correctly
- Check for typos in imports/file paths
- Review build logs for specific errors

### Images Not Loading

**Issue**: Images show as broken

**Solutions**:
- Verify images exist in `public/images/`
- Check image paths start with `/` (e.g., `/images/projects/...`)
- Ensure image files are committed to repository
- Check file extensions match (case-sensitive)

### Form Not Submitting

**Issue**: Contact form doesn't work

**Solutions**:
- For Netlify: Ensure `data-netlify="true"` attribute exists
- Verify form `name` attribute is set
- Check honeypot field is present
- Review Netlify Forms dashboard for submissions

### Domain Not Connecting

**Issue**: Custom domain doesn't resolve

**Solutions**:
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings
- Use `dig halfwayup.co.uk` to test DNS

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Astro: https://docs.astro.build

For project-specific questions:
- Email: evelyn@halfwayup.co.uk
