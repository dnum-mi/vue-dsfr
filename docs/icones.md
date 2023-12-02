---
title: Utiliser des icônes
---

# Utiliser des icônes dans un projet avec VueDsfr

## Utiliser les icônes officielles

Pour utiliser les icônes officielles avec les classes CSS du DSFR, il n’y a pas d’actions en plus à faire,
puisque c’est le CSS officiel du DSFR qui est utilisé.

Ci-dessous un exemple :

::: code-group

<Story data-title="Démo">
  <IconesOfficielles />
</Story>

<<< docs-demo/IconesOfficielles.vue [Code de la démo]
:::

##  Utiliser les icônes dans les composants de VueDsfr

Plusieurs composants (`DsfrButton`, `DsfrBadge`, `DsfrCallout`...) ont la prop `icon` qui permet d’ajouter une icône.

Attention, cette icône n’est pas forcément une icône officielle du DSFR. En effet, VueDsfr utilise la bibliothèque [`oh-vue-icons`](https://oh-vue-icons.netlify.app/). Cette prop `icon` est donc :

- soit une `string` qui doit être un nom d’icône valide pour OhVueIcon ;
- soit la prop complète attendue par le composant `OhVueIcon` de la bibliothèque [`oh-vue-icons`](https://oh-vue-icons.netlify.app/).

::: warning
Dans les deux cas il faut que cette icône ait été ajoutée (cf. plus loin)
:::

::: code-group

<Story data-title="Démo">
  <DemoIconesDansComposants />
</Story>

<<< docs-demo/DemoIconesDansComposants.vue [Code de la démo]
:::

## Les icônes déjà enregistrées dans VIcon (OhVueIcon) dans VueDsfr

Voici la liste des icônes déjà enregistrées dans la bibliothèque VueDsfr :

::: code-group
<<< ../src/icons.ts
:::

::: info
Ces icônes ont été ajoutées parce qu’elles sont utilisées dans les composants de la bibliothèque VueDsfr
:::

::: warning
Il faudra utiliser le nom en **kebab-case** dans la prop `icon` des composants ou dans la prop `name` de `VIcon`

exemple :

```vue
<template>
  Une icône ici : <VIcon name="ri-close-line" />
</template>
```

:::

::: info Cette liste n’est pas fermée !
Rassurez-vous, vous pourrez en ajouter beaucoup d’autres ! C’est décrit dans la prochaine section.
:::

## Ajouter des icônes

Il est fort probable que vous vouliez utiliser d’autres icônes que celle qui ont été enregistrées par la bibliothèque VueDsfr. Voici comment faire.

### Ajouter des icônes Remix icons

Il est possible d’utiliser facilement toutes les icônes [Remix Icon](https://remixicon.com/) grâce à
[OhVueIcons](https://oh-vue-icons.js.org/) : le composant `VIcon` est enregistré globalement si la bibliothèque est
utilisée en tant que plugin.

#### 1. Réexporter les icônes souhaitées depuis `oh-vue-icons`

La première étape est de créer un fichier `src/icons.ts` qui ré-exporte les icônes que vous souhaitez utiliser (il est déjà créé si vous avez utilisé `create-vue-dsfr` pour créer votre projet).

Ci-dessous un exemple :

```typescript
// src/icons.ts
export {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
} from 'oh-vue-icons/icons/ri/index.js'  // Import de quelques icônes de Remix Icon (ri)
```

Ensuite, deux possibilités : soit on les ajoute au plugin, soit directement à `OhVueIcon`. Cf. les prochaines sections selon votre projet.

#### 2.a. Si VueDsfr est utilisé en tant que plugin

Si vous utilisez VueDsfr en tant que plugin, il faudra importer ce fichier `src/icons.ts` dans votre point d’entrée Vue (en général `src/main.ts`) et donner dans l’objet `options` du plugin VueDsfr la propriété `icons` avec un tableau des icônes à enregistrer, comme ci-dessous :

```typescript{10,13}
 // src/main.ts
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvminint/vue-dsfr/styles'

import { createApp } from 'vue'

import VueDsfr from '@gouvminint/vue-dsfr'

import App from './App.vue'
import * as icons from './icons.js' // Import des icônes à enregistrer dans OhVueIcon (cf. plus loin)

createApp(App)
  .use(VueDsfr, { icons: Object.values(icons) }) // Ajout des icônes pour tous les composants
                                                 // de la bibliothèqe ET tout le projet
  .mount('#app')
```

#### 2.b. Si VueDsfr n’est *pas* utilisé en tant que plugin

Si vous n’utilisez VueDsfr en tant que plugin, il faudra importer le fichier `src/icons.ts`  dans votre point d’entrée Vue (en général `src/main.ts`), importer `addIcons` (import nommé) de `oh-vue-icons` et donner les icônes à enregistrer, c’est-à-dire celles qui sont exportées par `src/icons.ts`, comme ci-dessous :

```typescript{5,14,17}
// src/main.ts
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvminint/vue-dsfr/styles'
import { DsfrHeader } from '@gouvminint/vue-dsfr'
import { OhVueIcon, addIcons } from 'oh-vue-icon'

import { createApp } from 'vue'

import VueDsfr from '@gouvminint/vue-dsfr'

import App from './App.vue'
import * as icons from './icons.js' // Import des icônes à enregistrer dans OhVueIcon (cf. plus loin)

addIcons(...Object.values(icons))   // Utiliser la syntaxe de décomposition

createApp(App)
  .component('VIcon', OhVueIcon)
  .component('DsfrHeader', DsfrHeader)
  .mount('#app')
```

### Autres icônes

Il est très facile d’ajouter d’autres icônes depuis toutes les
[20 collections](https://oh-vue-icons.netlify.app/docs#supported-icon-packs)
mises à disposition par [OhVueIcons](https://oh-vue-icons.netlify.app) en les ajoutant à ce fichier `icons.ts`.

Ci-dessous des exemples pour
[Remix Icon](https://remixicon.com/),
[Font Awesome 5](https://fontawesome.com/icons)
et [Bootstrap Icons](https://icons.getbootstrap.com/) :

```typescript
// src/icons.ts
export {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
} from 'oh-vue-icons/icons'  // Export de quelques icônes de Remix Icon (ri)

export {
  FaFlag,
  FaAddressBook,
} from 'oh-vue-icons/icons/fa/index.js'  // Export de quelques icônes de Font Awesome 5 Free (fa)

export {
  BiBadge3D,
  BiClouds,
} from 'oh-vue-icons/icons/bi/index.js'  // Export de quelques icônes de Bootstrap Icons (bi)
```

## Pour Nuxt 3

Créer/modifier le fichier `vue-dsfr.ts` dans le dossier `plugins` avec un contenu comme celui-ci :

```typescript
// plugins/vue-dsfr.ts
import {
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
} from 'oh-vue-icons/icons'  // Import de quelques icônes de Remix Icon (ri)

const icons = [
  RiCloseLine,
  RiFlagLine,
  RiHome2Line,
  RiRefreshLine,
]

export default defineNuxtPlugin((nuxtApp) => {
  // Enregistrement du plugin avec ajout de toutes les icônes du tableau `icons`
  nuxtApp.vueApp.use(VueDsfr, { icons }); // le deuxième paramètre est un objet contenant une propriété `icons`
                                          // qui est un tableau qui contient toutes les icônes que vous souhaitez utiliser
});
```

Le composant `VIcon` et tous les composants de VueDsfr sont désormais utilisables dans toute l’application Nuxt3
avec toutes les icônes contenues dans le tableau `icons`.

<script lang="ts" setup>
import IconesOfficielles from './docs-demo/IconesOfficielles.vue'
import DemoIconesDansComposants from './docs-demo/DemoIconesDansComposants.vue'
</script>
