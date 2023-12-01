<script setup lang="ts">
import type { DsfrBadgeProps } from './DsfrBadge.types'

withDefaults(defineProps<DsfrBadgeProps>(), {
  type: 'info',
})
</script>

<template>
  <p
    class="fr-badge"
    :class="{
      [`fr-badge--${type}`]: type,
      'fr-badge--no-icon': noIcon,
      'fr-badge--sm': small,
    }"
  >
    <span :class="ellipsis ? 'fr-ellipsis' : ''">
      {{ label }}
    </span>
  </p>
</template>
