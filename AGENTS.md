# Guide des Agents IA

Guide central agnostique pour tous les agents IA contribuant au projet VueDsfr.

## Gouvernance

Pour les principes généraux et la hiérarchie des documents, voir `.agents/README.md`.

## Découverte automatique des Skills

Les agents chargent automatiquement les **Skills** appropriés en fonction du contexte. Chaque skill est décrit et auto-découvrable.

### Skills du projet

| Domain | Skill | Docs associées |
|--------|-------|---|
| Implémentation & Refactoring | `.agents/skills/code-implementation/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Tests | `.agents/skills/test-writing/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Documentation | `.agents/skills/documentation/` | `.agents/instructions.md` + `.agents/tasks.md` |
| Commits & PR | `.agents/skills/commit-conventions/` | `.agents/commit-message.md` |

**Localisation** : `.agents/skills/<name>/SKILL.md`

### Principes de chargement

1. **Contexte détecté** → **Skill automatiquement chargé** selon sa description
2. **Multiples contextes** → Charger l'union des skills (ex: refactoring + tests → 2 skills)
3. **Priorité absolue** : `commit-conventions` prime pour tout commit/PR
4. **Fallback** : Si un skill est indisponible, consulter `.agents/*`

## Pour les adaptateurs agent spécifiques

Certains agents peuvent avoir des besoins spécifiques documentés dans :
- `.github/copilot-instructions.md` — Extensions Copilot
- `CLAUDE.md` — Extensions Claude

**Format obligatoire** pour toute extension spécifique :

```markdown
## Agent-only (NomAgent)
- Raison : ...
- Impact : ...
- Fallback : ...
```
