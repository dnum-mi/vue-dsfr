<script lang="ts" setup>
import type { DsfrUserMenuProps } from './DsfrUserMenu.types'

export type { DsfrUserMenuProps }

const props = withDefaults(defineProps<DsfrUserMenuProps>(), {
  id: undefined,
})
</script>

<template>
  <nav class="fr-nav">
    <!-- squelette: implémentation à poursuivre -->
  </nav>
</template>

<style scoped>
/* style de base du composant */
</style>
