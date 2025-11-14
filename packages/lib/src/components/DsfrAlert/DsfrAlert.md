# Alertes - `DsfrAlert`

## 🌟 Introduction

Les alertes permettent d’attirer l’attention de l’utilisateur sur une information sans interrompre sa tâche en cours.

L’alerte est disponible en deux tailles :


🏅 La documentation sur l’alerte sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/alerte)

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfralert--docs)

## 📐 Structure

L’alerte est composée des éléments suivants :

  - obligatoire sur la version MD (si la prop `small` est absente ou à `false`),
  - optionnel sur la version SM (si la prop `small` est à `true`).
  - `'info'` (valeur par défaut si la prop `type` est absente)
  - `'success'`
  - `'warning'`
  - `'error'`
  - optionnel sur la version MD
  - obligatoire sur la version SM
  - le `slot` par défaut peut être utilisé

Autres props :

## 🛠️ Props

| nom                | type                                                                                    | défaut          | obligatoire |
|--------------------|-----------------------------------------------------------------------------------------|-----------------|-------------|
| `id`               | *`string`*                                                                              | *random string* |             |
| `type`             | *`'info' \| 'success' \| 'warning' \| 'error'`*                                         | `'info'`        |
| `title`            | *`string`*                                                                              | `''`            | ✅           |
| `description`      | *`string`*                                                                              |                 |             |
| `titleTag`         | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'") | `'h3'`          |             |
| `small`            | *`boolean`*                                                                             | `false`         |             |
| `closed`           | *`boolean`*                                                                             | `false`         |             |
| `closeable`        | *`boolean`*                                                                             | `false`         |             |
| `closeButtonLabel` | *`string`*                                                                              | `Fermer`        |             |

## 📡 Évenements

`DsfrAlert` déclenche l’événement `'close'` lors du clic sur le bouton pour fermer l’alerte, sans données (sans *payload*).

|  nom                   |   donnée (*payload*) |
| ---------------------- |  ---------           |
| `'close'`              |       *aucune*       |

## 🧩 Slots

`DsfrAlert` possède un slot par défaut pour la description de l'alerte.

## 📝 Toutes les variantes 🌈 d’Alertes

::: code-group

<Story data-title="Démo" min-h="1600px">
  <DsfrAlertDemo />
</Story>

<<< docs-demo/DsfrAlertDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrAlert.vue
<<< DsfrAlert.types.ts

:::

<script setup lang="ts">
import DsfrAlertDemo from './docs-demo/DsfrAlertDemo.vue'
</script>
