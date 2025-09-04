# Ensemble de Tags - `DsfrTags`

## 🌟 Introduction

Le composant `DsfrTags` permet d'afficher un groupe de tags interactifs et personnalisables. Il est particulièrement utile pour gérer des listes de filtres ou des catégories sélectionnables. Il s'appuie sur le composant [`DsfrTag`](./DsfrTag.md) et offre la possibilité de suivre l'état des tags sélectionnés via une liaison avec `v-model`.

🏅 La documentation sur le tag sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)

<VIcon name="vi-file-type-storybook" /> La story sur le tag sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtags--docs)

## 📐 Structure

Ce composant affiche une liste de tags sous forme de `<ul>` et permet d'associer un modèle réactif (`v-model`) pour suivre les sélections des tags interactifs.

## 🛠️ Props

| Nom           | Type                          | Par défaut | Description |
|--------------|------------------------------|-----------|-------------|
| `tags`       | `DsfrTagProps<T>[]`          | `[]`      | Liste des tags à afficher. |
| `modelValue` | `T[]`                        | `undefined` | Liste des valeurs des tags sélectionnés (si les tags sont sélectionnables). |

## 📡 Événements

| Nom                  | Paramètres       | Description |
|----------------------|-----------------|-------------|
| `update:modelValue` | `T[]`            | Émis lorsqu'un tag sélectionnable est (dé)sélectionné, mettant à jour la liste des valeurs sélectionnées. |

## 🧩 Slots

_(Aucun slot spécifique, chaque tag étant généré automatiquement en fonction de la liste fournie en props.)_

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrTagsDemo />
</Story>

<<< docs-demo/DsfrTagsDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTag.vue
<<< DsfrTags.types.ts

:::

<script setup lang="ts">
import DsfrTagsDemo from './docs-demo/DsfrTagsDemo.vue'
</script>
