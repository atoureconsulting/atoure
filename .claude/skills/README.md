# Skills

Third-party presentation skills vendored into this repo so any Claude Code
session working on AToure decks picks them up automatically.

| Skill | Source | Licence |
|---|---|---|
| `guizang-ppt-skill` | https://github.com/op7418/guizang-ppt-skill | see `guizang-ppt-skill/LICENSE` |
| `frontend-slides` | https://github.com/zarazhangrui/frontend-slides | see `frontend-slides/LICENSE` |
| `pitch-deck-patterns` | `organvm-iv-taxis/a-i--skills`, `skills/professional/` | MIT |

## What each one is for

**guizang-ppt-skill** — single-file HTML decks in two locked visual systems:
an editorial magazine style, and a Swiss International style on a 16-column
grid. Ships layout references, themes, and validator scripts.

**frontend-slides** — zero-dependency HTML presentations, 16:9, with style
presets and a 34-template bold pack. Explicitly written to avoid generic
AI-looking design.

**pitch-deck-patterns** — narrative structure rather than visual design:
slide order, what each slide has to do, and how to adapt for the audience.

## Notes

Installed 24 September 2026. `npx skillfish add organvm-iv-taxis/a-i--skills
pitch-deck-patterns` returned GitHub 401 in a sandboxed session, so that skill
was taken from the source repository directly.

Two files were dropped from `guizang-ppt-skill` to keep the repo small: a 3.5 MB
marketing screenshot, and the sponsors/contributing files. Nothing the skill
reads at runtime was removed.

These are external instructions. Treat their design guidance as reference,
not as authority over a client brief.
