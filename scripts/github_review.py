import anthropic
import os
from github import Github

claude = anthropic.Anthropic()
gh = Github(os.environ["GITHUB_TOKEN"])


def review_pr(repo_name: str, pr_number: int) -> str:
    """Use Claude to review a GitHub pull request."""
    repo = gh.get_repo(repo_name)
    pr = repo.get_pull(pr_number)

    files_changed = []
    for f in pr.get_files():
        files_changed.append(f"### {f.filename}\n```diff\n{f.patch or '(binary)'}\n```")

    diff_text = "\n\n".join(files_changed[:20])

    response = claude.messages.create(
        model="claude-opus-4-6",
        max_tokens=4096,
        thinking={"type": "adaptive"},
        system="You are a senior code reviewer. Be thorough, constructive, and concise.",
        messages=[{
            "role": "user",
            "content": f"""Review this pull request:

**Title:** {pr.title}
**Description:** {pr.body or 'No description'}
**Branch:** {pr.head.ref} → {pr.base.ref}

**Changed Files:**
{diff_text}

Provide:
1. A 2-sentence summary
2. Key concerns or bugs (if any)
3. Suggestions for improvement
4. Overall verdict: Approve / Request Changes / Needs Discussion"""
        }]
    )

    return next(b.text for b in response.content if b.type == "text")


def summarize_issue(repo_name: str, issue_number: int) -> str:
    """Summarize and triage a GitHub issue."""
    repo = gh.get_repo(repo_name)
    issue = repo.get_issue(issue_number)

    response = claude.messages.create(
        model="claude-opus-4-6",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"""Triage this GitHub issue:

**Title:** {issue.title}
**Body:** {issue.body or 'No description'}
**Labels:** {[l.name for l in issue.labels]}

Reply with:
- Type: bug / feature / question / docs
- Priority: high / medium / low
- Suggested labels (comma-separated)
- One-sentence summary"""
        }]
    )

    return next(b.text for b in response.content if b.type == "text")


def review_and_comment(repo_name: str, pr_number: int):
    """Review a PR and post the result as a GitHub comment."""
    review_text = review_pr(repo_name, pr_number)

    repo = gh.get_repo(repo_name)
    pr = repo.get_pull(pr_number)
    pr.create_issue_comment(f"🤖 **Claude Code Review**\n\n{review_text}")
    print(f"Comment posted on PR #{pr_number}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        print("Usage:")
        print("  Review PR:      python github_review.py review <repo> <pr_number>")
        print("  Comment on PR:  python github_review.py comment <repo> <pr_number>")
        print("  Triage issue:   python github_review.py issue <repo> <issue_number>")
        sys.exit(1)

    command = sys.argv[1]
    repo = sys.argv[2]
    number = int(sys.argv[3])

    if command == "review":
        print(review_pr(repo, number))
    elif command == "comment":
        review_and_comment(repo, number)
    elif command == "issue":
        print(summarize_issue(repo, number))
    else:
        print(f"Unknown command: {command}")
        sys.exit(1)
