# Lien de menu de navigation - `DsfrNavigationMenuLink`

## 🌟 Introduction

Le lien de menu de navigation est un composant qui crée un lien cliquable dans un menu de navigation. Il gère automatiquement les liens externes et internes avec le routeur Vue.

Le composant `DsfrNavigationMenuLink` crée un lien de navigation avec support des icônes, gestion automatique des liens externes/internes, et intégration avec le système de navigation du header.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigationMenu`**](/composants/DsfrNavigation)

:::

## 📐 Structure

Le lien de menu de navigation crée dynamiquement :

- un élément `<a>` pour les liens externes (commençant par `http`)
- un `<RouterLink>` pour les liens internes avec gestion automatique du routeur Vue
- une icône optionnelle avec support des icônes DSFR (`fr-icon-*`) ou Iconify
- la classe CSS `fr-nav__link` pour le styling DSFR

## 🛠️ Props

| nom      | type                       | défaut                  | obligatoire | description                                              |
|----------|----------------------------|-------------------------|-------------|----------------------------------------------------------|
| `id`     | `string`                   | `() => useRandomId(...)`|             | Identifiant unique pour le lien                         |
| `to`     | `string \| RouteLocationRaw`| `'#'`                   |             | Destination du lien (URL ou objet route Vue)            |
| `text`   | `string`                   | `''`                    |             | Texte affiché du lien                                   |
| `icon`   | `string \| VIcon['$props']`| `undefined`             |             | Icône à afficher (nom Iconify ou props VIcon)           |
| `onClick`| `Function`                 | `() => undefined`       |             | Fonction appelée lors du clic sur le lien               |

## 📡 Événements

`DsfrNavigationMenuLink` déclenche l'événement suivant :

| nom       | donnée (payload) | description                                                  |
|-----------|------------------|--------------------------------------------------------------|
| `toggleId`| `string`        | Émis lors du clic pour gérer l'état des menus               |

## 🧩 Slots

`DsfrNavigationMenuLink` n'a pas de slots personnalisés.

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationMenuLink` dans un menu :

::: code-group

```vue
<template>
  <DsfrNavigationMenu title="Liens utiles">
    <DsfrNavigationMenuItem>
      <DsfrNavigationMenuLink
        to="/accueil"
        text="Page d'accueil"
        icon="ri-home-line"
      />
    </DsfrNavigationMenuItem>
    <DsfrNavigationMenuItem>
      <DsfrNavigationMenuLink
        to="https://www.service-public.gouv.fr"
        text="Service Public"
        icon="fr-icon-external-link-line"
      />
    </DsfrNavigationMenuItem>
  </DsfrNavigationMenu>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationMenuLink.vue
<<< DsfrNavigation.types.ts

:::
