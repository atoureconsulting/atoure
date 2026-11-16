# AToure

Working files for AToure Management & Consulting, organised by what they are
for.

| Folder | What it holds |
|---|---|
| `brand/` | The brand kit: logos, fonts, colour palette, legacy logo sources and reference files. Start with `brand/README.md` |
| `offers/` | The written offers AToure takes to clients, each ready to adapt to new events and sectors |
| `clients/` | One folder per client: decks, sample reports and other material made for them |
| `tools/` | Software AToure runs for its own work, each with a guide on how to set it up and use it |

## Offers

- `offers/creator-visibility-offer/`: talent access, creator management on
  the ground, and the visibility report. Value proposition, how to adapt it
  by event type, the report and data specification, and the pitch playbook.

## Clients

- `clients/pfl-africa/`: Rwanda Season Finals trial proposal and sample
  report, October 2026.
- `clients/african-mma-league/`: trial proposal and sample report, October
  2026.

## Tools

- `tools/freellmapi/`: FreeLLMAPI, a free self-hosted AI gateway that pools
  the free tiers of about 87 AI providers behind one key. The upstream
  repository is linked in `source/` as a git submodule. Read the guide's
  rules before using it on AToure work.
- `tools/lemo-opuscar/`: Lemo-Opuscar, a Claude Code plugin that makes short
  films in code in 99 styles. It is turned on for this repository in
  `.claude/settings.json`, so Claude Code offers it when you open the repo.
  The upstream repository is linked in `source/`.

## Adding something new

- A new offer: a folder in `offers/` with its own `README.md`.
- A new client: a folder in `clients/` named after the client, with the deck
  and any reports inside.
- A new tool: a folder in `tools/` with a `README.md` covering setup and
  rules for use.
- Brand assets only ever go in `brand/`.
