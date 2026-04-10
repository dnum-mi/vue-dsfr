# Guide du projet VueDsfr

Ce fichier est la porte d'entrée commune pour tous les agents IA (Codex, Claude, Copilot, etc.).

## Référence de gouvernance

Pour les règles de gouvernance communes (hiérarchie des documents, maintenance, format `Agent-only`), se référer à :

- `docs/ai/README.md`

## Chargement des règles par contexte

Règle générale :

- Toujours charger `docs/ai/instructions.md`.

Détection de contexte et chargement obligatoire :

- Contexte `implémentation / refactor / bugfix`
  - Déclencheurs : implémente, corrige, refactorise, modification de code.
  - Charger : `docs/ai/instructions.md` + `docs/ai/tasks.md`.
- Contexte `tests`
  - Déclencheurs : test, spec, coverage, vitest.
  - Charger : `docs/ai/instructions.md` + `docs/ai/tasks.md`.
- Contexte `documentation`
  - Déclencheurs : doc, md, storybook, vitepress.
  - Charger : `docs/ai/instructions.md` + `docs/ai/tasks.md`.
- Contexte `commit / PR title`
  - Déclencheurs : commit, conventional commit, gitmoji, PR title.
  - Charger : `docs/ai/commit-message.md`.

Règles de priorité :

1. Si plusieurs contextes sont détectés, charger l'union des fichiers requis.
2. En cas de conflit, `docs/ai/commit-message.md` prime pour les commits ; sinon `docs/ai/instructions.md`.
3. Ne pas répondre sans avoir chargé les fichiers obligatoires du contexte détecté.
