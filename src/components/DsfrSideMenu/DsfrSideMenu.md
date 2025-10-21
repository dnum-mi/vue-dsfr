# Menu latéral - `DsfrSideMenu`

## 🌟 Introduction

Le menu latéral est un composant de navigation verticale qui peut être réduit/expandé. Il suit les spécifications du Système de Design Français (DSFR) pour les menus de navigation latérale.

Le composant `DsfrSideMenu` fournit une navigation latérale avec support du collapse/expand, gestion des éléments de menu imbriqués, et intégration avec le routeur Vue.

## 📐 Structure

Le menu latéral crée :

- Un élément `<nav>` avec la classe `fr-sidemenu`
- Un bouton de toggle pour réduire/expandre le menu
- Un conteneur collapsible avec les éléments de menu
- Support des liens externes et internes avec le routeur Vue
- Gestion automatique des états actifs et expandés

## 🛠️ Props

| nom               | type                       | défaut                  | obligatoire | description                                              |
|-------------------|----------------------------|-------------------------|-------------|----------------------------------------------------------|
| `buttonLabel`     | `string`                   | `'Dans cette rubrique'` |             | Texte du bouton de toggle                               |
| `id`              | `string`                   | `() => useRandomId(...)`|             | Identifiant unique du menu                              |
| `sideMenuListId`  | `string`                   | `() => useRandomId(...)`|             | Identifiant de la liste de menu                         |
| `collapseValue`   | `string`                   | `'-492px'`              |             | Valeur de collapse CSS                                  |
| `menuItems`       | `DsfrSideMenuListItemProps[]` | `undefined`             |             | Éléments du menu (structure imbriquée)                 |
| `headingTitle`    | `string`                   | `''`                    |             | Titre du menu                                           |
| `titleTag`        | `string`                   | `'h3'`                  |             | Balise HTML pour le titre                               |
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

Exemple d'utilisation basique du menu latéral :

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

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenu.vue
<<< DsfrSideMenu.types.ts

:::
