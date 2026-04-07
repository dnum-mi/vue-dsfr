# Instructions de codage IA pour VueDsfr

## Vue d'ensemble du projet

VueDsfr est une bibliothèque de composants Vue 3 qui porte le Système de Design Français (DSFR) vers Vue.js. Elle fournit ~50 composants accessibles et prêts pour la production suivant les normes de design du gouvernement français.

## Pour les tâches que je vais te demander

Voir le fichier `docs/ai/tasks.md` pour les instructions spécifiques aux tâches.

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

### Contournement temporaire Storybook

- `pnpm run build-storybook` ne lance pas le binaire Storybook de la racine directement.
- Le build Storybook passe par le sous-répertoire `.storybook-build/`, qui embarque une version isolée de `vite@7`.
- Ce contournement est **temporaire**.
- Raison : avec `storybook@10.3.x` et `vite@8`/Rolldown, le build Storybook échoue actuellement sur une erreur de bundling CSS.
- Tant que ce bug n'est pas corrigé côté Storybook, il ne faut pas "simplifier" ce montage ni supprimer `.storybook-build/`.
- Dès que Storybook corrigera le problème, il faudra **revenir sur ce contournement** :
  - supprimer `.storybook-build/`
  - remettre `build-storybook` sur un appel Storybook standard depuis la racine
  - vérifier que le build fonctionne de nouveau avec la stack principale du projet

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

### Workflow GitHub : Issues et Pull Requests

- **Issues obligatoires** : Toute PR doit être liée à une issue GitHub
- **Création d'issue** :
  - Utiliser `gh issue create` avec titre et description en français
  - **Ne pas exécuter la commande** - la fournir à l'utilisateur pour qu'il l'exécute
  - Format du titre : `type(scope): 🔧 description courte du problème`
- **Nommage des branches** :
  - Préfixe obligatoire avec numéro d'issue : `{numéro-issue}-{type}-{description-kebab-case}`
  - Exemple : `1172-fix-semantic-release-refactor-config`
- **Pull Requests** :
  - Titre reprenant le message de commit principal
  - Corps commençant par Fixes avec référence à l'issue
  - Description détaillée du problème et de la solution
  - Branche cible : `develop` (sauf exceptions)

### Qualité du code et commits

- **Commits** : Suivre les commits conventionnels (voir `docs/ai/commit-message.md`)
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
</script>
```

```vue
<script setup lang="ts">
// Props avec defaults personnalisés
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  size: 'md', // --------  Valeur par défaut custom
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

## 🎯 Objectif

Ces instructions guident les agents IA (par exemple Copilot, Claude, Codex) pour générer un code cohérent avec les conventions du projet.
Le projet utilise **Vue 3 (Composition API)**, **TypeScript strict**, **Fastify** côté serveur, et **ESM** comme module system.

---

## 🧱 Règles générales

- Toujours utiliser **TypeScript** (pas de JavaScript pur).
- Activer les **types stricts** : `strict: true` dans `tsconfig.json`.
- Ne jamais utiliser `any`, `as unknown`, ou les assertions de type non justifiées.
- Préférer les **types explicites** aux inférences implicites si cela améliore la lisibilité.
- Toujours suivre les conventions ESLint du projet : **Airbnb + Prettier**.
- Les imports doivent être **ESM** (`import` / `export`) — pas de `require`.
- Toujours penser en **code modulaire**, éviter les fonctions globales.
- Les noms de variables et fonctions doivent être clairs, descriptifs et en anglais.

---

## 🖼️ Frontend (Vue 3)

- Toujours utiliser la **Composition API** (`<script setup>`).
- Préférer les **composables** pour factoriser la logique (dans `src/composables/`).
- Respecter les conventions de nommage :
  - Composants : `PascalCase`
  - Props / emits : `camelCase`
- Tous les composants doivent être typés (`defineProps`, `defineEmits` avec interfaces ou `zod`).
- Utiliser `ref` et `computed` de manière déclarative et concise.
- Préférer **Pinia** pour le store global (si besoin).
- Les tests unitaires doivent être écrits avec **Vitest**.

### Exemple attendu

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

import { useCounterStore } from '@/stores/counter'

const count = ref(0)
const double = computed(() => count.value * 2)

const store = useCounterStore()

function increment () {
  count.value++
  store.logAction('increment')
}
</script>
```

---

## 🧪 Tests

- Utiliser **Vitest** pour les tests unitaires et d'intégration.
- Ne jamais mocker inutilement — préférer les doubles simples.
- Couvrir la logique critique, surtout les `utils` et `services`.

## 🧭 Documentation & commentaires

- Ajouter un JSDoc clair sur les fonctions publiques ou les utilitaires partagés.
- Expliquer le _pourquoi_ plus que le _comment_ dans les commentaires.
- Préférer les docblocks structurés à des commentaires inline dispersés.

## 🧠 Style et lisibilité

- Préférer la clarté au "clever code".
- Éviter les raccourcis ou la micro-optimisation prématurée.
- Toujours nommer les fonctions selon leur intention (`getUserProfile` plutôt que `fetchData`).

## 💬 Pour les agents IA conversationnels (Copilot Chat, Claude, Codex)

Quand l’utilisateur demande :

- "Explique ce code" → Fournir une explication pédagogique claire, sans jargon excessif.
- "Refactorise" → Proposer une version plus claire, typée et conforme aux règles ci-dessus.
- "Ajoute des tests" → Générer des tests Vitest minimalistes et lisibles.
- "Ajoute la doc" → Produire du JSDoc complet et concis.

## Montée de version de dépendances

- Toujours vérifier les notes de version pour les breaking changes.
- Tester localement avant de committer les mises à jour.
- Utiliser `npx taze -I` pour les mises à jour
- Vérifier que les tests passent après la mise à jour.
- Mettre à jour les types si nécessaire après une mise à jour majeure.
- Vérifier la cohérence de la version de pnpm utilisée dans les workflows CI par rapport à la version du `package.json`.
