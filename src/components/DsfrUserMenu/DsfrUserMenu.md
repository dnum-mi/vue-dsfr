# DsfrUserMenu

## Introduction

Le `DsfrUserMenu` est un composant permettant d'afficher un menu utilisateur parmis les boutons d’accès rapides de l'en-tête (il ne doit pas être utilisé autre part). Il gère deux états principaux : non connecté (affichant un bouton de connexion) et connecté (affichant un menu déroulant avec les informations utilisateur).

[Voir la documentation sur le DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee)

## Exemples

### Etat non connecte

Affiche un simple bouton de connexion :

::: code-group

<Story data-title="Demo">
  <DsfrUserMenuNonConnecte />
</Story>

<<< docs-demo/DsfrUserMenuNonConnecte.vue

:::

### Etat connecte avec menu complet

Affiche le menu complet avec informations utilisateur, liens et bouton de deconnexion :

::: code-group

<Story data-title="Demo" min-h="400px">
  <div class="fr-container">
    <DsfrUserMenuDemo />
  </div>
</Story>

<<< docs-demo/DsfrUserMenuDemo.vue

:::

## Props

| Nom | Type | Defaut | Description |
|-----|------|--------|-------------|
| `id` | `string` | Genere | Identifiant unique du composant |
| `isConnected` | `boolean` | `false` | Etat de connexion de l'utilisateur |
| `unconnectedLabel` | `string` | `'Me connecter'` | Texte du bouton non connecte |
| `unconnectedTitle` | `string` | `'Me connecter'` | Attribut title du bouton non connecte |
| `connectedLabel` | `string` | `'Mon espace'` | Texte du bouton connecte |
| `connectedTitle` | `string` | `'Mon espace'` | Attribut title du bouton connecte |
| `userLabel` | `string` | `''` | Nom ou identifiant de l'utilisateur |
| `userInfo` | `string` | `''` | Information supplementaire (email, organisation...) |
| `hasUserInfo` | `boolean` | `false` | Active l'affichage de userInfo |
| `links` | `DsfrNavigationMenuLinkProps[]` | `[]` | Liste des liens du menu deroulant |
| `hasDisconnectButton` | `boolean` | `false` | Affiche le bouton de deconnexion |
| `disconnectButtonLabel` | `string` | `'Me deconnecter'` | Texte du bouton de deconnexion |
| `connectionIcon` | `boolean \| string` | `false` | Affiche une icone connexion (classe DSFR) |
| `noOutline` | `boolean` | `false` | Supprime la bordure du bouton |

## Evenements

- **disconnect** : Emis lorsque l'utilisateur clique sur le bouton de deconnexion

## Cas d'usage

- **En-tête** : Afficher l'etat de connexion et un menu utilisateur
- **Gestion de session** : Permettre la deconnexion rapide
- **Navigation utilisateur** : Fournir un acces aux profil, parametres, aide...

## Interaction

Le composant gere automatiquement :
- **Ouverture/fermeture du menu** au clic sur le bouton adhoc lorsqu'on est connecté
- **Fermeture du menu** au clic sur un lien ou le bouton deconnexion
- **Fermeture du menu** au clic en dehors (click outside)
- **Fermeture du menu** à la pression de la touche Escape

## Code source

::: code-group

<<< DsfrUserMenu.vue
<<< DsfrUserMenu.types.ts

:::

<script setup lang="ts">
import DsfrUserMenuNonConnecte from './docs-demo/DsfrUserMenuNonConnecte.vue'
import DsfrUserMenuDemo from './docs-demo/DsfrUserMenuDemo.vue'
</script>
