# Content rules

> DRAFT written by Claude because the original kit file was missing. Aaron to review and replace.

## 1. Frontmatter

Each case study is one `.mdx` file in `src/content/case-studies/`. Files starting with `_` are templates and never render.

| Field      | Type                                  | Required | Notes |
|------------|---------------------------------------|----------|-------|
| `title`    | string                                | yes      | Short, plain. |
| `summary`  | string                                | yes      | One or two sentences for the case study hero. |
| `card`     | `{ label, description, detail }`      | no       | Home page card: small label on top, one description, one detail line at the bottom. |
| `featured` | boolean                               | no       | Defaults to false. The featured case study shows as the large card at the top of Selected work. |
| `role`     | string                                | yes      | Aaron's role, as on the project. |
| `team`     | list of `{ name, role }`              | yes      | Everyone credited. Aaron is not listed here. |
| `timeline` | string                                | yes      | Duration and dates in plain words. |
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

- `<Figure src alt caption />` for images. `alt` is required.
- `<Quote source>` for participant or stakeholder quotes. `source` is required. Participants are anonymous by role.
- `<Stat value label source />` for numbers. `source` is required. Use `source="untraceable"` when the number cannot be traced; it renders "Source not traceable."
- `<StatGroup>` lays out several `<Stat>` side by side.
- A missing `source` on `<Quote>` or `<Stat>` fails the build. `source="TODO"` builds but renders "Source needed" in the accent color, so it stands out in review.
- `<Callout>` for one key point per section at most.
- `<Contribution>` with `<Mine>` and `<Team>` inside, to split ownership honestly.

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
