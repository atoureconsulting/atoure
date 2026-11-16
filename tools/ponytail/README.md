# Ponytail

A Claude Code plugin for writing code. It makes Claude act as a "lazy senior
developer": the smallest change that fully solves the task, no features
nobody asked for, the standard library before new packages, and a short
reply that ends with what was skipped and any risk.

- Upstream project: https://github.com/DietrichGebert/ponytail (MIT licence)

## Status in this repository

The **ponytail** marketplace is declared in `.claude/settings.json`, so
Claude Code knows where to find it. The plugin itself is **not turned on**.
Adding the marketplace runs nothing.

It is left off on purpose. Once installed, ponytail switches itself on at the
start of every session and tells Claude to build "the smallest version that
does the core job". This repository is mostly decks, reports, offers and
films, not software, and a Lemo-Opuscar film is a large piece of code built
on purpose. Ponytail would push both the wrong way.

## Turning it on

On your own computer only, so it does not switch on for everyone who opens
this repository:

```bash
claude plugin marketplace add DietrichGebert/ponytail
claude plugin install ponytail@ponytail
```

To keep it dormant until asked, also set `PONYTAIL_DEFAULT_MODE=off` in your
environment. It then does nothing until you type `/ponytail` in a session.

## Commands, once installed

| Command | What it does |
|---|---|
| `/ponytail lite`, `full` or `ultra` | Switch it on at a level. `ultra` also questions the request before building |
| `stop ponytail` or `normal mode` | Switch it off for the session |
| `/ponytail-review` | Plain English review of a change: correctness, safety, tests, speed, unneeded lines |
| `/ponytail-audit` | A ranked report on a whole codebase: bugs, security holes, what to delete. Changes nothing |
| `/ponytail-debt` | Lists every shortcut it left in the code, with when to upgrade it |
| `/ponytail-gain` | Shows the project's own benchmark figures |
| `/ponytail-help` | Quick reference |

## What it does on your computer

- Hooks run at session start, on every prompt and when sub-agents start.
  They add the ponytail rules and a short map of the files in the project.
- After each turn it writes a row (cost, turns, tokens) to
  `~/.config/ponytail/band/<project>.csv` and builds a local `board.html`.
- Nothing leaves your computer unless you set the optional webhook address in
  its settings.
