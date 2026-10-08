# Content rules

> DRAFT written by Claude because the original kit file was missing. Aaron to review and replace.

## 1. Frontmatter

Each case study is one `.mdx` file in `src/content/case-studies/`. Files starting with `_` are templates and never render.

| Field      | Type                                  | Required | Notes |
|------------|---------------------------------------|----------|-------|
| `title`    | string                                | yes      | Short, plain. |
| `summary`  | string                                | yes      | One or two sentences for the case study hero. |
| `headline` | string                                | no       | One line stating the project, shown large under the title. |
| `card`     | `{ label, description, detail }`      | no       | Home page card: small label on top, one description, one detail line at the bottom. |
| `featured` | boolean                               | no       | Defaults to false. The featured case study shows as the large card at the top of Selected work. |
| `role`     | string                                | yes      | Aaron's role, as on the project. |
| `team`     | list of `{ name, role }`              | yes      | Everyone credited. Aaron is not listed here. |
| `timeline` | string                                | yes      | Duration and dates in plain words. |
| `program`  | string                                | no       | The program the work was part of. |
| `tools`    | list of strings                       | no       | Defaults to empty. |
| `cover`    | `{ src, alt }`                        | no       | Image path under `public/` and required alt text. |
| `order`    | number                                | yes      | Lower numbers show first in Selected work. |
| `status`   | `"draft"` or `"published"`            | no       | Defaults to `"draft"`. Draft pages are hidden in production builds. Draft cards still show on the home page as "In progress" and do not link. |
| `tags`     | list of strings                       | no       | Defaults to empty. |

## 2. Case study structure

1. Context: the problem, the people, the constraints.
2. Research: what was done, at what scale, and what it found.
3. Decisions: the key moves and the evidence behind each.
4. Contribution: what Aaron owned and what the team owned.
5. Outcome: what happened, or plainly what has not happened yet.
6. Reflection: what Aaron would do next.

## 3. MDX components

Available in every case study with no imports.

- `<Figure src alt caption />` for images. `alt` is required. Import the image at the top of the file (`import shot from "../../assets/case-studies/<slug>/shot.webp"`, then `src={shot}`) so it is optimized. Add `narrow` for tall phone screens.
- `<Sources>` for a short list of sources under a finding, separated by " · ".
- `<Compare before beforeAlt after afterAlt beforeLabel afterLabel caption />` for a before and after pair of imported images, side by side.
- `<Screens screens={[{ src, alt, label }]} caption />` for a short flow of imported phone screens in order, each with a step label.
- Markdown tables work for comparisons and targets.
- `<Quote source>` for participant or stakeholder quotes. `source` is required. Participants are anonymous by role.
- `<Stat value label source />` for numbers. `source` is required. Use `source="untraceable"` when the number cannot be traced; it renders "Source not traceable."
- `<StatGroup>` lays out several `<Stat>` side by side.
- A missing `source` on `<Quote>` or `<Stat>` fails the build. `source="TODO"` builds but renders "Source needed" in the accent color, so it stands out in review.
- `<Callout>` for one key point per section at most.
- `<Contribution>` with `<Mine>` and `<Team>` inside, to split ownership honestly.
- `<Callout variant="strong">` for the one design target a section builds to: a dark bar.

Story structure blocks (built for AthenaScribe, usable anywhere). Text keeps the reading measure; these blocks use the full width.

- `<Section tone="panel">` wraps one part of the story on a rounded light panel. Plain `<Section>` adds the same space above without a panel. Alternate them down the page.
- `<CardGrid>` with `<Card eyebrow title verdict>` inside, for methods, research questions or refinements side by side. Start a card's text with `**Why**` to show a small label. `<CardGrid size="small">` fits four short cards in a row.
- `<Shift before={{ label, title }} after={{ label, title }} rows={[{ label, before, after, finding }]} />` for "the original idea" next to "what research led to". `finding` is the number of the `<Finding>` that changed that row.
- `<Finding n finding changes sources>What the team did</Finding>` for one finding, an arrow, and the team's response.
- `<ScreenPair label small smallAlt smallCaption large largeAlt largeCaption steps />` for a phone screen next to a laptop screen. `steps` shows a short flow under the phone.
- `<Steps steps={[...]} label />` for a numbered flow down a line.
- `<Split>` puts two blocks side by side, such as a `<Quote>` next to `<Fixes>`.
- `<Fixes label items={[{ severity, text }]} />` for planned changes with severity tags.
- `<Tag>` for a small square tag inside text.
- `heroMedia` in the frontmatter puts a video thumbnail beside the hero text: `photo` (a key from `src/data/photos.ts`), `href`, `label` (for screen readers), `caption`, `linkText`.
- `<p class="note">` for a small muted line, such as method details under a test.
- `<ActionLink label href variant />` for a button that links out (prototype, FigJam). `<VideoSlot src label caption />` for a phone screen recording from `public/video/`. Without `href` or `src` both show a dashed "Placeholder" in dev and review previews and nothing in production, so a missing link never reaches visitors.
- `client` in the frontmatter shows a Client fact in the hero, for client projects.
- `prototype` in the frontmatter adds "View live prototype" under the hero summary. `prototype: "TODO"` shows the placeholder.

## 4. Writing rules

- No em dashes or en dashes.
- No hyphenated words. Rephrase ("research led" stays two words).
- No "negation then reframe" lines such as "not X. It's Y" or "less X, more Y."
- Say "the team," never "my team."
- Plain language. Short sentences. Active voice.

## 5. Sourcing rules

- Every number, quote, and claim of impact needs a source Aaron can point to.
- Unknown facts stay as `TODO` until Aaron supplies them.
- Never name participants, individual users, or schools. Use roles.
- Credit work to whoever did it.
