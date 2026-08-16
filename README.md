# Jasonic — Redesign Prototype

A client-pitch prototype built by **Valley Website Design** for **Jasonic Ltd**, an
independent builders merchants trading in Merthyr Tydfil and Taffs Well since 1988.

This is a redesign concept to show Jasonic what their site could look and function
like — **it is not a live or production site.** No online ordering, payments, or
real email sending is wired up; enquiries route to a friendly on-screen message
instead (see [What's real vs. placeholder](#whats-real-vs-placeholder) below).

## Design reference

The structure, UX patterns and general aesthetic (navigation, page rhythm,
product/content browsing, filtering, forms) take inspiration from
[wern-wood.com](https://www.wern-wood.com/), a well-performing site in a similar
space. **No copy, photography, or other assets were copied from that site** — all
content here is either Jasonic's own real business information or original
placeholder content built for this prototype.

## What's real vs. placeholder

| | Real | Placeholder |
|---|---|---|
| Business details | Name, branches, addresses, phone numbers, VAT/company reg, founding year, category list | — |
| Products | 4 items (Pine Ply sheets, Raveena sandstone slabs) use real names & prices from jasonic.co.uk | Remaining ~17 catalogue items are realistic builders'-merchant lines added to fill out the shop for demo purposes — swap for Jasonic's actual current stock/prices before go-live |
| News | Both items are genuine current facts about Jasonic (new General Manager, new Taffs Well Branch Manager) | — |
| Photography | — | All imagery is original SVG icon work and on-brand gradient placeholders — no stock photography is used anywhere, so there's nothing to re-license. Swap for real branch/product photography when available |
| Opening hours | — | Placeholder hours shown on the Contact page — confirm real hours before go-live |
| Contact form | — | Styled and interactive, but doesn't send email — see note below |

The `noindex, nofollow` meta tag is set on every page so this prototype doesn't
get indexed by search engines while it's just a pitch.

## Pages

- **Home** — hero, value props, shop-by-department grid, featured products, story
  teaser, news, branch locator
- **Shop** (`/shop/`) — full product catalogue with client-side department
  filtering and search
- **Product detail** (`/shop/[slug]/`) — price, specs, related products
- **About** (`/about/`) — company story, milestones, branches
- **Contact** (`/contact/`) — enquiry form, branch details, opening hours
- **404**

## Tech stack

- [Astro](https://astro.build) — static site generation, minimal shipped JS
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- TypeScript
- Vanilla JS for the shop filter/search and the contact form's demo behaviour
  (no framework runtime needed for either)

No backend, database, or CMS — content lives in typed data files under
`src/data/` so it's easy to see and edit everything that would otherwise
come from a CMS.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the
site to **GitHub Pages** on every push to `main`. To turn it on:

1. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions".
2. Merge this work into `main` (or push directly) — the workflow will build and
   publish automatically.
3. The site will be live at `https://<org>.github.io/jasonic-prototype/`.

If this ever moves to a real domain, update `site`/`base` in `astro.config.mjs`
(or set the `SITE_URL/SITE_BASE` env vars in the workflow) and drop the `base`
path back to `/`.

## Project structure

```
src/
  components/       Nav, Footer, ProductCard, Button, SectionHeading, icons/
  data/             site.ts, categories.ts, products.ts, news.ts — all content
  layouts/          BaseLayout.astro
  pages/            index, shop/, about, contact, 404
  styles/           global.css (Tailwind + brand tokens)
public/             favicon
.github/workflows/  GitHub Pages deploy
```

## Handing this to the client

This repo is built to be presentable as-is: clean component structure, typed
content data, and no dead code. If Jasonic signs off on the direction, the next
steps would typically be:

1. Swap placeholder catalogue items for their real, current product list and
   pricing (ideally from their existing EPOS/stock system).
2. Replace the SVG placeholder imagery with real branch and product photography.
3. Wire the contact form to a real mail service (e.g. Resend, Formspree, or a
   small serverless function) split by branch.
4. Confirm opening hours and any additional departments/services.
5. Move to a production domain and re-enable normal search indexing.

---
Built by Valley Website Design.
