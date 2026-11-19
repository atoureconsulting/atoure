# Watch (claude-video)

A Claude Code plugin that lets Claude review videos: a file or a link (Instagram,
YouTube, TikTok and others) becomes timestamped frames plus a transcript, or
Google's Gemini model watches the whole video and reports back.

- Upstream project: https://github.com/bradautomates/claude-video (MIT licence)

## Status in this repository

Turned on in `.claude/settings.json`, like the other plugins. The same file
sets two defaults for this repository:

- `WATCH_ENGINE=local`: frames and transcripts are made on the computer running
  Claude Code. Nothing is sent to Google unless you ask for Gemini on a run.
- `WATCH_DETAIL=efficient`: up to 50 frames, which suits short reels.

It adds about 130 tokens to every session and about 6,000 each time it is
used, plus the frames themselves (below).

## Before first use, on your computer

Install these once (the plugin does not include them):

- Mac: `brew install python ffmpeg yt-dlp`
- Windows: install Python 3.10 or later, then
  `winget install --id Gyan.FFmpeg --exact` and
  `winget install --id yt-dlp.yt-dlp --exact`

Then open a Claude Code session in the AToure folder (Claude desktop app, Code
tab, or a terminal) and ask: "Use the watch skill's setup.py to check
dependencies." Watch does not work in normal Claude chat or Cowork.

## The two modes

| | Local (default here) | Gemini |
|---|---|---|
| Who watches | Claude, from still frames plus a transcript | Google's Gemini watches the whole video, motion and sound included |
| Claude tokens | High: about 600 per vertical frame, 200 per landscape frame | Low: a few thousand for Gemini's written answer |
| Cost | Free, apart from your Claude usage | Free Google AI Studio key, with daily limits |
| Privacy | Nothing leaves your computer | The video is uploaded to Google and deleted afterwards; on the free tier Google may use it to improve its products |
| Misses | Quick moments between frames | Little; but you rely on Gemini's description |
| Use for | Client and creator material, visibility report checks | Your own public reels, other public videos, long videos |

To use Gemini for one run, ask for it ("watch this with Gemini"). It needs a
`GEMINI_API_KEY`, which goes in `~/.config/watch/.env` on your computer, never
in this repository.

## Cutting the token cost in local mode

- Ask for the transcript only when the words matter more than the picture.
- Limit frames: "use at most 20 frames" (about 12,000 tokens for a reel).
- Limit the range: "only look at 0:00 to 0:05" for a hook check.

## Instagram reels

- **A link**: works on your computer. Instagram often asks for a login; Watch
  can borrow your browser's login only when you ask for it on that run. Use
  it occasionally, not for bulk downloads.
- **Your own reels**: Windsor.ai returns a direct video link for each reel on
  @atoure.management; those links expire, so use them soon after pulling.
- **A file**: download the reel or use a screen recording and put it in the
  AToure folder. This also works in cloud sessions, where links are blocked.

## What AToure uses it for

- Reviewing your own reels: the first 3 seconds, pacing, captions, compared
  with Windsor's skip rate and watch time (the `atoure-social` post-mortem).
- The 48-hour check in the visibility report: did each creator tag, use the
  hashtag, say the key message, show the sponsor and include the call to
  action. Use local mode for this material.
- Studying other accounts' formats, for reference only.
