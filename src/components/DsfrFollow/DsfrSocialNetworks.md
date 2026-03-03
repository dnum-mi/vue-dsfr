# Réseaux Sociaux - `DsfrSocialNetworks`

## 🌟 Introduction

Le sous composant `DsfrSocialNetworks` est conçu pour afficher une liste de boutons vers des réseaux sociaux. Pour avoir un style conforme au [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/) il doit être impérativement être appelé par le composant `DsfrFollow`. Il permet d'encourager les utilisateurs à suivre votre organisation sur les plateformes sociales.

🏅 La documentation sur Réseaux Sociaux sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/lettre-d-information-et-reseaux-sociaux)

<VIcon name="vi-file-type-storybook" /> La story sur Réseaux Sociaux sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrsocialnetworks--docs)

## 📐 Structure

Le composant affiche :

- un titre (dont la balise peut être configurée avec la prop `titleTag`) ;
- une liste de boutons pour chaque réseau social fourni dans les props.

Chaque bouton :

- utilise une classe CSS correspondant au type de réseau (par exemple, `fr-btn--facebook`) ;
- affiche le nom du réseau ;
- redirige vers l'URL spécifiée en ouvrant un nouvel onglet.

## 🛠️Props

| Nom         | Type                                   | Défaut     | Description                                                                 |
|-------------|----------------------------------------|------------|-----------------------------------------------------------------------------|
| `networks`  | `DsfrSocialNetwork[]`                 | `[]`       | Liste des réseaux sociaux à afficher, avec leurs détails (`type`, `name`, `href`). |
| `titleTag`  | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h3'`    | Tag HTML utilisé pour le titre du composant.                                |

### Format de `DsfrSocialNetwork`

Chaque réseau est un objet de type :

| Nom   | Type                   | Description                                                                 |
|-------|------------------------|-----------------------------------------------------------------------------|
| `type` | `'facebook' \| 'twitter-x' \| 'instagram' \| 'linkedin' \| 'youtube'` | Type de réseau social (icône et style associés).                          |
| `name` | `string`              | Nom affiché pour le réseau social.                                          |
| `href` | `string`              | URL vers le profil ou la page sociale.                                      |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrSocialNetworks
  :networks="[
    { type: 'facebook', name: 'Facebook', href: 'https://facebook.com' },
    { type: 'twitter-x', name: 'Twitter', href: 'https://twitter.com' },
    { type: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com' }
  ]"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="164px">
  <DsfrSocialNetworksDemo />
</Story>

<<< docs-demo/DsfrSocialNetworksDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSocialNetworks.vue
<<< DsfrFollow.types.ts

:::

<script setup lang="ts">
import DsfrSocialNetworksDemo from './docs-demo/DsfrSocialNetworksDemo.vue'
</script>
