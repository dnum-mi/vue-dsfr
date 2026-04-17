# Gouvernance des consignes IA

Ce document définit comment maintenir des consignes uniformes pour tous les agents IA (agnostique sur le type d'agent : Copilot, Claude, Codex, etc.).

## Objectif

- garantir un socle unique de règles pour tous les agents
- autoriser des extensions limitées pour les capacités spécifiques d'un agent
- éviter la duplication de consignes

## Hiérarchie des documents

### Niveau 1 : Socle commun (agnostique)

1. **`instructions.md`** : règles de codage communes
2. **`tasks.md`** : attentes communes par type de tâche
3. **`commit-message.md`** : conventions de commit communes
4. **`skills/`** : workflows spécialisés découvrables par contexte

### Niveau 2 : Adaptateurs d'agent

- **`.github/copilot-instructions.md`** : compléments Copilot (si besoin)
- **`CLAUDE.md`** : compléments Claude (si besoin)
- etc.

## Dossier `skills/`

Ce dossier contient des **workflows spécialisés agnostiques**, découvrables automatiquement par les agents selon le contexte.

**Structure** :
```
skills/
├── code-implementation/
│   ├── SKILL.md
│   └── tasks.md
├── test-writing/
│   ├── SKILL.md
│   └── tasks.md
├── documentation/
│   ├── SKILL.md
│   └── tasks.md
└── commit-conventions/
    ├── SKILL.md
    └── tasks.md
```

Chaque skill dispose de :
- **SKILL.md** : description, contexte d'usage, documentation associée
- **tasks.md** : tâches courantes pour ce skill

**Chargement** : Les agents chargent automatiquement les skills correspondants en fonction du contexte de la demande.

Voir [`../AGENTS.md`](../AGENTS.md) pour le guide de sélection des skills.

## Règles de maintenance

- Les règles communes vivent uniquement dans `.agents/*` (incluant `.agents/skills/`).
- Les adaptateurs agents ne doivent pas recopier les règles communes.
- Une règle spécifique à un agent doit être marquée `Agent-only (NomAgent)`.

## Ajouter une nouvelle consigne

1. Déterminer la portée de la consigne.
   - **Commune** : concerne tous les agents → modifier `.agents/*` (incluant `.agents/skills/`)
   - **Spécifique** : concerne un seul agent → modifier uniquement le fichier adaptateur
2. Documenter la raison, l'impact et le fallback si spécifique.

Format obligatoire pour une consigne spécifique :

```md
## Agent-only (NomAgent)
- Raison : ...
- Impact : ...
- Fallback : ...
```

## Mainteneurs et collaborateurs

- **Mainteneurs** : `.agents/*` (incluant `.agents/skills/`) font autorité
- **Collaborateurs** : consulter `AGENTS.md` pour utiliser les skills au moment approprié
- **Pour corriger un bug IA** : modifier le fichier concerné dans `.agents/*`, pas les adaptateurs
