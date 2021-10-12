# VueDsfr

**VueDsfr** est un portage en [Vue 3](https://v3.vuejs.org) du
[Système de Design Français](https://www.systeme-de-design.gouv.fr/) (ou DSFR) sous forme de bibliothèque
de composants. Il peut s'utiliser facilement en tant que plugin.

## Pré-requis

- NPM : version 7 minimum
- NODE : version 16 minimum

### Installation des pré-requis (testé sous Ubuntu 20.04) : 

Suivez la procédure suivante en lançant les commandes détaillées ci-dessous :

1) Mise à jour des dépots : 
```shell
sudo apt update
```

2) Installer NPM : 
```shell
sudo apt-get install npm
```

3) Vérifier la version de NPM (7 ou supérieur) : 
```shell
npm --version
```


4) Installer NVM (Node Version Manager) :
Avec la commande curl :
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Ou avec la commande wget : 

```shell
wget -q0- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

5) Fermer et réouvrir un terminal, puis : 
```shell
source ~/.bashrc
```

6) Vérifier la version de NVM installée : 
```shell
nvm --version
```

7) Vérifier qu'on pourra bien installer la version de nodejs avec la commande suivante, qui donne la liste des versions nodejs installables : 
```shell
nvm ls-remote
```

8) Installer la version de nvm voulue :
```shell
nvm install [version.number]
```

exemple : 
```shell
nvm install [16.11.0]
```

9) Vérifier la version de NPM (7 ou supérieur) : 
```shell
npm --version
```

Remarque : certaines commandes peuvent demander un temps d'exécution assez conséquent (plusieurs minutes).


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
