<script lang="ts" setup>
import DsfrButton from '../DsfrButton/DsfrButton.vue'

import type { DsfrCalloutProps } from './DsfrCallout.types'

export type { DsfrCalloutProps }

withDefaults(defineProps<DsfrCalloutProps>(), {
  // @ts-ignore this is really undefined
  button: () => undefined,
  titleTag: 'h3',
  icon: undefined,
})
</script>

<template>
  <div class="fr-callout">
    <div
      class="fr-mt-n2w  fr-mb-2w  fr-ml-n4w"
    />

    <component
      :is="titleTag"
      class="fr-callout__title"
    >
      {{ title }}
    </component>

    <p class="fr-callout__text">
      {{ content }}
    </p>

    <DsfrButton
      v-if="button"
      v-bind="button"
    />

    <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
    <slot />
  </div>
</template>

<style scoped>
.fr-callout__text {
  color: var(--text-default-grey);
}
</style>
