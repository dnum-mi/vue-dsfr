# Menu de navigation - `DsfrNavigationMenu`

## 🌟 Introduction

Le menu de navigation est un composant qui affiche un menu déroulant simple avec une liste de liens. Il offre une navigation hiérarchique avec animations d'ouverture/fermeture.

Le composant `DsfrNavigationMenu` crée un menu déroulant traditionnel avec un bouton déclencheur et une liste de liens organisés verticalement.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigation`**](/composants/DsfrNavigation)

:::

## 📐 Structure

Le menu de navigation est composé des éléments suivants :

- un bouton déclencheur avec le titre (prop `title`)
- un conteneur expansible avec animations de collapse
- une liste non-ordonnée (`<ul>`) de liens de navigation
- chaque lien utilise les composants `DsfrNavigationMenuItem` et `DsfrNavigationMenuLink`
- un slot par défaut pour contenu personnalisé

## 🛠️ Props

| nom         | type                        | défaut                  | obligatoire | description                                              |
|-------------|-----------------------------|-------------------------|-------------|----------------------------------------------------------|
| `title`     | `string`                    |                         | ✅          | Titre du menu affiché dans le bouton                    |
| `id`        | `string`                    | `() => useRandomId(...)`|             | Identifiant unique pour le menu                         |
| `links`     | `DsfrNavigationMenuLinkProps[]` | `[]`                 |             | Tableau des liens à afficher dans ce menu               |
| `expandedId`| `string`                    | `''`                    |             | ID du menu actuellement expansé                         |
| `active`    | `boolean`                   | `false`                 |             | Indique si ce menu est actuellement actif               |

## 📡 Événements

`DsfrNavigationMenu` déclenche l'événement suivant :

| nom       | donnée (payload) | description                                                  |
|-----------|------------------|--------------------------------------------------------------|
| `toggleId`| `string`        | Émis lors du clic sur le bouton pour ouvrir/fermer le menu   |

## 🧩 Slots

`DsfrNavigationMenu` possède un slot par défaut pour personnaliser le contenu.

| nom       | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `default` | Slot par défaut pour le contenu personnalisé du menu                        |

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationMenu` dans une navigation :

::: code-group

```vue
<template>
  <DsfrNavigation :nav-items="navItems">
    <DsfrNavigationMenu
      title="Administration"
      :links="[
        { to: '/impots', text: 'Impôts' },
        { to: '/securite-sociale', text: 'Sécurité sociale' },
        { to: '/permis', text: 'Permis de conduire' },
      ]"
      :expanded-id="expandedMenuId"
      @toggle-id="handleToggle"
    />
  </DsfrNavigation>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationMenu.vue
<<< DsfrNavigation.types.ts

:::
