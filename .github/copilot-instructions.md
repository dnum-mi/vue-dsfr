# Instructions de codage IA pour VueDsfr

## Vue d'ensemble du projet
VueDsfr est une bibliothèque de composants Vue 3 qui porte le Système de Design Français (DSFR) vers Vue.js. Elle fournit ~50 composants accessibles et prêts pour la production suivant les normes de design du gouvernement français.

## Pour les tâches que je vais te demander

Voir le fichier `.github/copilot-tasks.instructions.md` pour les instructions spécifiques aux tâches.

## Architecture et structure des fichiers

### Organisation des composants
- **Emplacement** : `src/components/Dsfr*/`
- **Fichiers par composant** :
  - `DsfrComponent.vue` - Composant principal
  - `DsfrComponent.types.ts` - Interfaces TypeScript
  - `DsfrComponent.spec.ts` - Tests unitaires (Vitest)
  - `DsfrComponent.stories.ts` - Stories Storybook
  - `DsfrComponent.md` - Documentation du composant
  - `docs-demo/` - Composants de démonstration pour la docs

### Répertoires clés
- `src/components/` - Tous les composants DSFR (exportés via `index.ts`)
- `src/composables/` - Composables Vue partagés (useScheme, useTabs, useCollapsable)
- `src/utils/` - Fonctions utilitaires
- `meta/` - Outils de build (auto-import, résolveur de composants)
- `demo-app/` - Application de développement/démonstration
- `docs/` - Documentation VitePress
- `tests/unit/` - Utilitaires et configuration des tests

## Workflow de développement

### Commandes de build et exécution
```bash
pnpm install              # Installer les dépendances (utiliser pnpm, pas npm/yarn)
pnpm dev                  # Démarrer le serveur de développement Storybook (:6006)
pnpm demo                 # Démarrer l'app de démonstration (:5173)
pnpm docs:dev            # Démarrer la documentation VitePress (:4173)
pnpm build               # Builder la bibliothèque vers dist/
pnpm test                # Exécuter les tests unitaires Vitest
pnpm coverage            # Exécuter les tests avec couverture
pnpm lint                # Exécuter ESLint
pnpm format              # Corriger automatiquement ESLint
```

### Pattern de création de composant
1. Créer le répertoire `src/components/DsfrNewComponent/`
2. Ajouter les fichiers : `DsfrNewComponent.vue`, `.types.ts`, `.spec.ts`, `.stories.ts`, `.md`
3. Exporter depuis `src/components/index.ts` (types et composant)
4. Ajouter à `src/index.ts` s'il s'agit d'une nouvelle exportation racine
5. Exécuter `pnpm check-exports` pour vérifier les exportations

### Patterns TypeScript
- **Interface props** : `DsfrComponentProps` dans `.types.ts`
- **Ref composant** : Utiliser `InstanceType<typeof Component>['$props']` pour les types complexes
- **Clés d'injection** : Définir dans `injection-key.ts` pour la communication entre composants
- **Types composables** : Exporter l'implémentation et les interfaces de types de retour

### Patterns de test
- **Fichier de test** : `*.spec.ts` colocalisé avec le composant
- **Configuration** : `tests/unit/vitest-setup.ts` configure Vue Test Utils + jsdom
- **Mocking** : Utiliser `vi.mock()` pour les dépendances externes
- **Test de composant** : Monter avec `mount(Component, { props })`

### Intégration du style et DSFR
- **Imports CSS** : Les composants importent depuis les modules CSS `@gouvfr/dsfr`
- **Support du thème** : Utiliser le composable `useScheme` pour les modes clair/sombre
- **Accessibilité** : Tous les composants suivent les standards d'accessibilité DSFR
- **Icônes** : Utiliser le composant `VIcon` avec @iconify/vue

### Qualité du code et commits
- **Commits** : Suivre les commits conventionnels (`feat:`, `fix:`, `docs:`, etc.)
- **Linting** : @antfu/eslint-config avec règles spécifiques à Vue
- **Pre-commit** : Husky exécute lint-staged sur `*.{vue,ts}`
- **CI** : GitHub Actions exécute les tests, le linting et la vérification de build

### Points d'intégration clés
- **Installation plugin** : `app.use(VueDsfr)` enregistre tous les composants mais cette utilisation est obsolète
- **Auto-import** : Utiliser `meta/component-resolver.js` avec `unplugin-vue-components`
- **Collections d'icônes** : Le binaire `vue-dsfr-icons` génère des collections d'icônes personnalisées
- **Initialisation DSFR** : Importer `src/init-dsfr.ts` pour configurer `window.dsfr`

