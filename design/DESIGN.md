# Visual rules

Current direction from October 9, 2026: warm graph paper, deep navy ink, blue for links only, square corners. Picked by Aaron from the reference review (Micah Hoang, Zeel Shah, Angelina Cao, Narin Kim, Rachel Chen, Tee Hodgson). The October 7 direction is in git history (commit 1ff9146).

## Direction

Calm and exact. The work and the photos carry the color. Everything around them stays quiet.

- Warm paper page with faint graph lines (Zeel). Deep navy for headings, primary buttons, the logo, and the closing block (Micah). The AL blue is for links only.
- Display: Hanken Grotesk (`--font-display`) for the name, every heading, and large display text (subtitles, the About blurb, the contact block) on every page. Body text, buttons, and the menu: Atkinson Hyperlegible Next (`--font-text`), chosen for reading. Headings at 500 with slight negative tracking; page section titles ("Selected work", "A few things that shaped me") and subtitles at 300; the name at 800. Labels, metadata, the header, and the menu: Atkinson Hyperlegible Mono (`--font-mono`), uppercase.
- Square corners on everything: panels, cards, photos, video, buttons. Only round icon buttons (theme toggle, play) stay circles. No pill shapes, except the small outline tags under the Selected work tiles (`--radius-tag`, Aaron's call on Oct 10).
- Sentence case for every heading. Proper names keep their capitals (BRIDGEGOOD UX Design Apprenticeship, Purpose to Pixels).
- No drop shadows and no gradients. Thin rules separate content.
- Navy: the contact block that ends the home and About pages. Never pure black.

## Home page

Order: name, Selected work, About, contact block. Selected work and About open with a thin rule across the content column that draws left to right each time the section comes into view (Micah Hoang); with reduced motion it simply shows.

- Header (Micah Hoang): AL logo, "Product designer" and "Oakland, CA" in mono across the middle (hidden on phones), Work and About in mono, theme toggle.
- Name: "Aaron Luellen" at `--step-6`, the largest text on the site, close under the header, set like a wordmark (`--weight-wordmark` 800, `--tracking-wordmark`). The subtitle and "Selected work" use `--weight-light` (300). Then "Product designer focused on clarity." Then one mono row just above the Selected work line: LinkedIn, Resume, Email on the left (plain text until linked), "©2026" on the right. No photo and no buttons.
- Selected work: large image tiles (`WorkTile.astro`), the featured study wide on top (`--ratio-tile-wide`), two below (`--ratio-tile`). Above each image: "01 / ATHENASCRIBE" in small mono capitals (the name rolls to "View case study" on hover). Below it: two or three small rounded outline tags (`card.tags`, `--radius-tag`), then the one line description. Gray placeholders (`--color-placeholder`) until the project media is ready.
- About (`#about`): an image or video on the left (gray placeholder for now, 4:5 from 48rem, 4:3 on phones), on the right a mono "About" label, the blurb, and "Read more about me". The apprenticeship, the KRON4 clip, and the gym photos live on the About page.
- Contact block (`ContactBlock.astro`, also on the About page): full width navy band. "Get in touch" in mono, one line, then the email, LinkedIn, and Resume in large type (plain text until linked), then the copyright line.

## Case study pages

- Top: mono index row ("01 / AthenaScribe", "Draft" for drafts) over a thin rule, the headline as the h1, the summary, the prototype link, then the facts: "At a glance" (the card detail) full width first, then Role, Timeline, Team, Client, Program, Tools.
- End of each case study: Previous and Next, and "Back to top ↑" on the right (under Next, or in its place on the last study).
- Chapters open with a thin rule. No white panels, no rounded boxes, no round dots: cards are ruled columns, numbers are small square mono badges, tags are outlined mono, before and after uses a thin rule (before) and a heavier navy rule (after).

## Case study index

- From 72rem: a numbered list beside the body (`--size-case-index`), Overview then one line per `##` section, staying in view; the section on screen gets ink color and a short bar.
- Under 72rem: a thin sticky bar under the header with the current section ("03 / Research"); tap to open the full list. It closes after a jump.
- Names come from the case study's `index` frontmatter list, one per `##` heading in order; without it, the heading text.

## About page (`/about/`)

- "Hey, I’m Aaron." then four short paragraphs; "Let’s talk." links to the contact block. The portrait (4:5) sits on the left from 64rem, stays in view while the text scrolls, and stops at the end of the text block.
- One short resume list (Rachel Chen's pattern, `resume` in `src/data/about.ts`): one mono line per row, year, place, role. No year until Aaron gives one.
- "What people say" right after the list. Until real quotes arrive, review previews show a gray box in its place (`--size-quote-slot`); the live site leaves the section out.
- "A few things that shaped me": numbered tiles with short captions, in rows (`shaped`). Each tile grows by its shape, so a row ends at one height. Phones: wide tiles full width and first in their row, the rest two across. Placeholder tiles show in review previews only.
- The header's About link opens this page and is marked current there. The page ends with the same navy contact block as the home page.

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
- A small toggle in the header switches light and dark. The choice is saved in the browser and stays across pages (localStorage, with `window.name` as a fallback when storage is blocked).
- An inline script in the head sets the theme before first paint, so the wrong theme never flashes.

## Type

- Headlines: `--font-display` (Hanken Grotesk), `--weight-heading` (500), `--tracking-tight` (-0.02em), tight leading, balanced wrapping, navy (`--color-heading`).
- Body: `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata: `--font-mono` at `--step--1`, uppercase, `--tracking-label` (0.03em), muted.

## Shape

- Square corners: `--radius-section`, `--radius-media`, `--radius-small`, and `--radius-control` are all 0.
- `--radius-pill` is kept for round icon buttons only (theme toggle, video play). Never for labels or text buttons. `--radius-tag` rounds the Selected work tags only.
- Buttons are square, 44px tall (`--control-height`).
  - Primary: navy (`--color-brand`) with paper text. On the dark page and inside navy panels it flips to a light button with navy text.
  - Secondary: transparent fill, ink outline, ink text.

## Layout

- Wide column: `--measure-wide`. Reading column: `--measure-reading`.
- Side gutter: 16px on phones, 32px from 48rem, 64px from 80rem. No horizontal scroll at any width.
- Two column sections stack to one column on phones.
- Selected work: one featured card, then a two column grid (see below).

## Selected work

- One featured card on top (`featured: true`), then the others in two columns from 48rem, one column on phones. Order comes from each case study's `order`.
- Every card, top to bottom:
  1. Index row: mono "01 / Title" over a thin rule. On hover or keyboard focus the title rolls up to "View case study" in the link blue (`--duration-roll`, `--ease-roll`, zero with reduced motion).
  2. Poster cover on white with a thin border: the role label (mono, muted), the case study headline as the claim with one word in blue (`card.highlight`), and one real result (`card.outcome`), beside the project image slot. Featured 21:9, half width 4:3, stacked on phones with a 16:9 image slot.
  3. The description, muted.
- The whole card is one link, with a visible focus ring. Hover darkens the cover border; images zoom to `--card-image-zoom`.
- Project images are off for now (`showImages` in `WorkCard.astro`). Review previews label the empty slot "Project media"; production shows a plain panel.
- Unpublished cards have no link, no roll, and say "Case study coming soon". Cards marked `inProgress` show "In progress" at the end of the index row.

## Photos

- Stored in `src/assets/photos/` and optimized at build time by Astro: AVIF and WebP at quality 60 (AVIF 60 looks like JPEG 80), with a JPEG fallback. Only the logo loads at once; every other photo loads as it nears the screen.
- Pre-crop each source to the shape it is shown in (square headshot, 4:5 gym portraits, 16:9 workshop). A file cropped by `object-fit: cover` in the browser is zoomed in, so it looks softer than its width suggests.
- Crop rule in `Photo.astro`: pass `cover` (the box's width ÷ height) for any photo shown with `object-fit: cover`. When the file is wider than the box, Photo multiplies both the srcset widths and the `sizes` lengths by that zoom, and warns at build time to pre-crop the source.
- Closing section: inside its rounded panel, the group photo runs edge to edge at its own shape (2000 by 1150, Aaron's framing), with no overlay and nothing laid over it. The credit sits under the photo on the right. The headline, text, and button follow below in the always dark band. Nothing crops at any width, so `sizes` is simply 100vw.
- Work card `sizes` are set in `WorkCard.astro` for the featured and small layouts.
- Photo credits: a small muted "Photos: BRIDGEGOOD" line under the About photos and in the banner's lower right.
- Every photo has alt text approved by Aaron.
- Missing photos render a neutral placeholder so layout never breaks.
- Logo: `src/assets/brand/logo.svg` (Aaron's mark, recolored to the accent `#1D4ED8`) in the header and as `public/favicon.svg`.

## Navigation and links

- The header is sticky with its solid background and thin bottom line. Jump links land below it (`scroll-padding-top`).
- Work and About are sections on the home page (`#work`, `#about`). On the home page the header marks the section on screen. On a case study page, Work is current.
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

- `public/og-image.png` (1200 by 630): the navy AL logo, "Aaron Luellen" in Atkinson Hyperlegible Next, and "Product designer, research led, Oakland" on the graph paper, with a navy bar at the bottom. The source is `design/share/og-image.html`. Regenerate with `node scripts/make-og-image.cjs`.
- Open Graph and Twitter tags live in `BaseLayout.astro`. They need `site` set in `astro.config.mjs` to output absolute URLs.

## Motion

- Minimal. Color transitions at `--duration-fast`. Smooth scroll for in page links.
- Sections marked `data-reveal` fade in and slide up `--reveal-distance` (14px) over `--duration-reveal` as they enter the screen. The name never animates. Anything on screen at load shows at once.
- The About portrait does not move on hover; it is not a link.
- Linked project cards lift `--card-lift` (3px) and their image zooms to `--card-image-zoom` (1.03) on hover, over `--duration-hover` (200ms). All three are zero with reduced motion.
- The KRON4 clip is a muted color loop that plays only while on screen, with a "Pause clip" control. Reduced motion shows the still image only and never loads the video.
- The KRON4 clip opens on scroll (from Zeel Shah's site): it starts as a center crop (`--clip-closed`) and opens to full size while the footage settles from a slight zoom. Pure CSS scroll timeline, only in browsers that support it and never with reduced motion; elsewhere it shows fully open.
- Everything shows fully with JavaScript off. With reduced motion on, the reveal distance, lift, and durations are all zero, so nothing moves or hides.
- Respect `prefers-reduced-motion`.
