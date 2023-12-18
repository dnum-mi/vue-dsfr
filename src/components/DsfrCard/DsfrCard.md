# Carte - `DsfrCard`

La carte c'est tout simplement l'indispensable pour agrémenter vos sites et applications d'amuse-bouches esthétiques vers des contenus proposés. Il s'agit d'un composant permettant un aperçu d'une page et un lien vers cette dernière. Elle fait généralement partie d'une liste menant vers des contenus similaires.

La carte existe en trois tailles (LG, MD, SM) et deux formats (horizontal et vertical) déclinés sur deux supports (desktop et mobile), vous trouverez forcément votre bonheur ! Les cartes horizontales sont réservées au desktop (en mobile, une carte horizontale devient verticale).

## Structure

Une carte digne de ce nom se compose des éléments suivants :

- un titre (prop **`title`**, de type `string`), reprenant celui de l’objet visé (page de destination, action, site).
- un lien (prop **`link`**, de type `string`), sur le titre de la carte.
- une image (prop **`imgSrc`**, de type `string`), issue ou en lien avec la page de destination à laquelle on peut ajouter une description textuelle de l'image (prop **`altImg`**, de type `string`), ce texte alternatif sera affiché sur la page si l'image ne peut pas être chargée et sera très utile pour l'accessibilité.
- une zone destinée à d'éventuels détails (prop **`detail`**, de type `string`).
- une description (prop **`description`**, de type `string`), de 5 lignes maximum (tronquée au-delà).
- une icône illustrative (par défaut, une flèche) - optionnelle peut se désactiver (prop **`noArrow`**, de type `boolean`).
- une zone d’action, composée de boutons (prop **`buttons`**, un tableau d'objets pouvant contenir les props à passer à chaque bouton (cf le composant `DsfrButton` afin de connaître les props à passer)).
- une zone d’action, composée de liens (prop **`linksGroup`**, un tableau d'objets composé de la propriété **`label`** (`string`),et de **`link`** (`string`) s'il s'agit d'un lien interne au site ou à l'application, ou de **`href`** (`string`) s'il s'agit d'un lien externe).

Autres props :

- la taille de la carte (prop **`size`**, de type `string`) qui peut prendre plusieurs valeurs: `md`, `medium`, `large`, `lg`, `sm`, `small`.
- la balise du titre (prop **`titleTag`**, de type `string`) afin de respecter la hiérarchie des titres. Valeurs possibles: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
- l'orientation de la carte (verticale par défaut) (prop **`horizontal`**, de type `boolean`) pour la basculer à l'horizontal.
- une variante de carte indiquant que l’évènement de clic lancera un téléchargement (prop **`download`**, de type `boolean`).

## Les props

|  nom                   |   type      |  défaut         | obligatoire        |
| ---------------------- | ---------   | --------------- | ------------------ |
| `altImg`               | *`string`*  | `''`            |                    |
| `buttons`              | *`object`*  | `[]`            |                    |
| `detail`               | *`string`*  | `''`            |                    |
| `description`          | *`string`*  | `''`            | :white_check_mark: |
| `download`             | *`boolean`* | `false`         |                    |
| `horizontal`           | *`boolean`* | `false`         |                    |
| `imgSrc`               | *`string`*  | `''`            |                    |
| `link`                 | *`string`*  | `''`            |                    |
| `linksGroup`           | *`object`*  | `[]`            |                    |
| `size`                 | *`string`*  | `'md'`          |                    |
| `title`                | *`string`*  | `''`            | :white_check_mark: |
| `titleTag`             | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'") | `'h3'`          |          |

## Un exemple complet

<Story data-title="Démo" min-h="530px">
  <DsfrCardDemo />
</Story>

<<< docs-demo/DsfrCardDemo.vue [Code de la démo]

<script setup lang="ts">
import DsfrCardDemo from './docs-demo/DsfrCardDemo.vue'
</script>