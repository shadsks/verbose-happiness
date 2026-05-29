# Nitex Clone

A pixel-faithful clone of the [nitex.com](https://nitex.com) homepage, rebuilt from scratch in a modern Next.js codebase. Reproduces the original's design system, real content and assets, and signature scroll-driven motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict, Turbopack)
- **Styling:** Tailwind CSS v4 with `@theme` design tokens
- **UI primitives:** shadcn/ui + `cn()` utility
- **Fonts:** self-hosted woff2 via `next/font/local` (PP Neue Montreal, Fragment Mono, PP Right Grotesk)

## Immersive Elements

- **Scroll-progress header** — lime fill bar that tracks page progress and ticks the section counter `[01]` → `[05]`.
- **Scroll reveals** — `IntersectionObserver`-driven fade/slide/line-clip entrance animations (`src/components/Reveal.tsx`), with `prefers-reduced-motion` fallbacks.
- **Infinite logo marquee** — continuous partner-logo band (CSS keyframe `marquee`).
- **Split-panel hero** and full-bleed section imagery with oversized lime `N`/`X` typography.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run check` | lint + typecheck + build |

## Project Structure

```
src/
  app/              # layout, page, global styles
  components/
    sections/       # Hero, Story, WhatWeDo, Believe, BrandMarquee, HowWeHelp, YourNeeds, Footer
    ui/             # shadcn primitives
    Header.tsx      # scroll-progress header
    Reveal.tsx      # scroll-reveal wrappers
    icons.tsx       # logo + SVG icons
    nitex-ui.tsx    # Pill, MarkerLink, SectionLabel
  content/          # site copy + logo manifest
  lib/utils.ts      # cn()
  types/            # TS interfaces
public/
  fonts/  images/  images/logos/  seo/
```

## Deployment

The app sets `output: "standalone"` in `next.config.ts` and deploys to any Node host or Vercel with no extra configuration.

---

This is an independent, educational re-implementation for design study. All trademarks, brand names, and imagery belong to their respective owners.
