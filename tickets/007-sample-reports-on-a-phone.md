# 007: Sample reports readable on a phone

Status: Open
Owner: Reporting analyst
Opened: 2026 10 30

## Outcome

The web version of every sample report, and every real report after it,
reads properly on a phone, because that is where most clients will open a
link sent on WhatsApp.

## Context

Found by the first Eyes check (`node tools/eyes.js`). Both
`customers/pfl-africa/sample-report.html` and
`customers/african-mma-league/sample-report.html` have no mobile viewport
tag. A phone shows them as a desktop page shrunk to about 40%, so body text
is around 6 points. The PDF is not affected.

## Done means

- [ ] Viewport tag added and the layout reflows on a 390 pixel screen:
      tables scroll inside their box or stack, the four column header
      stacks
- [ ] The PDF export still looks the same
- [ ] `node tools/eyes.js` reports no problems on both reports
- [ ] The rule added to `specs/visibility-report.md` so every new report is
      built this way
- [ ] Passes `REVIEW.md`

## Plan

## Log
