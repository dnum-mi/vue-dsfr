# Pagination - `DsfrPagination`

## 🌟 Introduction

Le composant `DsfrPagination` est un système de pagination conforme aux bonnes pratiques ergonomiques et accessible (ARIA). Il permet de naviguer facilement à travers plusieurs pages avec des fonctionnalités avancées comme la limitation de pages affichées et la gestion des événements.

🏅 La documentation sur le pagination sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pagination)

<VIcon name="vi-file-type-storybook" /> La story sur le tag sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrpagination--docs)

## 📐 Structure

Ce composant affiche des liens vers les pages avoisinant la page courante (mise en avant).
Il affiche aussi la dernière page de la liste comme dernier élément de la pagination afin que l’usager connaisse le nombre total de pages.
Il présente un accès rapide vers la première page, la précédente, la suivante, et la dernière, avec des contrôles adaptatifs selon l'état de la pagination.
Des troncatures sont affichées (éventuellement masquées pour de petits écrans) pour matérialiser les pages ommises.
Le composant propose aussi l'ajout d'un suffixe au texte du titre (`title` qui sert nottament à l'affichage d'une bulle d'aide) de la page courante pour la mettre en valeur.

## 🛠️ Props

| Nom              | Type                  | Défaut              | Description                                                                                      |
|-------------------|-----------------------|---------------------|--------------------------------------------------------------------------------------------------|
| `pages`          | `Page[]`             | **requis**          | Liste des pages, où chaque page est un objet contenant des informations comme `href`, `label` et `title`. |
| `truncLimit`     | `number`             | `5`                 | Nombre maximum de pages affichées simultanément.                                                |
| `currentPage`    | `number`             | `0`                 | Index de la page actuellement sélectionnée (commence à `0`).                                    |
| `firstPageTitle` | `string`             | `'Première page'`   | Texte d'info-bulle pour le lien de la première page.                                            |
| `lastPageTitle`  | `string`             | `'Dernière page'`   | Texte d'info-bulle pour le lien de la dernière page.                                            |
| `nextPageTitle`  | `string`             | `'Page suivante'`   | Texte d'info-bulle pour le lien de la page suivante.                                            |
| `prevPageTitle`  | `string`             | `'Page précédente'` | Texte d'info-bulle pour le lien de la page précédente.                                          |
| `currentPageTitleSuffix`  | `string`             | `undefined` | Texte aditionnel d'info-bulle de la page courante.                                          |

## 📡Événements

| Nom                      | Payload       | Description                                             |
|--------------------------|---------------|---------------------------------------------------------|
| `update:current-page`    | `number`      | Émis lorsque l'utilisateur change de page.              |

Il faut donc utiliser `v-model:current-page` sur le composant (cf. l’exemple ci-dessous).

## 🧩 Slots

Ce composant n'utilise pas de slots, tout est configuré via les props et les données des pages. 🚀

## 📝 Exemple d'utilisation

::: code-group

<Story data-title="Démo" min-h="350px">
  <div
  class="flex flex-col"
  >
    <DsfrPaginationExample />
  </div>
</Story>

<<< docs-demo/DsfrPaginationExample.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrPagination.vue
<<< DsfrPagination.types.ts

:::

<script setup lang="ts">
import DsfrPaginationExample from './docs-demo/DsfrPaginationExample.vue'
</script>
