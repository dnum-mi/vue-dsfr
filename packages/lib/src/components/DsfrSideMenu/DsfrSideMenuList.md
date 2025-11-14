# Liste de menu latéral - `DsfrSideMenuList`

## 🌟 Introduction

La liste de menu latéral est un composant qui gère une liste d'éléments de navigation dans un menu latéral. Elle supporte les éléments imbriqués et le collapse/expand automatique.

Le composant `DsfrSideMenuList` crée une liste `<ul>` avec la classe `fr-sidemenu__list` et gère automatiquement les liens externes/internes, les états actifs, et les sous-menus collapsibles.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrSideMenu`**](/composants/DsfrSideMenu)

:::

## 📐 Structure

La liste de menu latéral crée :

- Un conteneur `<div>` avec support du collapse (si `collapsable`)
- Une liste `<ul>` avec la classe `fr-sidemenu__list`
- Des éléments `DsfrSideMenuListItem` pour chaque élément de menu
- Support automatique des liens externes (`<a>`) et internes (`<RouterLink>`)
- Gestion des sous-menus avec `DsfrSideMenuButton` pour les éléments parents

## 🛠️ Props

| nom               | type                       | défaut     | obligatoire | description                                              |
|-------------------|----------------------------|------------|-------------|----------------------------------------------------------|
| `id`              | `string`                   |            | ✅          | Identifiant unique de la liste                          |
| `collapsable`     | `boolean`                  | `false`    |             | Si la liste peut être réduite/expandue                  |
| `expanded`        | `boolean`                  | `false`    |             | État d'expansion de la liste                            |
| `menuItems`       | `MenuItem[]`               | `[]`       |             | Éléments du menu avec structure imbriquée              |
| `focusOnExpanding`| `boolean`                  | `false`    |             | Focus automatique lors de l'expansion                  |

## 📡 Événements

`DsfrSideMenuList` déclenche l'événement suivant :

| nom           | donnée (payload) | description                                                  |
|---------------|------------------|--------------------------------------------------------------|
| `toggleExpand`| `string`        | Émis lors du toggle d'expansion d'un élément                |

## 🧩 Slots

| nom      | description                                              |
|----------|----------------------------------------------------------|
| `default`| Contenu personnalisé de la liste (remplace les éléments par défaut) |

## 📝 Exemples

Exemple d'utilisation de `DsfrSideMenuList` dans un menu latéral :

::: code-group

```vue
<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  { text: 'Accueil', to: '/', active: true },
  { text: 'Services', menuItems: [
    { text: 'Service 1', to: '/service1' },
    { text: 'Service 2', to: '/service2' },
  ] },
])

const onToggleExpand = (id: string) => {
  console.log('Toggle expand:', id)
}
</script>

<template>
  <DsfrSideMenu heading-title="Navigation">
    <DsfrSideMenuList
      id="main-menu"
      :menu-items="menuItems"
      @toggle-expand="onToggleExpand"
    />
  </DsfrSideMenu>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenuList.vue
<<< DsfrSideMenu.types.ts

:::
