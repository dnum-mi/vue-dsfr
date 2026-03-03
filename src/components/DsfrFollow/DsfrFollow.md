# Suivre (lettre d’information et réseaux sociaux) - `DsfrFollow`

## 🌟 Introduction

Le composant `DsfrFollow` est un conteneur pratique permettant d'afficher une section combinée pour une inscription à une newsletter et une liste de réseaux sociaux. Idéal pour renforcer l'engagement des utilisateurs sur votre site, ce composant combine flexibilité et respect des standards de la [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/).

🏅 La documentation sur « Suivre » sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/lettre-d-information-et-reseaux-sociaux)

<VIcon name="vi-file-type-storybook" /> La story sur « Suivre » sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfollow--docs)

## 📐 Structure

Le composant affiche une grille responsive contenant :

- Une **section newsletter**, propulsée par le composant enfant `DsfrNewsLetter`.
- Une **section réseaux sociaux**, utilisant le composant `DsfrSocialNetworks`.
- Un **slot par défaut**, permettant d'insérer un contenu personnalisé.

## 🛠️Props

| Nom              | Type                                                      | Défaut       | Description                                                                 |
|-------------------|-----------------------------------------------------------|--------------|-----------------------------------------------------------------------------|
| `newsletterData` | `DsfrNewsLetterProps`                                      | `undefined`  | Données pour configurer la section newsletter.                             |
| `networks`       | `DsfrSocialNetwork[]`                                      | `[]`         | Liste des réseaux sociaux à afficher avec leurs détails (`type`, `name`, `href`). |
| `onlyCallout`    | `boolean` (hérité de `DsfrNewsLetterProps`)                | `false`      | Indique si seule une version "callout" de la newsletter doit être utilisée. |

### 🛠️Props de `DsfrNewsLetter`

Voici les principales options de configuration pour `newsletterData` :

| Nom             | Type                     | Défaut       | Description                                                                 |
|------------------|--------------------------|--------------|-----------------------------------------------------------------------------|
| `title`         | `string`                 | `undefined`  | Titre de la section newsletter.                                            |
| `description`   | `string`                 | `undefined`  | Texte descriptif au-dessus du champ email.                                 |
| `email`         | `string`                 | `undefined`  | Adresse email pré-remplie (si applicable).                                 |
| `error`         | `string`                 | `undefined`  | Message d'erreur à afficher en cas de problème.                            |
| `placeholder`   | `string`                 | `undefined`  | Placeholder du champ email.                                                |
| `buttonText`    | `string`                 | `undefined`  | Texte du bouton d'action.                                                  |
| `buttonAction`  | `($event: MouseEvent) => void` | `undefined`  | Fonction déclenchée au clic du bouton.                                     |

### 🛠️Props de `DsfrSocialNetworks`

Les réseaux sociaux (`networks`) sont des objets de type :

| Nom   | Type                   | Description                                                               |
|-------|------------------------|---------------------------------------------------------------------------|
| `type` | `'facebook' \| 'twitter-x' \| 'instagram' \| 'linkedin' \| 'youtube'` | Type de réseau social (icône associée). |
| `name` | `string`              | Nom à afficher pour le réseau social.                                     |
| `href` | `string`              | URL vers le profil ou la page sociale.                                    |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant. Les événements doivent être gérés via les props des sous-composants `DsfrNewsLetter` et `DsfrSocialNetworks`.

## 🧩 Slots

| Nom     | Contenu                                                                                      |
|---------|----------------------------------------------------------------------------------------------|
| `default` | Permet d'insérer du contenu personnalisé dans le conteneur global du composant.             |

## 📝 Exemples

### Exemple de base

```vue
<DsfrFollow
  :newsletterData="{
    title: 'Abonnez-vous à notre newsletter !',
    description: 'Restez informé(e) de nos actualités et nouveautés.',
    buttonText: 'S\'inscrire',
    placeholder: 'Votre email'
  }"
  :networks="[
    { type: 'facebook', name: 'Facebook', href: 'https://facebook.com' },
    { type: 'twitter-x', name: 'Twitter', href: 'https://twitter.com' },
    { type: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com' }
  ]"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrFollowDemo />
</Story>

<<< docs-demo/DsfrFollowDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFollow.vue
<<< DsfrFollow.types.ts

:::

<script setup lang="ts">
import DsfrFollowDemo from './docs-demo/DsfrFollowDemo.vue'
</script>
