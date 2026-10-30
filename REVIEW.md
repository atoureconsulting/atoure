# Review

Every draft passes this check before it goes to Baba. The AI employee that
made it runs the check first and fixes what fails. Baba has the final say.

## Before and after

- [ ] Read the diff: every file changed, compared with `main`. Nothing
      changed that the ticket did not ask for.
- [ ] `node tools/check-copy.js` is clean. With no file names it checks
      everything changed on the branch. The same check runs on every pull
      request on GitHub.
- [ ] For anything a client opens in a browser: `node tools/eyes.js <file>`,
      then the screenshots read as a client would (`specs/eyes-check.md`).

## House rules

- [ ] No hyphens, en dashes or em dashes anywhere in the copy, including
      headings, subject lines and any title a client will see.
- [ ] AToure is never called an agency, in any language.
- [ ] The company name is "AToure Management & Consulting", untranslated.
- [ ] Baba Touré is Director.

## Figures

- [ ] Every figure traces to a source: creator analytics, a tracked link,
      the client, or `context/proof.md`. Nothing estimated to fill a gap.
- [ ] Reach, impressions and media value say estimated.
- [ ] Reach is lower than views wherever both appear.
- [ ] Totals agree: post log, creator table and summary add up to the same
      numbers.
- [ ] Withheld fields say n/a.

## Pitches

- [ ] The prospect's strengths come first, sourced from public reporting.
- [ ] No gap is stated as fact unless the prospect's own data shows it.
- [ ] The report is mentioned early, not halfway down.
- [ ] Any sample report attached is marked fictional, and the email says so.
- [ ] No price appears. Baba prices each job from the client's budget and
      the scope, so the pitch asks for those instead.
- [ ] The deck merges the client's design with AToure's
      (`specs/client-design.md`), recorded in the client's `design.md`.
- [ ] Only creators in the AToure network are named, with their real track
      record.

## Reports

- [ ] Sections follow the order in `specs/visibility-report.md`.
- [ ] Every post has its link, and the link points to the right post.
- [ ] Recommendations are specific to this event.

## Before it goes

- [ ] Saved in the right `customers/` folder.
- [ ] Status updated in `customers/README.md`.
- [ ] Anything uncertain is listed at the top of the handover for Baba, not
      buried in the draft.
