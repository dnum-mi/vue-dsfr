# Guide du projet VueDsfr

Ce fichier est la porte d'entrée commune pour tous les agents IA (Codex, Claude, Copilot, etc.).

## Chargement des règles par contexte

Source de vérité commune :

1. `docs/ai/README.md`
2. `docs/ai/instructions.md`
3. `docs/ai/tasks.md`
4. `docs/ai/commit-message.md`

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

## Fichiers spécifiques par agent

Les fichiers agent (exemples : `CLAUDE.md`, `.github/copilot-instructions.md`, `.github/copilot-tasks.instructions.md`, `.github/.copilot-commit-message-instructions.md`) sont des adaptateurs.

Ils peuvent uniquement contenir :

- des liens vers la source de vérité commune
- des consignes propres à un agent, explicitement marquées `Agent-only (NomAgent)`

Ils ne doivent pas dupliquer ni modifier les règles communes.

## Comment ajouter une consigne

1. Si la consigne s'applique à tous les agents : modifier `docs/ai/*`.
2. Si la consigne dépend d'un agent : modifier uniquement le fichier adaptateur de cet agent.
3. Toute consigne agent-spécifique doit utiliser ce format :

```md
## Agent-only (NomAgent)
- Raison : ...
- Impact : ...
- Fallback : ...
```

## Règles normatives

Les règles normatives de développement, de tâches et de commits sont définies uniquement dans `docs/ai/*`.

Applique systématiquement ces conventions dans toutes tes contributions au projet.
