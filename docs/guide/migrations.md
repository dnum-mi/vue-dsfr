# Migrations

## Migration vers 6.x (depuis 4.x ou 5.x)

Dans cette version majeure, il y a plusieurs sujets à traiter lorsque vous migrerez :

1. Les icônes
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

Il vous suffira donc dans vos projets d’importer VIcon depuis `@gouvminint/vue-dsfr` dans tous les fichiers où vous utilisez VIcon de OhVueIcons.

Il faudra peut-être dans certains cas renommer les icônes car la syntaxe attendue par `@iconify/vue` est `nom-de-collection:nom-d-icone` alors que `oh-vue-icon` attendait simplement `nom-de-collection-nom-d-icone`.

Dans les cas ou le nom de la collection ne contient pas de tiret `-`, alors le `-` est accepté en tant que séparateur entre le nom de collection et le nom d’icône.

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
