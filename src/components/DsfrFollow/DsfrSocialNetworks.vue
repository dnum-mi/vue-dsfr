<script lang="ts" setup>
export type DsfrSocialNetworkName = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
export type DsfrSocialNetwork = {
  name: DsfrSocialNetworkName,
  href: string
}

export type DsfrSocialNetworksProps = {
  networks: DsfrSocialNetwork[]
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

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
