# Routine: Weekly Business Development

Who: Business development.
When: Every Monday morning, UK time, as a scheduled task.
Goal: Three good prospects in front of Baba every week.
Approved in advance: no ticket or plan needed.

## Before anything

1. Read `CLAUDE.md`, `PERMISSIONS.md` and `context/lessons.md`.
2. **Check the `atoure` repo is private.** If it is public, do not write any
   prospect research into it. Write the summary for Baba in the session's
   final message only, and remind Baba of ticket 001.
3. Create a branch named `bd/YYYY-MM-DD` from `main`.

## Steps

1. **Read the pipeline.** Open `customers/README.md`. Note anything that has
   waited more than seven days for a reply.
2. **Draft follow ups.** For each one, draft a short follow up in
   `customers/<name>/follow-up-YYYY-MM-DD.md`. Do not repeat the pitch.
3. **Find prospects.** Search for events three to six months out in the
   target sectors (`context/buyers.md`), in or near markets where we operate.
   Skip anything already in `customers/`. Check every date against today.
4. **Write three briefs.** Pick the best three and write a prospect brief
   for each (`specs/prospect-brief.md`). Add each to `customers/README.md`
   with status Prospect.
5. **Review.** Run `node tools/check-copy.js` and fix anything it finds. Run
   through `REVIEW.md`.
6. **Hand over.** Commit, push the branch, and open a pull request titled
   "Weekly business development, DATE". Its description is the summary for
   Baba: the three prospects in one line each, the follow ups drafted, and
   anything that needs a decision.

## Not this routine's job

- Sending anything, or creating Gmail drafts. Baba picks what to send.
- Writing a full pitch pack. That waits until Baba approves a brief.
- Merging the pull request.
