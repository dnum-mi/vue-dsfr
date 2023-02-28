import DsfrFranceConnect from './DsfrFranceConnect.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-franceconnect)
 */
export default {
  component: DsfrFranceConnect,
  title: 'Composants/Connexion - FranceConnect',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})

BoutonFranceConnect.args = {
  dark: false,
  secure: false,
}
