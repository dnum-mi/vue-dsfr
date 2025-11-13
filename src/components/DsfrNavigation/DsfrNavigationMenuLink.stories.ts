import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

const meta = {
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
      description:
        '(Optionnel) Valeur de l’attribut `id` de la balise `<a>` du lien de navigation. Aura une valeur pseudo-aléatoire par défaut',
    },
    icon: {
      control: 'text',
      description:
        '(Optionnel) **Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-search-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est à gauche',
    },
    'toggle-id': {
      description:
        'Événement émis lors du click sur le lien, avec en argument l’id de l’élément cliqué',
    },
  },
} as Meta<typeof DsfrNavigationMenuLink>

export default meta
type Story = StoryObj<typeof meta>

export const NavigationLienMenu: Story = {
  args: {
    to: '#test-navigation-menu-link',
    text: 'Lien de menu',
    icon: 'ri-check-line',
  },
  render: (args) => ({
    components: {
      DsfrNavigation,
      DsfrNavigationItem,
      DsfrNavigationMenuLink,
    },

    setup () {
      return { args }
    },

    template: `
      <DsfrNavigation>
        <DsfrNavigationItem>
          <DsfrNavigationMenuLink
            :to="args.to"
            :text="args.text"
            :icon="args.icon"
            @click.prevent.stop=""
          />
        </DsfrNavigationItem>
      </DsfrNavigation>
    `,
  }),
}
