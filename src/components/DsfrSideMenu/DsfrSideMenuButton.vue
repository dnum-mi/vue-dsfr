<script lang="ts" setup>
import type { DsfrSideMenuButtonProps } from './DsfrSideMenu.types'

export type { DsfrSideMenuButtonProps }

defineProps<DsfrSideMenuButtonProps>()

defineEmits<{ (e: 'toggleExpand', payload: string): void }>()
</script>

<template>
  <button
    class="fr-sidemenu__btn"
    :aria-current="active ? 'page' : undefined"
    :aria-expanded="!!expanded"
    :aria-controls="controlId"
    @click="$emit('toggleExpand', controlId)"
  >
    <!-- @slot Slot par défaut pour le texte du bouton -->
    <slot />
  </button>
</template>
