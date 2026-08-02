# Commit Staged

Goal:
Create a commit from what is currently in the Git index (staging area).

Expected behavior:

1. Check that files are staged.
2. Read the staged diff to understand the intent of the changes.
3. Choose the most appropriate Conventional Commits type (feat, fix, docs, refactor, test, chore, perf, build, ci, style, revert).
4. Add a gitmoji between the type and the title.
5. Build a short, informative title.
6. Build a commit body with exactly 2 sections:
   - Pourquoi les changements ont été faits
   - Quelles modifications ont été apportées
7. Run the commit with this message.

Required title format:

```text
<type>: <gitmoji> <short description>
```

Valid title examples:

- feat: ✨ ajoute un sélecteur de langue bilingue
- docs: 📝 met à jour les principes du manifeste
- fix: 🐛 corrige la cible du lien GitHub

Required body structure:

```text
## Pourquoi les changements ont été faits :
- <raison 1>
- <raison 2>

## Quelles modifications ont été apportées :
- <changement 1>
- <changement 2>
- <changement 3>
```

Rules:

- The commit must use only the changes that are already staged.
- Do not add anything to or remove anything from the staging area.
- Never use an empty or generic message.
- Write the generated commit title and body in French, except for technical identifiers, branch names, URLs, commands, and code symbols.
- Avoid overly long titles (ideally <= 72 characters).
- If the staging area is empty, do not commit and explain what to do.
- Do not run `git commit --amend`.

Implementation:

- Generate the final message.
- Run: `git commit -m "<title>" -m "<body>"`.
- Show a summary with the commit hash, the title, and the list of included files.
