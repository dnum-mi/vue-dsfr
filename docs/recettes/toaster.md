# Toaster (snackbar)

Le principe est d’avoir un composable (ici `useToaster`) qui va recevoir les messages et qui saura les gérer, c’est-à-dire en ajouter et en supprimer dans le tableau des messages accesibles par tous les utilisateurs de ce composable.

Ensuite, il faut un composant toaster (ici `AppToaster`) qui lira la liste de messages du composable, et qui les affichera.

Enfin, n’importe quel autre composant, composable, store, ou autre fichier, pourra ajouter des messages à la liste de message.

## Le composable `useToaster`

Tout d’abord il faut créer le composable qui recevra et gérera les messages : il exposera la liste de message (`messages`), une fonction pour ajouter un message à la liste (`addMessage()`), et un autre pour supprimer un message de la liste (`removeMessage`).

::: code-group

<<< ../../demo-app/composables/use-toaster.ts

:::

## Le composant AppToaster

Ensuite, il faut créer le composant qui lira les messages depuis ce composable.

::: code-group

<<< ../../demo-app/components/AppToaster.vue

:::

## Ajouter ce composant AppToaster dans App.vue

Ce composant `AppToaster` sera ajouté une seule fois dans l’application : dans le composant principal `App.vue`, à la toute fin (pour qu’il soit au dessus de tous les autres).

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { ref } from 'vue'
// (...)
import AppToaster from '@/components/AppToaster.vue'   // Import du composant AppToaster
// (...)
</script>

<template>
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />

  <div class="fr-container">
    <router-view />
  </div>

  <AppToaster
    :messages="toaster.messages"
    @close-message="toaster.removeMessage($event)"
  />
</template>
```

## Utilisation dans une app

Enfin, depuis n’importe quel fichier, composant ou non, il est possible d’ajouter des messages simplement en utilisant la fonction `addMessage()` du composable :

```ts [Autre fichier, composant ou non]
import useToaster from './composables/useToaster'      // Import du composable useToaster()

const toaster = useToaster() // Récupération du toaster depuis le composable

// (...)

toaster.addMessage({             // Ajout d’un message...
  title: 'Message 1',
  description: 'Description 1',
  type: 'info',                  // ...de type info...
  closeable: true,               // ...que l’utilisateur peut fermer...
  titleTag: 'h3',
  timeout: 6000,                 // ...qui disparaîtra après 6 secondes
})

// (...)

```

:::
