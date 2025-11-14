# Bouton de menu latéral - `DsfrSideMenuButton`

## 🌟 Introduction

Le bouton de menu latéral est un composant qui crée un bouton cliquable pour contrôler l'expansion/réduction d'un sous-menu dans une navigation latérale.

Le composant `DsfrSideMenuButton` crée un élément `<button>` avec la classe `fr-sidemenu__btn` et gère les attributs ARIA pour l'accessibilité, notamment `aria-expanded` et `aria-controls`.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par [**`DsfrSideMenuList`**](/composants/DsfrSideMenuList) pour les éléments de menu qui ont des sous-menus

:::

## 📐 Structure

Le bouton de menu latéral crée :

- Un élément `<button>` avec la classe `fr-sidemenu__btn`
- Les attributs ARIA appropriés (`aria-expanded`, `aria-controls`)
- L'attribut `aria-current="page"` si le bouton est actif
- Un slot par défaut pour le texte du bouton

## 🛠️ Props

| nom         | type      | défaut  | obligatoire | description                                              |
|-------------|-----------|---------|-------------|----------------------------------------------------------|
| `active`    | `boolean` | `false` |             | Si le bouton représente l'élément actif                 |
| `expanded`  | `boolean` | `false` |             | État d'expansion du sous-menu contrôlé                  |
| `controlId` | `string`  |         | ✅          | ID de l'élément contrôlé par ce bouton                  |

## 📡 Événements

`DsfrSideMenuButton` déclenche l'événement suivant :

| nom           | donnée (payload) | description                                                  |
|---------------|------------------|--------------------------------------------------------------|
| `toggleExpand`| `string`        | Émis lors du clic avec l'ID de l'élément contrôlé           |

## 🧩 Slots

| nom      | description                                              |
|----------|----------------------------------------------------------|
| `default`| Texte affiché dans le bouton                            |

## 📝 Exemples

Exemple d'utilisation de `DsfrSideMenuButton` dans un élément de menu :

::: code-group

```vue
<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)

const onToggleExpand = (id: string) => {
  if (id === 'submenu-1') {
    isExpanded.value = !isExpanded.value
  }
}
</script>

<template>
  <DsfrSideMenuListItem>
    <DsfrSideMenuButton
      control-id="submenu-1"
      :expanded="isExpanded"
      @toggle-expand="onToggleExpand"
    >
      Services
    </DsfrSideMenuButton>
  </DsfrSideMenuListItem>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenuButton.vue
<<< DsfrSideMenu.types.ts

:::
