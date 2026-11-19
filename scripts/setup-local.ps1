# Installs what AToure's Claude tools need on Windows. Safe to run again.
#
#   Watch (video review):      Python 3.10+, ffmpeg, yt-dlp, Deno (for YouTube)
#   Lemo-Opuscar (films):      Node 20+, ffmpeg 7+, Python 3.11+ or uv
#   Design Engine (images):    Node, then npm install in its scripts folder
#   SkillSpector (scanning):   uv, then the skillspector tool
#
# Run in PowerShell from the AToure folder:
#   powershell -ExecutionPolicy Bypass -File scripts\setup-local.ps1
# Plugins themselves install when you open this folder in Claude Code and
# accept its prompt; this script only installs the programs they need.

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

function Say($text) { Write-Host "`n== $text" }

function Refresh-Path {
  $env:Path = [System.Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' +
              [System.Environment]::GetEnvironmentVariable('Path', 'User')
}

if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
  Write-Host 'winget is needed. Install "App Installer" from the Microsoft Store, then run this script again.'
  exit 1
}

$packages = @(
  @{ Id = 'Python.Python.3.12';   Command = 'python' },
  @{ Id = 'Gyan.FFmpeg';          Command = 'ffmpeg' },
  @{ Id = 'yt-dlp.yt-dlp';        Command = 'yt-dlp' },
  @{ Id = 'DenoLand.Deno';        Command = 'deno' },
  @{ Id = 'OpenJS.NodeJS.LTS';    Command = 'node' },
  @{ Id = 'astral-sh.uv';         Command = 'uv' }
)

Say 'Programs (winget): Python, ffmpeg, yt-dlp, Deno, Node.js LTS, uv'
function Has-Command($name) {
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if (-not $cmd) { return $false }
  # The Microsoft Store's python shortcut only opens the Store: treat it as missing
  if ($name -eq 'python') {
    if ($cmd.Source -like '*\WindowsApps\*') { return $false }
    $v = & python --version 2>&1
    return ($v -match '^Python 3\.(1[0-9])')
  }
  return $true
}

foreach ($p in $packages) {
  if (Has-Command $p.Command) {
    Write-Host "  $($p.Command): already installed"
  } else {
    winget install --id $p.Id --exact --silent --accept-source-agreements --accept-package-agreements
  }
}
Refresh-Path

Say 'Design Engine export tool (npm install, downloads its own Chrome)'
Push-Location '.claude\skills\design-engine\scripts'
npm install --no-audit --no-fund
Pop-Location

Say 'SkillSpector'
$installed = (uv tool list 2>$null) -match '^skillspector '
if ($installed) { uv tool upgrade skillspector } else { uv tool install git+https://github.com/NVIDIA/skillspector.git }
uv tool update-shell 2>$null | Out-Null
Refresh-Path

Say 'Check'
if (Has-Command python) { python --version } else { 'python: open a new PowerShell window, or use py -3 --version' }
(ffmpeg -version)[0]
"yt-dlp $(yt-dlp --version)"
"node $(node --version)"
uv --version
if (Get-Command skillspector -ErrorAction SilentlyContinue) { skillspector --version } else { 'skillspector: open a new PowerShell window so it is on your PATH' }

Write-Host @'

Done. Next:
  1. Open this folder in Claude Code (desktop app, Code tab, a session on this computer).
  2. Trust the folder and accept the plugins it offers.
  3. Ask Claude: "Use the watch skill's setup.py to check dependencies."
'@
