# Apex Made — Brand System Reference

Use this document as the single source of truth when reskinning the Apex Made website. It covers visual identity, messaging, and tone.

---

## Brand Foundation

**Mission:** Apex Made empowers small businesses to do more with less by crafting custom software that fits the way they already work — eliminating wasted spend, simplifying operations, and putting ownership back in the hands of the people who built the business.

**Vision:** To become the trusted in-house builder for small businesses everywhere — a boutique studio where every client's software feels like it was made from the inside out, not handed down from the outside in.

**Positioning (primary):** "Your In-House Dev Team (Without the Overhead)" — Apex Made is the builder who feels like a member of the client's own team. Someone who knows their business, speaks their language, and builds software they truly own.

**Tagline:** "Built from the inside out."

---

## Core Values

1. **Ownership, Not Outsourcing** — We build alongside our clients so that what we create is truly theirs.
2. **Simplicity Is the Strategy** — The best software removes complexity rather than adding it.
3. **Listen Before We Build** — We study the problem deeply before proposing a solution.
4. **Built to Grow With You** — Everything we create is designed to scale alongside the businesses we serve.
5. **Make It Worth Using** — Software only matters if people actually use it.

---

## Target Audience

- Small business owners and family business leaders
- Less tech-savvy but not scared of technology
- Tired of paying for SaaS subscriptions that don't quite fit
- Want quality software tailored to their unique workflows
- Value feeling like they have an in-house builder, not an outside vendor

---

## Color Palette

### Primary Colors

| Name           | Hex       | Role                              |
|----------------|-----------|-----------------------------------|
| Charcoal       | `#383D3B` | Primary dark / backgrounds & text |
| Apex Cyan      | `#52DEE5` | Primary accent / CTAs & highlights|
| Sky Cyan       | `#92DCE5` | Secondary accent / hover states   |
| Lavender Gray  | `#EEE5E9` | Light backgrounds / cards         |
| Stone          | `#7C7C7C` | Secondary text / captions         |

### Extended Colors

