# Adaptateur Copilot

Extensions spécifiques à Copilot pour le projet VueDsfr.

## Règles communes

Consulter [`AGENTS.md`](../AGENTS.md) pour le guide central agnostique.

Les **Skills** du projet s'appliquent automatiquement :
- `.agents/skills/code-implementation/` — implémentation & refactoring
- `.agents/skills/test-writing/` — tests
- `.agents/skills/documentation/` — documentation
- `.agents/skills/commit-conventions/` — commits & PR (priorité absolue)

## Agent-only (Copilot)

- Raison : aucun besoin spécifique documenté à ce jour
- Impact : Copilot utilise uniquement les skills communes
- Fallback : consulter `.agents/*` et `AGENTS.md`
