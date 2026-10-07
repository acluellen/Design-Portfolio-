# Visual rules

Current direction from October 7, 2026: warm off white, one clean sans, soft corners. The previous home page is saved on the `saved/home-v1` branch.

## Direction

Calm, warm, and photo led. Real photos carry the story. Everything around them stays quiet.

- Warm off white page, near black ink, one warm gray band to separate sections.
- One accent: the blue from the AL logo. Use it for links, focus rings, card labels, and small markers. Never for buttons, fills, or large areas.
- Inter for everything, headlines and body. Headlines are semibold with tight tracking. No serif.
- Sentence case for every heading. Proper names keep their capitals (BRIDGEGOOD UX Design Apprenticeship, Purpose to Pixels).
- Lots of whitespace between sections (`--section-space`).
- No drop shadows and no gradients. Thin rules and the band separate content.
- Two sections are always dark in both themes: the coaching section and the closing section.

## Color

| Role | Light | Dark |
|---|---|---|
| Page | `#F8F6F1` | `#0B0B0C` |
| Raised surface (cards) | `#FFFDF9` | `#17171A` |
| Band | `#EFEBE3` | `#17171A` |
| Image panel | `#F1EDE6` | `#17171A` |
| Ink | `#141210` | `#F2F2F2` |
| Muted ink | `#57534C` | `#A0A0A0` |
| Rules | `#E0DBD1` | `#2A2A2E` |
| Accent | `#054FB9` | `#6E9CF2` |
| Always dark band | `#000000` | `#000000` |

Contrast, all WCAG AA or better:

- Accent on page: 6.9:1 light, 7.2:1 dark. Accent on band: 6.3:1 light, 6.6:1 dark. Accent on cards: 7.3:1 light.
- Muted ink on page: 7.1:1 light, 7.5:1 dark. Muted ink on band: 6.4:1 light, 6.8:1 dark.
- Ink on page: 17.3:1 light.

Wrap always dark sections in `.surface-always-dark`. It remaps ink, muted ink, rules, and accent, so buttons and links inside read correctly with no extra styles.

## Theme

- Follows the visitor's device setting by default.
- A small toggle in the header switches light and dark. The choice is saved in the browser.
- An inline script in the head sets the theme before first paint, so the wrong theme never flashes.

## Type

- Headlines: `--font-display` (the same Inter as body), `--weight-heading` (600), `--tracking-tight`, tight leading, balanced wrapping.
- Body: `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata: `--step--1`. Uppercase tracking only for small labels.

## Shape

- Images and cards: `--radius-media` (16px).
- Headshot: a full circle. Round icon buttons (theme toggle, video play) stay round.
- Buttons: soft rounded rectangles, `--radius-control` (12px), 44px tall (`--control-height`).
  - Primary: solid ink fill, page color text.
  - Secondary: transparent fill, ink outline, ink text.
  - Inside always dark sections the tokens flip, so primary becomes a light button with dark text.

## Layout

- Wide column: `--measure-wide`. Reading column: `--measure-reading`.
- Side gutter: 16px on phones, 32px from 48rem, 64px from 80rem. No horizontal scroll at any width.
- Two column sections stack to one column on phones.
- Selected work: one featured card, then a two column grid (see below).

## Selected work

- One large featured card on top (`featured: true` in the case study), then the other cards in two columns from 48rem, one column on phones. Order comes from each case study's `order` value.
- Every card: 4:3 image on a soft panel, a small blue label, the title, one description, and one detail line at the bottom above a thin rule. No tags.
- Featured card: image and text side by side from 56rem (7 to 5), bigger title and description.
- Card text lives in each case study's frontmatter under `card` (`label`, `description`, `detail`).
- A card links to its case study only when that case study is published. The whole card is then the link, with a visible focus ring and a 2px lift on hover. Unpublished cards have no link and no hover.
- With no image, the panel shows the project name.

## Photos

- Stored in `src/assets/photos/` and optimized at build time by Astro: AVIF and WebP at quality 80, with a JPEG fallback.
- Pre-crop each source to the shape it is shown in (square headshot, 4:5 gym portraits, 16:9 workshop). A file cropped by `object-fit: cover` in the browser is zoomed in, so it looks softer than its width suggests.
- Crop rule in `Photo.astro`: pass `cover` (the box's width ÷ height) for any photo shown with `object-fit: cover`. When the file is wider than the box, Photo multiplies both the srcset widths and the `sizes` lengths by that zoom, and warns at build time to pre-crop the source.
- Closing section: the group photo runs full width at its own shape (2000 by 1150, Aaron's framing), with no overlay and nothing laid over it. The credit sits under the photo on the right. The headline, text, and button follow below in the always dark band. Nothing crops at any width, so `sizes` is simply 100vw.
- Work card `sizes` are set in `WorkCard.astro` for the featured and small layouts.
- Photo credits: a small muted "Photos: BRIDGEGOOD" line under the coaching photos and in the banner's lower right.
- Every photo has alt text approved by Aaron.
- Missing photos render a neutral placeholder so layout never breaks.
- Logo: `src/assets/brand/logo.svg` (Aaron's file) in the header and as `public/favicon.svg`.

## Motion

- Minimal. Color transitions only, `--duration-fast`. Smooth scroll for in page links.
- Respect `prefers-reduced-motion`.
