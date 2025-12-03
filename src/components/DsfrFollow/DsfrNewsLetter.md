# Composant `DsfrNewsLetter`

## 🌟 Introduction

Le composant `DsfrNewsLetter` est conçu pour afficher un formulaire d'inscription à une lettre d'information (newsletter). Pour avoir un style conforme au [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/) il doit être impérativement être appelé par le composant `DsfrFollow`. Flexible et accessible, il s'adapte à différents cas d'usage grâce à ses props personnalisables.

🏅 La documentation sur la lettre d’information sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/lettre-d-information-et-reseaux-sociaux)

<VIcon name="vi-file-type-storybook" /> La story sur la lettre d’information sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrnewsletter--docs)

## 📐 Structure

Le composant offre deux modes :

- **Mode callout** : un simple bouton pour l'inscription à la newsletter.
- **Mode formulaire** : un formulaire complet avec champ email, bouton de soumission, et gestion des erreurs.

---

## 🛠️ Props

| Nom            | Type                              | Défaut                                                                                      | Description                                                                 |
|-----------------|-----------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `title`        | `string`                          | `'Abonnez-vous à notre lettre d’information'`                                              | Titre affiché en haut de la section newsletter.                            |
| `description`  | `string`                          | `''`                                                                                       | Texte descriptif affiché sous le titre.                                     |
| `email`        | `string`                          | `''`                                                                                       | Valeur initiale du champ email.                                             |
| `error`        | `string`                          | `''`                                                                                       | Message d'erreur à afficher si la saisie est invalide.                      |
| `labelEmail`   | `string`                          | `'Votre adresse électronique (ex. : prenom.nom@example.com)'`                              | Label du champ email.                                                       |
| `placeholder`  | `string`                          | `'prenom.nom@example.com'`                                                                 | Texte de placeholder pour le champ email.                                   |
| `hintText`     | `string`                          | `''`                                                                                       | Texte d'aide affiché sous le champ email.                                   |
| `inputTitle`   | `string`                          | `'Adresse courriel'`                                                                       | Titre de l'input email (pour l'attribut `title` de l'élément HTML).         |
| `buttonText`   | `string`                          | `'S’abonner'`                                                                              | Texte du bouton de soumission.                                              |
| `buttonTitle`  | `string`                          | `'S’abonner à notre lettre d’information'`                                                | Titre du bouton (pour l'attribut `title` de l'élément HTML).                |
| `buttonAction` | `($event: MouseEvent) => void`    | `() => undefined`                                                                          | Action personnalisée exécutée au clic du bouton en mode callout.            |
| `onlyCallout`  | `boolean`                         | `false`                                                                                    | Active le mode "callout" avec un simple bouton au lieu du formulaire complet. |

## 📡Événements

| Nom               | Payload    | Description                                                                     |
|--------------------|------------|---------------------------------------------------------------------------------|
| `update:email`    | `string`   | Émis lorsque l'utilisateur modifie le champ email.                              |

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrFollowDemo />
</Story>

<<< docs-demo/DsfrFollowDemo.vue [Code de la démo]

:::

## ⚙️Code source du composant

::: code-group

<<< DsfrFollow.vue
<<< DsfrFollow.types.ts

:::

<script setup lang="ts">
import DsfrFollowDemo from './docs-demo/DsfrFollowDemo.vue'
</script>
