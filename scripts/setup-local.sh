#!/usr/bin/env bash
# Installs what AToure's Claude tools need on a Mac. Safe to run again.
#
#   Watch (video review):      Python 3.10+, ffmpeg, yt-dlp
#   Lemo-Opuscar (films):      Node 20+, ffmpeg 7+, Python 3.11+ or uv
#   Design Engine (images):    Node, then npm install in its scripts folder
#   SkillSpector (scanning):   uv, then the skillspector tool
#
# Run from anywhere:  bash scripts/setup-local.sh
# Plugins themselves install when you open this folder in Claude Code and
# accept its prompt; this script only installs the programs they need.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

say() { printf '\n== %s\n' "$*"; }

if [ "$(uname -s)" != "Darwin" ]; then
  echo "This script is for macOS. On Windows use scripts/setup-local.ps1."
  echo "On Linux install: python3 ffmpeg (7+) yt-dlp nodejs (20+) npm, and uv, then re-run the npm and uv steps below by hand."
  exit 1
fi

if ! command -v brew >/dev/null 2>&1; then
  echo "Homebrew is needed first. Install it from https://brew.sh, open a new terminal, then run this script again."
  exit 1
fi

say "Programs (Homebrew): python, ffmpeg, yt-dlp, node, uv"
# brew skips anything already installed (and updates it if it is out of date)
brew install python ffmpeg yt-dlp node uv

say "Design Engine export tool (npm install, downloads its own Chrome)"
(cd .claude/skills/design-engine/scripts && npm install --no-audit --no-fund)

say "SkillSpector"
if uv tool list 2>/dev/null | grep -q '^skillspector '; then
  uv tool upgrade skillspector
else
  uv tool install git+https://github.com/NVIDIA/skillspector.git
fi
uv tool update-shell >/dev/null 2>&1 || true

say "Check"
python3 --version
ffmpeg -version | head -1
yt-dlp --version | sed 's/^/yt-dlp /'
node --version | sed 's/^/node /'
uv --version
command -v skillspector >/dev/null 2>&1 && skillspector --version || echo "skillspector: open a new terminal so it is on your PATH"

cat <<'EOF'

Done. Next:
  1. Open this folder in Claude Code (desktop app, Code tab, a session on this computer).
  2. Trust the folder and accept the plugins it offers.
  3. Ask Claude: "Use the watch skill's setup.py to check dependencies."
EOF
