# Tableau - `DsfrDataTable`

## 🌟 Introduction

Le composant `DsfrDataTable` est un élément puissant et polyvalent pour afficher des données sous forme de tableaux dans vos applications Vue avec une intégration facile du **tri** et de la **pagination**, entre autres.
Il a été enrichi pour remplacer complètement DsfrTable (qui n’est plus maintenu mais toujours présent dans la bibliothèque) et pour répondre à la version [1.14.3 du DSFR](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3).  Utilisant une combinaison de slots, de props, et d'événements personnalisés, ce composant offre une flexibilité remarquable. Plongeons dans les détails !

::: warning Prudence

Ce composant est complexe. Son API ne devrait pas changer, elle devrait s’étoffer dans les prochaines semaines ou les prochains mois.

Si vous avez des propositions, veuillez lancer une [**discussion**](https://github.com/dnum-mi/vue-dsfr/discussions) avant d’ouvrir une issue.

:::

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tableau/)

<VIcon name="vi-file-type-storybook" /> La story sur le tableau de données sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrdatatable--docs)

## 📐 Structure

Le composant `DsfrDataTable` s'utilise pour afficher des données structurées sous forme de tableau. Il prend en charge le tri des colonnes, la pagination des lignes, et l'ajout de boutons ou d'icônes pour effectuer des actions spécifiques sur les données.

Rappel de la structure du tableau DSFR : ce qui concerne la sélection se trouve au dessus du tableau. Les informations concernant le tableau complet, la pagination et les actions globales se trouvent en dessous du tableau.

### Accessibilité

Le composant gère automatiquement l'attribut `aria-sort` sur les en-têtes de colonnes triables :
- `aria-sort="ascending"` pour une colonne triée en ordre croissant
- `aria-sort="descending"` pour une colonne triée en ordre décroissant
- `aria-sort="none"` pour les colonnes triables non actuellement triées
- Pas d'attribut `aria-sort` pour les colonnes non triables

Cela permet aux lecteurs d'écran d'annoncer correctement l'état de tri de chaque colonne aux utilisateurs.

## 🛠️Props

