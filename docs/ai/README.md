# Gouvernance des consignes IA

Ce document définit comment maintenir des consignes uniformes pour plusieurs agents IA.

## Objectif

- garantir un socle unique de règles pour tous les agents
- autoriser des exceptions limitées pour les capacités propres à chaque agent
- éviter la duplication de consignes

## Hiérarchie des documents

1. `docs/ai/instructions.md` : règles de codage communes
2. `docs/ai/tasks.md` : attentes communes par type de tâche
3. `docs/ai/commit-message.md` : conventions de commit communes
4. fichiers adaptateurs agent : compléments `Agent-only` uniquement

## Règles de maintenance

- Les règles communes vivent uniquement dans `docs/ai/*`.
- Les fichiers adaptateurs agent ne doivent pas recopier les règles communes.
- Une règle spécifique à un agent doit être marquée `Agent-only (NomAgent)`.

## Ajouter une nouvelle consigne

1. Déterminer la portée de la consigne.
2. Si elle est commune : modifier `docs/ai/*`.
3. Si elle est spécifique : modifier uniquement le fichier adaptateur de l'agent.
4. Documenter la raison, l'impact et le fallback.

Format obligatoire pour une consigne spécifique :

```md
## Agent-only (NomAgent)
- Raison : ...
- Impact : ...
- Fallback : ...
```
