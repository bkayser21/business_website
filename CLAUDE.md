# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
```

Node runs via nvm. If `npm` or `node` is not found, prefix commands with:
```bash
export PATH="$HOME/.nvm/versions/node/v21.7.3/bin:$PATH" &&
```

No lint or test scripts are configured.

## Local Server & Screenshots

- Start the dev server with `npm run dev`.
- Always screenshot from `http://localhost:3000`, never a `file:///` URL.
- After making UI changes, verify visually in the browser before reporting done.

## Brand Assets

- Brand colors, typography, and voice are in `BRAND_GUIDE.md` — read it before designing.
- Logo and brand images are in `public/`.
- Site-wide strings (brand name, tagline, contact email, Calendly URL) live in `src/lib/config.ts` — **never hardcode these values in components**.

## Design System

### Fonts
Space Grotesk (display/headings) + Manrope (body). Loaded via `next/font/google` in `layout.tsx` as CSS variables `--font-space-grotesk` and `--font-manrope`. Exposed to Tailwind as `font-display` and `font-sans`.

### Color system — two parallel layers

**`:root` CSS custom properties** — used by all landing page CSS classes:

| Variable      | Value     | Usage                    |
|---------------|-----------|--------------------------|
| `--blue`      | `#1f6bff` | Primary CTA, links       |
| `--pink`      | `#ff3d97` | Accent, gradient end     |
| `--grad`      | `linear-gradient(112deg, var(--blue) 0%, var(--pink) 100%)` | Gradient text/backgrounds |
| `--ink`       | `#0c1322` | Body text                |
| `--ink-2`     | `#2c3445` | Secondary text           |
| `--muted`     | `#5c6577` | Placeholder/caption text |
| `--canvas`    | `#ffffff` | Page background          |
| `--canvas-2`  | `#f5f7fb` | Subtle card backgrounds  |
| `--line`      | `#e4e8f1` | Borders                  |

**Tailwind `@theme` tokens** — used by `DiscoveryForm.tsx` and any Tailwind-classed components:
`bg-brand-blue`, `text-ink`, `border-line`, `bg-brand-blue-light`, `hover:bg-brand-blue-deep`, etc.

Both systems live in `src/app/globals.css`. Add/change tokens in both places when modifying colors. There is no `tailwind.config.js` — this is Tailwind v4.

### CSS utilities
Landing page sections use plain CSS classes (`.wrap`, `.section`, `.eyebrow`, `.btn`, `.reveal`, `.card`, etc.) defined in `globals.css`. The DiscoveryForm uses Tailwind utility classes. Do not mix the two in new components unless necessary.

### Scroll reveal
`.reveal` elements animate in on scroll via `RevealProvider.tsx` (a `"use client"` component mounted in `layout.tsx`). It uses `IntersectionObserver` with staggered sibling delays and a 1200ms failsafe (`reveal-failsafe` class on `<html>`). Add the `reveal` class to any element that should animate in — no additional wiring needed.

## Architecture

**Apex Made** — a lead-generation marketing site for a solo software/AI consultancy targeting local small businesses.

### Page structure (`src/app/page.tsx`)

```
Hero         → sections/Hero.tsx
Problem      → sections/Problem.tsx
Services     → sections/Services.tsx
HowItWorks   → sections/Process.tsx       (export: HowItWorks)
WhyApexMade  → sections/About.tsx         (export: WhyApexMade)
FAQ          → sections/FAQ.tsx
CTABand      → sections/Contact.tsx       (export: CTABand)
```

Note: file names and export names differ for About, Process, and Contact — these predate a rename that wasn't finished.

### Lead qualification flow

1. Visitor clicks "Book a free call" → opens Calendly (`CALENDLY_URL` from `src/lib/config.ts`)
2. Calendly fires a POST to `/api/webhooks/calendly` — HMAC-SHA256 signature verified, sends personalized email via Resend with discovery form link
3. Prospect fills out `/discovery` — 3-step form (`DiscoveryForm.tsx`) pre-populated from URL params (`?name=&email=`)
4. Form submits to `/api/discovery` — inserts a row into Supabase `leads` table and emails Bryan a summary

### Key non-obvious things

**`CALENDLY_URL` is centralized** in `src/lib/config.ts`. It reads from `NEXT_PUBLIC_CALENDLY_URL` env var with a hardcoded fallback. Import it from config — do not redeclare `process.env.NEXT_PUBLIC_CALENDLY_URL` inline in components.

**App Router only** — all routes under `src/app/`. Server components by default; add `"use client"` only when you need browser APIs or React hooks.

**Path alias** — `@/*` resolves to `src/*` (configured in `tsconfig.json`).

**Supabase client** — `src/lib/supabase.ts` exports a service-role client for server-only use (API routes). Never import it in client components.

**SVG gradient IDs must be unique per component** — Header uses `id="nav-grad"`, Footer uses `id="footer-grad"`. If you add another SVG gradient, give it a distinct ID.

**Headline variants** — Hero renders 3 `.hl-*` spans (`.hl--hours`, `.hl--busywork`, `.hl--admin`). CSS shows only the one matching `data-headline` on `<html>` (set in `layout.tsx`). The other two are dead HTML in production — this is intentional for design tooling and not harmful.

### Environment variables

Required in `.env.local`:

| Variable                       | Purpose                                  |
|-------------------------------|------------------------------------------|
| `RESEND_API_KEY`               | Transactional email                      |
| `CONTACT_EMAIL`                | Where lead summaries are sent            |
| `NEXT_PUBLIC_CALENDLY_URL`     | Calendly booking link (CTAs + nav)       |
| `CALENDLY_WEBHOOK_SIGNING_KEY` | HMAC verification on Calendly webhook    |
| `NEXT_PUBLIC_SUPABASE_URL`     | Supabase project URL                     |
| `SUPABASE_SERVICE_ROLE_KEY`    | Server-only Supabase access              |
| `NEXT_PUBLIC_SITE_URL`         | Full site URL (used in emails)           |

## Design Guardrails

- **Colors:** Use brand tokens (`--blue`, `--pink`, `--ink`, etc.). Never use default Tailwind palette (indigo-500, blue-600, etc.).
- **Shadows:** Layered, color-tinted — see the `--shadow-*` variables in `globals.css`.
- **Typography:** Space Grotesk for headings with tight tracking (`letter-spacing: -0.02em`), Manrope for body.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use `var(--ease)` (`cubic-bezier(.22, 1, .36, 1)`).
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** `--radius: 18px` for cards, `--radius-lg: 26px` for large surfaces.

## Hard Rules

- Never hardcode the Calendly URL — import `CALENDLY_URL` from `src/lib/config.ts`
- Never hardcode `BRAND_NAME`, `BRAND_TAGLINE`, or `CONTACT_EMAIL_DISPLAY` — import from `src/lib/config.ts`
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

@AGENTS.md
