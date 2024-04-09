# Bouton radio (et bouton radio riche) - `DsfrRadioButton`

## 🌟 Introduction

::: warning Important

Il est fortement déconseillé d’utiliser directement `DsfrRadioButton`, il est préférable d’utiliser [`DsfrRadioButtonSet`](/composants/DsfrRadioButtonSet).

:::

Les boutons radio permettent à l’utilisateur de sélectionner une seule option dans une liste.

Le bouton radio ne peut pas être utilisé seul : il faut au minimum 2 options. Il est préférable de ne pas sélectionner d’option par défaut pour que le choix de l’utilisateur soit conscient (en particulier si le choix est obligatoire).

Les boutons radio riches permettent de sélectionner un choix parmi une liste d’options illustrées. À la différence du bouton radio simple, l’image permet d’illustrer et d’accompagner l’utilisateur dans son choix.

🏅 La documentation sur le [bouton radio](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio) et le [bouton radio riche](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio-riche) sur le DSFR

<VIcon name="vi-file-type-storybook" /> La story sur le bouton radio sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrradiobutton--docs)

## 📐 Structure

Le composant `DsfrRadioButtonSet` est composé des éléments suivants :

- Un élément `<div>` englobant l'ensemble du groupe de radio.
- Une légende (`legend`) définie par la prop `legend` et personnalisable avec le slot `legend`.
- Un groupe de boutons radio individuels rendus par le composant `DsfrRadioButton`.
- Un message d'information, d'erreur ou de validation, affiché en dessous du groupe de boutons radio (facultatif).

## 🛠️ Props

| Nom                   | Type                                    | Description                                                   | Obligatoire |
|-----------------------|-------------------------------------------|----------------------------------------------------------------|--------------|
| `name`                  | *`string`*                                 | Nom du champ `<input>` associé à l'ensemble des boutons radio     | ✅           |
| `modelValue`           | *`string`* ou *`number`*                       | Valeur courante du composant (sélection courante)                 |     ✅      |
| `inline`                | *`boolean`*                                | Affiche le bouton radio en ligne (par défaut : `false`)            |           |
| `id`                  | *`string`*                                 | Id du champ `<input>` (par défaut: `undefined`)     |            |
| `id`                  | *`string`*                                 | Id du champ `<input>` (par défaut: `undefined`)     |            |
| `small`                 | *`boolean`*                                | Affiche les boutons radio en taille réduite (par défaut : `false`)                     |           |

## 📡 Événements

`DsfrRadioButtonSet` émet l'événement suivant :

| Nom                  | Description                                         |
|-----------------------|----------------------------------------------------|
| `update:modelValue`   | Est émis lorsque la valeur d'un bouton radio est sélectionnée |

## 🧩 Slots

`DsfrRadioButtonSet` fournit les slots suivants pour la personnalisation :

- `legend` : Permet de personnaliser le contenu de la légende.
- `required-tip` : Permet d'ajouter un astérisque indiquant que le champ est obligatoire (fonctionne uniquement si l'attribut `required` est défini sur le composant).

## 🪆 Relation avec `DsfrRadioButtonSet`

Le composant [`DsfrRadioButtonSet`](./DsfrRadioButtonSet.md) utilise le composant `DsfrRadioButton` pour rendre visuellement chaque option du groupe. Chaque bouton radio individuel hérite des props du composant `DsfrRadioButtonSet` excepté `modelValue`.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrRadioButtonDemo />
</Story>

<<< docs-demo/DsfrRadioButtonDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrRadioButtonSet.vue
<<< DsfrRadioButton.types.ts

:::

<script setup>
import DsfrRadioButtonDemo from './docs-demo/DsfrRadioButtonDemo.vue'
</script>
