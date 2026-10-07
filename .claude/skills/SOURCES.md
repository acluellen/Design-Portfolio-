# Third party skills

Copied into this repo so they travel with the project. Update by copying a newer version over the folder.

| Skill | Source | Version | Commit |
|---|---|---|---|
| `impeccable` (plus the four `impeccable-*` agents in `.claude/agents/`) | github.com/pbakaus/impeccable, folder `.claude/` | 4.5.0, engine 0.1.11 | ffeda44 |
| `web-design-guidelines` | github.com/vercel-labs/agent-skills, folder `skills/web-design-guidelines` | 1.0.0 | 063bee9 |
| `i-have-adhd` | github.com/ayghri/i-have-adhd, folder `skills/i-have-adhd` (MIT) | none listed | 723af7d |

Not installed on purpose: i-have-adhd's always-on hook (it loads the rules into every session; the skill alone runs only when Aaron types `/i-have-adhd`). Impeccable's automatic hooks (`.claude/settings.json` in its repo). They run its design checker after every file edit and at the end of every turn. Add them only if Aaron asks.

Notes:
- Impeccable runs a helper program (`scripts/impeccable`) that downloads its engine from GitHub releases on first use into `~/.impeccable/`.
- Impeccable reads `DESIGN.md` and `PRODUCT.md` at the project root. This project keeps its design rules in `design/DESIGN.md`.
- web-design-guidelines fetches its rules from github.com/vercel-labs/web-interface-guidelines each time it runs.
