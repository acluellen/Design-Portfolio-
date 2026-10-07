# Design and structure changelog

Newest first. Every design or structure decision goes here.

## 2026-10-07 · Closing banner shows the whole group

Aaron felt the banner looked too zoomed in, like the Squarespace version. His reference showed the full photo with the headline over the sign.

- The banner was a short strip, about 470px tall at 1440, so a third of the photo was cut. It now has `min-height: var(--banner-min-height)`, which is the height of a 3:2 box at full width (the photo's own shape), capped at the screen height.
- The text starts at `--banner-text-top` (12% of the banner width, at least `--space-8`), so the headline lands on the Google sign.
- New tokens: `--banner-min-height`, `--banner-text-top`.
- A first try used `aspect-ratio` with a max height. That shrank the banner's width on wide screens and clipped the text on phones, so it was replaced with the min height.

| Screen | Banner | Photo visible |
|---|---|---|
| 375 by 812 | 375 by 542 | full height, middle 46% of the width |
| 768 by 1024 | 768 by 512 | all of it |
| 1280 by 800 | 1280 by 800 | full width, 94% of the height |
| 1440 by 900 | 1440 by 900 | full width, 94% of the height |
| 1920 by 1080 | 1920 by 1080 | full width, 84% of the height |

- Image sharpness is unchanged. On a 1440 screen at 2x it still wants 2880px and gets the 2000px original.

## 2026-10-07 · Full size photos, SVG logo, and sharper crops

### Replaced files
- `group.jpg`: full size original from Aaron, 2000px wide (was a 1147px screen capture). Chat uploads cap at 2000px, so this is the largest available here.
- `coaching-3.jpg`: Aaron's cropped workshop original, 1848px wide, 16:9, watermark removed by Aaron. Converted to black and white, with no further crop.
- `src/assets/brand/logo.svg`: Aaron's `al-logo.svg`. Replaces `logo.png` in the header and `public/favicon.svg`. Shown to Aaron beside the old PNG before the swap. The SVG draws its own corners, so the CSS radius on the logo is gone.
- Neither photo was HEIC. Both were JPG.

### Pre-cropped sources
- `headshot.jpg`: 1333 by 1333 square around the face, from the 2000 by 1333 original. Variants at 240, 480, 720.
- `coaching-1.jpg` and `coaching-2.jpg`: 1143 by 1429 (4:5) around the action, from the 2000 by 1429 originals. Variants at 400, 600, 800.
- `coaching-3.jpg`: variants at 640, 960, 1280. `group.jpg`: 800, 1280, 1920, 2000.
- Work cards: 400, 600, 800, 1000, 1200, 1448.

### Sizing rules
- `Photo.astro` takes `cover` (box width ÷ height). When `object-fit: cover` zooms into a wider file, it scales the srcset widths and the `sizes` lengths by the zoom and warns at build time. All current sources are pre-cropped, so every zoom is 1.
- Work card `sizes` come from `src/lib/carousel-sizes.ts`, which reads `--carousel-cards-*` and `--measure-wide` from `tokens.css` and repeats the carousel math at each breakpoint.
- Banner `sizes`: `(max-width: 48rem) 56rem, 100vw`. On phones the banner is portrait, so cover zooms the photo about 2.2x at 375px.
- Quality 80 for AVIF, WebP, and the JPEG fallback.

### Banner framing
- Photo anchored at the top (`object-position: 40% 0%`). The headline sits over the sign and the brick wall, clear of faces at 1440 and 375.
- Content padding is now `--space-8` on top and `--space-10 + --space-8` on the bottom, so the group shows below the button. The banner height is unchanged.

### Credits
- "Photos: BRIDGEGOOD" in small muted type, under the coaching photos (as the figure caption) and in the banner's lower right.

### Alt text
- Approved: `coaching-2` now names Aaron throwing the knee, and `group` names the BridgeGood cohort. All seven photos are now approved.

### Checked: file width the browser picks against the width needed (box × 2 × zoom)
| Photo | 1440 @2x needs / gets | 375 @2x needs / gets |
|---|---|---|
| headshot | 448 / 480 | 288 / 480 |
| work cards | 944 / 1000 | 538 / 600 |
| coaching 1, 2 | 529 / 600 | 686 / 800 |
| coaching 3 | 1082 / 1280 | 686 / 960 |
| group | 2880 / 2000 (short, file limit) | 1628 / 1920 |

Same results in light and dark. No sideways scroll.

## 2026-10-06 · Photos and logo in place

Aaron dropped the photos into the chat, which got around the Drive download block.

### Files
- `src/assets/photos/`: `headshot.jpg`, `work-athenascribe.webp`, `work-klima.webp`, `coaching-1.jpg`, `coaching-2.jpg`, `coaching-3.webp`, `group.webp`.
- `src/assets/brand/logo.png`: the AL mark, cropped from Aaron's screenshot (138px, padded to a square with the logo blue).
- `src/assets/case-studies/athenascribe/analyzing-document.webp`: the "Analyzing document" phone mockup, held for the AthenaScribe case study.

### Edits to photos
- Workshop (`coaching-3`): converted to black and white to match the two gym photos, and cropped 28px off the top to remove a mouse pointer from the screen capture.
- Group (`group`): cropped 28px off the top to remove a mouse pointer.
- The workshop and group photos are screen captures about 1150px wide. They look fine at their sizes, but the full width banner may look soft on very large screens. Swap in the originals later if that shows.

### Color
- The logo file reads exactly `#054FB9`. The token was `#054FB8`, sampled from compressed screenshots. `--color-accent` and `--color-brand` now use `#054FB9`. The contrast change is negligible, still 7.1:1.

### Framing
- Headshot: circle crop focused at 30% from the top, to keep the face centered.
- Coaching grid: two 4:5 portrait crops over one 16:9 wide photo. Fixed the wide photo spanning only one column. Astro wraps each image in `<picture>`, and that wrapper is the actual grid item.
- Banner: group photo focused at 40% from the top under the dark overlay.

### Weight
- Picture fallbacks are now JPEG instead of PNG. Build output dropped from 13 MB to 5.5 MB.
- What a visitor downloads: 165 KB of images on a 2x desktop screen and 85 KB on a 2x phone, all AVIF.

### Alt text
- Drafts updated for `coaching-2` (a knee into pads while the class watches) and `group` (BridgeGood shirts, steps outside Google San Francisco). Both are still waiting on Aaron's approval.

### Video
- If the YouTube thumbnail cannot load, it hides, so the dark panel and play button still read cleanly.

## 2026-10-06 · Selected Work as a sideways scrolling row

### Order and data
- Cards come from the case study collection, sorted by `order`: AthenaScribe 1, Klima 2, Craft Education 3, Mentorship App 4.
- Added draft stubs for `klima.mdx`, `craft-education.mdx`, and `mentorship-app.mdx`. They hold only Aaron's title, tagline, and focus. Everything else is TODO.
- New optional frontmatter fields: `tagline` and `focus`. Updated the schema, the template, and CONTENT.md section 1.
- `src/data/work.ts` removed. Card content now lives in each case study's frontmatter.
- A card links only when its case study is published. Review builds no longer link drafts from cards. The preview reaches the AthenaScribe draft through a footer link that exists only in the preview.

### Row (`WorkCarousel`)
- Replaces the two column grid. Details are in DESIGN.md under "Selected Work row".
- New tokens: `--gap-card-media` (20px), `--card-lift` (2px), `--carousel-cards-desktop` (2.33), `--carousel-cards-tablet` (1.4), `--carousel-card-phone` (85vw).
- Card width is measured from the start line to the right edge of the screen, so the peek is a true third on wide screens. A first version measured inside the right margin, which showed almost half a card.
- Space after the last card lets card 4 reach the start line. Without it, the counter skipped from 2 to 4 on desktop, and Previous got stuck at the end.
- On narrow phones the heading drops to `--step-3` so it stays on one line beside the arrows.

### Cards (`WorkCard`)
- Smaller and tighter, matching Aaron's spacing spec. Title is now `--step-2`. Tags are pills. The tagline is clamped to two lines.
- Dashed placeholder outlines are removed. With no image, the soft panel shows the project name.

### Other
- KRON4 video URL added. The player starts at 0:31, matching the `t=31s` in the link.
- Alt text approved for `coaching-1` (Aaron confirmed it is him) and `coaching-3` (a BridgeGood workshop).

### Checked
- At 375, 768, 1280 by 800, and 1440, in light and dark: the row starts on the heading's left edge, a peek shows (24px on phones, 40% of a card at 768, 33% on desktop), and the page never scrolls sideways.
- Arrows move one card per click, the counter reads 1 to 4, and both arrows disable at the ends.
- Tab reaches all four cards. Reduced motion jumps. A sideways mouse wheel scrolls and snaps.
- The tallest card is 638px at 1440 wide and 612px at 1280 by 800, so it fits on an 800px tall laptop screen.

### Photos still blocked
- The folder opens now, but the mockups (1.2 to 1.6 MB) cannot be downloaded into this session. Google's download host is blocked by the network policy, and the Drive tool returns files as text, too large for these images. The files needed are listed in the reply to Aaron.

## 2026-10-06 · Phase 4: Copy checker

- `scripts/check-copy.mjs` scans `.mdx` files in `src/content/case-studies/`, including drafts and the template. Other paths can be passed as arguments.
- Flags em dashes, en dashes, a spaced hyphen used as a dash, hyphenated words, "my team", "not X. It's Y" (also "isn't" and "wasn't"), and "less X, more Y".
- Skips frontmatter, fenced and inline code, URLs and link targets, MDX and HTML comments, import and export lines, and component tags with their props. Text between component tags, like a quote, is still checked.
- Prints file, line, column, rule, the match, and the full line. Report only, never rewrites.
- `npm run check:copy` runs it. `npm run build` runs it first. The script always exits 0, so a match never fails the build.
- Verified with a fixture: all 9 planted breaks were found, and nothing in the skipped regions was flagged.
- Only case study `.mdx` is scanned, per the spec. Copy in `.astro` pages, like the home page, is not checked yet.

## 2026-10-06 · New direction: sharper Squarespace look

Aaron dropped the warm editorial test. The site now follows a sharper version of the Squarespace home page. Page structure, case study components, and content rules are unchanged.

### Design settings
- `tokens.css` rewritten with Aaron's palette. Light: page `#FAFAFA`, gray band `#EDEDED`, ink `#0A0A0A`, muted `#5A5A5A`, rules `#DADADA`. Dark: page `#0B0B0C`, raised `#17171A`, ink `#F2F2F2`, muted `#A0A0A0`, rules `#2A2A2E`.
- Accent `#054FB8` (later corrected to `#054FB9` from the logo file), sampled from the AL logo in three Squarespace screenshots. All three agreed within one step, but they are compressed screenshots, so it needs a check against the logo file. Dark mode accent `#6E9CF2`. Every pair passes 4.5:1. The full list is in `DESIGN.md`.
- New tokens: `--color-band`, `--color-panel`, `--color-brand`, `--color-brand-ink`, the `--color-always-dark-*` set, `--color-overlay`, `--radius-media` (12px), `--radius-pill`, `--control-height` (44px), `--control-padding`, `--size-headshot`, `--size-logo`, `--header-height`, `--icon-size`.
- `.surface-always-dark` remaps the core color tokens, so the coaching band and closing banner stay black in both themes, and buttons and links inside flip on their own.
- `DESIGN.md` rewritten as final.

### Theme
- Follows the device setting. A header toggle switches light and dark and saves the choice in the browser.
- An inline script in `<head>` applies the saved choice before first paint. Verified: after toggling and reloading, the page is already dark when the HTML finishes parsing.

### New components
- `Button`: pill, 44px tall. Primary is solid ink, secondary is outlined. Without `href` it renders disabled ("No link yet").
- `ThemeToggle`, `Logo`, `Photo`, `WorkCard`, `VideoEmbed`.
- `CaseCard` removed. `WorkCard` replaces it.
- `Logo` uses `src/assets/brand/logo.svg` or `logo.png` when present. Until then it shows "AL" on the brand blue.
- `VideoEmbed` shows a YouTube thumbnail and loads the player only on click, using youtube-nocookie. Without a URL it shows "Video link coming soon".

### Photos
- The Drive folder could not be reached from this session. The link points to another Google account. Photo slots are ready instead.
- Drop `<slot>.jpg|png|webp|avif` into `src/assets/photos/` and Astro builds AVIF, WebP, and JPEG at several widths. Verified with a test file.
- Missing photos show a dashed placeholder labeled with the slot name.
- Draft alt text lives in `src/data/photos.ts`, marked `approved: false`.

### Header and footer
- Header: AL logo, then Work, About, LinkedIn, and the theme toggle. LinkedIn shows as muted text until a URL is set in `src/site.config.ts`.
- Footer: the email at display size, plus LinkedIn, on the gray band. No social icons.

### Home page
- Six sections in Aaron's order and exact words: hero, Most recently band with the KRON4 video, Selected Work, coaching band, closing banner, footer.
- "View My Work" scrolls to Selected Work with smooth scroll, which turns off under reduced motion.
- Selected Work has four cards from `src/data/work.ts`: AthenaScribe, Klima, Craft Education, Mentorship App. A card links only to a published case study. Review builds (`SHOW_DRAFTS=true`) also link drafts and mark them "(draft)".
- Checked: light and dark, 1440px and 390px, no horizontal scroll, no console errors.

### Other pages
- Case study, About, and styleguide pick up the new tokens. No layout changes, except Figure images and case study covers now use the 12px radius.
- The styleguide shows the new site components: buttons on both surfaces, theme toggle, work cards, and the video placeholder.
- Pages other than home get bottom padding before the footer. The home banner sits flush against the footer.

## 2026-10-05 · Phase 3: Pages review

The home, case study, and About pages were built early, so this phase tested them with three sample case studies (since removed).

- Verified: cards sort by `order`, not by title. Each case study gets the right previous and next links, and the first and last get only one.
- Verified: a `cover` shows beside the card text from 48rem up, and below the facts row in the case study hero.
- Fix: the pager is now two fixed columns from 48rem up. A lone Next link stays in the right column instead of stretching full width.
- Fix: on phones the pager stacks and both links align left.
- Fix: the hero facts row uses `auto-fill`, so each fact keeps the same column width when a case study has only two or three facts.

## 2026-10-04 · Phase 2: Components and styleguide

### MDX components (`src/components/mdx/`)
- `Figure`: image with a thin rule border and a muted caption. Missing `alt` fails the build.
- `Quote`: display serif quote between thin rules, with the source below in muted ink.
- `Stat`: large serif number, label, then source. A thin strong rule sits above it.
- `StatGroup`: added to lay out several stats in a row that wraps on phones. It was not in the spec, so tell Claude if it should go.
- `Callout`: a thick terracotta rule on top, a thin rule below, and a "Key point" label. The label can be changed with `label`.
- `Contribution` with `Mine` and `Team`: two columns that stack on phones. `Mine` gets a thick terracotta rule and the label "What I owned". `Team` gets a thick neutral rule and "What the team owned". Both labels can be changed with `label`.

### Sources
- `Quote` and `Stat` throw when `source` is missing or empty, so the build fails with a message naming the component. Verified: exit code 1.
- `source="untraceable"` renders "Source not traceable."
- `source="TODO"` builds and renders "Source needed" in terracotta, so drafts can carry placeholders and still stand out in review.

### Global mapping
- `src/components/mdx/index.ts` exports `mdxComponents`. The case study route passes it to `<Content components={...} />`, so case studies need no imports. Verified with a test file.

### Styleguide (`/styleguide`)
- Reads `tokens.css` as raw text and lists every token from the first `:root` block. New tokens show up with no edits to the page.
- Sections: color swatches, font families, type scale, weights and leading, base elements, space bars, layout and rule tokens, CaseCard with sample data, and every MDX component with each source state.
- Buttons switch between system, light, and dark themes.
- The page is marked `noindex` and is not linked from the site nav.
- `BaseLayout` and `PageLayout` gained a `noindex` prop for this.
- `public/styleguide/sample-figure.svg` is a placeholder image with raw hex values, since an image cannot read tokens.

## 2026-10-04 · Home page and site shell (Phase 3 pulled forward)

Aaron asked for a fuller browser preview, so the home page, case study page, and About page were built before Phase 2's MDX components and styleguide.

### Site components
- `Header`: name on the left, Work and About on the right, thin rule below. The current page gets an ink color and a terracotta underline.
- `Footer`: name, role, city, a contact placeholder, and the year, above a thin rule.
- `CaseCard`: a full width row between thin rules, with no box or shadow. It shows role and timeline as small labels, a large serif title, the summary, and a "Read the case study" link. Drafts show a terracotta "Draft" label. If a cover image exists, it sits beside the text from 48rem up.
- `PageLayout` wraps `BaseLayout` with the header, footer, and a skip link.

### Pages
- Home: label, headline placeholder, intro placeholder, then case study cards sorted by `order`.
- Case study (`/work/<slug>/`): the hero comes from frontmatter. Role, timeline, team, and tools sit in a facts row under a thin rule. The MDX body follows in the reading column, then previous and next links.
- About: placeholder text only.
- Case study URLs use `/work/` rather than `/case-studies/` because it is shorter and matches the Work nav item.

### Drafts in previews
- `SHOW_DRAFTS=true npm run build` keeps drafts in a production build. Use it only for private review previews. A plain `npm run build` still hides them.

### AthenaScribe draft
- `src/content/case-studies/athenascribe.mdx` holds only the facts Aaron gave: role, timeline, team, FigJam, and "Testing has not happened yet." Each one is marked `source TODO` in the frontmatter.
- Demo Day, ownership, and research scale numbers sit in an MDX comment until `<Stat>` and `<Contribution>` exist, so no unsourced number renders.

## 2026-10-04 · Phase 1: Scaffold

### Kit files drafted
- The kit files were missing from the repo, so Claude drafted `CLAUDE.md`, `design/DESIGN.md`, `src/styles/tokens.css`, `content/CONTENT.md`, and three commands in `.claude/commands/`. Each one is marked DRAFT. Aaron to review or replace with the originals.

### Stack
- Astro 7 with `@astrojs/mdx`, TypeScript (strict), plain CSS. No Tailwind.
- TypeScript pinned to 6 because `astro check` does not support 7 yet.

### Fonts
- Source Serif 4 (variable, with italic) for display and Inter (variable) for text, both self hosted through Fontsource. No third party font requests at runtime.

### Tokens
- Terracotta accent set to `#a84a22` so links pass WCAG AA (about 5:1) on the paper color. A lighter first pick, `#b4532a`, came in under 4.5:1.
- Dark mode uses warm charcoal paper and a lighter terracotta, `#e08a62`. It follows the system setting and can be forced with `data-theme` on `<html>`.
- `--gutter` is 16px on phones and 32px from 48rem up.

### Content collection
- `src/content.config.ts` defines `case-studies` with a zod schema matching `CONTENT.md` section 1.
- The glob pattern `**/[^_]*.mdx` skips files that start with `_`, so `_template.mdx` never renders.
- `getCaseStudies()` in `src/lib/case-studies.ts` hides `status: "draft"` in production builds, shows drafts in dev, and sorts by `order`.
- `status` defaults to `"draft"`, so nothing publishes by accident.
- Verified: a draft shows in dev and is hidden in the production build, and invalid frontmatter fails the build.

### Base styles
- `global.css` holds the reset, base element styles, and small layout helpers (`.container`, `.reading`, `.flow`, `.label`, `.visually-hidden`). All values come from tokens.
- `public/favicon.svg` uses the paper and accent hex values directly, because SVG favicons cannot read CSS variables.

