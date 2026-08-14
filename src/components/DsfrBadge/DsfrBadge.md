# Badges - `DsfrBadge`

## 🌟 Introduction

Le `DsfrBadge` est le super-héros des petites étiquettes ! Ce composant Vue est idéal pour afficher des informations courtes et importantes, comme des catégories, des étiquettes ou des statuts. C'est comme le fromage sur votre pizza : petit mais essentiel !

🏅 La documentation sur le badge sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)

<VIcon name="vi-file-type-storybook" /> La story sur le badge sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrbadge--docs)

## 📐 Structure

- Le composant est un élément `p` avec la classe `fr-badge`.
- Props permettent de modifier l'apparence du badge selon les props : type (), présence d'icône, taille et gestion du texte trop long.
- Le `label` est affiché à l'intérieur d'un `span`, potentiellement avec la prop `ellipsis` et une taille définie ou maximale pour gérer le texte tronqué.

## 🛠️ Props

| Nom | Type | Défaut | Obligatoire | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | | ✅ | Le texte à afficher dans le badge. |
| `type` | `'success' \| 'warning' \| 'error' \| 'info' \| 'new' \| 'standard'` | `'info'` | | Définit le type de badge et change la couleur du badge en fonction du type. La valeur `standard` permet un badge sans couleur système, personnalisable avec `colorAccent`. |
| `colorAccent` | `'green-tilleul-verveine' \| 'green-bourgeon' \| 'green-emeraude' \| 'green-menthe' \| 'green-archipel' \| 'blue-ecume' \| 'blue-cumulus' \| 'purple-glycine' \| 'pink-macaron' \| 'pink-tuile' \| 'yellow-tournesol' \| 'yellow-moutarde' \| 'orange-terre-battue' \| 'brown-cafe-creme' \| 'brown-caramel' \| 'brown-opera' \| 'beige-gris-galet'` | | | Couleur d'accent du badge, prise en compte uniquement quand `type` vaut `standard`. |
| `noIcon` | `boolean` | `false` | | Si `true`, le badge s'affiche sans icône. |
| `small` | `boolean` | `false` | | Si `true`, affiche un badge de taille réduite. |
| `ellipsis` | `boolean` | `false` | | Si `true`, le texte est tronqué avec des points de suspension s'il est trop long. |

## 📝 Exemples d'utilisation

```vue
<template>
  <DsfrBadge
    type="success"
    label="Approuvé"
  />
</template>
```

```vue
<template>
  <DsfrBadge
    type="info"
    label="Titre peut-être un peu trop long"
    ellipsis
    style="max-width=150px;"
  />
</template>
```

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrBadgeExample />
</Story>

<<< docs-demo/DsfrBadgeExample.vue [Code de la démo]

<<< DsfrBadge.vue
:::

Voilà, le DsfrBadge est prêt à illuminer vos interfaces comme les lumières de la Tour Eiffel illuminent Paris la nuit. Utilisez-le pour mettre en avant ces petits détails qui font toute la différence. À vos badges, prêts, partez ! 🚀💡

<script setup lang="ts">
import DsfrBadgeExample from './docs-demo/DsfrBadgeExample.vue'
</script>
