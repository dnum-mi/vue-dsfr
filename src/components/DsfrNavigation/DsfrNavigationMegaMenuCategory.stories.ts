import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'
import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

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
  component: DsfrNavigationMegaMenuCategory,
  title: 'Composants/DsfrNavigationMegaMenuCategory',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de la catégorie',
    },
    links: {
      control: 'object',
      description: 'Liste d’objets contenant les props de lien direct <a href="/?path=/story/composants-navigation-principale-2-lien-de-menu-sous-menu-ou-mega-menu-dsfrnavigationmenulink--navigation-lien-menu">DsfrNavigationMenuLink</a> de navigation (`to` et `text`)',
    },
  },
}

export const NavigationMegaMenuCategorie = args => ({
  components: {
    DsfrNavigation,
    DsfrNavigationItem,
    DsfrNavigationMegaMenu,
    DsfrNavigationMegaMenuCategory,
  },

  data () {
    return {
      ...args,
      expandedMenuId: undefined,
    }
  },

  methods: {
    toggle (id) {
      if (id === this.expandedMenuId) {
        this.expandedMenuId = undefined
        return
      }
      this.expandedMenuId = id
    },
  },

  template: `
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMegaMenu
          :title="megaMenutitle"
          :description="description"
          :link="link"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        >
          <DsfrNavigationMegaMenuCategory
            :title="title"
            :links="links"
          />
        </DsfrNavigationMegaMenu>
      </DsfrNavigationItem>
    </DsfrNavigation>
  `,

})
NavigationMegaMenuCategorie.args = {
  description: 'Description du mega-menu',
  link: undefined,
  megaMenutitle: 'Titre du mega-menu',
  title: 'Titre du catégorie',
  links: [
    {
      to: '#',
      text: 'Lien 1 de la catégorie',
    },
    {
      to: '#',
      text: 'Lien 2 de la catégorie',
    },
    {
      to: '#',
      text: 'Lien 3 de la catégorie',
    },
    {
      to: '#',
      text: 'Lien 4 de la catégorie',
    },
    {
      to: '#',
      text: 'Lien 5 de la catégorie',
    },
  ],
}