| Nom               | Type                                           | Défaut    | Obligatoire | Description                                                                                         |
|-------------------|------------------------------------------------|-----------|-------------|-----------------------------------------------------------------------------------------------------|
| `id`                        | `string`                                             | `undefined`              |             | Identifiant unique du tableau.                                                                                                               |
| `title`                     | `string`                                            |                          | ✅          | Titre du tableau.                                                                                                                         |
| `headersRow`                | `Array<string \| DsfrDataTableHeaderCellObject>`     | `[]`                     |             | Les en-têtes de votre tableau. Peut être remplacé par le slot `thead`. Peut aussi être remplacé par la prop `columns`|
| `columns`                   | `Array<DsfrDataTableColumn>`                         | `undefined`              |             | Tableau de colonnes définissant pour chacune : la clé (optionnelle), le libellé, les attributs HTML (optionnels), si la colonne est fixe (`fixed`: `true` ou `sm`, `md`, `lg`) et si les cellules doivent être des en-têtes de ligne |
| `rows`                      | `DsfrDataTableRow[]`                                 | `[]`                     |             | Les données de chaque rangée dans le tableau.                                                                                                |
| `rowKey`                    | `string \| number`                                   | `undefined`              |             | Une clé unique pour chaque rangée, utilisée pour optimiser la mise à jour du DOM.                                                           |
| `topActionsRow`             | `string[]`                                           | `undefined`              |             | Actions affichées en haut du tableau.                                                                                                        |
| `bottomActionsRow`          | `string[]`                                           | `undefined`              |             | Actions affichées en bas du tableau.                                                                                                        |
| `selectableRows`            | `boolean`                                            | `false`                  |             | Si `true`, permet la sélection des lignes via des cases à cocher.                                                                            |
| `sortableRows`              | `boolean \| string[]`                                | `false`                  |             | Si `true`, permet le tri des lignes selon chaque colonne du header. Peut être un tableau de clés pour spécifier les colonnes triables.      |
| `sorted`                    | `string`                                             | `undefined`              |             | Clé de la colonne actuellement triée.                                                                                                       |
| `sortFn`                    | `(a: unknown, b: unknown) => number`                 | `undefined`              |             | Fonction de tri personnalisée pour les lignes du tableau.                                                                                    |
| `verticalBorders`           | `boolean`                                            | `false`                  |             | Si `true`, affiche des bordures verticales entre les colonnes.                                                                               |
| `bottomCaption`             | `boolean`                                            | `false`                  |             | Si `true`, affiche une légende en bas du tableau.                                                                                            |
| `noCaption`                 | `boolean`                                            | `false`                  |             | Si `true`, supprime la légende du tableau.                                                                                                   |
| `captionDetail`             | `string`                                             | `undefined`              |             | Détails supplémentaires pour la légende du tableau.                                                                                          |
| `multilineTable`            | `boolean`                                            | `false`                  |             | Si `true`, permet le contenu multi-lignes dans les cellules.                                                                                 |
| `noScroll`                  | `boolean`                                            | `false`                  |             | Si `true`, désactive le défilement horizontal du tableau.                                                                                    |
| `size`                      | `'sm' \| 'md' \| 'lg'`                               | `'md'`                   |             | Taille du tableau (petit, moyen, grand).                                                                                                     |
| `topBarDetail`         | `string`                                             | `undefined`              |             | Détails qui concernent uniquement la selection effectuée affichés dans la barre supérieure du tableau.                                                                                        |
| `topBarButtons`        | `(DsfrButtonProps & { tertiary?: undefined })[]`     | `undefined`              |             | Boutons d'action qui concernent uniquement la selection effectuée affichés dans la barre supérieure du tableau.                                                                                        |
| `topBarButtonsSize`    | `DsfrButtonGroupProps['size']`                       | `undefined`              |             | Taille des boutons de la barre supérieure.                                                                                                   |
| `pages`                     | `Page[]`                                             | `undefined`              |             | Liste des pages pour la pagination. Si non définie, les pages sont générées automatiquement.                                                 |
| `pagination`                | `boolean`                                            | `false`                  |             | Si `true`, active la pagination des lignes du tableau.                                                                                       |
| `paginationOptions`         | `number[]`                                           | `[5, 10, 20]`            |             | Options disponibles pour le nombre de lignes par page.                                                                                       |
| `paginationAriaLabel`       | `string`                                             | `undefined`              |             | Attribut aria-label pour la pagination.                                                                                                     |
| `paginationSelectLabel`     | `string`                                             | `undefined`              |             | Label pour le sélecteur de lignes par page.                                                                                                  |
| `currentPage`               | `number`                                             | `1`                      |             | Numéro de la page actuellement affichée.                                                                                                     |
| `rowsPerPage`               | `number`                                             | `10`                     |             | Nombre de lignes à afficher par page.                                                                                                        |
| `bottomActionBarClass`      | `string \| Record<string, boolean> \| Array<string \| Record<string, boolean>>` | `undefined` |             | Classe CSS pour la barre d'actions en bas du tableau.                                                                                        |
| `paginationWrapperClass`    | `string \| Record<string, boolean> \| Array<string \| Record<string, boolean>>` | `undefined` |             | Classe CSS pour l'élément englobant la pagination.                                                                                           |
| `tableBottomBarDetail`      | `string`                                             | `undefined`              |             | Détails qui concernent l'ensemble du tableau affichés dans la barre inférieure du tableau.                                                                                        |
| `tableBottomBarButtons`     | `DsfrButtonProps[]`                                  | `undefined`              |             | Boutons d'action qui concernent l'ensemble du tableau affichés dans la barre inférieure du tableau.                                                                                        |
| `tableBottomBarButtonsSize` | `DsfrButtonGroupProps['size']`                       | `undefined`              |             | Taille des boutons de la barre inférieure.                                                                                                   |

## 📡 Events

| Nom                      | Payload                | Description                                                                                   |
|--------------------------|------------------------|-----------------------------------------------------------------------------------------------|
| `update:selection`       | `string[]`             | Émis lors du changement de la sélection de lignes. Utilisable avec `v-model:selection`.       |
| `update:current-page`    | `number`               | Émis lors du changement du numéro de page. Utilisable avec `v-model:currentPage`.             |
| `update:rows-per-page`   | `number`               | Émis lors du changement du nombre de lignes à afficher par page. Utilisable avec `v-model:rowsPerPage`. |
| `update:sorted-by`       | `string \| undefined`  | Émis lors du changement de l'identifiant de la colonne à trier. Utilisable avec `v-model:sortedBy`.    |
| `update:sorted-desc`     | `boolean`              | Émis lors du changement du sens de tri (ascendant/descendant). Utilisable avec `v-model:sortedDesc`.   |

### Utilisation de v-model

Vous pouvez utiliser `v-model` pour les propriétés suivantes :

