<script lang="ts" setup>
import { computed } from 'vue'

import VIcon from '../VIcon/VIcon.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

import type { DsfrCalloutProps } from './DsfrCallout.types'

export type { DsfrCalloutProps }

const props = withDefaults(defineProps<DsfrCalloutProps>(), {
  // @ts-expect-error this is really undefined
  button: () => undefined,
  titleTag: 'h3',
  icon: undefined,
})

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const iconProps = computed(() => dsfrIcon.value ? undefined : typeof props.icon === 'string' ? { name: props.icon } : { ...(props.icon ?? {}) })
</script>

<template>
  <div
    class="fr-callout"
    :class="{ [String(icon)]: dsfrIcon }"
  >
    <VIcon
      v-if="icon && iconProps"
      v-bind="iconProps"
    />
    <component
      :is="titleTag"
      v-if="title"
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
