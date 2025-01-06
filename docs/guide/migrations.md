# Migrations

## Migration vers 8.x (depuis 7.x)

Avant la v8, certaines fonctions qui ne devaient pas être dans le bundel final l’étaient : `vueDsfrComponentResolver` et `vueDsfrAutoimportPreset`.

Ils sont désormais dans un export à part, ce qui allège le bundle de la bibliothèque, et sépare bien la bibliothèque des fonctions méta.

Voici ce qui doit être changé dans votre `vite.config.ts` (uniquement si vous utilisiez déjà ces deux fonctions) :

```diff
 import {
   vueDsfrAutoimportPreset,
   vueDsfrComponentResolver,
-} from '@laruiss/vue-dsfr'
+} from '@laruiss/vue-dsfr/meta'
```

Et c’est tout ce que vous devrez changer.

Maintenant, si vous souhaitez ne plus avoir d’appels réseaux et utiliser les icônes de `@iconify/vue`, nous vous invitons à lire la documentation améliorée en ce sens [ici](/guide/icones.md).

## Migration vers 7.x (depuis 4.x, 5.x ou 6.x)

Avant la v7, le tableau `modelValue` de [`DsfrCheckboxSet`](/composants/DsfrCheckboxSet) était un tableau de `string` avec les valeurs des propriétés de l’attribut `name` de chaque case à cocher.

Ce n’était ni une API idéale, ni le comportement attendu en Vue natif ou en HTML/JS natif.

::: code-group
<Story data-title="Démo" min-h="350px">
  <DsfrCheckboxSetV7Demo />
</Story>

<<< ../docs-demo/DsfrCheckboxSetV7Demo.vue [Code de la démo]
:::

2. Les onglets
3. Les accordéons

### Les icônes

Le gros changement est le suivant : `@iconify/vue` remplace `oh-vue-icons`.

#### Pourquoi

Il y a plusieurs raisons à ce changement, et par ordre décroissant d’importance :

1. `oh-vue-icons` semble bloqué en 1.0.0-rc3 depuis très longtemps, et le dernier commit sur le projet remonte à il y a 2 ans ;
2. `@iconify/vue` est plus simple à implémenter dans un projet ;
3. `@iconify/vue` repose sur le projet iconify qui est très bien maintenu et depuis très longtemps ;
4. `@iconify/vue` propose encore plus de collections d’icônes.

#### Comment

Pour rendre la migration la plus douce possible un composant `VIcon` a été ajouté à la bibliothèque et est exporté comme les autres, cf. la documentation sur les icônes.

#### Implication et changements à faire sur vos projets

##### Vue + vite

Il vous suffira donc dans vos projets d’importer VIcon depuis `@gouvminint/vue-dsfr` dans tous les fichiers où vous utilisez VIcon de OhVueIcons.

Il faudra enlever les références à `oh-vue-icons`, par exemple dans `main.ts` :

::: code-group

```ts [main.ts]
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { createApp } from 'vue'
import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/component/component.main.min.css'

import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvminint/vue-dsfr/styles'

import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css' // [!code --]

import App from './App.vue'
import * as icons from './icons'
import router from './router/index' // [!code --]

import './main.css'

addIcons(...Object.values(icons)) // [!code --]

createApp(App)
  .use(router)
  .component('VIcon', OhVueIcon) // [!code --]
  .mount('#app')
```

:::

Il faudra supprimer le fichier `icons.ts` qui n’est plus utile.

Si vous importiez vous-même `OhVueIcon` de `oh-vue-icons` dans certains composants, il faudra remplacer le module de l’import par `@gouvminint/vue-dsfr` :

```vue
<script lang="ts" setup>
import { OhVueIcon as VIcon } from 'oh-vue-icons' // [!code --]
import { VIcon } from '@gouvminint/vue-dsfr' // [!code ++]
</script>
```

Il faudra peut-être dans certains cas renommer les icônes car la syntaxe attendue par `@iconify/vue` est `nom-de-collection:nom-d-icone` alors que `oh-vue-icon` attendait simplement `nom-de-collection-nom-d-icone` et les noms de collections ne sont pas forcément identiques entre `oh-vue-icons` et `@iconify/vue`.

::: tip Astuce
Si vous en êtes resté aux icônes remix icons, le nom de la collection étant d’une part sans tiret `-` et d’autre part identique entre `oh-vue-icons` et `@iconify/vue` (`ri`), vous n’aurez rien à modifier. Idem pour Bootstrap Icons (`bi`).
:::

Dans les cas ou le nom de la collection ne contient pas de tiret `-`, alors le `-` est accepté en tant que séparateur entre le nom de collection et le nom d’icône.

##### Nuxt

