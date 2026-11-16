# FreeLLMAPI

A free, self-hosted AI gateway. It pools the free tiers of about 87 AI
providers (Google Gemini, Groq, Cerebras, Mistral, OpenRouter, NVIDIA,
Hugging Face and others) behind one address and one key, and switches to the
next provider whenever one runs out of free quota.

- Upstream project: https://github.com/tashfeenahmed/freellmapi (MIT licence)
- Website and model catalogue: https://freellmapi.co

## What is in this folder

| Path | What it is |
|---|---|
| `README.md` | This guide: how AToure sets it up and the rules for using it |
| `source/` | The FreeLLMAPI repository, linked as a git submodule and pinned to a tested commit |

`source/` is a link to the upstream repository, not a copy. After cloning
AToure, fetch it with:

```bash
git submodule update --init tools/freellmapi/source
```

To move to the latest upstream version later:

```bash
git submodule update --remote tools/freellmapi/source
git commit -am "Update FreeLLMAPI"
```

## Getting it running

You need the gateway running on your own computer before any setup command
will work.

1. **Install the gateway.** Pick one:
   - Windows: the FreeLLMAPI app from the Microsoft Store (signed, updates
     itself).
   - Mac: the `.dmg` from the upstream Releases page.
   - Any machine with Docker: `curl -fsSL https://freellmapi.co/install.sh | bash`
2. **Open the dashboard.** Desktop app: tray icon, then Open Dashboard
   (it runs at `http://127.0.0.1:31415`). Docker install:
   `http://localhost:3001`.
3. **Add provider keys** on the Keys page. Each one is a free account you
   create with that provider (Google AI Studio, Groq, Cerebras, OpenRouter
   and so on). More keys means more free capacity.
4. **Copy the unified key** from the Keys page header (or the tray popover).
   It starts with `freellmapi-`. This is the only key your tools ever see.
5. **Test it** in the Playground page before connecting anything else.

## Connecting Claude Code

The upstream command is:

```bash
npx freellmapi setup-claude --url http://localhost:3001 --api-key <unified-key>
```

Read this before running it. Without `--profile`, it writes
`~/.claude/settings.json`, which points **every** Claude Code session on that
computer at the free models instead of Claude. It keeps a backup, but it is
still a takeover. Use one of these instead:

```bash
# See exactly what it would change, write nothing
npx freellmapi setup-claude --url http://localhost:3001 --api-key <unified-key> --dry-run

# Write a separate profile, leave normal Claude Code alone
npx freellmapi setup-claude --url http://localhost:3001 --api-key <unified-key> --profile freellmapi
# then start it with: CLAUDE_CONFIG_DIR=~/.claude/profiles/freellmapi claude

# Or run once with the key held in memory only, nothing written to disk
FREELLMAPI_API_KEY=<unified-key> npx freellmapi launch --url http://localhost:3001
```

If you use the desktop app, swap `http://localhost:3001` for
`http://127.0.0.1:31415` in every command above.

To undo a full takeover, restore the backup the command left next to it
(`~/.claude/settings.json.backup-<date and time>`), or delete the
`ANTHROPIC_*` and `CLAUDE_CODE_*` lines it added to the `env` block.

## Rules for AToure work

- **No client confidential material.** Prompts go to whichever free provider
  is available at that moment, and free tiers often allow the provider to
  keep and use what you send. Creator analytics, contracts, fees, client
  decks before release and personal data stay out of it.
- **Not for client deliverables.** Free models vary by the hour and quality
  drops late in the day as the best ones hit their caps (they reset at
  midnight UTC). Use it for drafts and internal work, then check everything.
- **One person only.** It is built for a single user. Do not share the
  unified key or expose the gateway to the internet, the team or clients.
  Sharing also breaks most providers' free tier terms.
- **One account per provider.** No duplicate accounts to stretch quotas.
- **Cohere's terms forbid personal use.** Leave Cohere out unless the use is
  clearly business.
- **Keep keys out of this repository.** Never commit the unified key or any
  provider key.
