# Groupe de champs de saisie - `DsfrInputGroup`

## 🌟 Introduction

Bienvenue dans la documentation du composant `DsfrInputGroup`, conçu pour envelopper vos champs de saisie avec une élégance à la française. Que vous composiez un message d'amour ou remplissiez un formulaire administratif, ce composant est là pour apporter de l'ordre et de la clarté à vos interfaces utilisateur.

Ce composant est très utile si vous souhaitez afficher un message d’erreur ou de succès pour un ou plusieurs champs de saisie `DsfrInput`.

🏅 La documentation sur le champ de saisie sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)

<VIcon name="vi-file-type-storybook" /> La story sur le champ de saisie sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrinputgroup--docs)

## 🛠️ Props

| Nom             | Type        | Défaut                  | Obligatoire   | Description                                                   |
|-----------------|-------------|-------------------------|---------------|---------------------------------------------------------------|
| `descriptionId` | `Function`           | `() => useRandomId(...)`|               | ID unique pour la description du groupe, généré automatiquement si non spécifié. |
| `hint`          | `string`             | `''`                    |               | Texte d'indice pour guider l'utilisateur dans le groupe de champs. |
| `label`         | `string`             | `''`                    |               | Le libellé associé au groupe de champs.                       |
| `labelClass`    | `string`             | `''`                    |               | Classe CSS personnalisée pour le style du libellé.            |
| `modelValue`    | `string`             | `''`                    |               | La valeur liée au modèle du composant `DsfrInput`.            |
| `wrapperClass`  | `string`             | `''`                    |               | Classe CSS pour le style du conteneur du groupe.              |
| `placeholder`   | `string`             | `undefined`             |               | Texte de l'espace réservé pour l'input.                       |
| `errorMessage`  | `string \| string[]` | `undefined`             |               | Message(s) d’erreur à afficher si une erreur est présente. Une chaîne ou un tableau vide n’active pas l’état d’erreur. Le champ reçoit alors `aria-invalid="true"`. |
| `validMessage`  | `string \| string[]` | `undefined`             |               | Message(s) de validation à afficher si l'input est valide.       |

### Attributs implicitement déclarés

::: warning Important

Toutes les props passées à `<DsfrInputGroup>` dans une template et qui ne sont pas définies dans les props seront passées à la balise `<DsfrInput>`. Si ces props ne sont pas définies non plus en tant que props dans `DsfrInput`, elles seront passés à la balise native `<input>`, comme par exemple `readonly` ou `disabled`.

Cf. la [note important sur DsfrInput](./DsfrInput.md#attributs-implicitement-declares)

:::

## 📡Événements

| Nom                 | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `update:modelValue` | Événement émis lors de la mise à jour de la valeur de l'input.               |

## 🧩 Slots

| Nom             | Description                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------|
| `before-input`  | Slot pour insérer du contenu avant le champ de saisie principal.                                  |
| `default`       | Slot par défaut pour le contenu principal du groupe de champ. Utilisé pour insérer des éléments personnalisés. |

## 📝 Exemples

Voici comment vous pourriez utiliser `DsfrInputGroup` :

::: code-group
<Story data-title="Démo" minH="800px">
  <DsfrInputGroupDemo />
</Story>

<<< docs-demo/DsfrInputGroupDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrInputGroup.vue
<<< DsfrInput.types.ts

:::

<script setup>
import DsfrInputGroupDemo from './docs-demo/DsfrInputGroupDemo.vue'
</script>
