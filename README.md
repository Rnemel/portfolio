# Premium Portfolio – Full-Stack Developer / AI Engineer / Technology Consulting

This is a premium personal portfolio built with the Next.js App Router for a candidate with the profile:

> **Full-Stack Developer | AI Engineer (ML Projects) | Technology Consulting (Certified)**

The goal is to help hiring managers and clients quickly understand skills, credibility, and impact through concise, metric-driven case studies.

## Tech stack

- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (subtle motion + scroll reveals)
- MDX for blog posts
- `next/image` for optimised images
- `next-sitemap` for SEO sitemaps and robots.txt
- ESLint + Prettier

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

### 4. Lint and typecheck

```bash
npm run lint
npm run typecheck
```

## Project structure

- `src/app` – App Router routes and layouts
  - `/` – Home (hero, credibility strip, skills, featured projects, hackathons, testimonials, CTA)
  - `/projects` – Projects overview
  - `/projects/[slug]` – Project detail pages (Problem → Approach → Impact)
  - `/hackathons` – Hackathon highlights
  - `/about` – Story, values, skills
  - `/blog` – MDX-powered blog index
  - `/blog/[slug]` – Blog posts
  - `/contact` – Contact and ways of working
- `src/components` – Shared UI (layout, buttons, cards, sections)
- `src/data` – Single source of truth for:
  - `profile.ts` – Profile, certificates, focus areas, links
  - `projects.ts` – Project case studies and metrics
  - `hackathons.ts` – Hackathon results and impact
  - `posts.ts` + `posts/*.mdx` – Blog post metadata and MDX content
- `public` – Static assets
  - `profile-placeholder.svg` – Profile image placeholder
  - `cv.pdf` – CV placeholder (replace with your real export)

## Customisation guide

1. **Update profile data**
   - Edit `src/data/profile.ts`:
     - `name`, `title`, and `location`
     - `summary`, `headlineBullets`, and `focusAreas`
     - `links` (GitHub, LinkedIn, email, Calendly, CV)

2. **Edit projects**
   - Edit `src/data/projects.ts`
   - Each project has:
     - `problem`, `approach`, `impact` (narrative)
     - `metrics` (label + value)
     - `stack`, `role`, `duration`, `year`

3. **Edit hackathons**
   - Edit `src/data/hackathons.ts`
   - Capture organiser, role, result, impact, metrics, and stack.

4. **Edit blog posts**
   - MDX content lives in `src/data/posts/*.mdx`
   - Metadata mapping is in `src/data/posts.ts`

5. **Replace assets**
   - Replace `public/profile-placeholder.svg` with your portrait
   - Replace `public/cv.pdf` with your exported CV

## Deployment (Vercel)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Create a new project on https://vercel.com and import the repository.
3. Vercel will detect the Next.js app automatically.
4. Use the default build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Set the production URL (e.g. `https://your-domain.com`) and update:
   - `metadataBase` in `src/app/layout.tsx`
   - `siteUrl` in `next-sitemap.config.mjs`

After deployment, you can generate/update sitemaps locally with:

```bash
npm run sitemap
```

and commit the generated files in `public/` if you prefer static sitemaps.

