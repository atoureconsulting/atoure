# SkillSpector

NVIDIA's security scanner for AI agent skills and plugins. Point it at a
skill, a plugin folder or a GitHub link before you install it, and it reports
risky behaviour (prompt injection, sending data out, reading credentials,
hidden code, hooks that run automatically) with a score from 0 to 100 and a
recommendation.

- Upstream project: https://github.com/NVIDIA/skillspector (Apache 2.0 licence)
- NVIDIA's guide to reading a report: https://docs.nvidia.com/skills/scanning-agent-skills

## Rule for AToure

Scan every new plugin or skill with SkillSpector before it goes into
`.claude/settings.json` or onto your computer, and add its result to the
table at the bottom of this page.

## Install

It needs `uv` (which fetches Python 3.12 for it). Install `uv` once:

- Mac: `brew install uv`
- Windows: `winget install astral-sh.uv`
- Either: see https://docs.astral.sh/uv/getting-started/installation/

Then:

```bash
uv tool install git+https://github.com/NVIDIA/skillspector.git
# Update later: uv tool update skillspector
```

Check it with `skillspector --version`.

## Scanning

```bash
# A GitHub repository (up to 100 MB)
skillspector scan https://github.com/<owner>/<repo>

# A folder on your computer
skillspector scan ./some-plugin/

# Save the report as a readable file
skillspector scan ./some-plugin/ --format markdown --output report.md
```

Larger repositories (Lemo-Opuscar is about 300 MB) go over the download
limit. Clone them first and scan only the plugin folder.

Add `--no-llm` for a quick scan that sends nothing anywhere. Without it,
SkillSpector also asks an AI model to judge each finding, which needs a model
set up (below).

## Reading a report

The quick scan matches patterns, so it flags a lot that is harmless. Before
acting on a score, look at **where** each finding is:

- **Counts:** the plugin manifest (`.claude-plugin/plugin.json`), its hooks
  and its skills. That is what Claude Code runs.
- **Usually does not count:** `tests/`, `benchmarks/`, `docs/`, `examples/`
  and files for other agents (`.opencode/`, `.cursor/`). They are copied but
  never run by Claude Code. To scan only what runs, copy the manifest, hooks
  and skills folders into a new folder and scan that.

Then read the flagged line. A finding called "credential access" might be an
optional settings field, and "output injection" might be a text search.

## AI-checked scans (optional)

An AI model reviews each finding and cuts the false alarms. Two options that
cost nothing extra:

- **Your Claude Code login:** `SKILLSPECTOR_PROVIDER=claude_cli skillspector scan <target>`.
  Uses your Claude plan's limits.
- **FreeLLMAPI** (`tools/freellmapi/`): set `SKILLSPECTOR_PROVIDER=openai_compatible`,
  `SKILLSPECTOR_COMPAT_BASE_URL=http://localhost:3001/v1` and
  `SKILLSPECTOR_COMPAT_API_KEY=<unified key>`. Fine for public plugins. Keep
  private code out of it, as the FreeLLMAPI rules say.

## Results so far

Quick scans (`--no-llm`), SkillSpector 2.12.0, 16 November 2026.

| Plugin | Version scanned | Score | What the findings are | Verdict |
|---|---|---|---|---|
| Lemo-Opuscar | `3a7132b` | 24/100, caution | One "chaining abuse" flag on `setup.sh` line 99: a shell line that rebuilds a broken Python environment inside the library's own folder. False alarm | Safe to use. Turned on for this repository |
| Ponytail (whole repository) | `96608e0` | 100/100, do not install | 109 findings, almost all in `benchmarks/`, `tests/`, `docs/` and other agents' folders, which Claude Code never runs | See next row |
| Ponytail (only what Claude Code runs) | `96608e0` | 62/100, do not install | Two false alarms: "credential access" is the optional webhook token setting, and "output injection" is a text search that counts passed tests. Two real but known: its hooks run on every session, and it writes a cost log after every turn | Safe, but left off for the reasons in `tools/ponytail/README.md` |
