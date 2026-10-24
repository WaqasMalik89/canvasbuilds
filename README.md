# Canvas Builds — website

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (run before deploying)
```

## Where to change things

Most edits are **content only** — no component code needed.

| I want to…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Change phone, email, addresses, hours, socials | `content/site.ts`                     |
| Edit a service page, add a new service       | `content/services.ts` (+ slug in `content/types.ts`) |
| Edit a location page (KW, Bradford, GTA), add one | `content/areas.ts` (+ slug in `content/types.ts`) |
| Add project photos / before-and-afters       | `content/projects.ts` + images in `public/images/<category>/` |
| Change home page text, process steps, FAQs   | `content/home.ts`                      |
| Change header / footer menus                 | `content/navigation.ts`                |
| Change brand colours or fonts                | `app/globals.css` (`@theme`) and `app/layout.tsx` |

Menus, the sitemap (`/sitemap.xml`) and Google structured data update automatically from `/content`.

## Folder structure

```
app/                     Routes only — each page.tsx is short and composes sections
  page.tsx               Home
  services/              /services and /services/[slug]
  areas-we-serve/        /areas-we-serve and /areas-we-serve/[slug]  (kitchener-waterloo, bradford, toronto-gta)
  projects/              /projects (before/after + gallery)
  about/ contact/ privacy-policy/
  api/contact/route.ts   Contact form → email
  sitemap.ts robots.ts   Generated from /content
components/
  layout/                Header, Footer, MobileCallBar
  sections/              Page sections (PageHero, ServiceCards, FeaturedProject, ReviewsSection, FaqSection, ContactSection…)
  features/              Interactive pieces (BeforeAfterSlider, ContactForm, ProjectGallery, ServiceAreaMap)
  ui/                    Small building blocks (Button, Container, Section, SectionHeading, Breadcrumbs, Logo…)
  seo/JsonLd.tsx         Structured data tag
content/                 All website text, business details and photo lists
lib/
  seo/metadata.ts        buildMetadata() — title, description, canonical, social preview per page
  seo/schema.ts          Structured data (Organization, offices, services, FAQs, breadcrumbs)
  google-reviews.ts      Live Google reviews (Places API)
  utils.ts               cn() and small helpers
public/
  brand/                 Logo
  images/<category>/     Project photos with descriptive file names (JPG, not HEIC)
  videos/                Short site videos (H.264 .mp4, under ~5 MB)
```

## Conventions

- Components: `PascalCase.tsx`, one component per file, default export.
- Routes, content and lib files: `kebab-case`.
- Styling: Tailwind utility classes only. Colours come from the theme (`gold-*`, `ink-*`) — no hex codes in components.
- Images: always `next/image`, descriptive `alt` text, descriptive kebab-case file names.
- Every page exports `metadata` via `buildMetadata()` with its own path (canonical).

## Environment variables

Set in `.env.local` and in Vercel → Settings → Environment Variables.

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER`, `GMAIL_PASS` | Contact form email (Gmail app password) |
| `GOOGLE_PLACES_API_KEY` | Live Google reviews (Places API (New)) |
| `GOOGLE_PLACE_ID_WATERLOO` / `_WOODBRIDGE` / `_BRADFORD` | Optional: pin Place IDs |
| `GOOGLE_SITE_VERIFICATION` | Optional: Search Console verification |
