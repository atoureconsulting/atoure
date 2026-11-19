# Social media and website stack

How AToure plans, makes, approves, publishes and measures content for
Instagram (@atoure.management), LinkedIn and atoureconsulting.com, and which
tool does each job.

- Diagram: `stack-diagram.png` in this folder.
- Live page with the diagram, a card per channel and the setup steps:
  https://claude.ai/artifact/LWn3gHQzEPBhBjZc9CBmGZ (private until you share
  it). Its source is `stack-diagram.html`.

## What is installed

**Skills in this repository** (Claude Code loads them when you open the
AToure folder):

| Skill | Folder | What it does | Status |
|---|---|---|---|
| AToure social content | `.claude/skills/atoure-social/` | Video and reel ideas, hooks, video scripts, carousel plans, topic scoring, turning one idea into Instagram, LinkedIn and website pieces, pillars and posting cadence, post-mortems. Written for AToure | Ready |
| Design Engine | `.claude/skills/design-engine/` | Finished post images, carousels, covers and thumbnails in 190+ styles, exported at exact platform sizes. Uses AToure's brand from `brand.config.json`. Test export: `sample-post-design-engine.png` in this folder | Ready. On your computer, `scripts/setup-local` installs its export tool |
| BrightBean Studio | `.claude/skills/brightbean-studio/` | Lets Claude draft, schedule and cancel posts and read analytics in BrightBean Studio. The only publisher | Connected |
| Instagram skills | `.claude/skills/ig-*` | Hook scoring and script timing, caption checks, a humanizer, niche research, profile score, story sequences, replies, DMs and outreach, post reviews. Guide: `tools/instagram-skills/README.md` | Ready. Working files in `content/instagram/`; confirm the marked lines in `voice.md` |

**Plugins already on for this repository:** Impeccable (design checks for
pages and websites), Lemo-Opuscar (films made in code), Karpathy Guidelines,
Watch (reviews videos and reels, `tools/watch/`).

**Connected to your Claude account:**
- Higgsfield: images, video, thumbnails, trending audio, virality check.
- Canva: designs, templates and video.
- Windsor.ai: linked to @atoure.management for Instagram insights (read only).
- Google Drive and Gmail.
- The marketing skills (campaign plans, content, performance reports, SEO audit) and the brand-voice skills.

`CLAUDE.md` at the top of the repository tells Claude which tool to use for
which job.

## How it fits together

1. **Learn.** What performed: Windsor.ai (Instagram) and BrightBean
   analytics (all channels). What works for other accounts: `ig-viral`.
   Trends: Higgsfield trending audio.
2. **Plan.** `atoure-social` turns that into ideas, scores them, sets the
   pillar mix and builds the calendar. `ig-story` plans story sequences.
3. **Make.**
   - Reel scripts: `ig-reel`, with scored hooks and a timed beat sheet.
   - Images and carousels: Design Engine or Canva.
   - Films: Lemo-Opuscar.
   - Realistic video and photos: Higgsfield.
   - Website articles: `atoure-social` repurposing.
4. **Check.**
   - Wording: `ig-human` (removes AI tells), `ig-caption` for captions,
     brand-voice skills.
   - Design: Impeccable.
   - Video: Higgsfield virality check; Watch to review a finished cut.
   - The rules in `atoure-social` on figures and permissions.
5. **Approve and publish.** Drafts go into BrightBean. Clients can approve
   from a link, with no account needed. BrightBean posts to Instagram and
   LinkedIn at the scheduled time.
6. **Engage.** Comments and DMs arrive in BrightBean's inbox. `ig-reply`
   sorts them and drafts replies, leads first; `ig-dm` and `ig-comment`
   draft outreach to organisers, sponsors and creators. You send them.
7. **Measure.** BrightBean and Windsor.ai numbers, `ig-audit` to rank what
   worked, then an `atoure-social` post-mortem, which feeds step 1.

BrightBean is the only publisher, so nothing goes out twice.

## By channel

