# Business Website

Lead-generation marketing site for a SaaS/web development consulting business. Built with Next.js 15, Tailwind CSS v4, and TypeScript. Deployed on Vercel.

## Features

- **Booking flow** — Calendly inline embed for instant consultation scheduling
- **Discovery form** — 3-step form (`/discovery`) sent to prospects after booking; saves leads to Supabase
- **Email automation** — Calendly webhook triggers a branded discovery email via Resend
- **Lead storage** — All discovery form submissions stored in a Supabase `leads` table

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- [Resend](https://resend.com) — transactional email
- [Supabase](https://supabase.com) — leads database
- [Calendly](https://calendly.com) — scheduling embed + webhooks
- Deployed on [Vercel](https://vercel.com)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                      # Home page (assembles all sections)
│   ├── layout.tsx                    # Root layout, Inter font, Header + Footer
│   ├── globals.css                   # Tailwind theme + global styles
│   ├── discovery/
│   │   └── page.tsx                  # Discovery form page (/discovery)
│   └── api/
│       ├── discovery/route.ts        # POST — saves lead to Supabase + emails Bryan
│       └── webhooks/calendly/route.ts # POST — handles Calendly booking webhook
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   └── Contact.tsx               # Calendly embed
│   └── discovery/
│       └── DiscoveryForm.tsx         # 3-step lead qualification form
└── lib/
    ├── config.ts                     # Brand name, URLs (single place to update)
    └── supabase.ts                   # Supabase server client
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Fill in the values in `.env.local` — see `.env.local.example` for all required variables.

### 3. Set up Supabase

Create a `leads` table in your Supabase project by running this in the SQL editor:

```sql
create table leads (
  id           uuid        default gen_random_uuid() primary key,
  name         text        not null,
  email        text        not null,
  company      text,
  project_type text,
  budget       text,
  timeline     text,
  message      text,
  booked_call  boolean     default true,
  created_at   timestamptz default now()
);
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Booking + Discovery Flow

```
Visitor books a call via Calendly embed
        ↓
Calendly fires webhook → /api/webhooks/calendly
        ↓
Resend sends discovery email to prospect with link to /discovery
        ↓
Prospect fills out 3-step form (project type → budget/timeline → details)
        ↓
/api/discovery saves lead to Supabase + emails Bryan
```

## Customization

All brand-level constants (name, tagline, social URLs) live in `src/lib/config.ts` — one file to update when the business name is finalized.

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic redeployment.

Required environment variables must be set in **Vercel → Project Settings → Environment Variables**. See `.env.local.example` for the full list.

### Calendly Webhook Setup

After deploying, register the webhook via the Calendly API:

```bash
# 1. Get your user URI
curl -H "Authorization: Bearer YOUR_PAT" https://api.calendly.com/users/me

# 2. Create the webhook subscription
curl -X POST https://api.calendly.com/webhook_subscriptions \
  -H "Authorization: Bearer YOUR_PAT" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-vercel-url.vercel.app/api/webhooks/calendly",
    "events": ["invitee.created"],
    "scope": "user",
    "user": "YOUR_USER_URI",
    "organization": "YOUR_ORG_URI"
  }'
```
