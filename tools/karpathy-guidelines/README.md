# Karpathy Guidelines

A Claude Code plugin with four rules for writing and changing code, based on
Andrej Karpathy's notes on the mistakes AI coding assistants make (guessing
instead of asking, overbuilding, editing things nobody asked about).

- Upstream project: https://github.com/forrestchang/andrej-karpathy-skills (MIT licence)

## Status in this repository

Turned on in `.claude/settings.json`, like Lemo-Opuscar. Claude Code offers
it when you open the AToure folder and trust it.

It is one skill made of plain text instructions: no hooks, no scripts,
nothing that runs on its own. Claude reads it only when a task involves
writing, reviewing or changing code. It adds about 100 tokens to each
session. SkillSpector rated the parts Claude Code loads 0/100, safe
(`tools/skillspector/README.md`).

The commands it was added with (`/plugin ...` inside Claude Code does the
same):

```bash
claude plugin marketplace add forrestchang/andrej-karpathy-skills --scope project
claude plugin install andrej-karpathy-skills@karpathy-skills --scope project
```

## The four rules

| Rule | What Claude does |
|---|---|
| Think before coding | States its assumptions, asks when unclear, lays out options instead of picking one silently |
| Simplicity first | Writes only what was asked, with no extra features or "just in case" code |
| Surgical changes | Touches only the lines the task needs and leaves the rest of the file alone |
| Goal-driven execution | Sets a check for "done" (usually a test) and works until it passes |

## How it differs from Ponytail

Both push for less code. Ponytail switches itself on in every session and
cuts hard; these guidelines load only for coding tasks and lean towards
asking first. That is why this one is on and Ponytail is off.

## Using it

Nothing to type: it switches on by itself when you ask for code. To use it
on purpose, say "follow the Karpathy guidelines" or type
`/andrej-karpathy-skills:karpathy-guidelines`.
