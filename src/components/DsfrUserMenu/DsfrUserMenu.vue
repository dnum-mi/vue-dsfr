<script lang="ts" setup>
import type { DsfrUserMenuProps } from './DsfrUserMenu.types'

export type { DsfrUserMenuProps }

const props = withDefaults(defineProps<DsfrUserMenuProps>(), {
  id: undefined,
  isConnected: false,
  unconnectedLabel: 'Me connecter',
  unconnectedTitle: 'Me connecter',
  connectedLabel: 'Mon espace',
  connectedTitle: 'Mon espace',
  connectionIcon: false,
  userLabel: '',
  userInfo: '',
  links: () => [],
  hasDisconnectButton: false,
  disconnectButtonLabel: 'Me déconnecter',
  hasUserInfo: false,
  noOutline: false,
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
