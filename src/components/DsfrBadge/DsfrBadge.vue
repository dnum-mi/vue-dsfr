<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: undefined,
    validator: value => ['success', 'error', 'new', 'info', 'warning', undefined].includes(value),
  },
  noIcon: Boolean,
  small: Boolean,
  ellipsis: Boolean,
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

<style src="@gouvfr/dsfr/dist/component/badge/badge.main.min.css" />
