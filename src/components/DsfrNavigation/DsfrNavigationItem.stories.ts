import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

const meta = {
  component: DsfrNavigationItem,
  title: 'Composants/DsfrNavigationItem',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(Optionnel) Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un pseudo-aléatoire*.',
    },
    active: {
      control: 'boolean',
      description:
        'Indique l’élément est actif (l’utilisateur est actuellement sur la page pointée par cet item de menu de navigation).',
    },
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
      <DsfrNavigationItem :active="args.active">
        <DsfrNavigationMenuLink
          to="/"
          text="Texte du lien de l’item de menu"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
    `,
  }),
} satisfies Meta<typeof DsfrNavigationItem>

export default meta
type Story = StoryObj<typeof meta>

export const ItemDeNavigation: Story = {
  name: 'Item de navigation',
  args: {
    active: false,
  },
}
