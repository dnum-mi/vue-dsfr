import DsfrSocialNetworks from './DsfrSocialNetworks.vue'
import DsfrFollow from './DsfrFollow.vue'

export default {
  title: 'Composants/Lettres d’information et réseaux/Réseaux sociaux - DsfrSocialNetworks',
  name: '',
  component: DsfrSocialNetworks,
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    networks: {
      control: 'object',
      description: 'Liste des différents réseaux sociaux ; doit avoir 2 props : `name` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `url`',
    },
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre du composant (h3 par défaut)',
    },
  },
}

export const ReseauxSociaux = (args) => ({
  components: { DsfrSocialNetworks, DsfrFollow },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFollow>
      <div class="fr-col-12">
        <DsfrSocialNetworks
          :networks="networks"
          :is="titleTag"
        />
      </div>
    </DsfrFollow>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ReseauxSociaux.args = {
  dark: false,
  titleTag: undefined,
  networks: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      name: 'twitter',
      href: 'https://www.twitter.com',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com',
    },
  ],
}
