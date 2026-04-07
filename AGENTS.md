# Guide du projet VueDsfr

Ce fichier est la porte d'entrée commune pour tous les agents IA (Codex, Claude, Copilot, etc.).

## Source de vérité commune

Les règles partagées du projet sont centralisées dans :

1. `docs/ai/README.md`
2. `docs/ai/instructions.md`
3. `docs/ai/tasks.md`
4. `docs/ai/commit-message.md`

Ces fichiers sont l'unique référence fonctionnelle et doivent rester uniformes pour tous les agents.

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
