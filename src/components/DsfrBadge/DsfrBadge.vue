<script setup lang="ts">
export type DsfrBadgeProps = {
  label: string
  type?: 'success' | 'error' | 'new' | 'info' | 'warning' | undefined,
  noIcon?: boolean,
  small?: boolean,
  ellipsis?: boolean,
}

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
