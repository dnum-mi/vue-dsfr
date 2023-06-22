import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import DsfrNavigation from './DsfrNavigation.vue'

import { setup } from '@storybook/vue3'

import { addIcons } from 'oh-vue-icons'
import { RiHome2Line } from 'oh-vue-icons/icons/ri/index.js'

addIcons(RiHome2Line)

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
  title: 'Composants/DsfrNavigationMenuLink',
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
    icon: {
      control: 'text',
      description: '(Optionnel) **Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-search-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est à gauche',
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
      :icon="icon"
      @click.prevent.stop=""
    />
  </DsfrNavigation>
  `,

})
NavigationLienMenu.args = {
  to: '#test-navigation-menu-link',
  text: 'Lien de menu',
  icon: 'ri-check-lineline',
}
