# Tableau - `DsfrTable`

## 🌟 Introduction

Le composant `DsfrTable` est un élément puissant et polyvalent pour afficher des données sous forme de tableaux dans vos applications Vue. Utilisant une combinaison de slots, de props, et d'événements personnalisés, ce composant offre une flexibilité remarquable. Plongeons dans les détails !

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau/)

<VIcon name="vi-file-type-storybook" /> La story sur le tableau sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtable--docs)

## Props 🛠️

| Nom               | Type                                           | Défaut    | Obligatoire | Description                                                                                         |
|-------------------|------------------------------------------------|-----------|-------------|-----------------------------------------------------------------------------------------------------|
| `title`         | `string`                                |      |    ✅         | Les en-têtes de votre tableau.                                                                      |
| `headers`         | `Array<string>`                                | `[]`      |             | Les en-têtes de votre tableau.                                                                      |
| `rows`            | `Array<DsfrTableRowProps \| string[] \| DsfrTableCellProps[]>` | `[]`      |             | Les données de chaque rangée dans le tableau.                                                       |
| `rowKey`          | `string \| Function`                           | `undefined`|             | Une clé unique pour chaque rangée, utilisée pour optimiser la mise à jour du DOM.                   |
| `currentPage`     | `number`                                       | `1`       |             | La page actuelle dans la pagination du tableau.                                                     |
| `resultsDisplayed`| `number`                                       | `10`      |             | Le nombre de résultats affichés par page dans la pagination.                                        |

## Events 📡

| Nom                  | Description                                     |
|----------------------|-------------------------------------------------|
| `update:currentPage` | Émis lors du changement de la page actuelle.    |

## Slots 🧩

- **`header`**: Ce slot permet de personnaliser les en-têtes du tableau. Par défaut, il utilise [`DsfrTableHeaders`](./DsfrTableHeader.md) avec les props `headers`.
- **Slot par défaut**: Utilisé pour le corps du tableau. Par défaut, il affiche les rangées de données via `DsfrTableRow`.

## Exemples 📝

### Exemple Basique

::: code-group

<Story data-title="Démo basique" min-h="260px">
  <div class="fr-container">
    <DsfrTableDemoSimple />
  </div>
</Story>

<<< ./docs-demo/DsfrTableDemoSimple.vue

:::

### Exemple utilisant des composants dans les cellules

::: code-group

<Story data-title="Démo basique" min-h="260px">
  <div class="fr-container">
    <DsfrTableDemoComplexe />
  </div>
</Story>

<<< ./docs-demo/DsfrTableDemoComplexe.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTable.vue

:::

C'est tout, amis développeurs ! Avec DsfrTable, donnez vie à vos données comme jamais auparavant ! 🎉

<script setup lang="ts">
import DsfrTableDemoSimple from './docs-demo/DsfrTableDemoSimple.vue'
import DsfrTableDemoComplexe from './docs-demo/DsfrTableDemoComplexe.vue'
</script>