```vue
<DsfrDataTable
  v-model:selection="selectedRows"
  v-model:current-page="pageNum"
  v-model:rows-per-page="itemsPerPage"
  v-model:sorted-by="sortColumn"
  v-model:sorted-desc="isDescending"
  :title="tableTitle"
  :headers-row="headers"
  :rows="data"
/>
```

## 🧩 Slots

### Structure du tableau

| Nom               | Scope        | Description                                                                                         |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------|
| **`tableTopBar`** | | Remplace l'ensemble de la barre supérieure du tableau. Permet de personnaliser complètement la structure.    |
| **`tableTopBarDetail`** | | Détails/informations affichés en haut du tableau concernant la sélection effectuée.                |
| **`tableTopBarSearch`** | | Zone pour ajouter un composant de recherche dans la barre supérieure.                             |
| **`tableTopBarButtons`** | | Boutons d'action contextuels (concernant la sélection) affichés en haut du tableau.               |
| **`tableTopBarSegmented`** | | Espace pour ajouter des contrôles segmentés.              |
| **`captionDescription`** | | Description/détails additionnels de la légende du tableau (`<caption>`).                          |
| **`Thead`** | | Remplace l'en-tête complet du tableau (`<thead>` par défaut).                                      |
| **`header`** | `{ key: string, label: string }` | Personnalisation du rendu de chaque en-tête de colonne.                       |
| **`tbody`** | | Remplace le corps du tableau (`<tbody>` par défaut et toutes les lignes).                           |
| **`cell`** | `{ colKey: string, cell: unknown }` | Personnalisation du rendu de chaque cellule.                                   |
| **`tableBottomBar`** | | Remplace l'ensemble de la barre inférieure du tableau. Permet de personnaliser complètement la structure.    |
| **`pagination`** | | Remplace la pagination par défaut. Utile pour intégrer un composant de pagination personnalisé.   |
| **`tableBottomBarActions`** | | Boutons d'action globaux affichés en bas du tableau (concernent l'ensemble des données).         |

## 📝 Exemples

### Exemple Basique

::: code-group

<Story data-title="Démo basique" min-h="260px">
  <div class="fr-container">
    <DsfrDataTableDemoSimple />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoSimple.vue

:::

### Exemple Complexe

::: code-group

<Story data-title="Démo complexe" min-h="300px">
  <div class="fr-container">
    <DsfrDataTableDemoComplexe />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoComplexe.vue

:::

### Exemple Plus Complexe

::: code-group

<Story data-title="Démo plus complexe" min-h="400px">
  <div class="fr-container">
    <DsfrDataTableDemoPlusComplexe />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoPlusComplexe.vue

:::

### Exemple Colonnes d'en-tête multiple

::: code-group

<Story data-title="Démo colonnes d'en-tête multiple" min-h="400px">
  <div class="fr-container">
    <DsfrDataTableDemoColonnesEnteteMultiple />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoColonnesEnteteMultiple.vue

:::

### Exemple Colonnes Fixes

::: code-group

<Story data-title="Démo colonnes fixes" min-h="320px">
  <div class="fr-container">
    <DsfrDataTableDemoColonnesFixes />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoColonnesFixes.vue

:::

### Exemple Emploi du temps

::: code-group

<Story data-title="Démo calendrier/planning" min-h="400px">
  <div class="fr-container">
    <DsfrDataTableDemoSchedule />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoSchedule.vue

:::

## ⚙️Code source du composant

::: code-group

<<< DsfrDataTable.vue
<<< DsfrDataTable.types.ts

:::

C'est tout, amis développeurs ! Avec DsfrDataTable, donnez vie à vos données comme jamais auparavant ! 🎉

<script setup lang="ts">
import DsfrDataTableDemoSimple from './docs-demo/DsfrDataTableDemoSimple.vue'
import DsfrDataTableDemoComplexe from './docs-demo/DsfrDataTableDemoComplexe.vue'
import DsfrDataTableDemoPlusComplexe from './docs-demo/DsfrDataTableDemoPlusComplexe.vue'
import DsfrDataTableDemoColonnesEnteteMultiple from './docs-demo/DsfrDataTableDemoColonnesEnteteMultiple.vue'
import DsfrDataTableDemoColonnesFixes from './docs-demo/DsfrDataTableDemoColonnesFixes.vue'
import DsfrDataTableDemoSchedule from './docs-demo/DsfrDataTableDemoSchedule.vue'
</script>
