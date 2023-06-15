import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

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
  component: DsfrNavigationMenuItem,
  title: 'Composants/DsfrNavigationMenuItem',
  argTypes: {
    expandedId: {
      control: 'text',
      description: 'Valeur de l’id du menu déroulé. *N.B. : Ne fait pas partie de ce composant.*',
    },
    menuId: {
      control: 'text',
      description: 'Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un aléatoire*. *N.B. : Ne fait pas partie de ce composant.*',
    },
    id: {
      control: 'text',
      description: 'Valeur de l’attribut `id` de cet item de menu de navigation.',
    },
    active: {
      control: 'boolean',
      description: 'Indique si l’élément est actif (l’utilisateur est actuellement sur la page pointée par cet item de menu de navigation).',
    },
  },
}

export const ItemDeMenuDeNavigation = args => ({
  components: {
    DsfrNavigation,
    DsfrNavigationItem,
    DsfrNavigationMenu,
    DsfrNavigationMenuItem,
    DsfrNavigationMenuLink,
  },

  data () {
    return args
  },

  methods: {
    toggle (id) {
      if (id === this.expandedId) {
        this.expandedId = undefined
        return
      }
      this.expandedId = id
    },
  },

  template: `
  <DsfrNavigation>
    <DsfrNavigationItem>
      <DsfrNavigationMenu
        title="Titre de menu"
        @toggle-id="toggle($event)"
        :expanded-id="expandedId"
        :id="menuId"
      >
        <DsfrNavigationMenuItem :id="id" :active="active">
          <DsfrNavigationMenuLink
            to="/"
            text="Texte du lien de l’item de menu"
          />
        </DsfrNavigationMenuItem>
      </DsfrNavigationMenu>
    </DsfrNavigationItem>
  </DsfrNavigation>
  `,

})
ItemDeMenuDeNavigation.args = {
  active: false,
  expandedId: '',
  id: undefined,
  menuId: 'test-menu-id',
}
