<script>
import { allowedNetworks } from './follow-utils.js'

export default {
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
  },
}
</script>

<template>
  <div class="fr-follow__social">
    <p class="fr-h5 fr-mb-3v fr-mb-3v">
      Suivez-nous
      <br> sur les réseaux sociaux
    </p>
    <ul
      v-if="networks.length"
      class="fr-links-group fr-links-group--lg"
    >
      <li
        v-for="(network, idx) in networks"
        :key="idx"
      >
        <a
          class="fr-link"
          :class="`fr-link--${network.name}`"
          :title="network.name"
          :href="network.href"
          target="_blank"
        >
          {{ network.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
