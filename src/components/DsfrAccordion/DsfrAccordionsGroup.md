# DsfrAccordionsGroup - Documentation Vue.js

## 🌟 Introduction

Le composant `DsfrAccordionsGroup` permet de regrouper plusieurs accordéons en une seule unité cohérente. Il gère la logique de sélection active entre les accordéons enfants, permettant ainsi d'ouvrir un accordéon tout en fermant les autres. Ce composant est essentiel pour organiser des ensembles d'accordéons liés de manière interactive.

🏅 La documentation sur l’accordéon sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon)

<VIcon name="vi-file-type-storybook" /> La story sur l’accordéon sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfraccordionsgroup--docs)

Le composant `DsfrAccordionsGroup` agit comme un conteneur pour les composants d'accordéons individuels. Il contrôle quel accordéon est actuellement ouvert, garantissant qu'un seul peut être déplié à la fois.

## 🛠️ Props

| Nom de Prop | Type | Par défaut | Description |
|-------------|------|------------|-------------|
| `modelValue` | `number` | `-1` | Index de l'accordéon actuellement actif. Ce prop est utilisé pour le contrôle externe de l'accordéon sélectionné. |

## 📡 Événements

| Nom de l'Événement | Payload | Description |
|--------------------|---------|-------------|
| `update:modelValue` | `number` | Émis lorsque l'accordéon actif change. Le payload est l'index du nouvel accordéon actif. |

## 🧩 Slots

- **`default`** : Slot par défaut pour le contenu du groupe d'accordéons. Ce slot contiendra les composants `DsfrAccordion` enfants.

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="260px">
  <DsfrAccordionDemo />
</Story>

<<< docs-demo/DsfrAccordionDemo.vue [Code de la démo]

:::

## ⚙️ Code source des composants

::: code-group
<<< DsfrAccordionsGroup.vue
<<< DsfrAccordion.types.ts
:::

<script setup lang="ts">
import DsfrAccordionDemo from './docs-demo/DsfrAccordionDemo.vue'
</script>
