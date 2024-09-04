# Commencer avec VueDsfr

::: info NOTE

Ceci est le guide d̛’utilisation de la bibliothèque. Si vous cherchez à contribuer, se référer au
[Guide du développeur](./guide-developpeur).

:::

::: info Si vous recherchez :

- le [storybook](https://storybook.vue-ds.fr), il est ici : [storybook.vue-ds.fr](https://storybook.vue-ds.fr) (ou [sb.vue-ds.fr](https://sb.vue-ds.fr) ou [stories.vue-ds.fr](https://stories.vue-ds.fr)).
- l’[application de demo](https://demo.vue-ds.fr) avec plusieurs composants utilisés dans une vraie app Vue 3, c’est ici : [demo.vue-ds.fr](https://demo.vue-ds.fr)
- d’autres éléments de l’[écosystème VueDsfr](./ecosysteme.md), c’est ici : [vue-ds.fr/guide/ecosysteme](https://vue-ds.fr/guide/ecosysteme).

:::

::: warning Prérequis

Pour utiliser cette bibliothèque, il vous faudra **[Vue 3](https://v3.vuejs.org/)** (et **[Vue-Router 4](https://next.router.vuejs.org/)**). Par conséquent, si vous utilisez Nuxt, il vous faut **[Nuxt 3](https://v3.nuxtjs.org/)** (plus de détails plus loin).

:::

## Utiliser create-vue-dsfr (fortement recommandé)

La façon la plus simple de commencer un projet est d’utiliser le package `create-vue-dsfr`, qui permet de créer un projet NPM avec le nécessaire et suffisant (ou plus, selon votre choix) pour développer un projet utilisant VueDsfr, que ce soit pour Vite (Vue3) ou pour Nuxt (Nuxt3), avec TypeScript et ESLint.

Avec npm :

```shell
npm init vue-dsfr
```

Avec pnpm :

```shell
pnpm create vue-dsfr
```

Avec yarn :

```shell
yarn create vue-dsfr
```

Et suivez les indications de l’assistant.

## Ajouter la bibliothèque à un projet existant

### Installer la bibliothèque en tant que dépendance du projet

Afin d'installer la bibliothèque, taper ces commandes dans votre console au sein du répertoire du projet :

```shell
npm install @gouvfr/dsfr @gouvminint/vue-dsfr
```

::: info Pourquoi `@gouvfr/dsfr` ?

`@gouvminint/vue-dsfr` utilise le CSS de `@gouvfr/dsfr`, c’est pourquoi il faut l’installer aussi.

:::

### Utiliser la bibliothèque en tant que plugin

::: warning Méthode déconseillée

Cette méthode est déconseillée. Elle est présente dans la documentation pour des raisons historiques.
Cette méthode est facile à mettre en place et permet de tester rapidement les composants dans une application, cependant, comme elle enregistre tous les composants, ils sont tous présents dans le bundle final, ce qui est loin d’être optimal.

On peut avoir le meilleur des deux mondes (**import automatique** des composants et un **bundle final optimisé** qui ne contient que les composants réellement utilisés) avec l’auto-import et le component resolver livrés avec les versions [5.5+ de VueDsfr](https://github.com/dnum-mi/vue-dsfr/releases/tag/v5.5.0).
C’est le défaut depuis la version [1.7.0](https://github.com/laruiss/create-vue-dsfr) de l’assistant officiel [create-vue-dsfr](https://github.com/laruiss/create-vue-dsfr).

Voir plus loin la [section correspondante](#avoir-un-bundle-optimise-et-une-dx-optimale).

:::

#### Ajouter le plugin

Ajouter la bibliothèque en tant que plugin a deux conséquences :

| pros | cons |
| ---- | ---- |
| Pas besoin d’enregistrer les composants qu’on utilise : le plugin les enregistre tous pour nous | Le bundle final sera plus lourd |

##### Dans une application Vite

À partir d'un fichier `main.ts` simple comme celui-ci :

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
  .mount('#app')
```

ajouter les lignes suivantes :

```typescript{2-4,9}
import { createApp } from 'vue'
import '@gouvfr/dsfr/dist/dsfr.min.css'      // Import des styles du DSFR //
import '@gouvminint/vue-dsfr/styles'         // Import des styles globaux propre à VueDSFR //
import VueDsfr from '@gouvminint/vue-dsfr'   // Import (par défaut) de la bibliothèque //

import App from './App.vue'

const app = createApp(App)
  .use(VueDsfr)                              // Enregistrement de la bibliothèque en tant que plugin //
  .mount('#app')
```

##### Dans nuxt 3

Utiliser le module [`vue-dsfr-nuxt-module`](https://www.npmjs.com/package/vue-dsfr-nuxt-module) et sa documentation (`README.md`).

## Utiliser la bibliothèque de composants sans plugin

Il est possible de ne pas importer tous les composants, et de sélectionner les composants utilisés :

```js{2,16}=
import { createApp } from 'vue'

import App from './App.vue'
import {
  DsfrHeader,
  DsfrButton,
  DsfrBreadcrumb,
  DsfrCard,
  VIcon,
} from '@gouvminint/vue-dsfr'                   // Imports nommés de la bibliothèque

import '@gouvfr/dsfr/dist/dsfr.min.css'         // Import des styles du DSFR
import '@gouvminint/vue-dsfr/styles'            // Import des styles propres à la bibliothèque VueDSFR

const app = createApp(App)
  .component('DsfrHeader', DsfrHeader)          // Enregistrement global du composant DsfrHeader
  .component('DsfrButton', DsfrButton)          // Enregistrement global du composant DsfrButton
  .component('DsfrBreadcrumb', DsfrBreadcrumb)  // Enregistrement global du composant DsfrBreadcrumb
  .component('DsfrCard', DsfrCard)              // Enregistrement global du composant DsfrCard
  .component('VIcon', VIcon)                    // Enregistrement global du composant VIcon
  .mount('#app')
```

:::info
Il faut enregistrer globalement le composant **VIcon** si vous voulez l’utiliser comme dans l’exemple ci-dessus, ou bien l’importer dans chaque composant où il sera utilisé.
:::

::: warning

Cette méthode permet de n’avoir dans le bundel final que les composants utilisés dans l’application. Cependant, la DX n’est pas optimale.

:::

## Utiliser les icônes

Cf. [la page dédiée](./icones.md)

## Avoir un bundle optimisé et une DX optimale

Il est possible d’intégrer moins de CSS, et de n’importer que les composants réellement utilisés dans votre application, sans avoir à écrire les imports dans votre code, voici quelques notes à ce propos (voir les commentaires dans le code).

::: warning Important

Si vous avez utilisé la version 1.7+ de `create-vue-dsfr` pour créer votre projet, tout ce qui suit est déjà fait !

:::

### Vue

Dans le point d’entrée de votre application Vue (souvent `main.js` ou `main.ts`) :

```typescript
import '@gouvfr/dsfr/dist/core/core.main.min.css' // Le CSS minimal du DSFR
import '@gouvfr/dsfr/dist/component/component.main.min.css' // Styles de tous les composants du DSFR
import '@gouvfr/dsfr/dist/utility/utility.main.min.css' // Classes utilitaires : les composants de VueDsfr en ont besoin
import '@gouvfr/dsfr/dist/scheme/scheme.min.css' // Facultatif : Si les thèmes sont utilisés (thème sombre, thème clair)

import '@gouvminint/vue-dsfr/styles' // Les styles propres aux composants de VueDsfr
```

### Les imports automatiques des composables et des composants

À partir de la version [`5.5.0`](https://github.com/dnum-mi/vue-dsfr/releases/tag/v5.5.0), VueDsfr intègre 3 nouveaux exports pour pouvoir importer automatiquement les composables et autres fonctions et les composants (grâce au plugin vite [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import)).

#### Les imports automatiques des composables et fonctions

Il y a deux presets livrés avec VueDsfr (**depuis la v5.5.0 seulement**) à utiliser avec le plugin [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import)) :

Installer les dépendances de développement :

```shell
npm i -D unplugin-auto-import unplugin-vue-components
```

Ajouter ces lignes dans `vite.config.ts` :

```typescript{6-12,22-51}
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  vueDsfrAutoimportPreset,
  vueDsfrComponentResolver
} from '@gouvminint/vue-dsfr'

const isCypress = process.env.CYPRESS === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
        ...(isCypress ? [] : ['vitest']),
        vueDsfrAutoimportPreset,       // Autoimport des composables de VueDsfr
      ],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    // Autoimport des composants utilisés dans les templates
    Components({
      extensions: ['vue'],
      dirs: ['src/components'],        // Autoimport de vos composants qui sont dans le dossier `src/components`
      include: [/\.vue$/, /\.vue\?vue/],
      dts: './src/components.d.ts',
      resolvers: [
        vueDsfrComponentResolver,      // Autoimport des composants de VueDsfr dans les templates
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

```

Voici ce que cela permet :

::: code-group

```ts [main.ts avec auto-imports]
import '@gouvfr/dsfr/dist/dsfr.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'

import '@gouvminint/vue-dsfr/styles'

import App from './App.vue'
import router from './router/index'

import './main.css'

createApp(App) // createApp est autoimporté grâce au preset 'vue' dans vite.config.ts // [!code warning]
  .use(router)
  .mount('#app')
```

```typescript{6-7} [main.ts sans auto-imports]
import '@gouvfr/dsfr/dist/dsfr.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'

import '@gouvminint/vue-dsfr/styles'

import { createApp } from 'vue' // [!code ++]
import { VIcon } from '@gouvminint/vue-dsfr' // Facultatif : uniquement si vous utilisez VIcon dans votre projet // [!code ++]

import App from './App.vue'
import router from './router/index'
import * as icons from './icons'

import './main.css'

createApp(App)
  .component('VIcon', VIcon) // Facultatif : uniquement si vous utilisez VIcon dans votre projet  // [!code ++]
  .use(router)
  .mount('#app')
```

```vue [App.vue avec auto-imports]
<script setup lang="ts">
useScheme() // Autoimporté grâce à vueDsfrAutoimportPreset dans vite.config.ts // [!code warning]

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  // (...)
]
const searchQuery = ref('')
</script>

<template>
  <!-- DsfrHeader est autoimporté grâce à vueDsfrComponentResolver dans vite.config.ts --> // [!code warning]
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />

  <div class="fr-container  fr-mt-3w  fr-mt-md-5w  fr-mb-5w">
    <RouterView />
  </div>
</template>
```

```vue{2} [App.vue sans auto-imports]
<script setup lang="ts">
import { DsfrHeader, useScheme } from '@gouvminint/vue-dsfr' // [!code ++]

useScheme()

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  // (...)
]
const searchQuery = ref('')
</script>

<template>

  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />

  <div class="fr-container  fr-mt-3w  fr-mt-md-5w  fr-mb-5w">
    <RouterView />
  </div>
</template>
```

:::

### Nuxt

1. Ajouter les dépendances `@gouvfr/dsfr` et `@gouvminint/vue-dsfr` au projet

```bash
# Avec pnpm
pnpm add @gouvfr/dsfr @gouvminint/vue-dsfr

# Avec yarn
yard add @gouvfr/dsfr @gouvminint/vue-dsfr

# Avec npm
npm i @gouvfr/dsfr @gouvminint/vue-dsfr
```

2. Ajouter le CSS de DSFR et de VueDsfr dans la section `css` de `nuxt.config.ts`

```ts{3-9}
export default defineNuxtConfig({
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',           // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css', // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css',     // Classes utilitaires : les composants de VueDsfr en ont besoin, contient aussi les icônes

    '@gouvfr/dsfr/dist/scheme/scheme.min.css',            // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)

    '@gouvminint/vue-dsfr/styles',                        // Styles des composants VueDsfr
  ],
})
```

Et voilà ! Vous êtes prêts à utiliser VueDsfr dans votre app Nuxt ✨
