<script lang="ts" setup>
import DsfrNavigation from '../DsfrNavigation.vue'

const navItemsDemo = [
  {
    to: '/accueil',
    text: 'Accueil',
  },
  {
    to: '/tableau-de-bord',
    text: 'Tableau de bord',
  },
  {
    to: '/historique',
    text: 'Historique',
  },
]
</script>

<template>
  <DsfrNavigation
    label="Menu principal démo"
    :nav-items="navItemsDemo"
  />
</template>
