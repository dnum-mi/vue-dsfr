<script lang="ts" setup>
import type { DsfrHighlightProps } from './DsfrHighlight.types'

export type { DsfrHighlightProps }

/**
 * @slot default - Slot par défaut pour le contenu de la mise en exergue
 */
defineSlots<{
  default?: () => any
}>()

withDefaults(defineProps<DsfrHighlightProps>(), {
  text: undefined,
})
</script>

<template>
  <div
    class="fr-highlight"
    :class="{ [`fr-highlight--${color}`]: color }"
  >
    <p
      :class="{
        'fr-text--lg': large && !small,
        'fr-text--sm': small && !large,
      }"
    >
      {{ text }}
      <slot />
    </p>
  </div>
</template>
