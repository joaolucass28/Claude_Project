#!/bin/bash
# OTMA Skill Crystallizer Hook
# Triggered by Claude Code Stop event.
# Checks if any clients/otma/ files were modified in this session.
# If yes, runs skill extraction in background.

PROJECT="/Users/joaolucasferreira/Projects/Claude_Project"
OTMA_PATH="clients/otma"

# Check for modified OTMA files (staged + unstaged + untracked)
CHANGES=$(cd "$PROJECT" && {
  git diff --name-only HEAD 2>/dev/null | grep "^${OTMA_PATH}/"
  git diff --name-only 2>/dev/null | grep "^${OTMA_PATH}/"
  git ls-files --others --exclude-standard 2>/dev/null | grep "^${OTMA_PATH}/"
} | sort -u | grep -v '^$')

if [ -z "$CHANGES" ]; then
  exit 0
fi

DATE=$(date +%Y-%m-%d-%H%M)
SKILL_DIR="$PROJECT/$OTMA_PATH/tools/skills/auto-${DATE}"
mkdir -p "$SKILL_DIR"

FILES_LIST=$(echo "$CHANGES" | paste -sd ', ' -)

PROMPT="You are the OTMA Skill Crystallizer. A Claude Code session just ended with the following clients/otma/ files modified: ${FILES_LIST}. Your job: read each modified file, identify what process, methodology, or pattern was created or refined in this session, then write a SKILL.md to ${SKILL_DIR}/SKILL.md. Follow OTMA process structure: (1) strategic name — simple, memorable noun+verb; (2) named steps in a table with function column; (3) hybrid language readable by humans and interpretable by AI; (4) concrete output — what exists after this skill is applied. Keep it under one page. No preamble, no meta-commentary."

# Run in background — does not block session exit
claude -p "$PROMPT" > /dev/null 2>&1 &

exit 0
