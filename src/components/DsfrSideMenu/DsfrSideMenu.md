# Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

## 🌟 Introduction

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

🏅 La documentation sur le menu latéral sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)

<VIcon name="vi-file-type-storybook" /> La story sur le menu latéral sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfsidemenu--docs)

## 📐 Structure

-

## 🛠️ Props

| Propriété     | Type      | Description                                                               | Valeur par défaut                                 |
|---------------|-----------|---------------------------------------------------------------------------|---------------------------------------------------|
| `buttonLabel` | `string` | Label associé au bouton en état responsive dont le rôle est de déplier le side menu. | `'Dans cette rubrique'`|
| `headingTitle` | `string`  | Titre de la rubrique (c’est le titre du menu latéral).| `` |
| `menuItems` | `DsfrSideMenuListItemProps[]` | Tableau d’objets contenant les props attendus par DsfrSideMenuList. | `() => undefined` |
| `id` | `string` | (optionnel) Valeur de l’attribut id du side menu. Par défaut, un id pseudo-aléatoire sera donné. | `() => useRandomId('sidemenu')` |
| `sideMenuListId` | `() => useRandomId('sidemenu', 'list')` | Titre de la rubrique (c’est le titre du menu latéral). | `` |
| `collapseValue` | `string` | | `'-492px'` |
| `titleTag` | `string` |  | `'-492px'` |
| `focusOnExpanding` | `boolean` |  | `true` |

## 📡Événements

toggleExpand.

## 🧩 Slots

default. Slot par défaut du contenu du menu latéral

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="350px">
  <DsfrSideMenuDemo />
</Story>

<<< docs-demo/DsfrSideMenuDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenu.vue
<<< DsfrSideMenu.types.ts

:::

<script setup lang="ts">
import DsfrSideMenuDemo from './docs-demo/DsfrSideMenuDemo.vue'
</script>
