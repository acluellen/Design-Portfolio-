---
description: Start a new case study as a draft from the template
argument-hint: <slug>
---

<!-- DRAFT written by Claude because the original kit file was missing. Aaron to review and replace. -->

Create `src/content/case-studies/$ARGUMENTS.mdx` from `src/content/case-studies/_template.mdx`.

1. Set `status: "draft"`.
2. Ask Aaron for any known facts, then place only those. Leave every other field and section as `TODO`.
3. Do not write prose beyond short placeholders. Do not invent facts, quotes, or numbers.
4. Wrap every number in `<Stat>` and every quote in `<Quote>` with a `source`. Use `source="TODO"` until Aaron gives one.
5. Run `npm run check:copy` and report any matches.
6. Log the new file in `design/CHANGELOG.md`.
