# Navigation principale - `DsfrNavigation`

## 🌟 Introduction

Le système de navigation principal permet d'orienter les utilisateurs à travers l'application. Il constitue l'épine dorsale de la navigation d'un site, offrant une structure claire et accessible pour explorer les différentes sections et fonctionnalités.

Le composant `DsfrNavigation` est le système central de navigation au sein d'un site. Il permet d'orienter aisément l'usager à travers l'application avec une structure hiérarchique claire et des menus déroulants.

🏅 La documentation sur la navigation sur le [DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale/)

<VIcon name="vi-file-type-storybook" /> La story sur la navigation sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrnavigation--docs)

## 📐 Structure

La navigation principale est composée des éléments suivants :

- un conteneur principal avec un identifiant unique (prop `id`)
- un label d'accessibilité (prop `label`)
- une liste de liens et sous-menus (prop `navItems`) organisée hiérarchiquement
- des menus déroulants qui s'ouvrent/ferment au clic
- une gestion des interactions clavier et focus pour l'accessibilité
  - touche Échap : fermeture du menu ouvert
  - sortie de focus du menu ouvert (ex: `Tab` depuis le dernier élément vers l'extérieur) : fermeture automatique du menu

## 🛠️ Props

| nom         | type          | défaut                  | obligatoire | description                                                                 |
|-------------|---------------|-------------------------|-------------|-----------------------------------------------------------------------------|
| `id`        | `string`      | `() => useRandomId(...)`|             | Identifiant unique pour la navigation                                       |
| `label`     | `string`      | `'Menu principal'`      |             | Nom associé à la navigation pour l'accessibilité                            |
| `navItems`  | `array`       | `() => []`              | ✅          | Tableau contenant les liens ou sous-menus de la navigation                  |

## 📡 Événements écoutés (internes)

`DsfrNavigation` n’émet pas d’événements spécifiques.
Le composant écoute les événements DOM globaux suivants (pour gérer l’ouverture/fermeture des menus):

| nom      | donnée (payload) | description                                                  |
|----------|------------------|--------------------------------------------------------------|
| `click`  | *aucune*         | déclenche l'ouverture ou la fermeture d'un menu              |
| `keydown`| *aucune*         | l‘appui sur Échap qui déclenche la fermeture d'un menu ouvert|
| `focusin`| *aucune*         | Au changement de focus : si le focus sort du menu ouvert, celui-ci est refermé automatiquement |

## 🧩 Slots

`DsfrNavigation` possède un slot par défaut pour le contenu personnalisé de la navigation.

| nom       | description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `default` | Slot par défaut pour le contenu personnalisé de la navigation               |

## 📝 Exemples

Exemple simple d'utilisation de `DsfrNavigation` :

::: code-group

<Story data-title="Démo" minH="500px">
  <DsfrNavigationDemo />
</Story>

<<< docs-demo/DsfrNavigationDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrNavigation.vue
<<< DsfrNavigation.types.ts

:::

<script setup>
import DsfrNavigationDemo from './docs-demo/DsfrNavigationDemo.vue'
</script>
