# Syclops design system

Source of visual truth for everything Syclops: marketing site, field/web app, admin, emails, PDFs, OG images, and Flutter shells.

Do not invent a second palette. The public site at [syclops.in](https://syclops.in) already defines the brand. Product UIs densify the same tokens; they do not switch to SaaS blue, white dashboards, or red CTAs.

**Forbidden as brand colour:** primary blue, primary red, pure white canvases (`#FFFFFF` as the page background).

---

## 1. Positioning the look

Syclops is field work in India: visits, referrals, plans. The interface should feel like paper, clay, and ink — a working day, not a hospital HIS, not a GPS-tracker CCTV, not a Silicon Valley CRM.

| Feel like | Do not feel like |
|---|---|
| Warm paper, terracotta, charcoal | Blue SaaS, red launch buttons, white Notion |
| Direct, specific, slightly dry | Gradient hero, glassmorphism, neon |
| One accent, used sparingly | Rainbow status pills as decoration |

The marketing site can be airy. The product can be denser. Both must share **ink, iris, paper, and line**.

---

## 2. Colour tokens

Use these names in CSS and Tailwind. Hex is canonical.

### Surfaces

| Token | Hex | RGB | Role |
|---|---|---|---|
| `paper` | `#F6F1E8` | `246 241 232` | Marketing page background |
| `paper-app` | `#F3EEE6` | `243 238 230` | Product / admin canvas (not white) |
| `cream` | `#FBF7F0` | `251 247 240` | Cards, sheets, raised panels |
| `quiet` | `#EFE8DC` | `239 232 220` | Sidebars, table headers, chips at rest |
| `line` | `#DDD4C4` | `221 212 196` | Borders, dividers, input rings at rest |

Never use `#FFFFFF` as the app or site background. Cream is the lightest surface.

### Ink

| Token | Hex | RGB | Role |
|---|---|---|---|
| `ink` | `#12141A` | `18 20 26` | Body text, icons, logo |
| `muted` | `#5C574E` | `92 87 78` | Secondary text, captions, placeholders |

### Accent (iris)

Terracotta. This is clay, not error red.

| Token | Hex | RGB | Role |
|---|---|---|---|
| `iris` | `#C45C26` | `196 92 38` | Primary buttons, selected nav, links, focus, key marks |
| `iris-dark` | `#9A451C` | `154 69 28` | Hover / pressed on iris |
| `iris-soft` | `#C45C26` at 12–28% on paper | — | Selection, avatars, map pins at rest |

Primary buttons: **iris fill, cream text** (`#FBF7F0`), not white-on-blue.

Links in running copy: iris. Hover: iris-dark.

Focus ring: `0 0 0 3px color-mix(in srgb, #C45C26 25%, transparent)`.

### Status (not brand)

Use only for meaning. Do not theme the product in these.

| Token | Hex | Meaning |
|---|---|---|
| `money` | `#1F6B4A` | Paying, converted, success, MRR up |
| `warn` | `#A16207` | Qualification pending, at-risk, needs review |
| `leak` | `#7A2E1F` | Failed, churned, destructive confirm (dark rust — not `#EF4444`) |
| `track` | `#C45C26` | Live / in-progress field day (same as iris, not cyan) |

Maps and GPS: ink route, iris pins, paper land. No Google-blue UI chrome on top of the map controls we own.

### Dark band

Used on marketing CTAs and rare product emphasis (empty-state footer, checkout strip).

| Token | Hex | Role |
|---|---|---|
| `ink` | `#12141A` | Band background |
| `cream` | `#FBF7F0` | Text on the band |
| `iris` | `#C45C26` | Button on the band |

---

## 3. What not to ship

- Tailwind `blue-*`, `sky-*`, `indigo-*` as primary or brand
- Tailwind `red-*` / `rose-*` as primary or default CTA
- `bg-white` / `#fff` full-page or default card (use `cream`)
- Rainbow charts as the first impression — loop health is visits → referrals → plans, in ink/iris/money
- Shadows heavier than `0 1px 2px rgb(18 20 26 / 0.06)`
- Gradients except a quiet iris→iris-dark on a single primary control if needed
- Neon, glass, dark-mode-first dashboards (a later dark theme must still be ink + iris, not navy)

---

## 4. Type

### Marketing (`syclops-website`)

| Role | Font | Notes |
|---|---|---|
| Display / H1–H2 | **Syne** 500–700 | Class `.display`. Tracking tight. |
| Body | **Geist Sans** | UI and paragraphs |

Headlines are sentence case, not Title Case, unless the phrase is a product name.

### Product (`app-frontend`, `admin-dashboard`, Flutter)

| Role | Font | Notes |
|---|---|---|
| UI | **Geist Sans** if already loaded; otherwise **Inter** until Geist is wired | Same metrics, no playful display font in tables |
| Numeric / TADA / money | Tabular lining figures | `font-variant-numeric: tabular-nums` |
| Display | Syne only on empty states and first-run screens | Do not Syne a data table |

Sizes (product):

| Step | Size | Use |
|---|---|---|
| caption | 11–12px | Eyebrows, timestamps |
| body | 14px | Default app UI |
| title | 16–18px | Card titles, nav |
| display | 24–32px | Screen titles only |

Marketing H1 can go to ~54px. Product screen titles stay ≤32px.

---

## 5. Shape and space

| Token | Value | Use |
|---|---|---|
| Radius pill | `9999px` (`rounded-full`) | Buttons, nav chips, tags |
| Radius card | `1.5rem` (`rounded-3xl`) marketing; `1rem` (`rounded-xl`) product | Cards, dialogs |
| Radius control | `0.75rem` (`rounded-lg`) | Inputs, selects in the app |
| Page width | `72rem` (`max-w-6xl`) | Marketing |
| Page gutter | `1.25rem` (`px-5`) | Marketing; product uses 16px |
| Section gap | `4rem` (`py-16`) marketing | Product screens: 16–24px |

Buttons: pill on marketing; rounded-lg is acceptable in dense toolbars. Do not mix square Material buttons with pills on the same screen.

Hairline borders (`1px solid line`) instead of drop shadows for cards.

---

## 6. Components

### Buttons

1. **Primary** — `bg-iris text-cream hover:bg-iris-dark`
2. **Secondary** — `border-line bg-cream text-ink hover:bg-quiet`
3. **Ghost** — text ink, hover quiet
4. **Destructive** — `bg-leak text-cream` only after a confirm; never as the default save

Do not put two iris fills next to each other. One primary per view.

### Inputs

Rest: cream fill, line border, muted placeholder.  
Focus: iris border + iris-soft ring.  
Error: leak border, leak text, no red glow.

### Cards

`bg-cream border border-line`. Selected: `border-ink/30` or a 2px iris left edge — not a blue outline.

### Navigation

Selected item: iris text or quiet background + iris mark. Unselected: muted. Logo is the outlined Syclops lockup (`syclops-logo.svg`), ink on paper — do not recolour it blue.

### Tables

Header `quiet`, rows `cream`, hairline `line`. Paying amounts in `money`. Leakage counts in `leak`. Do not zebra with grey-50.

### Maps / field day

Paper map wash if we control tiles. Check-in pin = iris. Route = ink. At-risk overlay = warn, not blinking red.

### Toasts

Success `money`, warning `warn`, error `leak`, info `ink` on `quiet` — **not** blue info toasts.

---

## 7. Motion

Marketing may use slow orbit / dash / breathe (already in `src/app/globals.css`). Product motion is short: 150–200ms ease, colour and opacity only.

Honor `prefers-reduced-motion`. Field check-in feedback can be a 200ms iris pulse, not a celebration confetti.

---

## 8. Imagery and iconography

- OG images: paper background, iris eyebrow, ink title, SYCLOPS letter-spacing (see `src/lib/og.tsx`)
- Product icons: 1.5px stroke, ink, iris only for the active glyph
- Photos: field, clubs, clinics — warm daylight. No stock “handshake in a glass office”
- Logo: `/syclops-logo.svg` (outlined lockup). Do not draw a new mark

---

## 9. Voice (copy that sits in the UI)

Same voice as the site: short, specific, no slogan stacking.

- Prefer “Check in”, “Share the portal”, “Failed debit → visit”
- Avoid “Unlock growth”, “AI-powered”, “Learn more”
- Empty states say what to do in the product, then one iris button

Industry nouns (visit / referrer / plan) follow the workspace label pack. Do not hard-code “gym” copy into a clinic tenant.

---

## 10. Where this applies

| Surface | How to apply |
|---|---|
| `syclops-website` | Tokens already live in `src/app/globals.css`. Keep them. |
| `app-frontend` | Replace `--color-primary-*` blue scale and `bg-white` / `bg-gray-50` with these tokens. |
| `admin-dashboard` | Replace `brand` / `primary` sky-blue (`#0ea5e9`) with iris. |
| Flutter field shell | Same hex; cream scaffolds; iris FAB |
| Transactional email / PDF TADA | Paper page, ink type, iris rules, money totals |
| New screens, Figma, slides | Start from this file, not from a Tailwind default kit |

---

## 11. CSS starter

```css
:root {
  --color-paper: #f6f1e8;
  --color-paper-app: #f3eee6;
  --color-cream: #fbf7f0;
  --color-quiet: #efe8dc;
  --color-line: #ddd4c4;
  --color-ink: #12141a;
  --color-muted: #5c574e;
  --color-iris: #c45c26;
  --color-iris-dark: #9a451c;
  --color-money: #1f6b4a;
  --color-warn: #a16207;
  --color-leak: #7a2e1f;
}
```

Tailwind (v4 `@theme` or v3 `extend.colors`): map `paper`, `cream`, `quiet`, `line`, `ink`, `muted`, `iris`, `iris-dark`, `money`, `warn`, `leak`. Primary in product config **is iris**, not blue.

---

## 12. Checklist before shipping UI

- [ ] Page background is paper / paper-app, not white
- [ ] One iris primary action
- [ ] No blue links, charts, or focus rings
- [ ] Danger is leak rust, not bright red
- [ ] Success is money green
- [ ] Cards use line borders, not heavy shadow
- [ ] Logo is the outlined lockup, un-recoloured
- [ ] Copy is specific; no generic “Learn more” as the only affordance
