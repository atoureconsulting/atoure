# Instagram skills (from postzen-dev/instagram-agent-skill)

Ten Instagram skills, installed in `.claude/skills/ig-*`, with small offline
scripts that score hooks, time scripts and check captions. Taken from
https://github.com/postzen-dev/instagram-agent-skill (MIT licence, a copy in
each skill folder).

## What was installed, and where it sits in the loop

| Loop step | Skill | What it does for AToure |
|---|---|---|
| Learn | `ig-viral` | Finds reels beating their own accounts' usual numbers in AToure's space and writes a swipe file (`content/instagram/swipe.md`). It reads with you in your browser or from what you paste; it never scrapes or asks for a password |
| Learn | `ig-profile` | Scores the @atoure.management profile out of 100 and rewrites the weak parts |
| Plan | `ig-story` | Daily story sequences with a job for each sticker, leading to DMs |
| Make | `ig-reel` | Reel scripts: hooks scored from 26 formulas (`hookscore.py`) and a timed beat sheet (`beats.py`) |
| Check | `ig-human` | Strips AI tells (stock phrases, em dashes, invisible characters) and scores the draft before you see it |
| Check | `ig-caption` | Writes and checks captions: the first 125 characters shown before "more", one ask, three hashtags |
| Engage | `ig-reply` | Sorts comments on your posts (leads, questions, support, noise) and drafts replies, most important first |
| Engage | `ig-dm`, `ig-comment` | DMs and comments for organisers, sponsors and creators: first messages, follow-ups, pitches |
| Measure | `ig-audit` | Ranks your posts by how far they beat your average and by shares per reach |

## What was left out, and why

- `ig-plan`, `ig-carousel`, `ig-repurpose`: the `atoure-social` skill does
  these for AToure.
- `ig-publish` and the PostZen connection: BrightBean is the only publisher,
  so nothing can go out twice. Comment-to-DM automations ("comment REPORT
  and get the sample report") need PostZen; add it later only if you want
  that, knowing it needs its own access to the Instagram account.

## How it is set up

- The skills' working files live in `content/instagram/` (shared by cloud and
  local sessions), not in a hidden folder on one computer. `CLAUDE.md` says so.
- `content/instagram/voice.md` is filled in from the Creator Visibility Offer.
  Confirm the lines marked **(confirm)**, or give Claude three of your own
  reels or captions to update it.
- Nothing is published, scheduled or sent by these skills. They draft; you
  approve in BrightBean.

## Try it

- "Score these hooks: ..." (runs `hookscore.py`)
- "Time this reel script for 30 seconds" (runs `beats.py`)
- "Humanize this caption" (runs `ig-human`)
- "Score my Instagram profile" (paste the bio and highlights)
- "Find what's working for accounts like ours" (with your browser open)
