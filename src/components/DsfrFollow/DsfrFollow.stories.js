import DsfrFollow from './DsfrFollow.vue'

export default {
  title: 'Basic/Lettres d\'information et réseaux',
  name: '',
  component: DsfrFollow,

  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    networks: {
      control: 'object',
      description: 'Liste des différents réseaux sociaux',
    },
  },
}

export const ReseauxSociaux = (args) => ({
  components: { DsfrFollow },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrFollow
        :networks="networks"
      />
    </div>
  `,
})
ReseauxSociaux.args = {
  dark: false,
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
