#!/bin/bash
set -euo pipefail

TO="${1:-}"
SUBJECT="${2:-}"
BODY_FILE="${3:-}"

if [ -z "$TO" ] || [ -z "$SUBJECT" ] || [ -z "$BODY_FILE" ]; then
  echo "Usage: draft_mail.sh \"to@example.com\" \"Subject\" \"/path/to/body.txt\""
  exit 1
fi

if [ ! -f "$BODY_FILE" ]; then
  echo "Body file not found: $BODY_FILE"
  exit 1
fi

python3 <<PY
import subprocess
from pathlib import Path

to = """$TO"""
subject = """$SUBJECT"""
body = Path("""$BODY_FILE""").read_text(encoding="utf-8")

def esc(s: str) -> str:
    return s.replace("\\\\", "\\\\\\\\").replace('"', '\\"')

apple_script = f'''
tell application "Mail"
    set newMessage to make new outgoing message with properties {{subject:"{esc(subject)}", content:"{esc(body)}", visible:true}}
    tell newMessage
        make new to recipient at end of to recipients with properties {{address:"{esc(to)}"}}
    end tell
    activate
end tell
'''

subprocess.run(["osascript", "-e", apple_script], check=True)
PY