| Name           | Hex       | Role                              |
|----------------|-----------|-----------------------------------|
| Deep Charcoal  | `#2A2E2C` | Deeper dark backgrounds           |
| Off-White      | `#F8F6F7` | Page background (never pure #FFF) |
| Deep Cyan      | `#3BBFC7` | Darker cyan for depth/contrast    |
| Ice Cyan       | `#C8F4F7` | Light cyan tints / subtle fills   |

### Color Rules

- Apex Cyan (`#52DEE5`) should never exceed ~15% of any composition. Use it for CTAs, interactive elements, key data points, and brand moments. Scarcity creates impact.
- Never use pure white (`#FFFFFF`) for page backgrounds. Use Off-White (`#F8F6F7`) or Lavender Gray (`#EEE5E9`).
- Dark sections: Charcoal (`#383D3B`) or Deep Charcoal (`#2A2E2C`) backgrounds with Lavender Gray (`#EEE5E9`) text.
- Use subtle radial gradients of cyan at 10-15% opacity for depth on dark surfaces.
- Do not introduce other accent colors (no orange, purple, green, etc.).

---

## Typography

### Font Stack

| Role               | Font            | Weights      | Usage                                      |
|--------------------|-----------------|--------------|---------------------------------------------|
| Display / Headlines| **Outfit**      | 600, 700, 800| All headings, hero text, brand statements   |
| Body / UI          | **DM Sans**     | 400, 500, 700| Body copy, descriptions, navigation, UI     |
| Technical / Labels | **JetBrains Mono** | 400, 500  | Code, version numbers, section labels, metadata |

### Type Hierarchy

| Element     | Font & Weight          | Size      | Notes                        |
|-------------|------------------------|-----------|------------------------------|
| H1 — Hero   | Outfit 800             | 48–64px   | Letter-spacing: -1.5px       |
| H2 — Section| Outfit 700             | 28–36px   | Letter-spacing: -0.5px       |
| H3 — Card   | Outfit 600             | 18–22px   |                              |
| Body        | DM Sans 400            | 15–17px   | Line-height: 1.7             |
| Caption     | JetBrains Mono 400     | 10–12px   | Uppercase, letter-spacing: 2–4px |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## Graphic Style Rules

### Corners & Shapes
- 12–20px border-radius for cards and containers
- 8px for buttons and inputs
- 50% for avatars and icons

### Spacing
- 8px base grid
- Minimum 60px vertical padding between major sections
- Avoid dense, cluttered layouts

### Shadows
- Primary: `0 2px 12px rgba(0,0,0,0.06)`
- Elevated: `0 8px 30px rgba(0,0,0,0.08)`
- Never use hard drop shadows or visible borders for depth

### Accent Usage
- Cyan is a precision tool, not a paintbrush
- Use for CTAs, interactive elements, key data, brand moments only

### Dark Sections
- Charcoal background + Lavender Gray text
- Cyan accents glow on dark
- Subtle radial gradients of cyan at 10–15% opacity for atmosphere

### Iconography
- Outlined, 1.5–2px stroke weight, rounded caps and joins
- Use Lucide or Phosphor icon sets
- Default tint: Stone (`#7C7C7C`)
- Active/hover: Apex Cyan (`#52DEE5`)

### Do / Don't

**Do:**
- Pair Charcoal backgrounds with Cyan accents
- Use monospace labels for technical credibility
- Keep layouts clean with generous whitespace
- Let Lavender Gray add warmth to light surfaces
- Use subtle cyan glows for atmospheric depth

**Don't:**
- Use cyan as a background color for large areas
- Mix in other accent colors
- Use pure white (#FFF) for page backgrounds
- Stack dense information without breathing room
- Use heavy borders or hard visual separators

---

## Imagery & Photography Tone

### Three Visual Modes

1. **Warm & Documentary** — Natural lighting, candid angles. Real people at work. Avoid sterile stock photography.
2. **Detail & Craft** — Close-ups of screens, clean code, hand-drawn wireframes. Make the "made" feel tangible.
3. **Abstract & Atmospheric** — Dark gradients with cyan light accents. Subtle noise textures. Geometric shapes suggesting precision.

### Photo Treatment

- Desaturate slightly (−15–20%)
- Push shadows toward Charcoal
- Keep skin tones natural
- Add subtle cool tint to highlights
- Off-center subjects with negative space for text overlay
- On dark photos: charcoal gradient overlay (60–80% opacity) from bottom

---

## Brand Voice & Messaging

### Voice Characteristics

- **Direct but warm** — Talk like a trusted colleague, not a sales deck
- **Confident but not arrogant** — We know our craft; we don't need to prove it
- **Simple language** — No jargon unless the audience expects it. Our clients aren't developers.
- **Human-first** — Talk about people and outcomes, not frameworks and tech stacks

### Messaging Hierarchy

Lead with outcomes and feelings. Tech details come last.

1. **First:** What the client gets (ownership, simplicity, partnership)
2. **Second:** How we work (collaborative, analytical, iterative)
3. **Third:** What we use (tech stack — only when asked or on a dedicated page)

### Key Messages

- "Your software. Not someone else's."
- "Built from the inside out."
- "We study the problem before we solve it."
- "Do more with less."
- "Stop renting. Start owning."

### Words to Use

- Build, craft, own, yours, grow, simple, together, partner, fit, tailored

### Words to Avoid

- Leverage, synergy, disrupt, cutting-edge, robust, scalable (on its own without context), end-to-end (generic), solutions (generic)

---

## Website Reskin — Specific Guidance

### Hero Section
- **Current:** "Build Software That Grows Your Business"
- **Suggested:** Lead with something more ownable. Options:
  - "Your Software. Built From the Inside Out."
  - "Custom Software That Feels Like Yours — Because It Is."
  - "Do More With Less. Own What You Build."
- Sub-headline should speak to the audience (small business owners), not developers

### Services Section
- Keep the four services but soften the technical framing
- Lead each card with the business outcome, not the tech capability
- Example: Instead of "Web Development — Custom websites and web apps built with modern frameworks," try "Web Development — A website that works the way your business does, not the other way around."

### Why Work With Me Section
- Rename to something warmer: "Why Apex Made" or "How We're Different"
- Reframe from developer-centric to client-centric language
- "Direct access to the developer" → "You'll always know who's building your software"
- "Modern, maintainable code" → "Built to last — no duct tape, no shortcuts"
- Remove or move tech stack callouts (Next.js, React, Node, TypeScript) to a less prominent position. The target audience doesn't care about these.

### Process Section
- The 4-step flow is great. Keep the structure.
- Consider adding warmer, more human language
- "Discovery" → "We Listen First"
- "Build" → "We Build Together"
- "Launch" → "We Go Live With You"
- "Support" → "We Don't Disappear"

### Contact / CTA Section
- "Let's Talk" is good — keep it
- Reinforce the low-pressure, human feel

### Footer
- "Web & SaaS Development for Growing Businesses" → "Custom software for small businesses. Built from the inside out."

### General CSS Changes
- Swap font stack to Outfit + DM Sans + JetBrains Mono
- Replace any pure white backgrounds with Off-White (`#F8F6F7`)
- Apply Charcoal, Apex Cyan, and Lavender Gray throughout
- Add subtle cyan glow effects on dark sections
- Soften card shadows to the specified values
- Ensure buttons/CTAs use Apex Cyan with Charcoal text
- Update all border-radius values per the graphic rules
