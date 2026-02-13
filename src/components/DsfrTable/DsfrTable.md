# Tableau - `DsfrTable`

## 🌟 Introduction

**Le composant `DsfrTable` est obsolète.**
Il n’est plus maintenu. Il reste utilisable pour des tableaux simples. Pour tout tableau plus complexe et/ou plus personnalisé, veuillez utiliser le composant [DsfrDataTable](/composants/DsfrDataTable).

Il est remplacé par le composant [DsfrDataTable](/composants/DsfrDataTable) qui a été enrichi pour répondre aux besoins en matière de tableaux conforme à la version 1.14.3 du DSFR

Bien qu'il soit déconseillé de l'utiliser nous laissons la docmentation.

:::

## 🛠️ Props

| Nom               | Type                                           | Défaut    | Obligatoire | Description                                                                                         |
|-------------------|------------------------------------------------|-----------|-------------|-----------------------------------------------------------------------------------------------------|
| `title`         | `string`                                |      |    ✅         | Les en-têtes de votre tableau.                                                                      |
| `headers`         | `Array<string>`                                | `[]`      |             | Les en-têtes de votre tableau.                                                                      |
| `rows`            | `Array<DsfrTableRowProps \| string[] \| DsfrTableCellProps[]>` | `[]`      |             | Les données de chaque rangée dans le tableau.                                                       |
| `rowKey`          | `string \| Function`                           | `undefined`|             | Une clé unique pour chaque rangée, utilisée pour optimiser la mise à jour du DOM.                   |
| `currentPage`     | `number`                                       | `1`       |             | La page actuelle dans la pagination du tableau.                                                     |
| `resultsDisplayed`| `number`                                       | `10`      |             | Le nombre de résultats affichés par page dans la pagination.                                        |

## 📡Événements

| Nom                  | Description                                     |
|----------------------|-------------------------------------------------|
| `update:currentPage` | Émis lors du changement de la page actuelle.    |

## 🧩 Slots

- **`header`**: Ce slot permet de personnaliser les en-têtes du tableau. Par défaut, il utilise [`DsfrTableHeaders`](./DsfrTableHeader.md) avec les props `headers`.
- **Slot par défaut**: Utilisé pour le corps du tableau. Par défaut, il affiche les rangées de données via `DsfrTableRow`.

## 📝 Exemples

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
<<< DsfrTable.types.ts

<script setup lang="ts">
import DsfrTableDemoSimple from './docs-demo/DsfrTableDemoSimple.vue'
import DsfrTableDemoComplexe from './docs-demo/DsfrTableDemoComplexe.vue'
import VIcon from '../VIcon/VIcon.vue'
</script>
