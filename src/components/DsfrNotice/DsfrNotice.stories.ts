import { fn } from 'storybook/test'

import DsfrNotice from './DsfrNotice.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante)
 */
export default {
  component: DsfrNotice,
  title: 'Composants/DsfrNotice',
  argTypes: {
    title: {
      control: 'text',
      description: '**Titre** du bandeau d’information importante',
    },
    desc: {
      control: 'text',
      description: '**Titre** du bandeau d’information importante',
    },
    closeable: {
      control: 'boolean',
      description:
        'Ajoute la possibilité de présenter un bouton en forme de croix qui émet l’événement `"close"`',
    },
    type: {
      control: 'text',
      description: '**type** du bandeau d’information',
    },
    onClose: {
      action: fn(),
    },
  },
}

export const BandeauDAlerte = (args) => ({
  components: { DsfrNotice },
  data () {
    return {
      ...args,
      closed: false,
    }
  },

  template: `
    <DsfrNotice
      v-if="!closed"
      :title="title"
      :desc="desc"
      :closeable="closeable"
      :type="type"
      @close="close"
    />
  `,

  methods: {
    close () {
      this.closed = true
      setTimeout(() => {
        this.closed = false
      }, 2000)
    },
  },
})
BandeauDAlerte.args = {
  title: 'Titre du bandeau d’information importante',
  desc: '',
  type: 'info',
  closeable: false,
}
export const BandeauDAlerteWarning = BandeauDAlerte.bind({})
BandeauDAlerteWarning.args = {
  title: 'Titre du bandeau d’information importante',
  type: 'warning',
  closeable: false,
}

export const BandeauDAlerteAvecDescription = BandeauDAlerte.bind({})
BandeauDAlerteAvecDescription.args = {
  title: 'Titre du bandeau d’information importante fermable',
  desc: 'Texte de description plutot long lorem ipsum sit consectetur adipiscing elit.',
  type: 'info',
  closeable: false,
}

export const BandeauDAlerteFermable = BandeauDAlerte.bind({})
BandeauDAlerteFermable.args = {
  title: 'Titre du bandeau d’information importante fermable',
  desc: 'Texte de description plutot long lorem ipsum sit consectetur adipiscing elit.',
  type: 'info',
  closeable: true,
}
