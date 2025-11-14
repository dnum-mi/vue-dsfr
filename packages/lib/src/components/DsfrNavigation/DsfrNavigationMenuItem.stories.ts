import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { ref } from 'vue'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

const meta = {
  component: DsfrNavigationMenuItem,
  title: 'Composants/DsfrNavigationMenuItem',
  argTypes: {
    expandedId: {
      control: 'text',
      description:
        'Valeur de l’id du menu déroulé. *N.B. : Ne fait pas partie de ce composant.*',
    },
    menuId: {
      control: 'text',
      description:
        'Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un aléatoire*. *N.B. : Ne fait pas partie de ce composant.*',
    },
    id: {
      control: 'text',
      description:
        'Valeur de l’attribut `id` de cet item de menu de navigation.',
    },
    active: {
      control: 'boolean',
      description:
        'Indique si l’élément est actif (l’utilisateur est actuellement sur la page pointée par cet item de menu de navigation).',
    },
  },
} as Meta<typeof DsfrNavigationMenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const ItemDeMenuDeNavigation: Story = {
  args: {
    active: false,
    expandedId: '',
    id: undefined,
    menuId: 'test-menu-id',
  },
  render: (args) => ({
    components: {
      DsfrNavigation,
      DsfrNavigationItem,
      DsfrNavigationMenu,
      DsfrNavigationMenuItem,
      DsfrNavigationMenuLink,
    },

    setup () {
      const expandedId = ref(args.expandedId)
      const toggle = (id: string | undefined) => {
        if (id === expandedId.value) {
          expandedId.value = undefined
          return
        }
        expandedId.value = id
      }
      return { args, expandedId, toggle }
    },

    template: `
      <DsfrNavigation>
        <DsfrNavigationItem>
          <DsfrNavigationMenu
            title="Titre de menu"
            @toggle-id="toggle($event)"
            :expanded-id="expandedId"
            :id="args.menuId"
          >
            <DsfrNavigationMenuItem :id="args.id" :active="args.active">
              <DsfrNavigationMenuLink
                to="/"
                text="Texte du lien de l'item de menu"
              />
            </DsfrNavigationMenuItem>
          </DsfrNavigationMenu>
        </DsfrNavigationItem>
      </DsfrNavigation>
    `,
  }),
}
