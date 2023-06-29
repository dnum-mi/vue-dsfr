import DsfrFranceConnect from './DsfrFranceConnect.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-franceconnect)
 */
export default {
  component: DsfrFranceConnect,
  title: 'Composants/DsfrFranceConnect',
  argTypes: {
    secure: {
      control: 'boolean',
      description: 'Change le bouton pour une version FranceConnect+ (pour les démarches nécessitant une sécurité renforcée)',
    },
  },
}

export const BoutonFranceConnect = (args, { argTypes }) => ({
  components: {
    DsfrFranceConnect,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFranceConnect
      :secure="secure"
    />
  `,

})

BoutonFranceConnect.args = {
  secure: false,
}
