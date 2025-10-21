<script lang="ts" setup>
import type { DsfrCalloutProps } from './DsfrCallout.types'

import { computed } from 'vue'

import DsfrButton from '../DsfrButton/DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'

export type { DsfrCalloutProps }

const props = withDefaults(defineProps<DsfrCalloutProps>(), {
  // @ts-expect-error this is really undefined
  button: () => undefined,
  titleTag: 'h3',
  icon: undefined,
  accent: undefined,
})

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const iconProps = computed(() => dsfrIcon.value ? undefined : typeof props.icon === 'string' ? { name: props.icon } : { ...(props.icon ?? {}) })
</script>

<template>
  <div
    class="fr-callout"
    :class="{ [String(icon)]: dsfrIcon, [`fr-callout--${accent}`]: !!accent }"
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

    <p
      v-if="content"
      class="fr-callout__text"
    >
      {{ content }}
    </p>

    <DsfrButton
      v-if="button"
      v-bind="button"
    />

    <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
    <div
      v-if="$slots.default && !content"
      class="fr-callout__text"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<style scoped>
.fr-callout__text {
  color: var(--text-default-grey);
}
</style>
