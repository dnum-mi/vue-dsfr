<script setup lang="ts">
import type { DsfrBackToTopProps } from './DsfrBackToTop.types'

withDefaults(defineProps<DsfrBackToTopProps>(), {
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
