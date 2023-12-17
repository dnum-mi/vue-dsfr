# Commencer avec VueDsfr

Ceci est le guide d̛’utilisation de la bibliothèque. Si vous cherchez à contribuer, se référer au
[Guide du développeur](/guide-developpeur).

::: info Prérequis

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

### Utiliser la bibliothèque en tant que plugin

#### Installer la bibliothèque en tant que dépendance du projet

Afin d'installer la bibliothèque, taper ces commandes dans votre console au sein du répertoire du projet :

```shell
npm install @gouvfr/dsfr @gouvminint/vue-dsfr
```

::: info Pourquoi `@gouvfr/dsfr` ?

`@gouvminint/vue-dsfr` utilise le CSS de `@gouvfr/dsfr`, c’est pourquoi il faut l’installer aussi.

:::

#### Ajouter le plugin

Ajouter la bibliothèque en tant que plugin a deux conséquences :

| pros | cons |
| ---- | ---- |
| Pas besoin d’enregistrer les composants qu’on utilise : le plugin les enregistre tous pour nous | Le bundle final sera plus lourd |

::: info Le meilleur des deux mondes

On peut avoir le meilleur des deux mondes (la tranquilité de ne pas avoir à importer les composants et un bundle final qui ne contient que les composants réellement utilisés) avec l’auto-import et le component resolver livrés avec la version [5.5.0 de VueDsfr](https://github.com/dnum-mi/vue-dsfr/releases/tag/v5.5.0).
C’est le défaut depuis la version [1.7.0](https://github.com/laruiss/create-vue-dsfr) de l’assistant officiel [create-vue-dsfr](https://github.com/laruiss/create-vue-dsfr).

:::

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

La bibliothèque **`VueDsfr`** fournit bien plusieurs builds (`esm` et `umd`) et Nuxt3 sait lequel choisir.

Ensuite, il faut ajouter le plugin en créant le dossier `/plugins` s’il n’existe pas et en créant dedans un fichier `vue-dsfr.js`
avec le contenu suivant :

```typescript
// /plugins/vue-dsfr.js

import { defineNuxtPlugin } from '#app'
import VueDsfr from '@gouvminint/vue-dsfr'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr)
})
```

Enfin, il faudra ajouter les feuilles CSS, pour ce faire, ajouter ceci dans `nuxt.config.js` :

```typescript{4-7}
import { defineNuxtConfig } from 'nuxt3';
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
 css: [
   '@gouvfr/dsfr/dist/dsfr.min.css',
   '@gouvminint/vue-dsfr/styles',
 ],
})
```

Vous pouvez voir une implémentation **[sur Codesandbox ici](https://codesandbox.io/p/github/laruiss/nuxt-dsfr/nuxt-dsfr)**.

## Utiliser la bibliothèque de composants sans plugin

Il est possible de ne pas importer tous les composants, et de sélectionner les composants utilisés :

```js{2,16}=
import { createApp } from 'vue'
import { OhVueIcon } from 'oh-vue-icons'        // Import du composant OhVueIcon du pkg oh-vue-icons (facultatif)

import App from './App.vue'
import {
  DsfrHeader,
  DsfrButton,
  DsfrBreadcrumb,
  DsfrCard,
} from '@gouvminint/vue-dsfr'                   // Imports nommés de la bibliothèque

import '@gouvfr/dsfr/dist/dsfr.min.css'         // Import des styles du DSFR
import '@gouvminint/vue-dsfr/styles'            // Import des styles propres à la bibliothèque VueDSFR

const app = createApp(App)
  .component('VIcon', OhVueIcon)                // Enregistrement global du composant OhVueIcon (facultatif)
  .component('DsfrHeader', DsfrHeader)          // Enregistrement global du composant DsfrHeader
  .component('DsfrButton', DsfrButton)          // Enregistrement global du composant DsfrButton
  .component('DsfrBreadcrumb', DsfrBreadcrumb)  // Enregistrement global du composant DsfrBreadcrumb
  .component('DsfrCard', DsfrCard)              // Enregistrement global du composant DsfrCard
  .mount('#app')
```

:::info
Il faut enregistrer globalement le composant **VIcon** si vous voulez l’utiliser.
:::

## Utiliser les icônes

Cf. [la page dédiée](./icones.md)

## Avoir un bundle optimisé (et une DX optimale)

Il est possible d’intégrer moins de CSS, voici quelques notes à ce propos (voir les commentaires dans le code).

### Vue3

Dans le point d’entrée de votre application Vue (souvent `main.js` ou `main.ts`) :

```typescript
import '@gouvfr/dsfr/dist/core/core.main.min.css'            // Le CSS minimal du DSFR
import '@gouvfr/dsfr/dist/component/component.main.min.css'  // Styles de tous les composants du DSFR
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'      // Classes utilitaires : les composants de VueDsfr en ont besoin
import '@gouvminint/vue-dsfr/styles'                         // Les styles propres aux composants de VueDsfr

import '@gouvfr/dsfr/dist/scheme/scheme.min.css'             // Facultatif : Si les thèmes sont utilisés (thème sombre, thème clair)
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'       // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
```

### Les imports automatiques des composables et des composants

La version [5.5.0 de VueDsfr](https://github.com/dnum-mi/vue-dsfr/releases/tag/v5.5.0) intègre 3 nouveaux exports pour pouvoir importer automatiquement les composables et autres fonctions et les composants (grâce au plugin vite [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)).

#### Les imports automatiques des composables et fonctions

Il y a deux presets livrés avec VueDsfr (**depuis la v5.5.0 seulement**) à utiliser avec le plugin unplugin-auto-import :

Installer les dépendances de développement :

```shell
npm i -D unplugin-auto-import unplugin-vue-components
```

Ajouter ces lignes dans `vite.config.ts` :

```typescript{6-8,18-46}
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { vueDsfrAutoimportPreset, ohVueIconAutoimportPreset, vueDsfrComponentResolver } from '@gouvminint/vue-dsfr'

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
        vueDsfrAutoimportPreset,                       // Autoimport des composables de VueDsfr
        ohVueIconAutoimportPreset,                     // Autoimport des fonctions de OhVueIcon (addIcons et OhVueIcon)
      ],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      extensions: ['vue'],
      dirs: ['src/components'],                        // Autoimport de vos composants qui sont dans le dossier `src/components`
      include: [/\.vue$/, /\.vue\?vue/],
      dts: './src/components.d.ts',
      resolvers: [
        vueDsfrComponentResolver,                      // Autoimport des composants de VueDsfr dans les templates
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

##### Avec les auto-imports

`main.ts`

```typescript
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'

import '@gouvminint/vue-dsfr/styles'

import App from './App.vue'
import router from './router/index'
import * as icons from './icons'

import './main.css'

addIcons(...Object.values(icons)) // addIcons est autoimporté grâce à ohVueIconAutoimportPreset dans vite.config.ts // [!code warning]

createApp(App)                    // createApp est autoimporté grâce au preset 'vue' dans vite.config.ts // [!code warning]
  .component('VIcon', OhVueIcon)  // OhVueIcon est autoimporté grâce à ohVueIconAutoimportPreset dans vite.config.ts // [!code warning]
  .use(router)
  .mount('#app')
```

`App.vue`

```vue
<script setup lang="ts">
useScheme()                       // Autoimporté grâce à vueDsfrAutoimportPreset dans vite.config.ts // [!code warning]

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
    <router-view />
  </div>
</template>
```

##### Sans les auto-imports

`main.ts`

```typescript{6-7}
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'

import '@gouvminint/vue-dsfr/styles'

import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icon'

import App from './App.vue'
import router from './router/index'
import * as icons from './icons'

import './main.css'

addIcons(...Object.values(icons))

createApp(App)
  .component('VIcon', OhVueIcon)
  .use(router)
  .mount('#app')
```

`App.vue`

```vue{2}
<script setup lang="ts">
import { DsfrHeader, useScheme } from '@gouvminint/vue-dsfr'

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
    <router-view />
  </div>
</template>
```

### Nuxt3

1. Ajouter les dépendances `@gouvfr/dsfr` et `@gouvminint/vue-dsfr` ainsi que les dépendances de développement `vite` et `vue-dsfr-nuxt-module` au projet

```bash
# Avec pnpm
pnpm add @gouvfr/dsfr @gouvminint/vue-dsfr
pnpm add -D vue-dsfr-nuxt-module vite

# Avec yarn
yard add @gouvfr/dsfr @gouvminint/vue-dsfr
yarn add --dev vue-dsfr-nuxt-module vite

# Avec npm
npm i @gouvfr/dsfr @gouvminint/vue-dsfr
npm i -D vue-dsfr-nuxt-module vite
```

2. Ajouter `vue-dsfr-nuxt-module` dans la section `modules` de `nuxt.config.ts`

```ts{3}
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ]
})
```

3. Ajouter le CSS de DSFR dans la section `css` de `nuxt.config.ts`

```ts{5-11}
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',           // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css', // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css',     // Classes utilitaires : les composants de VueDsfr en ont besoin, contient aussi les icônes

    '@gouvfr/dsfr/dist/scheme/scheme.min.css',            // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
  ],
})
```

1. Facultatif : ajouter des icônes à utiliser avec OhVueIcon

```ts{1,14-20}
import * as icons from './icons'                          // Fichier à créer, voir plus loin

export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',           // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css', // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css',     // Classes utilitaires : les composants de VueDsfr en ont besoin, contient aussi les icônes

    '@gouvfr/dsfr/dist/scheme/scheme.min.css',            // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
  ],
  runtimeConfig: {
    public: {
      vueDsfr: {
        icons: Object.values(icons),
      },
    },
  },
})
```

Et ajouter un fichier `icons.ts` à la racine dans lequel sont réexportées depuis `'oh-vue-icons/icons'` les icônes utilisées :

```ts
export {
  RiFlagLine,
  RiHome2Line,
} from 'oh-vue-icons/icons'
```

Et voilà ! Vous êtes prêts à utiliser VueDsfr dans votre app Nuxt ✨
