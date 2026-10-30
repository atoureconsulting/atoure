# 004: Remove "agency" from the tour pages

Status: Open
Owner: Business development
Opened: 2026 10 30

## Outcome

No page on atoureconsulting.com describes AToure as an agency or misspells
its name.

## Context

Found by the October 2026 audit:

- `website/ashton-hall-tour.html`: "Atouré is a London-based agency with
  offices in Ivory Coast"
- `website/ashton-hall-prep.html`: "Atouré is the agency of record"
- Both pages write the name "Atouré" and use em dashes

The word "agency" may survive only as a contractual term. Ask Baba whether
"agency terms" in the prep page's gate list is one.

## Done means

- [ ] Both sentences rewritten without "agency"
- [ ] Name written "AToure Management & Consulting" on both pages
- [ ] `node tools/check-copy.js` clean on both pages
- [ ] Eyes check on desktop and phone
- [ ] Pull request on `website`, not pushed to main

## Plan

## Log
