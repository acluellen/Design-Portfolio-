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
- Selected Work: one row that scrolls sideways (see below).

## Selected Work row

Follows Nielsen Norman Group guidance for horizontal scrolling: show that more content exists, give visible controls, show position, and never move on its own.

- Order comes from each case study's `order` value.
- Desktop (64rem and up): 2 full cards plus a third of the next. Tablet: about 1.4 cards. Phone: one card at 85% of the screen width, with the next card peeking in.
- The row starts on the heading's left edge and runs off the right edge of the screen. Space after the last card lets every card snap to the start line.
- Cards snap into place. No autoplay.
- Round outlined arrow buttons (44px), level with the heading on the right. Each click moves one card. They disable at either end.
- A "1 of 4" counter sits under the row. Screen readers hear the position after scrolling settles.
- The scrollbar is hidden. Swipe, trackpad, sideways mouse wheel, and Tab all still scroll the row.
- Reduced motion: arrows jump instead of gliding.

### Cards

- Padding `--space-5` (24px). Gap between cards: 24px from 48rem, 16px on phones.
- Image area 4:3 with 12px corners on the soft panel color. With no image, the panel shows the project name.
- Then: title (`--step-2` serif), 16px, tagline (two lines max), 8px, focus tags as small pills, then the link or "In progress" pinned to the bottom. There is 20px (`--gap-card-media`) between the image and the title.
- All cards are the same height.
- Published case study: the whole card is the link, with a visible focus ring. Hover lifts it 2px and darkens the border.
- In progress: no hover and no link. It still takes Tab focus, so keyboard users can reach every card.

## Photos

- Stored in `src/assets/photos/` and optimized at build time by Astro.
- Every photo has alt text approved by Aaron.
- Missing photos render a neutral placeholder so layout never breaks.

## Motion

- Minimal. Color transitions only, `--duration-fast`. Smooth scroll for in page links.
- Respect `prefers-reduced-motion`.
