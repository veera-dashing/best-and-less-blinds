@AGENTS.md

# Best & Less Blinds & Shutters — project guide

A modern rebuild of the live WordPress/WooCommerce site at
**https://www.bestandlessblinds.com.au** (a Sydney/Blacktown blinds, shutters &
curtains business). The brief: a fresh, premium look with the *same content*,
while **preserving the old site's SEO** — it is an old, well-ranked domain.

## Stack

- **Next.js 16** (App Router, Turbopack) — ⚠️ see `@AGENTS.md`: read
  `node_modules/next/dist/docs/` before using an API; it differs from training data.
- **React 19**, **TypeScript**
- **Tailwind CSS v4** — config lives in `@theme` inside `src/app/globals.css`
  (there is **no `tailwind.config.js`**)
- `next/font/google` — **Fraunces** (serif headings) + **Inter** (sans body)
- `next/image` for all photography (local files in `public/`, no remote config)

## Commands

- Dev server: launch config `dev` in `.claude/launch.json` (`npm run dev`,
  Turbopack, `autoPort` — port 3000 is often in use so a random port is assigned).
  Prefer the preview tools over `npm run dev` in Bash.
- Build: `npm run build` (production build is the source of truth — currently
  **54 static pages**, all SSG/static).

## Architecture & where things live

Content is centralised in `src/lib/` and rendered by thin pages/components.
**Edit data in `src/lib/`, not in the page JSX.**

- **`src/lib/content.ts`** — `business` (name, phone, address, socials,
  `availability`, `showroom`), `nav`, `productCategories` (5 categories →
  drives the home grid, the `/our-services` hub, and the Products mega-menu),
  `shopProducts` (10 ready-made items), `heroSlides`, `features`,
  `testimonials`, `aboutValues`. `SITE_URL` lives here too.
- **`src/lib/services.ts`** — the 15 genuine `/services/<slug>/` definitions
  (real, keyword-rich copy + `specs`). `getService`, `serviceCategoryOrder`,
  `categoryLabels`.
- **`src/lib/blog.ts`** — 16 real articles (`getPost`). Each has
  `slug,title,excerpt,date,readMins,category,art,image?,sections[]`.
- **`src/lib/images.ts`** — `photos` map of real product photos +
  `shopPhoto(category)` helper. Single source of truth for image paths.
- **Routes** (`src/app/`): `/` (page.tsx + `Hero`), `/about-us`, `/our-services`
  (Products hub), `/curtains`, `/contacts`, `/privacy-policy`, `/shop` +
  `/product/[slug]`, `/services/[slug]`, `/blog` + `/blog/[slug]`. Plus
  `sitemap.ts`, `robots.ts`. Dynamic routes use `generateStaticParams` +
  `generateMetadata` (Next 16 async params: `params: Promise<{slug}>` → `await`).
- **Components** (`src/components/`): `Header` (sticky; transparent only on home,
  solid cream elsewhere — see below), `Footer`, `Hero` (client carousel,
  crossfading photos), `PageHeader` (dark `bg-espresso` banner atop inner pages),
  `ProductImage` (next/image `fill` + CSS-art fallback), `CategoryArt`
  (CSS/SVG fallback art), `Reveal` (IntersectionObserver scroll-reveal),
  `Logo`, `ContactForm`.

## SEO / URL preservation (the whole point — don't break it)

- `trailingSlash: true` (in `next.config.ts`) to mirror WordPress URLs.
- **Core pages serve at their original paths** (`/about-us`, `/our-services`,
  `/contacts`, `/privacy-policy`) — zero redirect.
- **All 15 `/services/<slug>/` pages are real pages at their original URLs** (200,
  not redirects). Only `shutters-2`→`/services/shutters/` and three feature pages
  (`reasonable-price`, `best-decorators`, `honest-advice`)→`/about-us/`.
- Redirects in `next.config.ts` are `permanent: true` (308) and destinations
  **carry a trailing slash** so old (slashed) URLs resolve in a **single hop**.
- `legacyRedirects` mop up theme-demo / WooCommerce pages; `blogRedirects` map the
  6 strongest old `/2017/...` posts to matching articles; `/2017/:path*` → `/blog/`.
