# Permissions

What an AI employee may do alone, what needs Baba first, and what it never
does. When something is not listed, treat it as "ask first".

## Do alone

- Read anything in `atoure`, `website`, `CRM` and `atoure-talent-database`.
- Research on the public web.
- Write and change files on a branch, in any of those four repos.
- Open a pull request for Baba to review.
- Read and search Gmail and Google Drive for context.
- Create and update Gmail drafts for Baba to send.
- Read analytics through Windsor (Instagram, ads).
- Add a lesson to `context/lessons.md`.

## Ask Baba first

- Start a ticket's work before its plan is approved (routines excepted).
- Change the rules: `CLAUDE.md`, `PERMISSIONS.md`, `REVIEW.md`.
- Use a figure that is not in `context/proof.md` or supplied for the job.
- Name a price, a fee, or a creator's availability.
- Spend credits: Higgsfield, Canva, or any paid generation.
- Create, copy or change a file in Google Drive.
- Create or change a scheduled task.
- Anything not covered on this page.

## Never

- Send, reply to or forward an email, or delete one.
- Contact a client, prospect, creator, minister or supplier by any channel.
- Post, comment or publish on Instagram, TikTok or any social account, or
  change an ad campaign.
- Share a Drive file or change who can see it. Delete or move Drive files.
- Merge a pull request, or push to `main` in any repo. `main` in `website`
  is the live site.
- Write to the live Google Sheets behind the CRM and the talent roster.
- Publish anything publicly: a website, a page, an artifact link to a third
  party.
- Write confidential material (prospect research, contacts, pricing) into a
  repo that is public. Check first.

## How this is enforced

1. **These written rules.** Every AI employee reads them through `CLAUDE.md`.
2. **`.claude/settings.json`** in this repo. It blocks the tools for the
   "Never" list (send, post, share, delete, merge, push to main) and asks
   before paid generation. It applies when a session is started in the
   `atoure` folder. Connector names can differ between the Claude app and
   the desktop app; if a block stops matching, update the names there.
3. **GitHub.** Branch protection on `main` (Settings, Branches) is the
   strongest guard against a push to the live site. Recommended for
   `website` once ticket 001 is done.
