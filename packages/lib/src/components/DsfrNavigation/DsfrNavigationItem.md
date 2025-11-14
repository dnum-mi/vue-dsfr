# Élément de navigation - `DsfrNavigationItem`

## 🌟 Introduction

L'élément de navigation est un composant conteneur qui représente un item individuel dans la liste de navigation principale. Il fournit la structure HTML appropriée et gère l'état actif pour l'accessibilité.

Le composant `DsfrNavigationItem` encapsule un élément de liste (`<li>`) avec les classes CSS appropriées du DSFR et gère l'attribut `aria-current` pour indiquer l'élément actif.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigation`**](/composants/DsfrNavigation)

:::

## 📐 Structure

L'élément de navigation est composé des éléments suivants :

- un élément de liste `<li>` avec la classe `fr-nav__item`
- un identifiant unique généré automatiquement (prop `id`)
- l'attribut `aria-current="page"` quand l'élément est actif (prop `active`)
- un slot par défaut pour le contenu personnalisé (généralement un lien de navigation)

## 🛠️ Props

| nom     | type      | défaut                  | obligatoire | description                                              |
|---------|-----------|-------------------------|-------------|----------------------------------------------------------|
| `id`    | `string`  | `() => useRandomId(...)`|             | Identifiant unique pour l'élément de navigation         |
| `active`| `boolean` | `false`                 |             | Indique si cet élément est actuellement actif           |

## 📡 Événements

`DsfrNavigationItem` ne déclenche pas d'événements spécifiques.

## 🧩 Slots

`DsfrNavigationItem` possède un slot par défaut pour le contenu de l'élément de navigation.

| nom       | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `default` | Slot par défaut pour le contenu de l'élément de navigation (généralement un lien) |

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationItem` dans une navigation :

::: code-group

```vue
<template>
  <DsfrNavigation :nav-items="navItems">
    <DsfrNavigationItem active>
      <DsfrNavigationMenuLink
        to="/accueil"
        text="Accueil"
      />
    </DsfrNavigationItem>
    <DsfrNavigationItem>
      <DsfrNavigationMenuLink
        to="/services"
        text="Services"
      />
    </DsfrNavigationItem>
  </DsfrNavigation>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationItem.vue
<<< DsfrNavigation.types.ts

:::
