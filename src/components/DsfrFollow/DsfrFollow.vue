<script lang="ts" setup>
import type { DsfrFollowProps } from './DsfrFollow.types'

import { computed } from 'vue'

import DsfrNewsLetter from './DsfrNewsLetter.vue'
import DsfrSocialNetworks from './DsfrSocialNetworks.vue'

export type { DsfrFollowProps }

const props = withDefaults(defineProps<DsfrFollowProps>(), {
  // @ts-expect-error this is really undefined
  newsletterData: () => undefined,
  networks: () => [],
})

/**
 * @slot default - Slot par défaut pour le contenu. Sera dans `<div class="fr-grid-row">`
 */
defineSlots<{
  default?: () => any
}>()

const hasNetworks = computed(() => {
  return props.networks && props.networks.length
})
const hasNewsletter = computed(() => {
  return typeof props.newsletterData === 'object'
})
</script>

<template>
  <div class="fr-follow">
    <div class="fr-container">
      <div class="fr-grid-row">
        <slot>
          <div
            v-if="newsletterData"
            class="fr-col-12"
            :class="{ 'fr-col-md-8': hasNetworks }"
          >
            <DsfrNewsLetter v-bind="newsletterData" />
          </div>
          <div
            v-if="hasNetworks"
            class="fr-col-12"
            :class="{ 'fr-col-md-4': hasNewsletter }"
          >
            <DsfrSocialNetworks :networks="networks" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
