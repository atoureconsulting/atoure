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
| Design Engine | `.claude/skills/design-engine/` | Finished post images, carousels, covers and thumbnails in 190+ styles, exported at exact platform sizes. Uses AToure's brand from `brand.config.json`. Test export: `sample-post-design-engine.png` in this folder | Ready. Run `npm install` once in its `scripts/` folder on your computer |
| BrightBean Studio | `.claude/skills/brightbean-studio/` | Lets Claude draft, schedule and cancel posts and read analytics in BrightBean Studio | Waiting for your BrightBean account (setup below) |

**Plugins already on for this repository:** Impeccable (design checks for
pages and websites), Lemo-Opuscar (films made in code), Karpathy Guidelines.

**Connected to your Claude account:**
- Higgsfield: images, video, thumbnails, trending audio, virality check.
- Canva: designs, templates and video.
- Windsor.ai: already linked to @atoure.management for Instagram insights and simple posting.
- Google Drive and Gmail.
- The marketing skills (campaign plans, content, performance reports, SEO audit) and the brand-voice skills.

`CLAUDE.md` at the top of the repository tells Claude which tool to use for
which job.

## How it fits together

1. **Learn.** What performed: Windsor.ai (Instagram now), BrightBean
   analytics (all channels, once connected). Trends: Higgsfield trending
   audio.
2. **Plan.** `atoure-social` turns that into ideas, scores them, sets the
   pillar mix and builds the calendar.
3. **Make.**
   - Images and carousels: Design Engine or Canva.
   - Films: Lemo-Opuscar.
   - Realistic video and photos: Higgsfield.
   - Website articles: `atoure-social` repurposing.
4. **Check.**
   - Wording: brand-voice skills.
   - Design: Impeccable.
   - Video: Higgsfield virality check.
   - The rules in `atoure-social` on figures and permissions.
5. **Approve and schedule.** Drafts go into BrightBean. Clients can approve
   from a link, with no account needed.
6. **Publish.** BrightBean posts to Instagram and LinkedIn at the scheduled
   time.
7. **Measure.** BrightBean and Windsor.ai, then an `atoure-social`
   post-mortem, which feeds step 1.

Use one tool to publish (BrightBean once it is connected; Windsor.ai until
then) so nothing goes out twice.

## By channel

| Channel | Plan and write | Make | Publish and measure |
|---|---|---|---|
| Instagram | `atoure-social` (reels, carousels, stories) | Design Engine, Canva, Higgsfield, Lemo-Opuscar | BrightBean (scheduling, inbox, analytics); Windsor.ai (insights now) |
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

1. **BrightBean Studio**
   - Create a free account at https://brightbean.xyz/studio.
   - Connect the AToure Instagram, the AToure LinkedIn company page and,
     if you want, the founder's LinkedIn profile.
   - Then, at https://claude.ai/customize/connectors, choose **Add custom
     connector**, name it `BrightBean`, use the URL
     `https://studio.brightbean.xyz/api/v1/mcp`, and sign in when asked.
   - Start a new Claude Code session.
   - BrightBean stores the logins to those accounts.
2. **Design Engine exports on your computer**
   - Install Node.js 18 or later.
   - Run `npm install` in `.claude/skills/design-engine/scripts`. It
     downloads its own copy of Chrome.
3. **Optional**
   - Connect Google Analytics 4 and Search Console in Windsor.ai.
   - Composio (the steps given earlier) is no longer needed for Instagram,
     because Windsor.ai and BrightBean cover it.

## Not installed, and why

| Repository | Reason |
|---|---|
| Postmill (`postmill-ai/postmill-app`) | Does the same job as BrightBean but is heavier: running it yourself needs servers and your own app registered with each platform, and the price of the hosted version is not stated. Its image and video editor duplicates Canva and Higgsfield |
| Easel (`ZJU-REAL/Easel`) | Built for Chinese platforms and written in Chinese. Its useful methods are adapted into `atoure-social` (see that skill's `NOTICE.md`) |
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
