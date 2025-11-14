# Élément de liste de menu latéral - `DsfrSideMenuListItem`

## 🌟 Introduction

L'élément de liste de menu latéral est un composant simple qui représente un élément `<li>` dans une liste de menu latéral. Il gère l'état actif de l'élément.

Le composant `DsfrSideMenuListItem` crée un élément de liste avec la classe `fr-sidemenu__item` et supporte l'état actif avec la classe `fr-sidemenu__item--active`.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par [**`DsfrSideMenuList`**](/composants/DsfrSideMenuList)

:::

## 📐 Structure

L'élément de liste crée :

- Un élément `<li>` avec la classe `fr-sidemenu__item`
- La classe `fr-sidemenu__item--active` si l'élément est actif
- Un slot par défaut pour le contenu (lien ou bouton)

## 🛠️ Props

| nom      | type      | défaut  | obligatoire | description                                              |
|----------|-----------|---------|-------------|----------------------------------------------------------|
| `active` | `boolean` | `false` |             | Si l'élément est dans l'état actif                      |

## 📡 Événements

`DsfrSideMenuListItem` ne déclenche pas d'événements.

## 🧩 Slots

| nom      | description                                              |
|----------|----------------------------------------------------------|
| `default`| Contenu de l'élément (lien ou bouton avec sous-menu)    |

## 📝 Exemples

Exemple d'utilisation de `DsfrSideMenuListItem` dans une liste :

::: code-group

```vue
<template>
  <DsfrSideMenuList id="menu-list">
    <DsfrSideMenuListItem active>
      <a
        href="/"
        class="fr-sidemenu__link"
        aria-current="page"
      >
        Accueil
      </a>
    </DsfrSideMenuListItem>
    <DsfrSideMenuListItem>
      <DsfrSideMenuButton control-id="services">
        Services
      </DsfrSideMenuButton>
    </DsfrSideMenuListItem>
  </DsfrSideMenuList>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenuListItem.vue
<<< DsfrSideMenu.types.ts

:::
