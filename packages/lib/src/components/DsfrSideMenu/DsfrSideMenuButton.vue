<script lang="ts" setup>
import type { DsfrSideMenuButtonProps } from './DsfrSideMenu.types'

export type { DsfrSideMenuButtonProps }

defineProps<DsfrSideMenuButtonProps>()

defineEmits<{
  /** Émis lors du clic sur le bouton */
  toggleExpand: [string]
}>()

defineSlots<{
  /** Slot par défaut pour le texte du bouton */
  default?: () => any
}>()
</script>

<template>
  <button
    class="fr-sidemenu__btn"
    :aria-current="active ? 'page' : undefined"
    :aria-expanded="!!expanded"
    :aria-controls="controlId"
    @click="$emit('toggleExpand', controlId)"
  >
    <slot />
  </button>
</template>