### Patterns courants
- **Communication composants** : Utiliser `provide`/`inject` avec des clés d'injection
- **Gestion événements** : Émettre des événements personnalisés en kebab-case
- **Nommage slots** : Utiliser des noms de slots descriptifs (ex: `header`, `content`, `footer`)
- **Classes CSS** : Suivre les conventions BEM-like DSFR
- **Gestion erreurs** : Lever des erreurs descriptives pour les combinaisons de props invalides

### Documentation
- **Docs composants** : Écrire en français (standard DSFR), inclure des exemples d'usage
- **Stories** : Utiliser le format Storybook CSF3 avec `args`/`argTypes`
- **VitePress** : Site de documentation dans `docs/` avec références de composants

## 🎯 Conventions Git & Commits

### Format des commits

Utilise **TOUJOURS** le format : `type(scope): gitmoji description`

**Exemple** : `feat(auth): ✨ ajoute la fonctionnalité de connexion OAuth2`

### Types de commits conventionnels
- `feat`: ✨ Nouvelles fonctionnalités
- `fix`: 🐛 Corrections de bugs
- `docs`: 📚 Documentation
- `style`: 💄 Formatage, style (pas de changement de logique)
- `refactor`: ♻️ Refactoring (ni feat ni fix)
- `perf`: ⚡ Améliorations de performance
- `test`: ✅ Ajout/modification de tests
- `chore`: 🔧 Maintenance, configuration, dépendances
- `ci`: 👷 CI/CD, GitHub Actions
- `revert`: ⏪ Annulation de commit

### Gitmojis recommandés
- ✨ `:sparkles:` - Nouvelle fonctionnalité
- 🐛 `:bug:` - Correction de bug
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - UI/UX, styles
- ♻️ `:recycle:` - Refactoring
- ⚡ `:zap:` - Performance
- ✅ `:white_check_mark:` - Tests
- 🔧 `:wrench:` - Configuration
- 🚀 `:rocket:` - Déploiement
- 🎨 `:art:` - Structure/format du code
- 🔒 `:lock:` - Sécurité
- 🌐 `:globe_with_meridians:` - Internationalisation
- 💾 `:floppy_disk:` - Base de données
- 🔄 `:arrows_counterclockwise:` - Réactivité, WebSockets

### Structure des messages de commit
```
type(scope): gitmoji description courte

## Pourquoi les changements ont été faits :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quelles modifications ont été apportées :
- Description détaillée des modifications
- Impact sur l'architecture/fonctionnalités
```

Pas de majuscule au début de la description courte.
Utilise la troisième personne du singulier au présent de l'indicatif pour la description courte.

## 🛠️ Conventions Techniques

### Vue.js & Composition API
- **TOUJOURS** utiliser `<script setup lang="ts">`
- Préférer les `ref()` et `computed()` aux options API
- **Props & Emits** : Utiliser TOUJOURS la définition par types TypeScript
- **Props booléennes** : Ne pas utiliser `withDefaults` si la valeur par défaut est `false`
- Exposer les références nécessaires avec `defineExpose()`

#### ✅ Props & Emits - Bonnes pratiques

```vue
<!-- ✅ Correct - Types TypeScript -->
<script setup lang="ts">
// Props simples
const props = defineProps<{
  show?: boolean // false par défaut, pas besoin de withDefaults
  title?: string // undefined par défaut
  count?: number // undefined par défaut
}>()

// Emits avec types
const emit = defineEmits<{
  'update:modelValue': [value: string]
  close: []
  submit: [data: FormData]
}>()
```

```vue
// Props avec defaults personnalisés
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  size: 'md',           // Valeur par défaut custom
  // disabled: false    // Pas besoin, false par défaut
})

</script>

<!-- ❌ Éviter - Syntaxe objet -->
<script setup>
const props = defineProps({
  show: { type: Boolean, default: false }, // Verbeux
  title: { type: String },
})
const emit = defineEmits(['update:show', 'close']) // Pas de typage
</script>
```

### Structure des composables
```typescript
export function useFeatureName () {
  const data = ref()
  const isLoading = ref(false)
  const error = ref()

  async function fetchData () {
    // logique
  }

  return {
    data: readonly(data),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchData,
  }
}
```

### Linting et formatage
- Respecter TOUTES les règles ESLint configurées
- Pas de `console.*`
- Préférer les imports nommés aux imports par défaut
- Ordre alphabétique des imports

### TypeScript
- Types explicites pour toutes les props/interfaces
- Éviter `any`, utiliser `unknown` si nécessaire
- Utiliser les types génériques pour la réutilisabilité
- Interfaces plutôt que types pour les objets

### Tâches

Pour les tâches que je vais te demander, voir `.github/copilot-tasks.instructions.md`.