- Every page sets `alternates.canonical`; `layout.tsx` has `metadataBase`,
  title template, OpenGraph + site-wide JSON-LD (`HomeAndConstructionBusiness`
  with `@id` `#business` + logo, and a `WebSite` node). Service pages add
  `Service` + `BreadcrumbList`; blog posts add `BlogPosting` + `BreadcrumbList`.
  `sitemap.ts` enumerates core + services + blog (+ products when Shop is live).
- **AI discoverability:** `robots.ts` allows all agents (AI crawlers included).
  `public/llms.txt` is a curated markdown overview for LLMs (summary + links to
  all pages, services and articles) — served statically at `/llms.txt` (NOT a
  route handler, to avoid the trailingSlash redirect). **Keep it in sync** when
  you add/rename services or articles, or change business details.
- When adding/renaming a route, update `sitemap.ts`, set a canonical, and add a
  redirect from any old URL. **Never change an existing public URL** without a 308.

## Content provenance (important nuance)

The old site ran the AncoraThemes "Blinds" theme; **much of it was theme demo
content**. So:

- **Real & kept:** service-page marketing copy, the business's own **2021
  product photos** (now in `public/images/products/`, optimised to ~1600px).
- **Junk, NOT reproduced:** the ~20 Lorem-Ipsum `/2017/` posts (replaced with 16
  real articles), the 10 Lorem-Ipsum WooCommerce descriptions (honest short copy +
  "catalogue & enquire", no cart/prices), the AncoraThemes privacy policy
  (rewritten). The 2017 `services-*`/`image-*` uploads carry a **© stock
  watermark** — never use them.
- **Accuracy rules:** the original listed **no business hours** — don't invent any
  (use "free consultation 7 days a week"). Socials: Facebook
  `Best-and-Less-Blinds-101079321268617`, YouTube `UCh7Iiler1pMHRiLbpECZizQ`.

## Images

- Real photos live in `public/images/products/`, referenced via
  `photos.*` in `src/lib/images.ts`.
- Render through **`ProductImage`** (`next/image` `fill` + `object-cover`); pass
  `artSlug` so it falls back to `CategoryArt` where no photo exists
  (**panel-glides** and **flyscreens-doors** have no real photo).
- First above-the-fold image in a grid/hero gets `priority` (LCP / Core Web Vitals).

## Curtains are prioritised (deliberate sales decision)

The owner wants to **sell more curtains** (current trend), so curtains are
surfaced **first everywhere** and visually flagged "Trending" — even though the
brand name leads with "Blinds & Shutters". **Do not reorder back to blinds-first.**
This is driven by data order: `nav`, `heroSlides`, `productCategories` (in
content.ts) and `serviceCategoryOrder` (services.ts) all put curtains first, plus
a "Trending" nav pill, the curtains home card badge, and a dedicated curtains
spotlight band on the homepage.

## Design system

Tokens in `globals.css` `@theme`: colours `cream / sand / linen`,
`espresso / bark / stone`, `brass / brass-dark / brass-light`, `clay`. Use
`font-serif` for headings, `font-sans` for body. Helpers: `.eyebrow` (thin
uppercase label), `.slat-pattern` (blind-line texture), `Reveal` for scroll-in.
**Header rule:** transparent over the light home hero, solid `bg-cream` on every
other page (inner pages open with the dark `PageHeader` banner, so a transparent
header would hide its dark logo/nav text).

**Logo:** the client's **original brand logo** (`public/images/logo.jpg` — orange
"Best & Less" wordmark + slat mark on a white field). `Logo.tsx` renders it via
`next/image` with `unoptimized` (it's already web-sized, and the dev optimizer
choked on it). Footer uses its own cream text wordmark on the dark background.
Don't replace the logo with a redrawn mark — the client asked to keep this one.

## Known gaps / before launch

- **Contact form** sends via **Gmail SMTP** (`nodemailer`) through the
  `app/api/contact/route.ts` handler (`runtime = "nodejs"`). Set `GMAIL_USER`,
  `GMAIL_APP_PASSWORD` (a Google App Password, not the account password) and
  optional `CONTACT_TO` in `.env.local` (and in the host's env at deploy). See
  `.env.example`. Without the key the route returns a graceful 503. Has a
  honeypot (`company` field) + email validation.
- After go-live, **submit the sitemap in Google Search Console** so the 308s get
  recrawled quickly.
- Shop items use a representative category lifestyle photo (no per-product shots);
  swap in real product photos if/when available.
