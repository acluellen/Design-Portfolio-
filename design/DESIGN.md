# Visual rules

Current direction from October 7, 2026: warm off white, one clean sans, soft corners. The previous home page is saved on the `saved/home-v1` branch.

## Direction

Calm, warm, and photo led. Real photos carry the story. Everything around them stays quiet.

- Warm off white page, near black ink, white cards with a thin warm border, and dark rounded panels.
- One accent blue (`#1D4ED8`, `#60A5FA` on dark). Use it for primary buttons, links, focus rings, and small labels. Never for large fills or backgrounds.
- Body text, buttons, and the menu: Atkinson Hyperlegible Next (`--font-text`), chosen for legibility. Headings: Inter (`--font-display`), semibold with tight tracking. No serif.
- "Hi, I'm Aaron" is the largest text on the page (`--step-5`). Section headings are smaller; the apprenticeship heading is about half its size (`--step-3`).
- Button labels in sentence case: "View my work", "About me". Button text uses `--tracking-button` (-0.01em).
- Sentence case for every heading. Proper names keep their capitals (BRIDGEGOOD UX Design Apprenticeship, Purpose to Pixels).
- Home section order: hero, BRIDGEGOOD and KRON4, Selected work, coaching (About), closing. One smooth scroll: every home section sits in a single stack with the same gap (`--section-gap`, 32px on phones up to 64px). The apprenticeship section is a white rounded panel, coaching and closing are dark rounded panels, and the hero and Selected work sit on the page background. No full width bands.
- No drop shadows and no gradients. Thin rules and the band separate content.
- Two panels are dark in both themes: coaching and closing. They use `#181715`, never pure black.

## Color

Never pure black (`#000000`) anywhere.

| Role | Light | Dark (and coaching and closing panels in both modes) |
|---|---|---|
| Page | `#FAF9F5` | `#181715` |
| Cards and light panels | `#FFFFFF`, border `#E8E6DF` | `#252320` |
| Main text | `#141413` | `#F5F4EF` |
| Secondary text | `#5D5B54` | `#B5B3AD` |
| Accent (links, labels) | `#1D4ED8` | `#60A5FA` |
| Small label | `#1D4ED8` on `#DBEAFE` | `#60A5FA` on `#1E2A44` |
| Primary button | `#1D4ED8`, white text, both modes | same |

Contrast, all WCAG AA or better:
- Light: main text 17.5:1, secondary 6.5:1 on page and 6.8:1 on cards, accent 6.4:1 on page and 6.7:1 on cards, label 5.5:1, white on button 6.7:1 (8.7:1 on hover `#1E40AF`).
- Dark: main text 16.3:1 on page and 14.2:1 on cards, secondary 8.5:1 and 7.5:1, accent 7.1:1 and 6.2:1, label 5.6:1.

Wrap dark panels in `.surface-always-dark`. It remaps ink, muted ink, rules, accent, and label colors, so everything inside reads correctly. On the dark page, dark panels get a thin `--color-dark-panel-edge` so they still read as panels.

## Theme

- Follows the visitor's device setting by default.
- A small toggle in the header switches light and dark. The choice is saved in the browser.
- An inline script in the head sets the theme before first paint, so the wrong theme never flashes.

## Type

