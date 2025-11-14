# Méga-menu de navigation - `DsfrNavigationMegaMenu`

## 🌟 Introduction

Le méga-menu de navigation est un composant complexe qui affiche un menu déroulant étendu avec plusieurs catégories organisées en grille. Il offre une navigation riche avec descriptions et liens structurés.

Le composant `DsfrNavigationMegaMenu` crée un menu déroulant expansif avec animations de collapse/expand, idéal pour présenter une navigation hiérarchique complexe avec descriptions et liens organisés.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigation`**](/composants/DsfrNavigation)

:::

## 📐 Structure

Le méga-menu de navigation est composé des éléments suivants :

- un bouton déclencheur avec le titre (prop `title`)
- un conteneur expansible avec animations de collapse
- une zone de leadership avec titre, description et lien principal
- une grille de catégories de menu (prop `menus`)
- un bouton de fermeture intégré
- des slots pour contenu personnalisé

## 🛠️ Props

| nom          | type                              | défaut                  | obligatoire | description                                                                 |
|--------------|-----------------------------------|-------------------------|-------------|-----------------------------------------------------------------------------|
| `title`      | `string`                          |                         | ✅          | Titre du méga-menu affiché dans le bouton et l'en-tête                      |
| `id`         | `string`                          | `() => useRandomId(...)`|             | Identifiant unique pour le méga-menu                                        |
| `description`| `string`                          | `''`                    |             | Description affichée dans la zone de leadership                             |
| `link`       | `{ to: RouteLocationRaw, text: string }` | `{ to: '#', text: 'Voir toute la rubrique' }` | | Lien principal vers la page complète de la rubrique |
| `menus`      | `DsfrNavigationMegaMenuCategoryProps[]` | `[]`              |             | Tableau des catégories de menu à afficher                                   |
| `expandedId` | `string`                          | `''`                    |             | ID du menu actuellement expansé                                             |
| `active`     | `boolean`                         | `false`                 |             | Indique si ce méga-menu est actuellement actif                              |

## 📡 Événements

`DsfrNavigationMegaMenu` déclenche l'événement suivant :

| nom       | donnée (payload) | description                                                  |
|-----------|------------------|--------------------------------------------------------------|
| `toggleId`| `string`        | Émis lors du clic sur le bouton pour ouvrir/fermer le menu   |

## 🧩 Slots

`DsfrNavigationMegaMenu` possède deux slots pour personnaliser le contenu.

| nom          | description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `description`| Slot nommé pour le contenu personnalisé de la description                   |
| `default`    | Slot par défaut pour le contenu personnalisé du méga-menu                   |

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationMegaMenu` dans une navigation :

::: code-group

```vue
<template>
  <DsfrNavigation :nav-items="navItems">
    <DsfrNavigationMegaMenu
      title="Services"
      description="Découvrez tous nos services publics"
      :link="{ to: '/services', text: 'Voir tous les services' }"
      :menus="serviceMenus"
      :expanded-id="expandedMenuId"
      @toggle-id="handleToggle"
    />
  </DsfrNavigation>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationMegaMenu.vue
<<< DsfrNavigation.types.ts

:::
