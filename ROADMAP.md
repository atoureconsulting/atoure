# Roadmap

## Current goal

Win the first Creator Visibility client outside combat sports.

The offer was built for PFL Africa and the African MMA League in October
2026. PFL Africa declined the managed service but valued the report idea and
offered talent access. The next step is to show the offer travels:
festivals, concerts, conferences, tourism campaigns and brand launches.

## Now

- [ ] Ticket 001: make the private repos private. Before the first weekly
      routine on Monday 2 November.
- [ ] Ticket 002: settle the open questions (pricing, the Ashton Hall figure,
      the AML pitch, deck style, where AToure is based).
- [ ] Ticket 003: festival demo.
- [ ] Weekly business development routine: first run Monday 2 November.

## Next

- [ ] Ticket 004: remove "agency" and "Atouré" from the tour pages.
- [ ] Ticket 005: align the CRM outreach prompt with `CLAUDE.md`.
- [ ] Ticket 006: wave one endorsement letters (after 002).
- [ ] Ticket 007: sample reports readable on a phone.
- [ ] A tourism board demo, paired with `offers/government-programmes/`.
- [ ] A conference or trade fair demo.
- [ ] A standard creator agreement with the data deadlines written in.

## Later

- [ ] Retainer packaging for clients who convert from a trial.
- [ ] Price bands for each government programme, so a ministry can say yes
      to a defined scope.
- [ ] More AI employees: a talent coordinator (talent database) and a
      content and social writer (website and captions).

## Known issues in other repos

From the audit of all four repos on 30 October 2026, using
`node tools/check-copy.js`. Main site pages (home, about, services, work,
case studies) are clean.

| File | Problems |
|---|---|
| `website/ashton-hall-tour.html` | "agency", "Atouré" 21 times, 103 dashes, 27 hyphens (ticket 004) |
| `website/ashton-hall-prep.html` | "agency" twice, "Atouré" 22 times, 52 dashes, 23 hyphens (ticket 004) |
| `website/maina-totalenergies.html` | 82 dashes, 25 hyphens |
| `website/ivory-coast-experience.html` | "Atouré" 14 times, 30 dashes, 21 hyphens |
| `website/maina-pitch-deck.html` | 32 dashes, 8 hyphens |
| `website/race-weekend-report-fr.html` | 13 hyphens, some may be correct French |
| `website/janet-jackson-proposal.html`, `taraji-henson-proposal.html` | "Atouré" twice each |
| `CRM/src/components/OutreachModal.jsx` | "Atoure Consulting", based in Ivory Coast, proposals listed as projects (ticket 005) |
| `atoure-talent-database` | Em dashes in titles and footer, 12 in total |

Also:

- Every AToure repo on GitHub is public, including the CRM's contact data
  (ticket 001).
- Confidential proposals (Janet Jackson, Taraji P. Henson, Maina ×
  TotalEnergies) sit in the public website repo.
- `website/.claude/skills`: several skills assume a software product
  (paywall, churn, sign up flow, onboarding, App Store, free tool,
  programmatic SEO, directory submissions, referral programme).
- The "Countries Activated" list in the website repo includes Spain,
  Germany, Turkey and the Republic of Congo, which the About page does not.

## Done

- October 2026: Creator Visibility Offer written; PFL Africa and AML decks
  and sample reports built.
- 30 October 2026: AI workspace set up: memory, briefs, tickets,
  permissions, Eyes, Review and schedule. Government programmes moved in
  from the website repo.
