<script lang="ts" setup>
import type { DsfrSocialNetworksProps } from './DsfrFollow.types'

export type { DsfrSocialNetworksProps }
export type { DsfrSocialNetwork, DsfrSocialNetworkName } from './DsfrFollow.types'

withDefaults(defineProps<DsfrSocialNetworksProps>(), {
  titleTag: 'h3',
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
          :class="`fr-btn--${network.type}`"
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
