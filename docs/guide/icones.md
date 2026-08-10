---
title: Utiliser des icônes
---

# Utiliser des icônes dans un projet avec VueDsfr

## Utiliser les icônes officielles

Pour utiliser les icônes officielles avec les classes CSS du DSFR, il n’y a pas d’actions en plus à faire,
puisque c’est le CSS officiel du DSFR qui est utilisé.

Ci-dessous un exemple :

::: code-group

<Story data-title="Démo">
  <IconesOfficielles />
</Story>

<<< ../docs-demo/IconesOfficielles.vue [Code de la démo]
:::

## Utiliser les icônes dans les composants de VueDsfr

Plusieurs composants (`DsfrButton`, `DsfrBadge`, `DsfrCallout`...) ont la prop `icon` qui permet d’ajouter une icône.

Attention, cette icône n’est pas forcément une icône officielle du DSFR. En effet, VueDsfr utilise désormais (depuis la v6) la bibliothèque [`@iconify/vue`](https://iconify.design/docs/icon-components/vue/). Cette prop `icon` est donc :

- soit une `string` qui doit être un nom de classe valide pour une icône du DSFR (qui commence par `'fr-icon-'`) ;
- soit une `string` qui doit être un nom d’icône valide pour [iconify](https://icon-sets.iconify.design);
- soit la prop complète attendue par le composant `VIcon` de la bibliothèque dont voici le type :
  :::code-group
  <<< ../../src/components/VIcon/VIcon.types.ts
  :::

::: warning
La prop `ssr` de `VIcon` ne garantit pas que le SVG de l’icône sera présent dans le HTML généré en SSR ou en SSG.
Selon le contexte, elle peut afficher un placeholder pendant le rendu serveur, puis remplacer ce placeholder après le montage côté client.

Si vous voulez que le SVG soit directement présent dans le HTML généré, notamment avec Nuxt en génération statique, consultez la section [Pour Nuxt en SSG ou en SSR](#pour-nuxt-en-ssg-ou-en-ssr).
:::

## Démo

::: code-group

<Story data-title="Démo" min-h="200px">
  <DemoIconesDansComposants />
</Story>

<<< ../docs-demo/DemoIconesDansComposants.vue [Code de la démo]
:::

::: warning
Il faut normalement utiliser le nom en **kebab-case** et avec le nom de la collection en prefix séparé par un caractère `:` comme par exemple `ri:close-line`

exemple :

```vue
<template>
  Nom d’icône correct : <VIcon name="ri:close-line" />
</template>
```

Cependant, si le préfixe est lui-même sans tiret `-`, alors l’écriture tout en kebab-case est acceptée :

```vue
<template>
  Nom d’icône accepté : <VIcon name="ri-close-line" />
</template>
```

:::

::: info Les collections disponibles
Vous pouvez utiliser toutes les icônes disponibles ici : [icon-sets.iconify.design](https://icon-sets.iconify.design/)
:::

```typescript{10-16}
// src/components/MonComposant.vue
<script lang="ts" setup>
import { ref } from 'vue'

import { VIcon } from '@gouvminint/vue-dsfr'
</script>

<template>
  <div>
    <VIcon
      name="ri-checkbox-circle-line"
      scale="2"
      animation="float"
      label="icon label"
      title="icon title"
    />
    C’est validé !
  </div>
</template>

```

## Éviter les appels réseaux (optionnel - pour les applications internes)

Si vous développez des applications destinées à des agents internes avec potentiellement des accès internet réduits, il
est possible que les appels vers l’API iconify soient bloqués. Vous voudrez donc éviter ces appels réseaux.

Dans ce but, depuis la version [8.0.0](https://github.com/dnum-mi/vue-dsfr/releases/tag/v8.0.0), la dépendance `@iconify/vue`
n’est plus incluse dans la bibliothèque, et doit être installée dans votre application.

Avec cette modification, il est possible d’ajouter des collections d’icônes qui ne feront pas d’appels réseaux.

### TL;DR;

- créer un fichier `scripts/icons.js` dans votre projet avec un contenu de cette forme :
  ```js
  // @ts-check
  import { icons as mdiCollection } from '@iconify-json/mdi'
  import { icons as riCollection } from '@iconify-json/ri'

  /**
   * Liste de nom d’icônes **sans** le préfixe de la collection Remix Icons qui sont utilisées dans l’application
   * @type {string[]}
   */
  const riIconNames = [
    'flag-line',
    'home-4-line',
    'question-mark',
  ]

  /**
   * Liste de nom d’icônes **sans** le préfixe de la collection Material Design Icons qui sont utilisées dans l’application
   * @type {string[]}
   */
  const mdiIconNames = [
    'account-heart',
    'account-key',
  ]

  /**
   * Liste de tuples [collectionDIcônes, tableauDeNomsDIcônesUtiliséesDansLApplication]
   * @type {[import('@iconify/vue').IconifyJSON, string[]][]}
   */
  export const collectionsToFilter = [
    [riCollection, riIconNames],
    [mdiCollection, mdiIconNames],
  ]
  ```
  N.B. : l’exemple ci-dessus montre comment utiliser les icônes `'ri-flag-line'`, `'ri-home-4-line'`, `'ri-question-mark'` de la collection
  remix icons (`ri`) et les icônes `'mdi-account-heart'` et `'mdi-account-key'` de la collection Material Design Icons (`mdi`).
- ajouter un script `"icons"` dans le `package.json` de votre application avec cette commande:
  `"vue-dsfr-icons -s scripts/icons.js -t src/icon-collections.ts"`
- lancer le script `icons` (e.g. : `npm run icons` si vous utilisez `npm` comme gestionnaire de paquet) à chaque fois
  que vous modifiez le fichier `scripts/icons.js`. Pour le fichier `scripts/icons.js`, cela générera le fichier `src/icon-collections.ts` suivant :
  ```ts
  import type { IconifyJSON } from '@iconify/vue'

  const collections: IconifyJSON[] = [{ prefix: 'ri', icons: { 'flag-line': { body: '<path fill="currentColor" d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z"/>' }, 'home-4-line': { body: '<path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1m-6-2h5V9.157l-6-5.454l-6 5.454V19h5v-6h2z"/>' }, 'question-mark': { body: '<path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8a4 4 0 0 0-8 0v1H6V8a6 6 0 0 1 6-6"/>' } }, width: 24, height: 24 }, { prefix: 'mdi', icons: { 'account-heart': { body: '<path fill="currentColor" d="M15 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6z"/>' }, 'account-key': { body: '<path fill="currentColor" d="M11 10v2H9v2H7v-2H5.8c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4m0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"/>' } }, width: 24, height: 24 }]
  export default collections
  ```

  ou formatté autrement :

  ```ts
  import type { IconifyJSON } from '@iconify/vue'

  const collections: IconifyJSON[] = [{
    prefix: 'ri',
    icons: {
      'flag-line': { body: '<path fill="currentColor" d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z"/>' },
      'home-4-line': { body: '<path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1m-6-2h5V9.157l-6-5.454l-6 5.454V19h5v-6h2z"/>' },
      'question-mark': { body: '<path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-17a6 6 0 0 1 6 6c0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8a4 4 0 0 0-8 0v1H6V8a6 6 0 0 1 6-6"/>' },
    },
    width: 24,
    height: 24,
  }, {
    prefix: 'mdi',
    icons: {
      'account-heart': { body: '<path fill="currentColor" d="M15 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6z"/>' },
      'account-key': { body: '<path fill="currentColor" d="M11 10v2H9v2H7v-2H5.8c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4m0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"/>' },
    },
    width: 24,
    height: 24,
  }]
  export default collections
  ```
- ajouter les collections dans votre point d’entrée (généralement `src/main.ts`) :

  ```ts
  // (...)
  import collections from './icon-collections.js'
  // (...)

  for (const collection of collections) {
    addCollection(collection)
  }

  // (...)
  ```

### Plus d’explication pour éviter les appels réseaux

En interne, depuis la version [`6.0.0`](https://github.com/dnum-mi/vue-dsfr/releases/tag/v6.0.0) VueDsfr utilise [iconify](https://iconify.design/docs/icon-components/vue).
Pour comprendre la section précédente, il faut comprendre comment fonctionne iconify.

#### Iconify

::: info

Veuillez consulter la [documentation officielle de @iconify/vue](https://iconify.design/docs/icon-components/vue) pour plus de détails.

:::

Le principe de iconify est de ne pas inclure les icônes dans le bundle et de faire un appel réseau en arrière-plan (XHR ou fetch) pour récupérer les SVG des icônes utilisées à la demande, c’est-à-dire dès qu’un composant qui utilise des icônes iconify est rendu dans le DOM.

Or ces appels API nécessitent pour l’utilisateur de l’application d’avoir accès à internet, car par défaut l’API utilisée pour récupérer les icônes est celle d’iconify, sur internet.

Il est possible d’[héberger soi-même un serveur API](https://iconify.design/docs/api/#hosting-api) et de dire à iconify d’utiliser cette API. C’est néanmoins compliqué.

Il est possible aussi d’utiliser la fonction [`addCollection(collection: IconifyJSON)` exposée par `@iconify/vue`](https://iconify.design/docs/icon-components/vue/add-collection.html#iconify-for-vue-function-addcollection) pour inclure des icônes et faire en sorte qu’[aucun appel réseau ne soit effectué](https://iconify.design/docs/icon-components/vue/add-collection.html#api-provider).

Le plus simple, c’est donc d’utiliser un sous-ensemble d’une collection existante (par exemple `@iconify-json/ri` pour Remix Icons) en créant une nouvelle collection et d’ajouter cette collection. C’est ce que fait la fonction `filterIcons (collection: import('@iconify/vue').IconifyJSON, iconNames: string[])` exposée par `@gouvminint/vue-dsfr/meta`. Vous ne voudrez sans doute pas l’utiliser directement.

Cette fonction `filterIcons()` est utilisée par la fonction `createCustomCollectionFile (sourcePath: string, targetPath: string)` aussi exposée par `@gouvminint/vue-dsfr/meta`, dont voici la partie importante :

```ts
// (...)

const collectionsToFilter = await import(sourcePath).then(({ collectionsToFilter }) => collectionsToFilter)

const collections = collectionsToFilter.map(tuple => filterIcons(...tuple))

const code = `import type { IconifyJSON } from '@iconify/vue'
const collections: IconifyJSON[] = ${JSON.stringify(collections)}
export default collections`

// (...)
```

::: tip

- `sourcePath` est le chemin vers le fichier qui contient le code listé plus dans le fichier `scripts/icons.js`
- `targetPath` est le chemin vers le fichier qui contiendra le code généré et appelé plus haut `src/icon-collections.js`

Libre à vous d’adapter les chemins et les noms de fichiers, veillez simplement à modifier en fonction le script `"icons"` de `package.json` et l’import dans votre fichier d’entrée (souvent `src/main.ts`).

:::

::: tip

Nous vous invitons à regarder les fichiers suivants :

- [`meta/custom-icon-collections-creator.js`](https://github.com/dnum-mi/vue-dsfr/blob/v7.2.0/meta/custom-icon-collections-creator.js)
- [`meta/custom-icon-collections-creator-bin.js`](https://github.com/dnum-mi/vue-dsfr/blob/v7.2.0/meta/custom-icon-collections-creator-bin.js) (celui qui est aliasé en binaire `vue-dsfr-icons` et qui utilise `custom-icon-collections-creator.js`)

:::

## Pour Nuxt en SSG ou en SSR

Avec Nuxt, notamment avec `nuxt generate`, il y a deux besoins différents :

- éviter les appels réseaux vers l’API Iconify ;
- avoir le SVG complet directement dans le HTML généré.

L’ajout des collections avec `addCollection()` répond au premier besoin. En revanche, cela ne garantit pas toujours que le SVG sera déjà présent dans le HTML généré.
De même, la prop `ssr` de `VIcon` ne doit pas être comprise comme “rendre le SVG en SSR” : selon le contexte, elle peut rendre un placeholder côté serveur puis laisser le client afficher l’icône après hydratation.

Pour avoir le SVG directement dans le HTML SSG/SSR, utilisez le composant offline d’Iconify avec les données d’icônes locales générées par `vue-dsfr-icons`.

### Exemple direct

```vue
<script setup lang="ts">
import { Icon } from '@iconify/vue/offline'
import collections from '~/icon-collections'

const [riCollection] = collections

const flagIcon = {
  ...riCollection.icons['flag-line'],
  width: riCollection.width,
  height: riCollection.height,
}
</script>

<template>
  <Icon
    :icon="flagIcon"
    class="vicon"
  />
</template>
```

Cette approche rend un `<svg>` complet dès le HTML généré, sans placeholder et sans appel réseau.

### Composant `VIconOffline` de VueDsfr

VueDsfr fournit `VIconOffline` pour éviter de reproduire ce composant dans chaque application. Les collections restent dans votre application et sont fournies une seule fois avec `createVueDsfrIconPlugin`.

Par défaut, `createVueDsfrIconPlugin` se contente d’injecter les collections dans `VIconOffline` ; il n’enregistre rien auprès du registre global d’Iconify. Si votre application utilise aussi `VIcon` ou la prop `icon` de composants VueDsfr avec des icônes Iconify classiques, ceux-ci dépendent toujours du registre global et nécessitent donc `addCollection()` en plus (voir plus bas l’option `preferOffline` pour une alternative). Dans Nuxt, créez par exemple `plugins/vue-dsfr-icons.ts` qui combine les deux usages :

```ts
import { addCollection } from '@iconify/vue'
import { createVueDsfrIconPlugin } from '@gouvminint/vue-dsfr'
import collections from '~/icon-collections'

export default defineNuxtPlugin((nuxtApp) => {
  for (const collection of collections) {
    addCollection(collection)
  }

  nuxtApp.vueApp.use(createVueDsfrIconPlugin(collections))
})
```

::: tip

`addCollection()` n’est nécessaire que si votre application utilise encore `VIcon` ou une prop `icon` avec des icônes Iconify classiques. Si vous n’utilisez que `VIconOffline`, `createVueDsfrIconPlugin` suffit.

:::

Vous pouvez ensuite utiliser le composant dans vos pages et composants :

```vue
<template>
  <VIconOffline
    name="ri:flag-line"
    label="Drapeau français"
    class="vicon"
  />
</template>
```

`VIconOffline` cherche l’icône dans les collections injectées, puis passe directement son objet à `@iconify/vue/offline`. Le rendu est donc un SVG complet pendant le SSG et le SSR, sans appel réseau.

Pour ajouter une icône :

1. ajoutez son nom, sans le préfixe de collection, dans `scripts/icons.js` ;
2. relancez le script `icons`, par exemple `npm run icons` ;
3. utilisez son nom complet dans `VIconOffline`, par exemple `ri:search-line`.

::: tip
Cette approche est surtout utile pour les icônes Iconify qui doivent être rendues directement en SSG ou en SSR.
Pour les icônes officielles du DSFR, les classes CSS `fr-icon-*` restent la solution la plus simple.
:::

### Option `preferOffline` : faire résoudre `VIcon` automatiquement

`createVueDsfrIconPlugin` accepte une option `preferOffline`. Quand elle est active, `VIcon` — y compris celui utilisé en interne par `DsfrButton`, `DsfrTag`, `DsfrModal` et les autres composants VueDsfr exposant une prop `icon` — tente de résoudre l’icône depuis les mêmes collections locales avant de recourir au registre Iconify en ligne :

```ts
import { createVueDsfrIconPlugin } from '@gouvminint/vue-dsfr'
import collections from '~/icon-collections'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createVueDsfrIconPlugin(collections, { preferOffline: true }))
})
```

Avec cette option, `createVueDsfrIconPlugin` seul suffit pour les icônes présentes dans vos collections locales, aussi bien pour `VIconOffline` que pour `VIcon` — plus besoin d’appeler `addCollection()` en complément pour ces icônes-là.

::: tip

Si une icône demandée par `VIcon` est absente des collections locales, le composant retombe silencieusement sur son comportement en ligne habituel (appel réseau, éventuel placeholder selon la prop `ssr`). Combinez `preferOffline` avec `addCollection()` si vous voulez aussi couvrir ces icônes-là sans appel réseau.

`preferOffline` est désactivé par défaut, pour ne rien changer au comportement existant des applications qui utilisent déjà `createVueDsfrIconPlugin`.

:::

::: warning Compromis choisi : comportement implicite

`preferOffline` simplifie l’intégration (un seul appel de plugin au lieu de deux), mais au prix d’un comportement moins explicite qu’avec `addCollection()` seul :

- le rendu d’une icône (offline ou réseau) dépend silencieusement de sa présence dans la collection locale, sans avertissement en cas d’absence ;
- si vous oubliez de déclarer une icône dans `scripts/icons.js`, l’application continue de fonctionner (repli réseau), ce qui peut masquer l’oubli au lieu de le révéler immédiatement ;
- deux applications avec des collections locales différentes peuvent faire percevoir un même composant VueDsfr comme se comportant différemment (offline ici, réseau là), ce qui peut compliquer le débogage.

Ce compromis a été jugé acceptable parce que le repli reste fonctionnel dans tous les cas (aucune icône ne disparaît), mais gardez-le en tête si vous devez diagnostiquer pourquoi une icône déclenche un appel réseau alors que `preferOffline` est actif : vérifiez d’abord qu’elle est bien listée dans `scripts/icons.js` et que le script `icons` a été relancé.

:::

<script lang="ts" setup>
import IconesOfficielles from '../docs-demo/IconesOfficielles.vue'
import DemoIconesDansComposants from '../docs-demo/DemoIconesDansComposants.vue'
</script>
