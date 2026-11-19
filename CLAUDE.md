# AToure: notes for Claude

Working files for AToure Management & Consulting: brand kit, offers, client
material and the tools AToure uses. Start with `README.md`.

## Rules

- Never publish, schedule, send a message or reply to a comment without the
  user's explicit yes to that exact content.
- Client names, logos, figures and pitch history are confidential unless the
  user confirms the client agreed. The sample reports' figures are fictional.
- Scan any new plugin or skill with SkillSpector before adding it, and record
  the result in `tools/skillspector/README.md`.

## Social media and website: which tool does what

Full guide and diagram: `tools/social-media/README.md`.

| Job | Use |
|---|---|
| Ideas, video plans, longer videos (sit-down series, LinkedIn), carousel plans, topic scoring, repurposing, calendars, post-mortems for AToure's own channels | `atoure-social` skill (leads all planning) |
| Instagram reel scripts with scored hooks and timed beats | `ig-reel` |
| Checking any caption, script, comment, reply or DM before it is shown | `ig-human` (removes AI tells), then `ig-caption` for captions |
| What is working for other accounts in AToure's space; profile score | `ig-viral`, `ig-profile` |
| Story sequences | `ig-story` |
| Engaging: replies to comments, DMs, outreach to organisers, sponsors and creators, comments on their posts | `ig-reply`, `ig-dm`, `ig-comment`. Drafts only: the user sends them (BrightBean inbox or the app) |
| Reviewing which posts worked | `ig-audit` with Windsor.ai or BrightBean numbers, then an `atoure-social` post-mortem |
| Finished post images, carousels, covers, thumbnails | `design-engine` skill. Brand settings are in `brand.config.json` at the repo root: use them and do not run its onboarding. For photos, use Higgsfield, not the nano-banana server its docs mention |
| Websites, landing pages, design reviews and checks | Impeccable (`tools/impeccable/`) |
| Films made in code | Lemo-Opuscar (`tools/lemo-opuscar/`) |
| Realistic or creator-style video, photos, thumbnails, trending audio, virality check | Higgsfield connector |
| Templates and quick edits | Canva connector |
| Instagram insights (read only) | Windsor.ai connector, account `atoure.management` |
| Drafts, client approval, scheduling, inbox, analytics (Instagram, LinkedIn and more) | `brightbean-studio` skill with the BrightBean connector. The only publisher |
| Voice and wording checks | brand-voice skills |
| Reviewing videos and reels (frames and transcript) | Watch plugin (`tools/watch/`). Local mode is the default here; use Gemini only when the user asks and never for client or creator material |

The Instagram skills (`ig-*`) keep their files in `content/instagram/`
(`voice.md`, `swipe.md`, `log.md`), not in `~/.instagram-agent/`: read and
write them there. PostZen is not connected: those skills never publish,
schedule or send. BrightBean is the only publisher. Comment-to-DM automations
are not available until the user decides to add PostZen.

Design Engine's export scripts need `npm install` once in
`.claude/skills/design-engine/scripts`.
