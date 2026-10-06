# Visual rules

Final. Approved direction from October 6, 2026: a sharper version of Aaron's Squarespace home page.

## Direction

Sharp, neutral, and photo led. Real photos carry the warmth. Everything around them stays quiet.

- Near white page, near black ink, one gray band to separate sections.
- One accent: the blue from the AL logo. Use it for links, focus rings, and small markers only. Never for buttons, fills, or large areas.
- Large serif headlines in Source Serif 4. Clean body text in Inter. No other fonts.
- Generous whitespace between sections.
- No drop shadows and no gradients. Thin rules and the gray band separate content.
- Two sections are always dark in both themes: the coaching band and the closing banner.

## Color

| Role | Light | Dark |
|---|---|---|
| Page | `#FAFAFA` | `#0B0B0C` |
| Raised surface | `#FFFFFF` | `#17171A` |
| Gray band | `#EDEDED` | `#17171A` |
| Ink | `#0A0A0A` | `#F2F2F2` |
| Muted ink | `#5A5A5A` | `#A0A0A0` |
| Rules | `#DADADA` | `#2A2A2E` |
| Accent | `#054FB8` | `#6E9CF2` |
| Always dark band | `#000000` | `#000000` |

Contrast, all WCAG AA or better:

- Accent on page: 7.1:1 light, 7.2:1 dark. Accent on gray band: 6.4:1 light, 6.6:1 dark.
- Muted ink on page: 6.6:1 light, 7.5:1 dark. Muted ink on gray band: 5.9:1 light, 6.8:1 dark.

Wrap always dark sections in `.surface-always-dark`. It remaps ink, muted ink, rules, and accent, so buttons and links inside read correctly with no extra styles.

## Theme

- Follows the visitor's device setting by default.
- A small toggle in the header switches light and dark. The choice is saved in the browser.
- An inline script in the head sets the theme before first paint, so the wrong theme never flashes.

## Type

- Headlines: `--font-display`, regular weight, tight leading, balanced wrapping.
- Body: `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata: `--step--1`. Uppercase tracking only for small labels.

## Shape

- Images and cards: `--radius-media` (12px).
- Headshot: a full circle.
- Buttons: pills, 44px tall (`--control-height`).
  - Primary: solid ink fill, page color text.
  - Secondary: transparent fill, ink outline, ink text.
  - Inside always dark sections the tokens flip, so primary becomes a light pill with dark text.

## Layout

- Wide column: `--measure-wide`. Reading column: `--measure-reading`.
- Side gutter: 16px on phones, 32px from 48rem, 64px from 80rem. No horizontal scroll at any width.
- Two column sections stack to one column on phones.
- Selected Work: two columns on desktop, one on phones.

## Photos

- Stored in `src/assets/photos/` and optimized at build time by Astro.
- Every photo has alt text approved by Aaron.
- Missing photos render a neutral placeholder so layout never breaks.

## Motion

- Minimal. Color transitions only, `--duration-fast`. Smooth scroll for in page links.
- Respect `prefers-reduced-motion`.
