import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  component: DsfrNavigationMenuLink,
  title: 'Éléments/Navigation Principale - Main Navigation/Lien menu',
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
  },
}

export const LienMenu = (args) => ({
  components: {
    DsfrNavigationMenuLink,
  },

  data () {
    return args
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrNavigationMenuLink
        :to="to"
        :text="text"
      />
    </div>
  `,
})
LienMenu.args = {
  dark: false,
  to: '#test-navigation-menu-link',
  text: 'Lien de menu',
}
