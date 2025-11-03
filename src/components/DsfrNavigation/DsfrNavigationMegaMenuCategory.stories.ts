import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { ref } from 'vue'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'
import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

const meta = {
  component: DsfrNavigationMegaMenuCategory,
  title: 'Composants/DsfrNavigationMegaMenuCategory',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de la catégorie',
    },
    links: {
      control: 'object',
      description:
        'Liste d’objets contenant les props de lien direct <a href="/?path=/docs/composants-dsfrnavigationmenulink--docs">DsfrNavigationMenuLink</a> de navigation (`to` et `text`)',
    },
  },
} as Meta<typeof DsfrNavigationMegaMenuCategory>

export default meta
type Story = StoryObj<typeof meta>

export const NavigationMegaMenuCategorie: Story = {
  args: {
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
  },
  render: (args) => ({
    components: {
      DsfrNavigation,
      DsfrNavigationItem,
      DsfrNavigationMegaMenu,
      DsfrNavigationMegaMenuCategory,
    },
    setup () {
      const expandedMenuId = ref(undefined)
      const toggle = (id: string | undefined) => {
        if (id === expandedMenuId.value) {
          expandedMenuId.value = undefined
          return
        }
        expandedMenuId.value = id
      }
      return { args, expandedMenuId, toggle }
    },
    template: `
      <DsfrNavigation>
        <DsfrNavigationItem>
          <DsfrNavigationMegaMenu
            :title="args.megaMenutitle"
            :description="args.description"
            :link="args.link"
            :expanded-id="expandedMenuId"
            @toggle-id="toggle($event)"
          >
            <DsfrNavigationMegaMenuCategory
              :title="args.title"
              :links="args.links"
            />
          </DsfrNavigationMegaMenu>
        </DsfrNavigationItem>
      </DsfrNavigation>
    `,
  }),
}
