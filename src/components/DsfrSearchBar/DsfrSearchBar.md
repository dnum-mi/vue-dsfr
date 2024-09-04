# Barre de recherche - DsfrSearchBar

## 🌟 Introduction

La barre de recherche est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression.

🏅 La documentation sur la barre de recherche sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/barre-de-recherche)

<VIcon name="vi-file-type-storybook" /> La story sur la barre de recherche sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrsearchbar--docs)

## 📐 Structure

La barre de recherche se compose des éléments suivants :

- un champs de saisie ;
- un bouton primaire.

## 🛠️ Props

| Nom         | Type     | Défaut            | Obligatoire | Description                                                             |
|-------------|----------|-------------------|-------------|-------------------------------------------------------------------------|
| `id`        | `Function`| `() => getRandomId('search', 'input')`| | Identifiant unique pour la barre de recherche.                          |
| `label`     | `String` | `''`              |             | Libellé de la barre de recherche.                                       |
| `buttonText`| `String` | `''`              |             | Texte du bouton de recherche.                                           |
| `modelValue`| `String` | `''`              |             | Valeur liée à la barre de recherche.                                    |
| `placeholder`| `String`| `'Rechercher'`    |             | Placeholder pour la barre de recherche.                                 |
| `large`     | `Boolean`| `false`           |             | Si `true`, utilise une version plus grande de la barre de recherche.    |
| `labelVisible` | `Boolean` | `false`       |             | Si `true`, affiche le libellé de la barre de recherche.                 |
| `disabled`  | `Boolean` | `false`          |             | Si `true`, désactive la barre de recherche.                             |

## 📡 Événements

- **`update:modelValue`**: Événement émis lorsque la valeur de la barre de recherche est mise à jour.
- **`search`**: Événement émis lors de l'exécution d'une recherche.

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="340px">
  <DsfrSearchBarDemo />
</Story>

<<< docs-demo/DsfrSearchBarDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSearchBar.vue
<<< DsfrSearchBar.types.ts

:::

<script setup lang="ts">
import DsfrSearchBarDemo from './docs-demo/DsfrSearchBarDemo.vue'
</script>
