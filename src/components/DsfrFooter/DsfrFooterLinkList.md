# Liste de lien du pied de page - `DsfrFooterLinkList`

## 🌟 Introduction

Le composant `DsfrFooterLinkList` est un élément de liste personnalisable pour les pieds de page. Il permet d'afficher une liste de liens catégorisés, adaptés à des besoins variés, notamment pour les sites web ayant besoin d'un pied de page structuré et accessible.

## 📐 Structure

Le composant se compose de deux parties principales :

1. **Titre de la Catégorie** : Affiché en haut de la liste des liens.
2. **Liste des Liens** : Une liste de liens (`DsfrFooterLink`) qui peuvent être internes (avec `RouterLink`) ou externes (avec une balise `<a>`).

## 🛠️ Props

| Nom de Prop    | Type                         | Par défaut | Description                                                                                                           |
|----------------|------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------|
| `categoryName` | `string`                     | `'Nom de la catégorie'` | Le nom de la catégorie de liens affichée.                                                                             |
| `links`        | `Array<DsfrFooterLinkProps>` | `[]` | Un tableau d'objets représentant les liens à afficher. Chaque objet peut avoir les propriétés de `DsfrFooterLinkProps`. |
| `titleTag`     | `string`                     | `'h3'` | Le type de balise pour afficher `categoryName`                                                 |

## 📡Événements

Pas d'événements émis directement par ce composant.

## 🧩 Slots

Aucun slot n'est disponible pour ce composant. Tout est basé sur les props fournies pour générer la vue.

## 📝 Exemples

Ce composant est utilisé en interne dans DsfrFooter, il n’y a pas de raison de l’utiliser en dehors.

## ⚙️ Code source du composant

::: code-group

<<< DsfrFooterLinkList.vue
<<< DsfrFooter.types.ts

:::
