# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## Project overview

Marketing/lead-generation website for Home24x7 Build and Repair, a UK property maintenance
and construction company. Built with TanStack Start (React 19, file-based routing) and
Tailwind CSS 4, deployed on Netlify.

## Directory structure

```
src/
├── routes/
│   ├── __root.tsx                 # Root layout: Header, Footer, WhatsApp widget, global SEO meta
│   ├── index.tsx                  # Home page
│   ├── about.tsx
│   ├── services/
│   │   ├── index.tsx              # Services hub — lists all services
│   │   └── $slug.tsx              # Individual service page, driven by src/data/services.ts
│   ├── compliance.tsx             # EICR/EPC/CP12/PAT/fire/legionella/alarm compliance
│   ├── construction-extensions.tsx
│   ├── areas-we-cover.tsx         # London boroughs + nationwide coverage
│   ├── gallery.tsx                # Case studies (before/after)
│   ├── quote.tsx                  # Get a Quote form (Netlify Forms, multipart w/ photo upload)
│   ├── emergency-callout.tsx      # 24/7 call-out page + call-back form (Netlify Forms)
│   ├── contact.tsx                # Contact form (Netlify Forms) + Google Map embed
│   └── blog.tsx                   # Static resources/articles list
├── components/                    # Header, Footer, PageHero, CtaBand, TrustBadges,
│                                   # TestimonialsSection, WhatsAppWidget — shared across routes
├── data/                          # services.ts, compliance.ts, boroughs.ts, testimonials.ts,
│                                   # caseStudies.ts — all page content lives here, not inline
└── styles.css                     # Tailwind entry point
```

## Conventions

- Route content pulls from `src/data/*.ts` rather than being hardcoded in components, so
  adding a new service or compliance item only requires a data file change.
- Every page keeps the 24/7 emergency call-out and free-quote CTAs reachable (header bar,
  `CtaBand`, or page-specific hero) per the brand's "always available" positioning.
- Page-level SEO metadata is set via each route's `head()` option, targeting the target
  keywords for that page (e.g. "EICR certificate London" on `/compliance`).

## Netlify Forms

Three forms are wired up: `quote-request` (multipart, supports a photo upload), `contact`,
and `emergency-callout`. Because TanStack Start renders forms client-side, a static skeleton
of all three forms lives at `public/__forms.html` purely so Netlify's build bot can detect
and register them — it is never shown to users. Each React form submits via `fetch` directly
to `/__forms.html` (not `/`) so the request reaches Netlify's form-processing middleware
instead of the SSR handler. Submissions only succeed on a deployed site, not local dev.

## Non-obvious decisions

- Services are implemented as a dynamic route (`services/$slug.tsx`) backed by a data array
  rather than one file per service, since all 12 services share the same page layout.
- Images are sourced from Unsplash as placeholders; replace with the client's own photography
  before launch.