- Headlines: `--font-display` (the same Inter as body), `--weight-heading` (600), `--tracking-tight`, tight leading, balanced wrapping.
- Body: `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata: `--step--1`. Uppercase tracking only for small labels.

## Shape

- One large curve, `--radius-section` (24px), on every section panel, card, photo, video, and card image. `--radius-media` points to it.
- Hero portrait: 4:5, chest up, `--size-portrait` wide (up to 26rem), with `--radius-section`. Round icon buttons (theme toggle, video play) stay round.
- Buttons: fully round (pill), `--radius-control`, 44px tall (`--control-height`).
  - Primary: AL logo blue (`--color-brand`) with white text, in every theme and inside always dark sections. Hover goes to `--color-brand-hover`.
  - Secondary: transparent fill, ink outline, ink text.
  - Inside always dark sections the secondary button's tokens flip to a light outline.

## Layout

- Wide column: `--measure-wide`. Reading column: `--measure-reading`.
- Side gutter: 16px on phones, 32px from 48rem, 64px from 80rem. No horizontal scroll at any width.
- Two column sections stack to one column on phones.
- Selected work: one featured card, then a two column grid (see below).

## Selected work

- One large featured card on top (`featured: true` in the case study), then the other cards in two columns from 48rem, one column on phones. Order comes from each case study's `order` value.
- Every card: 4:3 image on a soft panel, a small blue label, the title, one description, and one detail line at the bottom above a thin rule. No tags.
- Cards marked `inProgress: true` show a small outlined "In progress" tag beside the label, never link, and have no button.
- A published case study's card shows "View case study" as a small outlined button (`--control-height-small`). The whole card is the one link.
- Featured card: image and text side by side from 56rem (7 to 5), bigger title and description.
- Card text lives in each case study's frontmatter under `card` (`label`, `description`, `detail`).
- A card links to its case study only when that case study is published. The whole card is then the link, with a visible focus ring, a lift, and an image zoom on hover. Unpublished cards have no link and no hover.
- Card labels are plain small uppercase text, never pills: what Aaron did, then where. "In progress" sits next to the label in the label blue.
- With no image, the panel shows the project name.

## Photos

- Stored in `src/assets/photos/` and optimized at build time by Astro: AVIF and WebP at quality 60 (AVIF 60 looks like JPEG 80), with a JPEG fallback. Only the hero portrait and logo load at once; every other photo loads as it nears the screen.
- Pre-crop each source to the shape it is shown in (square headshot, 4:5 gym portraits, 16:9 workshop). A file cropped by `object-fit: cover` in the browser is zoomed in, so it looks softer than its width suggests.
- Crop rule in `Photo.astro`: pass `cover` (the box's width ÷ height) for any photo shown with `object-fit: cover`. When the file is wider than the box, Photo multiplies both the srcset widths and the `sizes` lengths by that zoom, and warns at build time to pre-crop the source.
- Closing section: inside its rounded panel, the group photo runs edge to edge at its own shape (2000 by 1150, Aaron's framing), with no overlay and nothing laid over it. The credit sits under the photo on the right. The headline, text, and button follow below in the always dark band. Nothing crops at any width, so `sizes` is simply 100vw.
- Work card `sizes` are set in `WorkCard.astro` for the featured and small layouts.
- Photo credits: a small muted "Photos: BRIDGEGOOD" line under the coaching photos and in the banner's lower right.
- Every photo has alt text approved by Aaron.
- Missing photos render a neutral placeholder so layout never breaks.
- Logo: `src/assets/brand/logo.svg` (Aaron's mark, recolored to the accent `#1D4ED8`) in the header and as `public/favicon.svg`.

## Navigation and links

- The header is sticky with its solid background and thin bottom line. Jump links land below it (`scroll-padding-top`).
- Work and About are sections on the home page (`#work`, `#about`, the coaching section). On the home page the header marks the section on screen. On a case study page, Work is current.
- `/about` redirects to `/#about`.
- Every email link uses the subject "Interested in working together" (`mailto` in `src/site.config.ts`).
- Links that open a new tab say so to screen readers.
- Spell BRIDGEGOOD in capitals everywhere. The word links to bridgegood.org in the apprenticeship heading.
- Footer: email (left out on home, where the closing shows it), LinkedIn, and a small uppercase credit line. A Resume link appears only when `public/resume.pdf` exists.
- The email always comes with a "Copy email" text button that reads "Copied" for two seconds.
- Tap targets: header links, footer links, and buttons are at least 44px tall.
- Keyboard focus: a 3px outline (`--focus-width`) in `--color-focus`, read where it is used, so it is blue on light and light blue (`#60A5FA`) on dark panels.

## Link preview

- `public/og-image.png` (1200 by 630): AL logo, "Aaron Luellen", "Product designer" on the warm off white page color, with a logo blue bar at the bottom. The source is `design/share/og-image.html`. Regenerate with `node scripts/make-og-image.cjs`.
- Open Graph and Twitter tags live in `BaseLayout.astro`. They need `site` set in `astro.config.mjs` to output absolute URLs.

## Motion

- Minimal. Color transitions at `--duration-fast`. Smooth scroll for in page links.
- Sections marked `data-reveal` fade in and slide up `--reveal-distance` (14px) over `--duration-reveal` as they enter the screen. The hero never animates. Anything on screen at load shows at once.
- The hero portrait lifts `--lift-headshot` (4px) on hover.
- Linked project cards lift `--card-lift` (3px) and their image zooms to `--card-image-zoom` (1.03) on hover, over `--duration-hover` (200ms). All three are zero with reduced motion.
- The KRON4 clip is a muted color loop that plays only while on screen, with a "Pause clip" control. Reduced motion shows the still image only and never loads the video.
- Everything shows fully with JavaScript off. With reduced motion on, the reveal distance, lift, and durations are all zero, so nothing moves or hides.
- Respect `prefers-reduced-motion`.
