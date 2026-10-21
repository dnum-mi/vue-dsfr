# Pictogramme - `DsfrPictogram`

## 🌟 Introduction

Le pictogramme est une illustration décorative du DSFR. Il est livré sous forme de SVG en trois calques (`artwork-decorative`, `artwork-minor` et `artwork-major`) qui prennent les couleurs du thème courant, clair ou sombre.

Le composant `DsfrPictogram` affiche ces pictogrammes partout où vous en avez besoin, sans passer par une tuile ou un bouton radio riche. Il choisit seul la façon de rendre le SVG selon ce que vous lui donnez, ce qui évite un piège courant : un pictogramme importé par un bundler arrive souvent sous forme de *data URI*, et une balise `use` ne sait pas référencer un fragment dans une *data URI*.

🏅 La documentation sur les pictogrammes sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme)

<VIcon name="vi-file-type-storybook" /> La story sur le pictogramme sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrpictogram--docs)

## 📐 Structure

Le composant rend, selon les props reçues :

- une balise `img` portant la classe `fr-artwork` si `imgSrc` est renseignée ;
- le SVG en ligne, nettoyé de son contenu actif, si `svgPath` est une *data URI* exploitable ; les identifiants des calques y sont suffixés pour que deux pictogrammes de la même page restent indépendants ;
- une balise `img` si `svgPath` est une *data URI* qui n’a pas pu être analysée ;
- une balise `svg` référençant les trois calques du pictogramme dans les autres cas.

Sans `imgSrc` ni `svgPath`, le composant ne rend rien.

## 🛠️ Props

| Nom        | Type                       | Description                                                                                      | Valeur par défaut                                         | Obligatoire |
|------------|----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------|-------------|
| `imgSrc`   | `string`                   | Source de l’image à afficher, prioritaire sur `svgPath`.                                          | `undefined`                                               |             |
| `svgPath`  | `string`                   | Chemin du pictogramme SVG, tel qu’importé depuis `@gouvfr/dsfr/dist/artwork/pictograms`.          | `undefined`                                               |             |
| `svgAttrs` | `Record<string, unknown>`  | Attributs à poser sur la balise `svg`, fusionnés avec les valeurs par défaut.                     | `{ viewBox: '0 0 80 80', width: '80px', height: '80px' }` |             |
| `title`    | `string`                   | Titre du pictogramme, à ne renseigner que s’il porte une information absente du texte environnant. | `undefined`                                               |             |

## 📡 Événements

Ce composant ne déclenche pas d’événements spécifiques.

## 🧩 Slots

Ce composant n’a pas de slot.

## ♿ Accessibilité

Un pictogramme est une illustration : il est masqué aux technologies d’assistance (`aria-hidden` sur les SVG, alternative vide sur les images). Ne renseignez `title` que si le pictogramme porte une information absente du texte qui l’entoure.

## 📝 Exemples

```vue
<script lang="ts" setup>
import svgSchool from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/school.svg'
</script>

<template>
  <DsfrPictogram :svg-path="svgSchool" />
</template>
```

```vue
<template>
  <DsfrPictogram
    :svg-path="svgSchool"
    :svg-attrs="{ width: '40px', height: '40px' }"
  />
</template>
```

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrPictogramDemo />
</Story>

<<< docs-demo/DsfrPictogramDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrPictogram.vue
<<< DsfrPictogram.types.ts

:::

<script setup lang="ts">
import DsfrPictogramDemo from './docs-demo/DsfrPictogramDemo.vue'
</script>
