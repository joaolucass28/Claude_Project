# OTMA Skill Installer — Windows
# Run this once in PowerShell to install /research-processes on this machine
# Usage: Right-click → Run with PowerShell, or: .\install-windows.ps1

$skillsDir = "$env:USERPROFILE\.claude\skills"
$skillFile = "$PSScriptRoot\SKILL.md"
$destination = "$skillsDir\research-processes.md"

if (-not (Test-Path $skillsDir)) {
    New-Item -ItemType Directory -Path $skillsDir -Force | Out-Null
    Write-Host "Created $skillsDir"
}

Copy-Item -Path $skillFile -Destination $destination -Force
Write-Host "Installed: /research-processes"
Write-Host "Open Claude Code in any project folder and run: /research-processes"
