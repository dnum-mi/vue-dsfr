# Liste de liens d’en-tête - `DsfrHeaderMenuLinks`

## 🌟 Introduction

Le composant `DsfrHeaderMenuLinkList` fournit une structure de navigation sous forme de liste, en utilisant le composant `DsfrHeaderMenuLink`.

## 📐 Structure

- `<DsfrHeaderMenuLinkList>` : Le composant principal.
  - Englobe une liste `<ul>` de `<DsfrHeaderMenuLink>`.
  - Chaque `DsfrHeaderMenuLink` est un élément de la liste et est rendu dynamiquement.

## 🛠️ Props

| Propriété      | Type                             | Description                                                               | Valeur par défaut   |
|----------------|----------------------------------|---------------------------------------------------------------------------|---------------------|
| `links`        | `DsfrHeaderMenuLinkProps[]`      | Un tableau d'objets de props pour chaque `DsfrHeaderMenuLink`.            | `[]`                |
| `navAriaLabel` | `string`                         | Label ARIA pour la navigation, utile pour l'accessibilité.                | `'Menu secondaire'` |

## 📡 Événements

- `linkClick` : Événement déclenché lorsque l'un des liens est cliqué. Fournit l'événement de clic (`MouseEvent`) comme paramètre.

## 🧩 Slots

Pas de slots spécifiques. Le contenu est généré dynamiquement en fonction de la prop `links`.

## 📝 Exemples

Ce composant est utilisé en interne dans DsfrHeader. Il n’y a pas de raison de l’utiliser en dehors.

## ⚙️ Code source du composant

::: code-group

<<< DsfrHeaderMenuLinks.vue
<<< DsfrHeader.types.ts

:::
