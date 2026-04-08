# Catégorie de méga-menu - `DsfrNavigationMegaMenuCategory`

## 🌟 Introduction

La catégorie de méga-menu est un composant qui représente une colonne dans un méga-menu de navigation. Elle affiche un titre et une liste de liens organisés verticalement.

Le composant `DsfrNavigationMegaMenuCategory` crée une section structurée dans un méga-menu avec un titre cliquable et une liste de liens de navigation.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigation`**](/composants/DsfrNavigation)

:::

## 📐 Structure

La catégorie de méga-menu est composée des éléments suivants :

- un conteneur de colonne responsive (`fr-col-12 fr-col-lg-3`)
- un titre de catégorie dans un élément `<h5>` avec lien
- une liste non-ordonnée (`<ul>`) de liens de navigation
- chaque lien utilise le composant `DsfrNavigationMenuLink`
- les clics sur les liens remontent l'événement `toggleId` vers le méga-menu parent pour fermer le menu ouvert

## 🛠️ Props

| nom     | type                        | défaut  | obligatoire | description                                              |
|---------|-----------------------------|---------|-------------|----------------------------------------------------------|
| `title` | `string`                    |         | ✅          | Titre de la catégorie affiché en en-tête                |
| `links` | `DsfrNavigationMenuLinkProps[]` |         | ✅          | Tableau des liens à afficher dans cette catégorie       |
| `active`| `boolean`                   | `false` |             | Indique si cette catégorie est actuellement active      |

## 📡 Événements

`DsfrNavigationMegaMenuCategory` déclenche l'événement suivant :

| nom       | donnée (payload) | description                                                                 |
|-----------|------------------|-----------------------------------------------------------------------------|
| `toggleId`| `string`         | Émis au clic sur un lien de catégorie, puis relayé par le méga-menu parent |

## 🧩 Slots

`DsfrNavigationMegaMenuCategory` n'a pas de slots personnalisés.

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationMegaMenuCategory` dans un méga-menu :

::: code-group

```vue
<template>
  <DsfrNavigationMegaMenu
    title="Services"
    :menus="[
      {
        title: 'Services administratifs',
        active: false,
        links: [
          { to: '/carte-identite', text: 'Carte d\'identité' },
          { to: '/passeport', text: 'Passeport' },
          { to: '/permis', text: 'Permis de conduire' },
        ],
      },
    ]"
  />
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationMegaMenuCategory.vue
<<< DsfrNavigation.types.ts

:::
