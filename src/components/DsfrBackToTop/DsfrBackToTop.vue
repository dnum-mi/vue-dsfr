<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  position?: 'right' | 'left'
}>(), {
  position: 'right',
  label: 'Haut de page',
})
</script>

<template>
  <a
    class="fr-link fr-icon-arrow-up-fill"
    :class="`fr-link--icon-${position}`"
    href="#top"
  >
    {{ label }}
  </a>
</template>
