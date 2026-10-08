# Visual rules

Current direction from October 9, 2026: warm graph paper, deep navy ink, blue for links only, square corners. Picked by Aaron from the reference review (Micah Hoang, Zeel Shah, Angelina Cao, Narin Kim, Rachel Chen, Tee Hodgson). The October 7 direction is in git history (commit 1ff9146).

## Direction

Calm and exact. The work and the photos carry the color. Everything around them stays quiet.

- Warm paper page with faint graph lines (Zeel). Deep navy for headings, primary buttons, the logo, and the closing block (Micah). The AL blue is for links only.
- Headings: Geist (`--font-display`), semibold, tight tracking. Body, buttons, and the menu: Atkinson Hyperlegible Next (`--font-text`), for legibility. Labels and metadata: Atkinson Hyperlegible Mono (`--font-mono`), small caps style uppercase.
- Square corners on everything: panels, cards, photos, video, buttons. Only round icon buttons (theme toggle, play) stay circles. No pill shapes anywhere.
- Sentence case for every heading. Proper names keep their capitals (BRIDGEGOOD UX Design Apprenticeship, Purpose to Pixels).
- No drop shadows and no gradients. Thin rules separate content.
- Navy panels: the closing section (and coaching, until step 2 of the October 9 plan moves About onto the paper). Never pure black.

## Color

Never pure black (`#000000`) anywhere.

| Role | Light | Dark |
|---|---|---|
| Page | `#F6F3ED` with graph lines `rgb(32 31 29 / 0.06)` | `#12161C`, lines at 4% |
| Cards and light panels | `#FFFFFF`, border `#DCD7CD` | `#1A2029` |
| Media backdrop | `#EFEBE3` | `#161C25` |
| Headings | `#1B2A3A` navy | `#F1F3F7` |
| Body text | `#201F1D` | `#E9ECF1` |
| Secondary text and labels | `#524E49` | `#A3ABB7` |
| Links | `#1D4ED8` | `#8DB4FF` |
| Primary button | `#1B2A3A`, paper text | `#E9ECF1`, navy text |
| Logo | navy mark, paper lines | light mark, navy lines |
| Navy panels (both modes) | `#1B2A3A`, text `#F3F1EC`, secondary `#B9C1CE`, links `#9CBCFF` | `#1C2633` |

Contrast, all WCAG AA or better:
- Light: body 14.9:1, headings 13.2:1, secondary 7.5:1, links 6.1:1, button text 13.2:1.
- Dark: body 15.3:1, secondary 7.8:1, links 8.7:1.
- Navy panels: text 12.9:1, secondary 8.0:1, links 7.7:1.

Wrap navy panels in `.surface-always-dark`. It remaps ink, headings, muted ink, rules, links, labels, and buttons (paper buttons with navy text), and turns the graph lines off.

## Theme

- Follows the visitor's device setting by default.
- A small toggle in the header switches light and dark. The choice is saved in the browser.
- An inline script in the head sets the theme before first paint, so the wrong theme never flashes.

## Type

- Headlines: `--font-display` (Geist), `--weight-heading` (600), `--tracking-tight` (-0.035em), tight leading, balanced wrapping, navy (`--color-heading`).
- Body: `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata: `--font-mono` at `--step--1`, uppercase, `--tracking-label` (0.03em), muted.

## Shape

- Square corners: `--radius-section`, `--radius-media`, `--radius-small`, and `--radius-control` are all 0.
- `--radius-pill` is kept for round icon buttons only (theme toggle, video play). Never for labels, tags, or text buttons.
- Buttons are square, 44px tall (`--control-height`).
  - Primary: navy (`--color-brand`) with paper text. On the dark page and inside navy panels it flips to a light button with navy text.
  - Secondary: transparent fill, ink outline, ink text.

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
- Footer: email (left out on home, where the closing shows it), LinkedIn, and a small uppercase copyright line. LinkedIn (header and footer) appears only once `site.linkedin` is set, and Resume only when `public/resume.pdf` exists.
- Header: sticky, but it scrolls away on screens under 24rem wide and whenever it grows past a fifth of the screen (very large text), so it never covers the page.
- Dark panels use `--color-always-dark-surface`: the same as `--color-always-dark` on the light page, one step lighter (#201e1b) on the dark page.
- A finished case study without its page yet shows "Case study coming soon" on its card and does not move on hover.
- The email always comes with a "Copy email" text button that reads "Copied" for two seconds.
- Tap targets: header links, footer links, and buttons are at least 44px tall.
- Keyboard focus: a 3px outline (`--focus-width`) in `--color-focus`, read where it is used, so it is blue on light and light blue (`#60A5FA`) on dark panels.

## Link preview

- `public/og-image.png` (1200 by 630): AL logo, "Aaron Luellen", "Product designer" on the warm off white page color, with a logo blue bar at the bottom. The source is `design/share/og-image.html`. Regenerate with `node scripts/make-og-image.cjs`.
- Open Graph and Twitter tags live in `BaseLayout.astro`. They need `site` set in `astro.config.mjs` to output absolute URLs.

## Motion

- Minimal. Color transitions at `--duration-fast`. Smooth scroll for in page links.
- Sections marked `data-reveal` fade in and slide up `--reveal-distance` (14px) over `--duration-reveal` as they enter the screen. The hero never animates. Anything on screen at load shows at once.
- The hero portrait does not move on hover; it is not a link.
- Linked project cards lift `--card-lift` (3px) and their image zooms to `--card-image-zoom` (1.03) on hover, over `--duration-hover` (200ms). All three are zero with reduced motion.
- The KRON4 clip is a muted color loop that plays only while on screen, with a "Pause clip" control. Reduced motion shows the still image only and never loads the video.
- Everything shows fully with JavaScript off. With reduced motion on, the reveal distance, lift, and durations are all zero, so nothing moves or hides.
- Respect `prefers-reduced-motion`.
