## 🌟 Introduction

Les cases à cocher permettent à l’utilisateur de sélectionner une ou plusieurs options dans une liste. Elles sont utilisées pour effectuer des sélections multiples (de 0 à N éléments) ou bien pour permettre un choix binaire, lorsque l’utilisateur peut sélectionner ou désélectionner une seule option.

La case à cocher peut être utilisée seule ou en liste. Évitez les listes de plus de 5 items et lorsque vous souhaitez contraindre le choix à un seul élément - utiliser [les boutons radios](/composants/DsfrRadioButton).

🏅 La documentation sur **les cases à cocher** sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/case-a-cocher)

<VIcon name="vi-file-type-storybook" /> La story sur **les cases à cocher** sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrcheckbox--docs)

## 📐 Structure

Le composant `DsfrCheckbox` est composé des éléments suivants :

- Une case à cocher `<input type="checkbox">`
- Un label associé à la case à cocher, défini par la prop `label` et personnalisable avec le slot `label`
- Un message d'information, d'erreur (prop `errorMessage`) ou de validation (prop `validMessage`), affiché en dessous de la case à cocher

## 🛠️ Props

| Nom                   | Type                     | Défaut | Obligatoire | Description                                         |
|-----------------------|----------------------------|--------|--------------|----------------------------------------------------|
| `name`                  | *`string`*                 |      | ✅           | Nom du champ `<input>`                               |
| `modelValue`           | *`boolean`*                |      | ✅           | Valeur booléenne associée à la case à cocher          |
| `label`                 | *`string`*                 |      | ✅           | Texte du label associé à la case à cocher            |
| `errorMessage`         | *`string`*                 | `''`     |           | Message d'erreur à afficher en dessous de la case à cocher |
| `hint`                  | *`string`*                 | `''`     |           | Texte d'information complémentaire affiché en dessous de la case à cocher |
| `id`                    | *`string`*                 | chaîne pseudo-aléatoire     |           | Identifiant unique du composant (générée automatiquement si non fournie) |
| `inline`                | *`boolean`*                | ''     |           | Affiche la case à cocher en ligne (par défaut : `false`) |
| `required`              | *`boolean`*                | ''     |           | Indique si la case à cocher est obligatoire (par défaut : `false`)             |
| `small`                 | *`boolean`*                | ''     |           | Affiche la case à cocher en taille réduite (par défaut : `false`)             |
| `validMessage`         | *`string`*                 | ''     |           | Message de validation à afficher en dessous de la case à cocher |

## 📡 Événements

`DsfrCheckbox` émet l'événement suivant :

| Nom                  | type | Description                                         |
|-----------------------|-----| -----------------------------------------------|
| `update:modelValue`   | *`boolean`* | Est émis lorsque la valeur de la case à cocher change  |

## 🧩 Slots

`DsfrCheckbox` fournit les slots suivants pour la personnalisation :

- `label` : Permet de personnaliser le contenu complet du label associé à la case à cocher.
- `required-tip` : Permet d'ajouter un astérisque indiquant que le champ est obligatoire.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="500px">
  <DsfrCheckboxDemo />
</Story>

<<< docs-demo/DsfrCheckboxDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrCheckbox.vue
<<< DsfrCheckbox.types.ts

:::

<script setup>
import DsfrCheckboxDemo from './docs-demo/DsfrCheckboxDemo.vue'
</script>
