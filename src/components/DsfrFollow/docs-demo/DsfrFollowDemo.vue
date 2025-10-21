<script lang="ts" setup>
import type { DsfrSocialNetwork } from '../DsfrFollow.types'

import DsfrFollow from '../DsfrFollow.vue'

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
]
const newsletterData = {
  title: 'Titre de la lettre d’informations',
  description: 'Description de la lettre d’informations',
  email: '',
  labelEmail: 'Label du champ adresse électronique',
  placeholder: 'james.bond@mi6.gov.uk',
  hintText: 'Mise en garde concernant l’abonnement à la lettre d’information',
  buttonText: 'S’abonner',
  buttonTitle:
      'Titre du bouton (valeur de l’attribut `title` de la balise `button`)',
  buttonAction: () => undefined,
  onlyCallout: false,
}
</script>

<template>
  <DsfrFollow
    :networks="networks"
    :newsletter-data="newsletterData"
  />
</template>
