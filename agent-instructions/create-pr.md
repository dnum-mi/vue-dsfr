# Create PR

Goal:
Create a GitHub pull request from the current branch, using the GitHub CLI (`gh`).

Input:

- Optional first argument: the base branch to compare against.
- If no base branch is provided, use `main`.
- Infer the issue ID from the numeric suffix at the end of the current branch name.
- Valid branch suffix examples: `docs/add-shared-llm-workflow-commands-2`, `feat/add-login-42`, `fix/correct-label-103`.

Expected behavior:

1. Read the current branch name.
2. Determine the base branch:
   - Use the first command argument when provided.
   - Otherwise use `main`.
3. Extract the issue ID from the final numeric suffix of the current branch name.
4. Compare the current branch against the base branch.
5. Read the commits that are present on the current branch and absent from the base branch.
6. Draft a clear pull request title and body in French.
7. Include a closing reference for the issue at the end of the PR body so the newly created PR links to the matching issue:

```text
closes #<issue ID>
```

8. Create the pull request with `gh pr create`.
9. Link the newly created PR to the issue in GitHub's Development section.
10. Show a summary with the PR URL, title, base branch, current branch, issue ID, and whether the Development link was verified.

Required title format:

```text
<short action-oriented pull request title>
```

Valid title examples:

- Ajoute les commandes de workflow communes pour les LLM
- Ajoute le workflow create-branch pour les issues GitHub
- Corrige le libellé du sélecteur de langue

Required body structure:

```text
## Résumé
- <élément de résumé 1>
- <élément de résumé 2>
- <élément de résumé 3>

## Vérification
- <élément de vérification 1>
- <élément de vérification 2>

closes #<issue ID>
```

Rules:

- Do not create a PR from `main`.
- Do not create a PR if the current branch name does not end with a numeric issue ID.
- Do not create a PR if the base branch does not exist or cannot be resolved.
- Do not create a PR if there are no commits on the current branch compared to the base branch.
- Do not invent verification steps. If no tests or checks were run, write `Non exécuté`.
- Write the generated pull request title and body in French, except for technical identifiers, branch names, URLs, commands, and code symbols.
- Keep the title concise and specific.
- Link the newly created PR to the issue through the closing reference in the PR body.
- Do not try to link the branch to the issue before creating the PR.
- Do not invent or call unsupported REST or GraphQL endpoints for directly linking an existing PR to an issue.
- Use `gh pr create` to create the pull request.
- Do not commit, push, edit files, stage files, or unstage files as part of this workflow.
- Preserve the user's existing worktree changes.

Implementation:

- Inspect the current branch with:

```text
git branch --show-current
```

- Compare commits with:

```text
git log --oneline <base branch>..HEAD
```

- Inspect the commit details when needed with:

```text
git show --stat --summary <commit>
```

- Create the pull request with:

```text
gh pr create --base <base branch> --head <current branch> --title "<title>" --body "<body>"
```

- After creating the PR, verify the issue's Development linkage:

```text
gh issue develop --list <issue ID>
```

- Show the created PR URL and a concise summary, including whether the branch or PR appears linked to the issue in Development.