Il faudra utiliser la [v2](https://github.com/laruiss/vue-dsfr-nuxt-module/releases/tag/v2.0.0) de [`vue-dsfr-nuxt-module`](https://github.com/laruiss/vue-dsfr-nuxt-module), et enlever `oh-vue-icons` des dépendances et supprimer les références à `oh-vue-icons` :

Dans `nuxt.config.ts` :

```diff
-import * as icons from './icons'
 // (...)
 export default defineNuxtConfig({
   // (...)
-  runtimeConfig: {
-    public: {
-      vueDsfr: {
-        icons: Object.values(icons),
-      },
-    },
-  },

```

et supprimer le fichier `icons.ts` si vous en avez un

Il faudra peut-être dans certains cas renommer les icônes car la syntaxe attendue par `@iconify/vue` est `nom-de-collection:nom-d-icone` alors que `oh-vue-icon` attendait simplement `nom-de-collection-nom-d-icone` et les noms de collections ne sont pas forcément identiques entre `oh-vue-icons` et `@iconify/vue`.

Dans les cas ou le nom de la collection ne contient pas de tiret `-`, alors le `-` est accepté en tant que séparateur entre le nom de collection et le nom d’icône.

::: tip Astuce
Si vous en êtes resté aux icônes remix icons, le nom de la collection étant d’une part sans tiret `-` et d’autre part identique entre `oh-vue-icons` et `@iconify/vue` (`ri`), vous n’aurez rien à modifier. Idem pour Bootstrap Icons (`bi`).
:::

### Les onglets

Avant la version 6.x de VueDsfr, pour activer un onglet particulier, il fallait passer la prop `selected` au bon titre d’onglet et à la bonne zone de contenu.

Nous avions exposé un composable `useTabs()` pour faciliter un peu cette gestion. C’était pourtant déjà trop compliqué à notre goût.

Désormais c’est beaucoup plus simple, il suffit d’utiliser `v-model` sur le composant parent [`DsfrTabs`](/composants/DsfrTabs).

### Les accordéons

Désormais, comme pour les onglets, pour choisir un accordéon particulier à ouvrir, il faudra utiliser `v-model` sur le composant [`DsfrAccordionsGroup`](/composants/DsfrAccordionsGroup), tel que décrit dans la [documentation](/composants/DsfrAccordionsGroup).

## Migration vers 3.x (depuis 1.x ou 2.x)

La migration de la version 1.x ou 2.x vers la version 3.x nécessite un certain nombre de changements
dont voici la liste que nous espérons exhaustive.

### Commun à Vue.js et Nuxt

#### Ajout de la dépendance `@gouvfr/dsfr`

Que vous utilisiez simplement Vue.js ou que vous l’utilisiez avec Nuxt, il faudra ajouter dans
vos dépendances la bibliothèque officielle du DSFR pour ajouter le CSS de cette bibliothèque.

```
pnpm i @gouvfr/dsfr
```

Ou

```
npm i @gouvfr/dsfr
```

Ou

```
yarn add @gouvfr/dsfr
```

#### Le dossier `/public/icons` est désormais inutile

Depuis la version 1.5, il fallait copier et coller les icones du DSFR dans le dossier `/public/icons`.
Ce n’est plus nécessaire, vous pouvez donc le supprimer.

### Vue.js (sans Nuxt)

#### Ajout du CSS du DSFR

Il faut ajouter le CSS du DSFR dans le fichier qui est le point d’entrée de votre application (en général `src/main.js`)

##### Méthode simple

Utiliser tout le CSS des deux bibliothèques :

```javascript
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvminint/vue-dsfr/styles'
```

##### Méthode pour un bundle optimisé

Utiliser le minimum de CSS du DSFR :

- le **core**
- les **styles des liens** du DSFR
- les **classes utilitaires** du DSFR
- le **CSS de VueDsfr**
- éventuellement d’autres parties du CSS (notamment pour les icônes, cf. [la documentation officielle du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/icones))

```javascript
import '@gouvfr/dsfr/dist/core/core.main.min.css' // Le CSS minimal du DSFR
import '@gouvfr/dsfr/dist/component/component.main.min.css' // Styles de tous les composants
import '@gouvfr/dsfr/dist/utility/utility.main.min.css' // Classes utilitaires : les composants de VueDsfr en ont besoin
import '@gouvminint/vue-dsfr/styles' // Les styles propres aux composants de VueDsfr

import '@gouvfr/dsfr/dist/scheme/scheme.min.css' // Facultatif : Si les thèmes sont utilisés (thème sombre, thème clair)
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css' // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
```

### Nuxt 3

Pour l’utilisation de VueDsfr 3 avec Nuxt 3, il faut changer le `nuxt.config.ts` :

Avant :

```javascript
export default defineNuxtConfig({
  css: [
    '@gouvminint/vue-dsfr/styles',
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
})
```

Après :

```javascript
export default defineNuxtConfig({
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css', // Le CSS du DSFR
    '@gouvminint/vue-dsfr/styles', // Les styles propres aux composants de VueDsfr

    '@gouvfr/dsfr/dist/utility/icons/icons.min.css', // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
})
```

Ou

```javascript
export default defineNuxtConfig({
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css', // Le CSS du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css', // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css', // Classes utilitaires : les composants de VueDsfr en ont besoin
    '@gouvminint/vue-dsfr/styles', // Les styles propres aux composants de VueDsfr

    '@gouvfr/dsfr/dist/scheme/scheme.min.css', // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css', // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
})
```

<script setup>
import DsfrCheckboxSetV7Demo from '../docs-demo/DsfrCheckboxSetV7Demo.vue'
</script>
