import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import DsfrNavigation from './DsfrNavigation.vue'

import { setup } from '@storybook/vue3'

const RouterLink = {
  name: 'RouterLink',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
}

setup(app => {
  app.component('RouterLink', RouterLink)
})

export default {
  component: DsfrNavigationMenuLink,
  title: 'Composants/Navigation Principale/2. Lien de menu, sous-menu ou mega-menu - DsfrNavigationMenuLink',
  argTypes: {
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
    DsfrNavigation,
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
      @click.prevent.stop=""
    />
  </DsfrNavigation>
  `,


})
NavigationLienMenu.args = {
  to: '#test-navigation-menu-link',
  text: 'Lien de menu',
}
