# Guide du projet VueDsfr

Lis attentivement et suis les instructions contenues dans les fichiers suivants :

1. **Instructions générales de codage** : `.github/copilot-instructions.md`
   - Architecture et structure des fichiers
   - Workflow de développement
   - Patterns TypeScript et Vue.js
   - Conventions de test
   - Workflow GitHub (issues, branches, PR)
   - Qualité du code et commits

2. **Instructions spécifiques aux tâches** : `.github/copilot-tasks.instructions.md`
   - Tâches d'analyse de code
   - Création de composants et composables
   - Refactorisation
   - Génération de stories Storybook
   - Documentation VitePress
   - Tests et qualité

## Résumé des règles clés

### Vue.js & Composition API
- TOUJOURS utiliser `<script setup lang="ts">`
- Props & Emits avec types TypeScript
- Props booléennes : ne pas utiliser `withDefaults` si valeur par défaut = `false`

### Workflow GitHub
- **Branches** : `{numéro-issue}-{type}-{description-kebab-case}`
- **Commits** : Format conventionnel (voir `.github/conventions-commits.md`)
- **PR** : Toujours lier à une issue, base = `develop`

### TypeScript
- Types explicites, éviter `any`
- Interfaces pour les objets
- Props avec définition par types

### Tests
- Vitest pour tous les tests
- Fichiers `.spec.ts` colocalisés
- Pas de warnings dans la sortie

### Documentation
- Français pour la documentation utilisateur
- Stories Storybook au format CSF3
- Typographie française : apostrophes `'` et espaces insécables

Applique systématiquement ces conventions dans toutes tes contributions au projet.
