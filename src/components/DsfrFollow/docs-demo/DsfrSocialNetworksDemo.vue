<script lang="ts" setup>
import type { DsfrSocialNetwork } from '../DsfrFollow.types'

import DsfrSocialNetworks from '../DsfrSocialNetworks.vue'

const titleTag = 'h2'

const networks: DsfrSocialNetwork[] = [
  {
    name: 'Facebook',
    type: 'facebook',
    href: 'https://www.facebook.com',
  },
  {
    name: 'X (anciennement Twitter)',
    type: 'twitter-x',
    href: 'https://www.x.com',
  },
  {
    name: 'Youtube',
    type: 'youtube',
    href: 'https://www.youtube.com',
  },
  {
    name: 'Linkedin',
    type: 'linkedin',
    href: 'https://www.linkedin.com',
  },
  {
    name: 'Instagram',
    type: 'instagram',
    href: 'https://www.instagram.com',
  },
  {
    name: 'Bluesky',
    type: 'bluesky',
    href: 'https://bsky.app/',
  },
]
</script>

<template>
  <DsfrFollow>
    <!-- ajout d'une div de class `fr-follow` (incluse dans DsfrFollow) pour un affichage correct des icones pour cette démo
    C'est lié au css des icônes de réseau pour `follow` qui ne sont pas dans `share` du DSFR -->
    <div class="fr-follow">
      <!-- Important, car ce div est dans un div.fr-grid-row -->
      <div class="fr-col-12">
        <DsfrSocialNetworks
          :is="titleTag"
          :networks="networks"
        />
      </div>
    </div>
  </DsfrFollow>
</template>
