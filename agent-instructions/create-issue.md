# Create Issue

Goal:
Create a GitHub issue from what is currently in the Git index (staging area), using the GitHub CLI (`gh`).

Expected behavior:

1. Check that files are staged.
2. Read the staged diff to understand the intent, scope, and motivation of the changes.
3. Infer the issue that should exist before these staged changes are implemented.
4. Draft a clear issue title and body in French.
5. Create the issue with `gh issue create`.
6. Show a summary with the issue URL, title, and the staged files used as input.

Required title format:

```text
<short action-oriented issue title>
```

Valid title examples:

- Ajoute le lien du dépôt GitHub sur la page manifeste
- Améliore l'accessibilité du sélecteur de langue
- Documente les instructions communes des agents

Required body structure:

```text
## Contexte
- <élément de contexte 1>
- <élément de contexte 2>

## Changements proposés
- <changement proposé 1>
- <changement proposé 2>
- <changement proposé 3>

## Critères d'acceptation
- <critère 1>
- <critère 2>
- <critère 3>
```

Rules:

- Use only the changes that are already staged to infer the issue.
- Do not add anything to or remove anything from the staging area.
- Do not create an issue if the staging area is empty; explain that files must be staged first.
- Do not invent unrelated requirements or implementation details.
- Write the generated issue title and body in French, except for technical identifiers, branch names, URLs, commands, and code symbols.
- Do not interpolate the generated title or body directly into a shell command.
- Write the generated body to a temporary file and pass it with `--body-file`.
- Pass the title through an argument-safe API. If only a shell is available, write the title to a temporary file and read that file as a single quoted argument instead of embedding the generated title directly in the command.
- Keep the issue title concise and specific.
- Use `gh issue create` to create the issue.
- If `gh` is not installed, not authenticated, or the repository remote cannot be resolved by `gh`, do not create the issue and explain the blocking step.
- Do not commit, push, or modify files as part of this workflow.

Implementation:

- Inspect staged files with `git diff --cached --name-status`.
- Inspect staged content with `git diff --cached`.
- Generate the final title and body.
- Write the generated body to a temporary file.
- Create the issue without embedding generated Markdown in the shell command:

```text
gh issue create --title <title passed safely> --body-file <body-file>
```

- Show the created issue URL and the staged files that informed it.
