# Adaptateur Copilot

Extensions spécifiques à Copilot pour le projet VueDsfr.

## Règles communes

Consulter [`AGENTS.md`](../AGENTS.md) pour le guide central agnostique.

Les **Skills** du projet s'appliquent automatiquement :
- `.agents/skills/code-implementation/` — implémentation & refactoring
- `.agents/skills/test-writing/` — tests
- `.agents/skills/documentation/` — documentation
- `.agents/skills/commit-conventions/` — commits & PR (priorité absolue)

## Commandes custom

Les workflows communs vivent dans `agent-instructions/*`.

Les commandes Copilot sont exposées comme prompt files dans `.github/prompts/*.prompt.md` :
- `/commit-staged`
- `/create-branch`
- `/create-issue`
- `/create-pr`

## Agent-only (Copilot)

- Raison : GitHub Copilot expose les workflows réutilisables via des prompt files.
- Impact : Copilot utilise les skills communes et les commandes custom de `.github/prompts/*`.
- Fallback : consulter `.agents/*` et `AGENTS.md`
