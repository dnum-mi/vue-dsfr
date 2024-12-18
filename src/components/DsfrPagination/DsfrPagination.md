# Pagination - `DsfrPagination`

## 🌟 Introduction

Le composant `DsfrPagination` est un système de pagination conforme aux bonnes pratiques ergonomiques et accessible (ARIA). Il permet de naviguer facilement à travers plusieurs pages avec des fonctionnalités avancées comme la limitation de pages affichées et la gestion des événements.

🏅 La documentation sur le pagination sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pagination)

<VIcon name="vi-file-type-storybook" /> La story sur le tag sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrpagination--docs)

## 📐 Structure

Ce composant affiche des liens pour la première page, la précédente, les pages centrales, la suivante, et la dernière, avec des contrôles adaptatifs selon l'état de la pagination.

## 🛠️ Props

| Nom              | Type                  | Défaut              | Description                                                                                      |
|-------------------|-----------------------|---------------------|--------------------------------------------------------------------------------------------------|
| `pages`          | `Page[]`             | **requis**          | Liste des pages, où chaque page est un objet contenant des informations comme `href` et `label`. |
| `truncLimit`     | `number`             | `5`                 | Nombre maximum de pages affichées simultanément.                                                |
| `currentPage`    | `number`             | `0`                 | Index de la page actuellement sélectionnée (commence à `0`).                                    |
| `firstPageTitle` | `string`             | `'Première page'`   | Texte d'info-bulle pour le lien de la première page.                                            |
| `lastPageTitle`  | `string`             | `'Dernière page'`   | Texte d'info-bulle pour le lien de la dernière page.                                            |
| `nextPageTitle`  | `string`             | `'Page suivante'`   | Texte d'info-bulle pour le lien de la page suivante.                                            |
| `prevPageTitle`  | `string`             | `'Page précédente'` | Texte d'info-bulle pour le lien de la page précédente.                                          |

## 📡 Événements

| Nom                      | Payload       | Description                                             |
|--------------------------|---------------|---------------------------------------------------------|
| `update:current-page`    | `number`      | Émis lorsque l'utilisateur change de page.              |

Il faut donc utiliser `v-model:current-page` sur le composant (cf. l’exemple ci-dessous).

## 🧩 Slots

Ce composant n'utilise pas de slots, tout est configuré via les props et les données des pages. 🚀

## 📝 Exemple d'utilisation

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
