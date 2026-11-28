# Étapier (indicateur d’étapes) - `DsfrStepper`

## 🌟 Introduction

Le composant `DsfrStepper` est un guide visuel permettant d’indiquer à l’utilisateur sa progression dans une série d’étapes. Il est conforme au [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/) et peut être utilisé dans des processus multi-étapes tels que des formulaires ou des parcours utilisateur.

🏅 La documentation sur l’étapier le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/indicateur-d-etapes)

<VIcon name="vi-file-type-storybook" /> La story sur l’étapier sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrstepper--docs)

## 📐 Structure

Le composant affiche :

1. Le titre de l'étape actuelle.
2. Un état de progression indiquant l'étape actuelle et le nombre total d'étapes.
3. Une barre de progression stylisée en arrière-plan.
4. Une indication de l'étape suivante (si disponible).

## 🛠️ Props

| Nom           | Type         | Défaut    | Description                                                                 |
|---------------|--------------|-----------|-----------------------------------------------------------------------------|
| `steps`       | `string[]`   | `[]`      | Liste des noms ou titres des étapes. Chaque élément représente une étape.   |
| `currentStep` | `number`     | `1`       | Index (1-based) de l'étape actuellement active dans le processus.           |
| `titleTag`    | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p'` | `'h2'` | Balise HTML du titre de l'étape en cours, conforme DSFR (niveau d'en-tête variable, `h2` par défaut). |

### Détails

- **`steps`** : La longueur de cette liste détermine le nombre total d'étapes.
- **`currentStep`** : Le numéro d'étape actuel. Si sa valeur dépasse le nombre d'étapes, le composant affiche un état invalide.
- **`titleTag`** : Niveau de titre du libellé de l'étape en cours. Le DSFR recommande d'adapter la hiérarchie (`h2` à `h6`, voire `p`) à la structure de la page.

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrStepper
  :steps="['Étape 1 : Préparation', 'Étape 2 : Validation', 'Étape 3 : Confirmation']"
  :currentStep="2"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrStepperDemo />
</Story>

<<< docs-demo/DsfrStepperDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrStepper.vue
<<< DsfrStepper.types.ts

:::

<script setup lang="ts">
import DsfrStepperDemo from './docs-demo/DsfrStepperDemo.vue'
</script>
