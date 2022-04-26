<script>
import DsfrSocialNetworks from './DsfrSocialNetworks.vue'
import DsfrNewsLetter from './DsfrNewsLetter.vue'

import { allowedNetworks } from './follow-utils.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrFollow',

  components: { DsfrSocialNetworks, DsfrNewsLetter },

  props: {
    newsletterData: {
      type: Object,
      default: () => undefined,
    },
    networks: {
      type: Array,
      default: () => [],
      validator: (networks) =>
        networks.every(
          (network) => network?.name && network.href && allowedNetworks.includes(network.name),
        ),
    },
  },

  computed: {
    hasNetworks () {
      return this.networks && this.networks.length
    },
    hasNewsletter () {
      return typeof this.newsletterData === 'object'
    },
  },

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
          <slot />
        </slot>
      </div>
    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/follow/follow.main.min.css" />
