# 005: Align the CRM outreach prompt

Status: Open
Owner: Business development
Opened: 2026 10 30

## Outcome

Emails drafted inside the CRM follow the same rules as every other AI
employee.

## Context

`CRM/src/components/OutreachModal.jsx`, the `COPY_RULES` and
`ATOURE_CONTEXT` blocks. Today they:

- call the company "Atoure Consulting", based in Ivory Coast
- ban em dashes only, not all hyphens and dashes
- list proposals (Maina × TotalEnergies, Maina pitch deck) as real projects
- sign off "Baba, Atoure Consulting"

The source of truth is `CLAUDE.md`, `context/voice.md` and
`context/proof.md` in this repo.

## Done means

- [ ] Name, sign off and dash rule match `CLAUDE.md`
- [ ] Base reads London and Abidjan, not Ivory Coast
- [ ] Project list matches `context/proof.md`
- [ ] The CRM still builds (`npm run build`)
- [ ] Pull request on `CRM`

## Plan

## Log
