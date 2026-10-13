# Syclops design guidelines

Cursor agents, including cloud agents, follow this file for every UI change in this repository. Read it before adding or restyling a page.

Colour tokens already live in `src/app/globals.css`. `DESIGN.md` is the longer brand note. When padding or dropdowns are involved, this file wins.

Brand files in this repo (copy these; do not redraw the mark):

| File | Use |
|---|---|
| `design/syclops-logo.svg` | Wordmark lockup. Same mark as `public/syclops-logo.svg`. Ink on paper. Leave the colours as drawn. |
| `design/favicon.svg` | Square eye mark for the browser tab only. |

The live site [syclops.in](https://syclops.in) is the visual source.

---

## Colour

Use these names. Hex is canonical.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F6F1E8` | Page background |
| `paper-app` | `#F3EEE6` | Denser product-like bands |
| `cream` | `#FBF7F0` | Cards, sheets, button text on iris |
| `quiet` | `#EFE8DC` | Sidebars, chips at rest |
| `line` | `#DDD4C4` | Borders, dividers, input rings at rest |
| `ink` | `#12141A` | Body text, icons, logo |
| `muted` | `#5C574E` | Secondary text, captions, placeholders |
| `iris` | `#C45C26` | Primary button, links, focus |
| `iris-dark` | `#9A451C` | Hover and pressed on iris |
| `money` | `#1F6B4A` | Success |
| `warn` | `#A16207` | Warning |
| `leak` | `#7A2E1F` | Failed, destructive confirm |

Page background is paper. Cards are cream. The lightest surface is cream.

Primary button: iris fill, cream text. Hover: iris-dark. One iris fill per view.

Links and focus use iris. Focus ring: `0 0 0 3px color-mix(in srgb, #C45C26 25%, transparent)`.

Tailwind `blue-*`, `sky-*`, and `indigo-*` are not brand colours here. Bright `red-*` is not the danger colour. `bg-white` is not the page or the default card.

---

## Type and hierarchy

| Role | Font | Notes |
|---|---|---|
| Display / H1–H2 | **Syne** 500–700 | Class `.display`. Tight tracking. |
| UI and paragraphs | **Geist Sans** | |

Keep this ladder. Do not invent a new size for a one-off label.

| Step | Size | Weight | Colour | Use |
|---|---|---|---|---|
| caption | 12px | 500 | muted | Eyebrows, timestamps |
| body | 16px marketing, 14px in forms | 400 | ink | Paragraphs and form values |
| title | 16–18px | 600 | ink | Card titles |
| display | up to 54px | 500–700 | ink | One H1 per page, Syne, sentence case |

Product-style blocks embedded in the site (forms, account UI) use the 14px body and stay at or under 24px for the screen title.

---

## Space

Marketing sections may keep the existing page rhythm (`px-5`, `py-16`, `max-w-6xl`). Inside a component, stay tight. Do not add a second layer of padding on top of the section.

| Element | Padding / gap |
|---|---|
| Card | `p-4` on marketing cards, `p-3` inside forms and dashboards |
| Stack of fields | `gap-2` (8px) |
| Control height | 36px on marketing forms, 32px in dense UI |
| Button padding | `px-3` with a pill radius on marketing |
| Nested content | 8–12px, never an extra `p-8` inside a card that already has padding |

A card border is `1px solid` line. Shadow stays at or under `0 1px 2px rgb(18 20 26 / 0.06)`.

Radius: marketing buttons are pills. Inputs are `rounded-lg`. Cards are `rounded-3xl` on marketing pages and `rounded-xl` in product-style UI.

---

## Dropdowns

Every dropdown is searchable. A native `<select>` and a menu without a filter field are out of bounds, including short lists.

This site has no shared select yet. A new one is a combobox: cream trigger, line border, iris focus, a text field that filters options as the user types, and keyboard support. Build it once and reuse it. Match the control height and type ladder above.

Empty state copy is specific (“No plans match ‘clinic’”).

---

## Components

**Buttons.** Primary is iris / cream, pill on marketing. Secondary is cream fill, line border, ink text. Ghost is ink text with a quiet hover. Destructive is leak / cream, and only after confirm.

**Inputs.** Cream fill, line border, muted placeholder, iris focus. Error state uses a leak border and leak text.

**Cards.** `bg-cream border border-line`.

**Logo.** `design/syclops-logo.svg` or `public/syclops-logo.svg`. Favicon is `design/favicon.svg`.

**Icons.** 1.5px stroke, ink. Iris only on the active glyph.

**Motion.** The site may use the slow orbit / dash / breathe already in `globals.css`. New UI motion is 150–200ms. Honour `prefers-reduced-motion`.

---

## Copy

Short and specific. “Check in”, “Share the portal”. Empty states say the next action, then one iris button.

---

## Checklist

- [ ] Background is paper; cards are cream
- [ ] One iris primary action
- [ ] Syne for display, Geist for UI, on the size ladder above
- [ ] Component padding stays on the tight scale; section rhythm is unchanged
- [ ] Every new dropdown is a searchable combobox
- [ ] Success is money, danger is leak
- [ ] Logo and favicon are the files in `design/`
