import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  component: DsfrNavigationMenuLink,
  title: 'Composants/Navigation Principale/2. Lien de menu, sous-menu ou mega-menu - DsfrNavigationMenuLink',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    to: {
      control: 'text',
      description: 'Lien ou objet route de l’item du menu',
    },
    text: {
      control: 'text',
      description: 'Texte de l’item du menu',
    },
    id: {
      control: 'text',
      description: '(Optionnel) Valeur de l’attribut `id` de la balise `<a>` du lien de navigation. Aura une valeur pseudo-aléatoire par défaut',
    },
    'toggle-id': {
      description: 'Événement émis lors du click sur le lien, avec en argument l’id de l’élément cliqué',
    },
  },
}

export const NavigationLienMenu = (args) => ({
  components: {
    DsfrNavigationMenuLink,
  },

  data () {
    return args
  },

  template: `
  <DsfrNavigation>
    <DsfrNavigationMenuLink
      :to="to"
      :text="text"
    />
  </DsfrNavigation>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
NavigationLienMenu.args = {
  dark: false,
  to: '#test-navigation-menu-link',
  text: 'Lien de menu',
}
