# Groupe de champs de saisie - `DsfrInputGroup`

## 🌟 Introduction

Bienvenue dans la documentation du composant `DsfrInputGroup`, conçu pour envelopper vos champs de saisie avec une élégance à la française. Que vous composiez un message d'amour ou remplissiez un formulaire administratif, ce composant est là pour apporter de l'ordre et de la clarté à vos interfaces utilisateur.

Ce composant est très utile si vous souhaitez afficher un message d’erreur ou de succès pour un ou plusieurs champs de saisie `DsfrInput`.

## 🛠️ Props

| Nom             | Type        | Défaut                  | Obligatoire   | Description                                                   |
|-----------------|-------------|-------------------------|---------------|---------------------------------------------------------------|
| `descriptionId` | `Function`  | `() => getRandomId(...)`|               | ID unique pour la description du groupe, généré automatiquement si non spécifié. |
| `hint`          | `string`    | `''`                    |               | Texte d'indice pour guider l'utilisateur dans le groupe de champs. |
| `label`         | `string`    | `''`                    |               | Le libellé associé au groupe de champs.                       |
| `labelClass`    | `string`    | `''`                    |               | Classe CSS personnalisée pour le style du libellé.            |
| `modelValue`    | `string`    | `''`                    |               | La valeur liée au modèle du composant `DsfrInput`.            |
| `wrapperClass`  | `string`    | `''`                    |               | Classe CSS pour le style du conteneur du groupe.              |
| `placeholder`   | `string`    | `undefined`             |               | Texte de l'espace réservé pour l'input.                       |
| `errorMessage`  | `string`    | `undefined`             |               | Message d'erreur à afficher si une erreur est présente.       |
| `validMessage`  | `string`    | `undefined`             |               | Message de validation à afficher si l'input est valide.       |

## 📡 Événements

| Nom                 | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `update:modelValue` | Événement émis lors de la mise à jour de la valeur de l'input.               |

## 🧩 Slots

| Nom             | Description                                                                                       |
|-----------------|---------------------------------------------------------------------------------------------------|
| `before-input`  | Slot pour insérer du contenu avant le champ de saisie principal.                                  |
| `default`       | Slot par défaut pour le contenu principal du groupe de champ. Utilisé pour insérer des éléments personnalisés. |

## 📝 Exemples

Voici comment vous pourriez utiliser `DsfrInputGroup` :

::: code-group
<Story data-title="Démo" minH="800px">
  <DsfrInputGroupDemo />
</Story>

<<< docs-demo/DsfrInputGroupDemo.vue [Code de la démo]
:::

<script setup>
import DsfrInputGroupDemo from './docs-demo/DsfrInputGroupDemo.vue'
</script>
