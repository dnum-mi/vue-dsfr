# Élément de menu de navigation - `DsfrNavigationMenuItem`

## 🌟 Introduction

L'élément de menu de navigation est un composant conteneur qui représente un item individuel dans un menu déroulant. Il fournit la structure HTML appropriée et gère l'état actif.

Le composant `DsfrNavigationMenuItem` encapsule un élément de liste (`<li>`) avec les classes CSS appropriées du DSFR pour les menus déroulants.

::: warning Important

Ce composant **NE devrait PAS être utilisé directement**, il est **utilisé en interne** par son parent [**`DsfrNavigationMenu`**](/composants/DsfrNavigation)

:::

## 📐 Structure

L'élément de menu de navigation est composé des éléments suivants :

- un élément de liste `<li>` avec la classe `fr-menu__item`
- un identifiant unique généré automatiquement (prop `id`)
- l'attribut `aria-current="page"` quand l'élément est actif (prop `active`)
- un slot par défaut pour le contenu personnalisé (généralement un lien de menu)

## 🛠️ Props

| nom     | type      | défaut                  | obligatoire | description                                              |
|---------|-----------|-------------------------|-------------|----------------------------------------------------------|
| `id`    | `string`  | `() => useRandomId(...)`|             | Identifiant unique pour l'élément de menu               |
| `active`| `boolean` | `false`                 |             | Indique si cet élément est actuellement actif           |

## 📡 Événements

`DsfrNavigationMenuItem` ne déclenche pas d'événements spécifiques.

## 🧩 Slots

`DsfrNavigationMenuItem` possède un slot par défaut pour le contenu de l'élément.

| nom       | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `default` | Slot par défaut pour le contenu de l'élément de menu (généralement un lien) |

## 📝 Exemples

Exemple d'utilisation de `DsfrNavigationMenuItem` dans un menu :

::: code-group

```vue
<template>
  <DsfrNavigationMenu title="Services">
    <DsfrNavigationMenuItem active>
      <DsfrNavigationMenuLink
        to="/carte-identite"
        text="Carte d'identité"
      />
    </DsfrNavigationMenuItem>
    <DsfrNavigationMenuItem>
      <DsfrNavigationMenuLink
        to="/passeport"
        text="Passeport"
      />
    </DsfrNavigationMenuItem>
  </DsfrNavigationMenu>
</template>
```

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigationMenuItem.vue
<<< DsfrNavigation.types.ts

:::
