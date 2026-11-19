# AToure

Working files for AToure Management & Consulting, organised by what they are
for.

| Folder | What it holds |
|---|---|
| `brand/` | The brand kit: logos, fonts, colour palette, legacy logo sources and reference files. Start with `brand/README.md` |
| `offers/` | The written offers AToure takes to clients, each ready to adapt to new events and sectors |
| `clients/` | One folder per client: decks, sample reports and other material made for them |
| `tools/` | Software AToure runs for its own work, each with a guide on how to set it up and use it |
| `content/` | AToure's own social media and website content: series plans, scripts, shot lists |

## Offers

- `offers/creator-visibility-offer/`: talent access, creator management on
  the ground, and the visibility report. Value proposition, how to adapt it
  by event type, the report and data specification, and the pitch playbook.

## Clients

- `clients/pfl-africa/`: Rwanda Season Finals trial proposal and sample
  report, October 2026.
- `clients/african-mma-league/`: trial proposal and sample report, October
  2026.

## Content

- `content/sit-down-series/`: a talking-to-camera video series on African
  market access, cutting between you and matching footage. Series plan,
  filming guide and the full script for episode 1.

## Tools

- `tools/social-media/`: the social media and website stack. How the skills
  and connectors below work together for Instagram, LinkedIn and the
  website, with a diagram. Start here for social media.
- `tools/freellmapi/`: FreeLLMAPI, a free self-hosted AI gateway that pools
  the free tiers of about 87 AI providers behind one key. The upstream
  repository is linked in `source/` as a git submodule. Read the guide's
  rules before using it on AToure work.
- `tools/lemo-opuscar/`: Lemo-Opuscar, a Claude Code plugin that makes short
  films in code in 99 styles. It is turned on for this repository in
  `.claude/settings.json`, so Claude Code offers it when you open the repo.
  The upstream repository is linked in `source/`.
- `tools/ponytail/`: Ponytail, a Claude Code plugin that keeps code changes
  as small as possible. Its marketplace is declared in
  `.claude/settings.json` but the plugin is not turned on. The guide says
  why and how to switch it on.
- `tools/karpathy-guidelines/`: Karpathy Guidelines, a Claude Code plugin
  with four rules for writing code (ask before guessing, build only what was
  asked, change only what is needed, check the result). Turned on in
  `.claude/settings.json`.
- `tools/impeccable/`: Impeccable, a Claude Code plugin that gives Claude
  design judgement for decks, reports and web pages, with review commands
  and a design checker. Turned on in `.claude/settings.json`. The guide
  includes the first check of the sample reports and which brand colours
  are readable as text.
- `tools/watch/`: Watch, a Claude Code plugin that lets Claude review videos
  and reels from a file or a link. Turned on in `.claude/settings.json`, set to
  local mode so nothing is sent to Google by default.
- `tools/skillspector/`: SkillSpector, NVIDIA's security scanner for agent
  skills and plugins, with the scan results for the plugins above.

## Skills and settings for Claude

- `CLAUDE.md`: which tool Claude uses for which job, and the house rules.
- `.claude/skills/atoure-social/`: AToure's own content skill (video ideas,
  hooks, scripts, carousels, calendars, post-mortems).
- `.claude/skills/design-engine/`: Claude Design Engine by Rahaman Bin Ujit,
  for post images and carousels. Brand settings in `brand.config.json`.
- `.claude/skills/brightbean-studio/`: lets Claude schedule and measure posts
  in BrightBean Studio once it is connected.

## Adding something new

- A new offer: a folder in `offers/` with its own `README.md`.
- A new client: a folder in `clients/` named after the client, with the deck
  and any reports inside.
- A new tool: a folder in `tools/` with a `README.md` covering setup and
  rules for use.
- A new Claude Code plugin or skill: scan it with SkillSpector first and add
  the result to `tools/skillspector/README.md`.
- Brand assets only ever go in `brand/`.
