<script>
export const brandIcons = {
  facebook: 'ri-facebook-circle-fill',
  twitter: 'ri-twitter-fill',
  instagram: 'ri-instagram-fill',
  linkedin: 'ri-linkedin-box-fill',
  youtube: 'ri-youtube-fill',
}

const allowedNetworks = [
  'facebook',
  'twitter',
  'instagram',
  'linkedin',
  'youtube',
]

export default {
  name: 'DsfrFollow',

  components: {},

  props: {
    networks: {
      type: Array,
      default: () => [],
      validator: (networks) =>
        networks.every(
          (network) => network?.name && network.href && allowedNetworks.includes(network.name),
        ),
    },
  },

  data () {
    return {
      brandIcons,
    }
  },
}
</script>
<template>
  <div class="fr-follow">
    <div class="fr-container">
      <div class="fr-grid-row">
        <div class="fr-col-12">
          <div class="fr-follow__social">
            <p class="fr-h5 fr-mb-3v fr-mb-3v">
              Suivez-nous
              <br> sur les réseaux sociaux
            </p>
            <ul
              v-if="networks && networks.length"
              class="fr-links-group fr-links-group--lg"
            >
              <li
                v-for="(network, idx) in networks"
                :key="idx"
              >
                <a
                  class="fr-link"
                  :title="network.name"
                  :href="network.href"
                  target="_blank"
                >
                  <VIcon
                    scale="1.75"
                    :name="brandIcons[network.name]"
                    :label="network.name"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./follow.css" />

<style scoped>
.fr-follow {
  color: var(--g800);
}
</style>
