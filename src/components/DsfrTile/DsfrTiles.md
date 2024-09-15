# Tuile - `DsfrTile`

## 🌟 Introduction

Le composant `DsfrTiles` utilise le composant .

Le composant `DsfrTiles` permet d'afficher une collection de tuiles ([`DsfrTile`](/composants/DsfrTile)) de manière organisée dans une grille. Il offre la possibilité de personnaliser la disposition de chaque tuile, de les afficher en mode horizontal ou vertical, et d'appliquer des classes spécifiques pour un style personnalisé. Ce composant est idéal pour créer des galeries ou des listes d'éléments visuels interactifs.

🏅 La documentation sur la tuile sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile)

<VIcon name="vi-file-type-storybook" /> La story sur la tuile sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtiles--docs)

## 📐 Structure

- `<DsfrTiles>` : Le composant principal.
  - Gère une liste de tuiles à afficher en grille.
  - Utilise le composant `DsfrTile` pour le rendu de chaque élément.

## 🛠️ Props

| Propriété     | Type                                      | Description                                                                         | Valeur par défaut |
|---------------|-------------------------------------------|-------------------------------------------------------------------------------------|-------------------|
| `tiles`       | `(DsfrTileProps & { containerClass: string })[]` | Tableau d'objets représentant les tuiles à afficher, incluant les props de `DsfrTile` et une classe personnalisée pour chaque conteneur. | `[]`              |
| `horizontal`  | `boolean`                                 | Si vrai, affiche les tuiles en mode horizontal.                                      | `false`           |

## 📡 Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

Ce composant n'utilise pas de slots.

## 📝 Exemples

Le composant `DsfrTiles` utilise une boucle pour rendre chaque tuile dans une grille responsive. Il permet d'appliquer des classes spécifiques à chaque tuile et de définir si les tuiles doivent s'afficher horizontalement ou verticalement.

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrTilesDemo />
</Story>

<<< docs-demo/DsfrTilesDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTiles.vue
<<< DsfrTiles.types.ts

:::

<script setup lang="ts">
import DsfrTilesDemo from './docs-demo/DsfrTilesDemo.vue'
</script>
