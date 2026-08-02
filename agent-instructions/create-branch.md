# Create Branch

Goal:
Create a local Git branch from a GitHub issue ID, using the GitHub CLI (`gh`) to read the issue.

Input:

- Require one issue ID or issue number as the command argument.
- Valid examples: `2`, `#2`, or a GitHub issue URL.
- If no issue ID is provided, do not create a branch and ask the user to provide one.

Expected behavior:

1. Parse the issue ID from the user-provided argument.
2. Use `gh issue view <issue ID>` to read the issue title, body, labels, state, and URL.
3. Infer the branch type from the issue content:
   - `docs` for documentation, copy, instructions, README, markdown, or agent-command documentation work.
   - `fix` for bugs, regressions, broken behavior, corrections, or defects.
   - `feat` for new user-facing or developer-facing capability.
4. Translate or summarize the issue title into a concise English title segment, then convert it to lowercase kebab case.
5. Create a branch name with this exact format:

```text
<docs|feat|fix>/title-in-kebab-case-<issue ID>
```

6. Create and switch to the new branch.
7. Show a summary with the issue URL, chosen branch type, branch name, and current branch.

Branch naming rules:

- Keep only ASCII lowercase letters, digits, and hyphens in the title segment.
- Write the title segment in English, even when the GitHub issue title and body are in French.
- Replace accents with their ASCII equivalent when practical.
- Replace spaces and punctuation with single hyphens.
- Collapse repeated hyphens.
- Trim leading and trailing hyphens.
- Keep the issue ID numeric in the final suffix.
- If the issue title is too long, shorten the title segment while preserving the meaning.

Valid branch examples:

- `docs/add-shared-llm-workflow-commands-2`
- `feat/add-github-repository-link-12`
- `fix/correct-language-toggle-label-34`

Rules:

- Use `gh` to read the issue before creating the branch.
- Do not create a branch if `gh` is not installed, not authenticated, or cannot resolve the repository.
- Do not create a branch if the issue does not exist or is not readable.
- Do not create a branch if the target branch name already exists locally.
- Do not create a branch if the current working tree has unresolved merge conflicts.
- Do not commit, push, edit files, stage files, or unstage files as part of this workflow.
- Preserve the user's existing worktree changes.

Implementation:

- Inspect the current branch with `git branch --show-current`.
- Check for unresolved conflicts with `git diff --name-only --diff-filter=U`.
- Read the issue with:

```text
gh issue view <issue ID> --json number,title,body,labels,state,url
```

- Generate the branch name.
- Check whether it already exists with:

```text
git rev-parse --verify --quiet <branch name>
```

- Create and switch to it with:

```text
git switch -c <branch name>
```

- Show the created branch and issue summary.
