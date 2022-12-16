<script>
import { defineComponent } from 'vue'

import { allowedNetworks } from './follow-utils.js'

export default defineComponent({
  name: 'DsfrSocialNetworks',

  props: {
    networks: {
      type: Array,
      required: true,
      validator: (networks) =>
        networks.every(
          (network) => network?.name && network.href && allowedNetworks.includes(network.name),
        ),
    },
    titleTag: {
      type: String,
      default: 'h3',
    },
  },
})
</script>

<template>
  <div class="fr-follow__social">
    <component
      :is="titleTag"
      class="fr-h5 fr-mb-3v fr-mb-3v"
    >
      Suivez-nous
      <br> sur les réseaux sociaux
    </component>
    <ul
      v-if="networks.length"
      class="fr-btns-group fr-btns-group--lg"
    >
      <li
        v-for="(network, idx) in networks"
        :key="idx"
      >
        <a
          class="fr-btn"
          :class="`fr-btn--${network.name}`"
          :title="network.name"
          :href="network.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ network.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
