import DsfrNotice from './DsfrNotice.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bandeau-d-information-importante)
 */
export default {
  component: DsfrNotice,
  title: 'Composants/DsfrNotice',
  argTypes: {
    title: {
      control: 'text',
      description: '**Titre** du bandeau d’information importante',
    },
    closeable: {
      control: 'boolean',
      description: 'Ajoute la possibilité de présenter un bouton en forme de croix qui émet l’événement `"close"`',
    },
    onClose: {
      action: 'Fermeture du bandeau',
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
      :closeable="closeable"
      @close="close"
    />
  `,

  methods: {
    close () {
      this.closed = true
      setTimeout(() => { this.closed = false }, 2000)
    },
  },
})
BandeauDAlerte.args = {
  title: 'Titre du bandeau d’information importante',
  closeable: false,
}

export const BandeauDAlerteFermable = BandeauDAlerte.bind({})
BandeauDAlerteFermable.args = {
  title: 'Titre du bandeau d’information importante fermable',
  closeable: true,
}
