---
name: atoure-social
description: >
  Plan and write AToure Management & Consulting's own social media and website content:
  video and reel ideas, hooks, short and long video scripts, carousel plans, scoring
  whether a topic is worth making, turning one idea into Instagram, LinkedIn and website
  pieces, content pillars and posting cadence, and reviewing why a post worked or flopped.
  Use for "video ideas", "reel ideas", "what should we post", "write hooks", "script this",
  "plan a carousel", "is this worth posting", "turn this into a LinkedIn post", "content
  calendar", "why did this post do well/badly" when the content is for AToure itself
  (Instagram @atoure.management, the AToure LinkedIn page, atoureconsulting.com).
  Not for client deliverables such as visibility reports or pitch decks.
---

# AToure social content

Plans and writes content for AToure's own channels. Each task has a method
file in `references/`; read only the one the task needs.

| Task | Read |
|---|---|
| Video or reel ideas, scripts, covers and thumbnails | `references/video.md` |
| Opening lines (hooks) for any post or video | `references/hooks.md` |
| Is this topic worth making? Rank a list of ideas | `references/topic-scoring.md` |
| Carousel for Instagram or LinkedIn | `references/carousels.md` |
| One idea into Instagram, LinkedIn and website pieces | `references/repurposing.md` |
| Content pillars, mix and how often to post | `references/pillars-and-cadence.md` |
| Why a post worked or flopped; patterns across posts | `references/post-mortem.md` |

## Who AToure is (use this, don't ask for it)

- **What it sells:** the Creator Visibility Offer. AToure brings creators and
  streamers to live events, runs them on the ground, and turns everything they
  post into one visibility report a client can show sponsors, investors and
  its board. Full detail: `offers/creator-visibility-offer/README.md`.
- **The one line:** creators produce visibility; AToure makes it provable.
- **What it is:** a management and consulting company. Never call it an
  agency.
- **Track record to talk about** (from the offer's "Why AToure" section):
  IShowSpeed's Ivory Coast tour (55.8 million Instagram views), IShowSpeed in
  Morocco (16 million live stream views), the Ashton Hall Africa Tour (confirm
  which figure to quote before using one: see `pitch-playbook.md`), operator
  experience in Ghana, Cameroon, Nigeria, Benin, Rwanda, Côte d'Ivoire and
  Morocco, and creator, federation and government relationships.
- **Not track record:** PFL Africa and the African MMA League were pitches,
  not clients. Never present them as work AToure did.
- **Who the content is for:** event organisers and leagues, sponsors and
  brands, investors, and creators who want to work with AToure. Audiences in
  Africa and the diaspora.
- **Channels:** Instagram (@atoure.management), LinkedIn (company page and the
  founder's own profile), the website atoureconsulting.com.
- **Look:** gold, warm black and cream; Cormorant Garamond headlines, Jost
  body. Settings in `brand.config.json`, kit in `brand/`.

## Rules for every piece

1. **Real figures only.** Never present the sample reports' numbers
   (`clients/*/sample-report.*`) as results. They are fictional. A post that
   shows them must say "sample" on screen.
2. **Client names and data need permission.** Do not post a client's name,
   logo, deal details, pitch history or figures without the client's
   agreement. Lessons in `pitch-playbook.md` are internal.
3. **Creators and footage need permission.** Only use a creator's face, clips
   or numbers with their agreement or as their contract allows.
4. **Sponsor value is always "estimated"**, never stated as fact.
5. **Plain, confident, specific.** Short sentences, numbers over adjectives,
   no hype words ("game-changing", "revolutionary"), no emoji walls. One call
   to action per piece.
6. **Check the voice** with the brand-voice skills when guidelines exist, and
   designs with Impeccable (`tools/impeccable/`).

## Where the work goes next

| Step | Tool |
|---|---|
| What already performed on Instagram | Windsor.ai, account `atoure.management` (read insights) |
| Trending audio, video analysis, virality check | Higgsfield (`tiktok_music_trending`, `video_analysis_create`, `virality_predictor`) |
| Explainer or data films made in code | Lemo-Opuscar (`tools/lemo-opuscar/`) |
| Realistic or creator-style video, photos, thumbnails | Higgsfield |
| Posts, carousels, covers as images | Design Engine skill with `brand.config.json`, or Canva |
| Drafts, client approval, scheduling, inbox, analytics | BrightBean Studio skill (`.claude/skills/brightbean-studio`) once connected |
| Website pages and checks | Impeccable |

Always show the user a draft before anything is published, and never publish,
reply or schedule without their yes.

## Source

Methods adapted from the Easel project by ZJU-REAL (Apache License 2.0),
translated and rewritten for AToure. See `NOTICE.md`.
