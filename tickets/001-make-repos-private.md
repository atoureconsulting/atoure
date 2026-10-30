# 001: Make the private repos private

Status: Open
Owner: Baba
Opened: 2026 10 30
Due: Before Monday 2 November 2026, when the weekly routine first runs

## Outcome

No confidential AToure material can be read by the public on GitHub.

## Context

In October 2026 every AToure repo on GitHub was public. That exposes:

- `CRM`: `seed-data.json`, with names, phone numbers and messages for 356
  people. The CRM site has a password, but the raw file on GitHub does not.
- `atoure`: pitch lessons, client decks, the government outreach tracker
  with ministers' names, and every prospect brief the weekly routine will
  write.
- `website`: confidential proposals (Janet Jackson, Taraji P. Henson, Maina
  × TotalEnergies) and tour prep pages.

The catch: `website` and `atoure-talent-database` publish through GitHub
Pages. A private repo can only keep publishing on a paid GitHub plan.

## Done means

- [ ] `atoure` set to private (GitHub: repo, Settings, General, Danger Zone,
      Change visibility)
- [ ] `CRM` set to private. It deploys through Cloudflare, so the site keeps
      working
- [ ] Decision on `website` and `atoure-talent-database`: upgrade the GitHub
      plan and make them private, or keep them public and move confidential
      pages out
- [ ] The other public repos checked one by one (linkedin BABA, Baba trading
      bot, Mining Investment and the rest)
- [ ] Note: files deleted from a public repo stay in its history. Once a repo
      is private, its history is private too

## Plan

Baba's ticket: no plan needed.

## Log
