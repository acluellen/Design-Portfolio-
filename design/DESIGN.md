# Visual rules

> DRAFT written by Claude because the original kit file was missing. Aaron to review and replace.

## Direction

Warm editorial. Calm, reading first. The page should feel like a well set essay on good paper.

- Warm paper background, near black ink.
- One accent: terracotta. Use it for links, focus rings, and small markers. Never for large fills.
- Large serif headlines. Clean sans for body and interface text.
- Generous whitespace. Let sections breathe.
- Thin rules separate things. No drop shadows, no shadowed cards, no gradients.
- Open fonts only, self hosted: Source Serif 4 for display, Inter for text.

## Layout

- Reading column: `--measure-reading` (about 68 characters).
- Wide column for figures and the home grid: `--measure-wide`.
- Side gutter on phones: `--space-4` (16px). No horizontal scroll at any width.

## Type

- Headings use `--font-display` at the `--step-*` sizes, tight leading.
- Body uses `--font-text` at `--step-0`, leading `--leading-body`.
- Labels and metadata use `--step--1`, uppercase tracking only for small labels.

## Color

- Text on paper must meet WCAG AA. Muted ink is for metadata only.
- Dark mode is a warm charcoal paper with light ink, same single accent, lightened for contrast.

## Motion

- Minimal. Color and underline transitions only, `--duration-fast`. Respect `prefers-reduced-motion`.
