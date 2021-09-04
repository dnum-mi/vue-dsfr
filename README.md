# VueDsfr

**VueDsfr** est un portage en [Vue 3](https://v3.vuejs.org) du
[Système de Design Français](https://www.systeme-de-design.gouv.fr/) (ou DSFR) sous forme de bibliothèque
de composants. Il peut s'utiliser facilement en tant que plugin.

## Installer la bibliothèque

```shell
npm install @laruiss/vue-dsfr@beta
```

N.B. : le `@beta` est important pour avoir la dernière version.

## Utiliser la bibliothèque en tant le plugin Vue 3

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueDsfr from '@laruiss/vue-dsfr'            // Import (par défaut) de la bibliothèque

import '@laruiss/vue-dsfr/dist/vue-dsfr-fonts.css' // Import des polices
import '@laruiss/vue-dsfr/dist/vue-dsfr.css'       // Import des styles globaux

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

Veuillez consulter [le site officiel](https://vue-dsfr.netlify.app/) pour plus d'information.
