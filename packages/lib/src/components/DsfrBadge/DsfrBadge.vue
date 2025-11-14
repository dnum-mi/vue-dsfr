<script setup lang="ts">
import type { DsfrBadgeProps } from './DsfrBadge.types'

export type { DsfrBadgeProps }

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
    :title="ellipsis ? label : undefined"
  >
    <span :class="ellipsis ? 'fr-ellipsis' : ''">
      {{ label }}
    </span>
  </p>
</template>
