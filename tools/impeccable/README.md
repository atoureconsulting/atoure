# Impeccable

A Claude Code plugin that gives Claude design judgement for anything built as
a web page: decks, sample reports, landing pages. It adds named commands
(`polish`, `bolder`, `quieter`, `critique`, `audit` and others), helper
agents, and a checker with 62 rules for the tells of generic AI design and
for basic quality problems (low contrast, tiny text, cramped spacing).

- Upstream project: https://github.com/pbakaus/impeccable (Apache 2.0 licence)
- Docs: https://impeccable.style/docs

## Status in this repository

Turned on in `.claude/settings.json`, like Lemo-Opuscar and the Karpathy
Guidelines. Claude Code offers it when you open the AToure folder and trust
it.

It was added as a Claude Code plugin, the route its README gives for Claude
Code:

```bash
claude plugin marketplace add pbakaus/impeccable --scope project --sparse .claude-plugin plugin
claude plugin install impeccable@impeccable --scope project
```

**Do not also run `npx impeccable install` in this folder.** That installer
copies a second set of the same files and hooks into the project, so every
check would run twice. Use `npx impeccable install` only for other projects
that do not have the plugin.

What it adds: one skill, five helper agents, and three hooks. The hooks
start a quick session check, check each page Claude edits, and do a deeper
design pass when Claude finishes a turn. About 350 tokens per session; a
command costs more when used.

The first time a hook runs, it downloads the plugin's checker program from
the project's GitHub releases and checks its fingerprint before using it.

## Getting started

1. `/impeccable document`: reads the existing decks and reports and writes
   `DESIGN.md`, the AToure visual system (gold and black palette, Cormorant
   Garamond and Jost). Point it at `brand/` so it uses the real brand kit.
   Every later command keeps work on-brand by reading it.
2. `/impeccable init`: asks who AToure's work is for and writes `PRODUCT.md`.
3. Then name a command and a target, for example:
   - `/impeccable critique the PFL Africa sample report`
   - `/impeccable polish the AML deck cover slide`
   - `/impeccable audit clients/pfl-africa/sample-report.html`

Narrow targets work best: one slide or one section, not a whole deck.

## The commands

| Group | Commands |
|---|---|
| Steer the look | `bolder`, `quieter`, `distill` (remove what is not needed), `colorize`, `typeset` (fonts and hierarchy), `layout` (spacing), `animate`, `delight`, `overdrive` |
| Review | `critique` (scored design review, worst problems first), `audit` (accessibility, speed, mobile; ranked P0 to P3) |
| Finish | `polish` (final pass), `harden` (errors, overflow, edge cases), `clarify` (rewrites unclear wording), `adapt` (phone and tablet sizes), `optimize`, `onboard` |
| Plan | `shape` (plan before building), `init`, `document`, `extract` (pull repeated pieces into reusable parts) |
| Live | `live` and `generate`: try design variants of an element in a running website |

Type `/impeccable` on its own for the list.

## Safety setting: keep it

Live mode has an "Apply" button for wording changes. If no Claude chat has
checked in for a minute, Impeccable's default is to start a separate Claude
or Codex session in the background with permission checks switched off. This
repository's `.claude/settings.json` sets `IMPECCABLE_LIVE_COPY_AGENT` to
`chat`, so Apply always goes through your own Claude session and its normal
permission prompts. Leave that setting in place.

## First check of AToure's own pages (16 November 2026)

The checker on both sample reports
(`clients/pfl-africa/sample-report.html`, `clients/african-mma-league/sample-report.html`)
found the same four problems in each:

- **Gold text is hard to read.** Small gold text (`#a8851a`) on white or the
  light background reaches 3.5:1 and 3.2:1; small text needs 4.5:1.
- **The "Est." labels are 10px**, under the 11px minimum for readable text.

The reason is the palette, not the reports. Contrast of the brand colours as
text:

| Colour | On white | On AToure Cream | Use as text |
|---|---|---|---|
| AToure Gold `#C8A951` | 2.3:1 | 2.1:1 | Decoration and rules only, not text |
| AToure Gold Dark `#A08830` | 3.5:1 | 3.2:1 | Large headings only (24px and up, or 19px bold) |
| AToure Text Mid `#5C5040` | 7.8:1 | 7.3:1 | Any text |
| AToure Black `#0D0C0A` | 19.6:1 | 18.1:1 | Any text |

Gold on AToure Black passes easily, so gold text belongs on dark
backgrounds. On light pages, keep small text in Text Mid or Black.
