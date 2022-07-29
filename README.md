# VueDsfr

**VueDsfr** est un portage en [Vue 3](https://v3.vuejs.org) du
[Système de Design Français](https://www.systeme-de-design.gouv.fr/) (ou DSFR) sous forme de bibliothèque
de composants. Il peut s'utiliser facilement en tant que plugin.

## Comment l’utiliser

### TL;DR

Avec npm :

```shell
npm init vue-dsfr
```

Avec pnpm :

```shell
pnpm create vue-dsfr
```

Avec yarn :

```shell
yarn create vue-dsfr
```

Et suivez le guide !

### Détails :

Cf. [le site officiel](https://vue-dsfr.netlify.app/?path=/story/docs-2-guide-d-utilisation--page)

## Comment contribuer

### TL;DR

Les commits doivent suivre la spécification des **[Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/)**

Une PR doit être faite avec une branche **à jour avec la branche `develop` en `rebase` (et sans `merge`) avant demande de fusion**,
et **la fusion doit être demandée dans `develop`.**

### Détails

Cf [le site officiel](https://vue-dsfr.netlify.app/?path=/story/docs-3-guide-du-d%C3%A9veloppeur--page)

## Utiliser la bibliothèque dans un projet existant (ou un nouveau projet sans passer par [`create-vue-dsfr`](https://www.npmjs.com/package/create-vue-dsfr))
### Installer la bibliothèque

```shell
npm install @gouvminint/vue-dsfr
```
### Utiliser la bibliothèque en tant que plugin Vue 3

```js
import { createApp } from 'vue'
import App from './App.vue'
import '@gouvminint/vue-dsfr/styles'                  // Import des styles globaux
import VueDsfr from '@gouvminint/vue-dsfr'            // Import (par défaut) de la bibliothèque


const app = createApp(App)
  .use(VueDsfr)                                    // Ajout en tant que plugin
  .mount('#app')
```

Et ensuite, les composants sont utilisables directement dans les composants de l'application :

```html
<template>
  <DsfrHeader
    logo-text="Gouvernement"
    service-title="Bureau des légendes"
  />
  <div class="fr-container">
    <router-view />
  </div>
</template>
```

# Plus d'informations

Veuillez consulter [le site officiel](https://vue-dsfr.netlify.app/) pour plus d'informations.
