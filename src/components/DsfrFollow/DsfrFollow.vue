<script lang="ts" setup>
import { computed } from 'vue'

import DsfrSocialNetworks, { type DsfrSocialNetwork } from './DsfrSocialNetworks.vue'
import DsfrNewsLetter, { type DsfrNewsLetterProps } from './DsfrNewsLetter.vue'

export type DsfrFollowProps = {
  newsletterData: DsfrNewsLetterProps
  networks: DsfrSocialNetwork[]
}

const props = withDefaults(defineProps<DsfrFollowProps>(), {
  newsletterData: () => undefined,
  networks: () => [],
})

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
        <!-- @slot Slot par défaut pour le contenu. Sera dans `<div class="fr-grid-row">` -->
        <slot>
          <div
            v-if="newsletterData"
            :class="{ 'fr-col-12' : true, 'fr-col-md-8': hasNetworks }"
          >
            <DsfrNewsLetter v-bind="newsletterData" />
          </div>
          <div
            v-if="hasNetworks"
            :class="{ 'fr-col-12' : true, 'fr-col-md-4': hasNewsletter }"
          >
            <DsfrSocialNetworks :networks="networks" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
