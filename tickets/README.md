# Tickets

One ticket per task, one clear outcome. Every piece of work an AI employee
does starts from a ticket, except the routines in `routines/`, which are
approved in advance.

## Making a ticket

Copy `TEMPLATE.md` to a new file named with the next number and a short
name, for example `007-tourism-demo.md`. Or tell Claude "make a ticket for"
and the task. Fill in the outcome: one sentence, what exists when it is done.

## How a ticket moves

| Status | Who | What happens |
|---|---|---|
| Open | Baba | The ticket exists with an outcome |
| Planned | AI employee | The plan section is filled in. Work stops here |
| Approved | Baba | Baba changes the status, or says "go" |
| In progress | AI employee | Work happens on a branch; the log is kept |
| In review | AI employee | `REVIEW.md` passed; a pull request is open |
| Done | Baba | Baba merges. The ticket moves to `done/` |

A ticket can go straight from Open to Approved if Baba writes the plan, or
says a plan is not needed.

## Open tickets

| Ticket | Owner | Status |
|---|---|---|
| `001-make-repos-private.md` | Baba | Open |
| `002-settle-open-questions.md` | Baba | Open |
| `003-festival-demo.md` | Business development | Open |
| `004-remove-agency-from-tour-pages.md` | Business development | Open |
| `005-align-crm-outreach-prompt.md` | Business development | Open |
| `006-wave-one-endorsement-letters.md` | Business development | Open, blocked by 002 |
| `007-sample-reports-on-a-phone.md` | Reporting analyst | Open |
