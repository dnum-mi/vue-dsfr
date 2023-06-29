<script lang="ts" setup>
export type DsfrSideMenuButtonProps = {
  active?: boolean
  expanded?: boolean
  controlId: string
}
defineProps<DsfrSideMenuButtonProps>()

defineEmits<{(e: 'toggle-expand', payload: string): void}>()
</script>

<template>
  <button
    class="fr-sidemenu__btn"
    :aria-current="active ? 'page' : undefined"
    :aria-expanded="!!expanded"
    :aria-controls="controlId"
    @click="$emit('toggle-expand', controlId)"
  >
    <!-- @slot Slot par défaut pour le texte du bouton -->
    <slot />
  </button>
</template>
