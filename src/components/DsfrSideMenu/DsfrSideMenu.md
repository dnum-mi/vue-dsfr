# Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

Le composant `DsfrSideMenu` fournit une navigation latérale avec support du collapse/expand, gestion des éléments de menu imbriqués, et intégration avec le routeur Vue.

## 🌟 Introduction

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

🏅 La documentation sur le menu latéral sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-lateral)

<VIcon name="vi-file-type-storybook" /> La story sur le menu latéral sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfsidemenu--docs)

## 📐 Structure

Le menu latéral crée :

- Un élément `<nav>` avec la classe `fr-sidemenu`
- Un bouton de toggle pour réduire/expandre le menu
- Un conteneur collapsible avec les éléments de menu
- Support des liens externes et internes avec le routeur Vue
- Gestion automatique des états actifs et expandés

## 🛠️ Props

| nom               | type                       | défaut                  | obligatoire | description                                              |
|-------------------|----------------------------|-------------------------|-------------|----------------------------------------------------------|
| `buttonLabel`     | `string`                   | `'Dans cette rubrique'` |             | Label associé au bouton en état responsive dont le rôle est de déplier le side menu.                               |
| `id`              | `string`                   | `() => useRandomId(...)`|             | (optionnel) Valeur de l’attribut id du side menu. Par défaut, un id pseudo-aléatoire sera donné.                              |
| `sideMenuListId`  | `string`                   | `() => useRandomId(...)`|             | Identifiant de la liste de menu                         |
| `collapseValue`   | `string`                   | `'-492px'`              |             | Valeur de collapse CSS                                  |
| `menuItems`       | `DsfrSideMenuListItemProps[]` | `undefined`             |             | Tableau d’objets contenant les props attendus par DsfrSideMenuList.                 |
| `headingTitle`    | `string`                   | `''`                    |             | Titre de la rubrique (c’est le titre du menu latéral).                                           |
| `titleTag`         | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'") | `'h3'`          |             | Balise HTML pour le titre  |
| `focusOnExpanding`| `boolean`                  | `true`                  |             | Focus automatique lors de l'expansion                  |

## 📡 Événements

`DsfrSideMenu` déclenche l'événement suivant :

| nom           | donnée (payload) | description                                                  |
|---------------|------------------|--------------------------------------------------------------|
| `toggleExpand`| `string`        | Émis lors du toggle d'expansion d'un élément                |

## 🧩 Slots

| nom      | description                                              |
|----------|----------------------------------------------------------|
| `default`| Contenu du menu latéral (remplace la liste par défaut)   |

## 📝 Exemples

### Exemple d'utilisation basique du menu latéral

::: code-group

```vue
<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  { text: 'Accueil', to: '/' },
  { text: 'À propos', to: '/about' },
  {
    text: 'Services',
    menuItems: [
      { text: 'Service 1', to: '/service1' },
      { text: 'Service 2', to: '/service2' },
    ],
  },
])

const onToggleExpand = (id: string) => {
  console.log('Toggle expand:', id)
}
</script>

<template>
  <DsfrSideMenu
    heading-title="Navigation"
    :menu-items="menuItems"
    @toggle-expand="onToggleExpand"
  />
</template>
```

:::

### Exemple plus complet

::: code-group

<Story data-title="Démo" min-h="350px">
  <DsfrSideMenuDemo />
</Story>

<<< docs-demo/DsfrSideMenuDemo.vue [Code de la démo]

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenu.vue
<<< DsfrSideMenu.types.ts

:::

<script setup lang="ts">
import DsfrSideMenuDemo from './docs-demo/DsfrSideMenuDemo.vue'
</script>
