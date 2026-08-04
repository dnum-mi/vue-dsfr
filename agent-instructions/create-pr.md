# Create PR

Goal:
Create a GitHub pull request from the current branch, using the GitHub CLI (`gh`).

Input:

- Optional first argument: the base branch to compare against.
- If no base branch is provided, use `develop`.
- Infer the issue ID from the numeric suffix at the end of the current branch name.
- Valid branch suffix examples: `docs/add-shared-llm-workflow-commands-2`, `feat/add-login-42`, `fix/correct-label-103`.

Expected behavior:

1. Read the current branch name.
2. Determine the base branch:
   - Use the first command argument when provided.
   - Otherwise use `develop`.
3. Extract the issue ID from the final numeric suffix of the current branch name.
4. Compare the current branch against the base branch.
5. Read the commits that are present on the current branch and absent from the base branch.
6. Draft a clear pull request title and body in French.
7. Include a closing reference for the issue at the end of the PR body so the newly created PR links to the matching issue:

```text
closes #<issue ID>
```

8. Create the pull request with `gh pr create`.
9. Verify that the pull request body contains the closing reference and inspect GitHub's linked-issue metadata when available.
10. If it is visible to the current contributor, add the newly created PR to the private GitHub Project `VueDsfr`, in the `Revue de code en cours` column.
11. Add the newly created PR to the public GitHub Project `Vue Dsfr`, in the `In progress` column.
12. Show a summary with the PR URL, title, base branch, current branch, issue ID, whether the linked-issue metadata was available, and the result for each project.

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
- Do not interpolate the generated title or body directly into a shell command.
- Write the generated body to a temporary file and pass it with `--body-file`.
- Pass the title through an argument-safe API. If only a shell is available, write the title to a temporary file and read that file as a single quoted argument instead of embedding the generated title directly in the command.
- Keep the title concise and specific.
- Link the newly created PR to the issue through the closing reference in the PR body.
- A `closes #<issue ID>` reference in the PR body is the required repository-level linkage. The `check-pr-linked-issue` workflow validates this reference.
- `gh issue develop --list <issue ID>` lists linked branches only. Do not use an empty result as evidence that the pull request is unlinked.
- `gh pr view <PR number> --json closingIssuesReferences` can expose GitHub's linked-issue metadata, but it can remain empty for a PR targeting `develop` because GitHub only closes issues when merging into the repository's default branch.
- Do not attempt unsupported REST or GraphQL mutations to force a Development link. Report the verified closing reference and the metadata result separately.
- Attempt the private GitHub Project `VueDsfr` only once. If it is not visible or the contributor lacks permission, skip it without retrying and report it as skipped; this does not block the workflow.
- After creating the PR, add it to the public GitHub Project `Vue Dsfr`, then move it to the `In progress` column.
- Do not invent or call unsupported REST or GraphQL endpoints for directly linking an existing PR to an issue.
- If the public project update cannot be completed because the project is not visible, field names differ, or permissions are missing, report the blocker clearly and keep the PR creation result.
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

- Write the generated title to `<title-file>`, write the generated body to `<body-file>`, then create the pull request with:

```text
gh pr create --base <base branch> --head <current branch> --title "$(cat <title-file>)" --body-file <body-file>
```

- After creating the PR, verify the issue's Development linkage:

```text
gh pr view <PR number> --json closingIssuesReferences,url
```

- Confirm the PR body still contains `closes #<issue ID>`. The repository workflow accepts this reference even if `closingIssuesReferences` is empty for a `develop`-targeted PR.
- Add the PR to both GitHub Projects and set its status using the project number, the PR URL, and the human-readable status name. Prefer this form over GraphQL node IDs:

```text
gh project item-add <project number> --owner dnum-mi --url <PR URL> --format json
gh project item-edit <project number> --owner dnum-mi --url <PR URL> --field Status --value <status name>
```

## GitHub Projects discovery

Project numbers are stable identifiers for this workflow. GraphQL node IDs returned by `--format json` are only needed for machine-oriented calls that cannot use `--url`, `--field`, and `--value`.

Discover project numbers and visibility before an update instead of relying on stale IDs:

```text
gh project list --owner dnum-mi --limit 200 --format json --jq '.projects[] | select(.title == "VueDsfr" or .title == "Vue Dsfr") | {number, id, public, title}'
```

Expected projects:

| Project | Visibility | Project number | Status | Behavior |
| --- | --- | --- | --- | --- |
| `VueDsfr` | private | `6` | `Revue de code en cours` | optional: skip if unavailable |
| `Vue Dsfr` | public | `49` | `In progress` | required attempt |

Inspect the available status options before setting them. Names are case-sensitive:

```text
gh project field-list <project number> --owner dnum-mi --format json --jq '.fields[] | select(.name == "Status") | {id, name, options}'
```

If the private project appears in the discovery result, add and update it once:

```text
gh project item-add 6 --owner dnum-mi --url <PR URL> --format json
gh project item-edit 6 --owner dnum-mi --url <PR URL> --field Status --value "Revue de code en cours"
```

If either command fails because the project is inaccessible, do not retry it. Continue with the public project:

```text
gh project item-add 49 --owner dnum-mi --url <PR URL> --format json
gh project item-edit 49 --owner dnum-mi --url <PR URL> --field Status --value "In progress"
```

Verify each update by locating the PR URL and its status:

```text
gh project item-list <project number> --owner dnum-mi --limit 500 --format json
```

Use `--jq` to filter the JSON output when the project is large. If the private project, its status field, or its permissions are unavailable, report that it was skipped and continue. If the public project is unavailable, report the exact blocked step while preserving the PR creation result.

- Show the created PR URL and a concise summary, including the linked-issue metadata result, the private-project result (`updated` or `skipped`), and the public-project result.
