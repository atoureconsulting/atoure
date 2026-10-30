# 008: Update the celebrity proposals

Status: Open
Owner: Business development
Opened: 2026 10 30

## Outcome

The Janet Jackson and Taraji P. Henson proposal pages quote only confirmed
figures and spell the name correctly, in English and French.

## Context

- `website/janet-jackson-proposal.html` and
  `website/taraji-henson-proposal.html` both say 1.57 billion views for the
  Ashton Hall Africa Tour, in the text, the stat counter and the French
  translation. Baba confirmed 1.87 billion on 30 October 2026.
- Both write "Atouré" twice.
- Both cite "an AFCON record 6.1 billion digital impressions". That is not in
  `context/proof.md`, and impressions must be labelled estimated. Ask Baba
  for its source before keeping it.
- Both pages are marked confidential and sit in the public website repo
  (ticket 001).

Question for Baba first: are these proposals still in use? If not, the
better fix may be to take them offline.

## Done means

- [ ] Baba has said whether the pages stay live
- [ ] 1.87 billion everywhere, including the counter and the French text
- [ ] Name written "AToure Management & Consulting"
- [ ] The 6.1 billion figure sourced and labelled, or removed
- [ ] `node tools/check-copy.js` clean; Eyes check on desktop and phone
- [ ] Pull request on `website`

## Plan

## Log
