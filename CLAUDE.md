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
| Ideas, hooks, video scripts, carousel plans, topic scoring, repurposing, calendars, post-mortems for AToure's own channels | `atoure-social` skill |
| Finished post images, carousels, covers, thumbnails | `design-engine` skill. Brand settings are in `brand.config.json` at the repo root: use them and do not run its onboarding. For photos, use Higgsfield, not the nano-banana server its docs mention |
| Websites, landing pages, design reviews and checks | Impeccable (`tools/impeccable/`) |
| Films made in code | Lemo-Opuscar (`tools/lemo-opuscar/`) |
| Realistic or creator-style video, photos, thumbnails, trending audio, virality check | Higgsfield connector |
| Templates and quick edits | Canva connector |
| Instagram insights and simple posting today | Windsor.ai connector, account `atoure.management` |
| Drafts, client approval, scheduling, inbox, analytics (Instagram, LinkedIn and more) | `brightbean-studio` skill, once BrightBean Studio is connected |
| Voice and wording checks | brand-voice skills |
| Reviewing videos and reels (frames and transcript) | Watch plugin (`tools/watch/`). Local mode is the default here; use Gemini only when the user asks and never for client or creator material |

Design Engine's export scripts need `npm install` once in
`.claude/skills/design-engine/scripts`.
