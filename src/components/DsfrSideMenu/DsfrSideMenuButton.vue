<script setup>
defineProps({
  active: Boolean,
  expanded: Boolean,
  controlId: {
    type: String,
    required: true,
  },
})

defineEmits(['toggle-expand'])
</script>

<template>
  <button
    class="fr-sidemenu__btn"
    :aria-current="!!active"
    :aria-expanded="!!expanded"
    :aria-controls="controlId"
    @click="$emit('toggle-expand', controlId)"
  >
    <!-- @slot Slot par défaut pour le texte du bouton -->
    <slot />
  </button>
</template>
