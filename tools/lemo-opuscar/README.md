# Lemo-Opuscar

A Claude Code plugin that makes short films entirely in code. You pick one of
99 visual styles (watercolour, sports telestrator, news package, data
storytelling, art deco and so on), describe the film in a sentence, and Claude
writes the story, draws every frame, composes the music, records narration and
mixes it into a finished MP4. No stock footage and no AI video generator.

- Upstream project: https://github.com/lemomo-ai/lemo-opuscar
- Gallery of every style, with a demo film each: https://lemomo-ai.github.io/lemo-opuscar/

## What is in this folder

| Path | What it is |
|---|---|
| `README.md` | This guide: setup, how to ask for a film, and the rules for AToure work |
| `source/` | The Lemo-Opuscar repository, linked as a shallow git submodule and pinned to a tested commit. A reference copy: the plugin does not need it |

To fetch `source/` after cloning AToure (about 155 MB):

```bash
git submodule update --init tools/lemo-opuscar/source
```

## How it is installed in this repository

The plugin is declared in `.claude/settings.json` at the top of the AToure
repository. When you open Claude Code anywhere inside the repository and trust
the folder, it offers to add the **lemolab** marketplace and turn on
**lemo-opuscar**. Say yes once per computer.

These were the commands, run with `--scope project` so the setting lives in
the repository rather than on one computer:

```bash
claude plugin marketplace add lemomo-ai/lemo-opuscar --scope project --sparse .claude-plugin plugin
claude plugin install lemo-opuscar@lemolab --scope project
```

To use it outside this repository as well, run the two upstream commands
without `--scope project`:

```bash
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

The plugin is one skill: no hooks, no background servers. It adds about 400
tokens to each Claude Code session started in this repository.

## Before the first film

Install these yourself (the plugin reports what is missing but never installs
system software):

- **Node.js 20 or later**
- **ffmpeg 7 or later**
- **Python 3.11 or later**, or `uv` (3.11 to 3.13 if films need narration)

On first use the plugin downloads its guides and tools into `~/lemo-opuscar`
and installs its own packages there (a few minutes). Narration adds about
0.7 GB more the first time it is needed.

In Claude Code, set `/effort high` before asking for a film. It is built for
Claude: do not run it through the FreeLLMAPI profile in `tools/freellmapi/`,
because free models will not reproduce the styles.

A film takes about 30 to 60 minutes and a lot of tokens, so it uses a real
share of your Claude plan's limits.

## Asking for a film

Type `/lemo-opuscar:lemo-opuscar` on its own to be walked through it, or say
it in one sentence:

> Make a 40-second film in the Data Storytelling style about how creator
> posts reached 2 million people at the Rwanda Season Finals. Warm male
> narrator. Vertical 1080×1920 for Instagram.

It asks one round of questions up front (facts it cannot decide, whether you
have your own voice, music, photos or logos, and whether you want a
storyboard first), then delivers.

**Where to start it.** The film's project folder is created in whichever
folder Claude Code was started from, and holds all the source and render
files. Start Claude Code in a working folder outside this repository (for
example `~/AToure Films`). When a film is final, copy only these into
`clients/<client>/films/<film name>/`:

- `<name>.mp4` and `poster.jpg`
- `<name>.srt` (subtitles), if there is narration
- `TREATMENT.md` (the plan)
- `CREDITS` (every third-party asset and its licence)

## Styles that fit AToure

| Need | Style | Folder |
|---|---|---|
| Pitch film: the reach figures as a moving chart | Data Storytelling | `dataviz` |
| Where the audience is: Africa and the diaspora on a map | 3D Map Explainer | `map-explainer` |
| Fight breakdown drawn over real fight footage | Sports Telestrator | `telestrator` |
| Fight night countdown for social | Live Countdown Split-screen | `countdown` |
| Event recap as a news item | Broadcast News Package or Caption News | `news-package`, `caption-news` |
| How the Creator Visibility Offer works | Whiteboard Explainer or Sketchnote | `whiteboard`, `sketchnote` |
| Premium, on-brand titles | Art Deco or Swiss Motion Graphics | `art-deco`, `swiss-motion` |

**An AToure house style.** Ask it to change Art Deco or Swiss Motion Graphics
into a style of your own, and give it `brand/03-colours/colours.txt`, the
fonts in `brand/02-fonts/` (Cormorant Garamond and Jost) and the logos in
`brand/01-logos/atoure/`. A kept style lives in `~/lemo-my-styles/` and can be
named in every later film. Back that folder up: it is on your computer only.

## Rules for AToure work

- **The films are yours.** The licence says films you make with it are yours,
  client and commercial films included, with no credit needed.
- **Check `CREDITS` before sending.** Music samples, fonts and other
  third-party assets keep their own licences. If any needs attribution, put it
  in the post caption or the email.
- **Only material you have the right to use.** Client logos, fight footage
  and creator clips go in only with the rights holder's permission (the
  client, the promotion, the creator's agreement). Without it, the plugin
  draws fictional stand-ins.
- **Real figures only, or clearly labelled.** The sample reports' figures are
  fictional. A film made from them must say so on screen, as the sample
  reports do.
- **No Claude mascot or other trademarks.** The library's orange character
  (Clawd) belongs to Anthropic and is not licensed. Keep it, and any other
  brand's marks, out of client films.
- **Do not share the style guides.** The library's written guides and style
  prompts are licensed for making your own films only. Do not sell them or
  pass them on beyond the people working on a film.
- **Narration privacy.** English narration runs on your computer. Chinese
  narration is sent to Microsoft's online voice service.
