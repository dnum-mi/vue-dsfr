# Lien de menu latéral - `DsfrSideMenuLink`

## 🌟 Introduction

Le lien de menu latéral est un composant qui crée automatiquement un lien cliquable dans un menu latéral. Il gère les liens externes et internes avec le routeur Vue.

Le composant `DsfrSideMenuLink` crée dynamiquement un élément `<a>` pour les liens externes ou un `<RouterLink>` pour les liens internes, avec la classe `fr-sidemenu__link` et support de l'état actif.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par [**`DsfrSideMenuList`**](/composants/DsfrSideMenuList)

:::

## 📐 Structure

Le lien de menu latéral crée dynamiquement :

- un élément `<a>` pour les liens externes (commençant par `http`)
- un `<RouterLink>` pour les liens internes avec gestion automatique du routeur Vue
- la classe CSS `fr-sidemenu__link` pour le styling DSFR
- l'attribut `aria-current="page"` si le lien est actif

## 🛠️ Props

| nom      | type      | défaut  | obligatoire | description                                              |
|----------|-----------|---------|-------------|----------------------------------------------------------|
| `active` | `boolean` | `false` |             | Si le lien représente la page active                    |
| `to`     | `string`  | `''`    | ✅          | URL ou route de destination                             |

## 📡 Événements

`DsfrSideMenuLink` ne déclenche pas d'événements.

## 🧩 Slots

| nom      | description                                              |
|----------|----------------------------------------------------------|
| `default`| Texte affiché du lien                                   |

## 📝 Exemples

Exemple d'utilisation de `DsfrSideMenuLink` dans un élément de menu :

::: code-group

```vue
<template>
  <DsfrSideMenuListItem>
    <DsfrSideMenuLink
      to="/"
      active
    >
      Accueil
    </DsfrSideMenuLink>
  </DsfrSideMenuListItem>
  <DsfrSideMenuListItem>
    <DsfrSideMenuLink to="https://www.service-public.fr">
      Service Public
    </DsfrSideMenuLink>
  </DsfrSideMenuListItem>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSideMenuLink.vue
<<< DsfrSideMenu.types.ts

:::
