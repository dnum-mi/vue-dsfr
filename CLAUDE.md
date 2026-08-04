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

## Commandes custom

Les workflows communs vivent dans `agent-instructions/*`.

Les commandes Claude Code sont exposées dans `.claude/commands/*` :
- `/commit-staged`
- `/create-branch`
- `/create-issue`
- `/create-pr`

## Agent-only (Claude)

- Raison : Claude Code expose les workflows réutilisables via `.claude/commands/*`.
- Impact : Claude utilise les skills communes et les commandes custom de `.claude/commands/*`.
- Fallback : consulter `.agents/*` et `AGENTS.md`
