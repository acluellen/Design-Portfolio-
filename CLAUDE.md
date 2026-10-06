# Project context

> DRAFT written by Claude because the original kit file was missing. Aaron to review and replace.

Aaron's UX portfolio: a coded site built with Astro, MDX, TypeScript, and plain CSS. Aaron is a research led product designer in Oakland.

## Sources of truth (read in this order)

1. `CLAUDE.md` (this file)
2. `design/DESIGN.md` for visual rules
3. `src/styles/tokens.css` for every visual value
4. `content/CONTENT.md` for case study structure, MDX components, writing and sourcing rules
5. `.claude/commands/` for the slash commands

## Working rules

- Values live in `tokens.css` only. Components and pages use `var(--token)`. If a value is missing, add a token and tell Aaron.
- Never invent case study facts, quotes, or numbers. Leave a `TODO` and ask.
- Visitor facing copy follows the writing rules in `content/CONTENT.md`.
- Log every design or structure decision in `design/CHANGELOG.md`.
- Work in small phases. Stop after each one for review.
- No Tailwind. No CSS frameworks. No component libraries.

## Commands

- `npm run dev` starts the local site.
- `npm run build` builds to `dist/`.
- `npm run check:copy` scans case study prose for writing rule breaks. `npm run build` runs it first and never fails on a match.
- `SHOW_DRAFTS=true npm run build` keeps draft case studies, for private review previews only.
