# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
```

No lint or test scripts are configured.

## Architecture

**Apex Made** — a lead-generation marketing site for a solo SaaS/web dev consultancy. The goal is to convert visitors into booked consultations and qualified leads.

### Lead qualification flow

1. Visitor books via Calendly embed on the home page (`/` → Contact section)
2. Calendly fires a POST to `/api/webhooks/calendly` — validated with HMAC signature, sends a personalized email via Resend inviting the prospect to fill out the discovery form
3. Prospect fills out `/discovery` — a 3-step client-side form (`DiscoveryForm.tsx`) pre-populated from URL params (`?name=&email=`)
4. Form submits to `/api/discovery` — inserts a row into Supabase `leads` table and emails Bryan a summary

### Key non-obvious things

**Tailwind v4** — there is no `tailwind.config.js`. All theme tokens (brand colors, font) live in the `@theme {}` block inside `src/app/globals.css`. Add/change design tokens there.

**App Router only** — all routes are under `src/app/`. Server components by default; add `"use client"` only when you need browser APIs or React hooks.

**Path alias** — `@/*` resolves to `src/*` (configured in `tsconfig.json`).

**Brand config** — hardcoded site name, tagline, contact email, and Calendly URL live in `src/lib/config.ts`. Use that rather than duplicating strings in components.

**Supabase client** — `src/lib/supabase.ts` exports a service-role client for server-only use (API routes). Never import it in client components.

### Environment variables

Required in `.env.local` (see `.env.local.example`):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Transactional email |
| `CONTACT_EMAIL` | Where lead summaries are sent |
| `NEXT_PUBLIC_CALENDLY_URL` | Embedded Calendly widget |
| `CALENDLY_WEBHOOK_SIGNING_KEY` | HMAC verification on webhook |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only Supabase access |
| `NEXT_PUBLIC_SITE_URL` | Full site URL (used in emails) |