| Channel | Plan and write | Make | Publish and measure |
|---|---|---|---|
| Instagram | `atoure-social` (ideas, carousels, calendar), `ig-reel`, `ig-story`, checked with `ig-human` and `ig-caption` | Design Engine, Canva, Higgsfield, Lemo-Opuscar | BrightBean (scheduling, inbox, analytics); Windsor.ai (insights); `ig-reply`, `ig-dm` for engaging |
| LinkedIn (company page and founder) | `atoure-social` (posts, document carousels, video) | Design Engine for carousels and covers, Lemo-Opuscar for explainers | BrightBean (company page and personal profile) |
| Website | `atoure-social` repurposing (articles, case studies), marketing SEO audit | Impeccable for pages, Design Engine for hero images | Not published by these tools; see below |

## The website

These tools help with the website, but none of them hosts or publishes it:

- **Design and quality:** Impeccable critiques and audits pages
  (readability, mobile, speed, accessibility) and can check the live site by
  its address from your computer. Design Engine has a website workflow and a
  landing page template.
- **Content:** `atoure-social` turns each event or insight into an article
  or case study, then into LinkedIn and Instagram pieces that link back to it.
- **Search:** the marketing plugin's SEO audit skill.
- **Analytics:** Windsor.ai can read Google Analytics 4 and Search Console if
  you connect them there.
- **Building pages:** Claude can build pages from the site's code. The code
  for atoureconsulting.com is not in this repository, and this cloud
  environment cannot reach the site, so changes to the live site need its
  code or its host account.

## Setup only you can do

1. **BrightBean Studio:** done. If it ever disconnects, it is the custom
   connector at https://claude.ai/customize/connectors with the URL
   `https://studio.brightbean.xyz/api/v1/mcp`.
2. **Your computer:** run the setup script once (see the main `README.md`,
   "Set up your computer"). It installs what Design Engine, Watch,
   Lemo-Opuscar and SkillSpector need.
3. **Your voice:** confirm the lines marked **(confirm)** in
   `content/instagram/voice.md`, or give Claude three of your own reels or
   captions to update it.
4. **Windsor.ai:** disconnect the `instagram_public` account in Windsor so its
   free plan can read your insights again.
5. **Optional**
   - Connect Google Analytics 4 and Search Console in Windsor.ai.
   - Composio (the steps given earlier) is no longer needed for Instagram,
     because Windsor.ai and BrightBean cover it.
   - PostZen, only if you want comment-to-DM automations (see
     `tools/instagram-skills/README.md`).

## Not installed, and why

| Repository | Reason |
|---|---|
| Postmill (`postmill-ai/postmill-app`) | Does the same job as BrightBean but is heavier: running it yourself needs servers and your own app registered with each platform, and the price of the hosted version is not stated. Its image and video editor duplicates Canva and Higgsfield |
| Easel (`ZJU-REAL/Easel`) | Built for Chinese platforms and written in Chinese. Its useful methods are adapted into `atoure-social` (see that skill's `NOTICE.md`) |
| PostZen (from `postzen-dev/instagram-agent-skill`) and its `ig-plan`, `ig-carousel`, `ig-repurpose`, `ig-publish` skills | BrightBean already publishes and `atoure-social` already plans; a second publisher could post twice. The pack's other ten skills are installed |
| Awesome AI Thumbnail Prompts (`cliprise/...`) | No licence, so its text cannot be reused, and it is mostly an advert for a paid app. Thumbnail and cover guidance was written fresh in `atoure-social` |
| Design Engine's nano-banana image server | An add-on that always pulls its latest version and needs a Google Gemini key. Higgsfield already generates photos |

## Credits

- **Claude Design Engine** by Rahaman Bin Ujit
  (https://github.com/rahamanbinujit/claude-design-engine). Its licence
  requires this credit. The copy here leaves out the repository's showcase
  images.
- **BrightBean Studio agent skill** by Brightbean
  (https://github.com/brightbeanxyz/brightbean-studio-agent), MIT licence.
- Methods in `atoure-social` adapted from **Easel** by ZJU-REAL, Apache
  License 2.0.
