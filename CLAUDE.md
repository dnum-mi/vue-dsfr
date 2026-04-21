@.agents/README.md
@.agents/instructions.md
@.agents/tasks.md
@.agents/commit-message.md
@.agents/skills/code-implementation/SKILL.md
@.agents/skills/code-implementation/tasks.md
@.agents/skills/test-writing/SKILL.md
@.agents/skills/test-writing/tasks.md
@.agents/skills/documentation/SKILL.md
@.agents/skills/documentation/tasks.md
@.agents/skills/commit-conventions/SKILL.md
@.agents/skills/commit-conventions/tasks.md

## Règles communes

Les **Skills** du projet s'appliquent automatiquement :
- `.agents/skills/code-implementation/` — implémentation & refactoring
- `.agents/skills/test-writing/` — tests
- `.agents/skills/documentation/` — documentation
- `.agents/skills/commit-conventions/` — commits & PR (priorité absolue)

## Agent-only (Claude)

- Raison : aucun besoin spécifique documenté à ce jour
- Impact : Claude utilise uniquement les skills communes
- Fallback : consulter `.agents/*` et `AGENTS.md`
