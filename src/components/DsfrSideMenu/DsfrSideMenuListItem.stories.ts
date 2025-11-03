import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'

const meta = {
  component: DsfrSideMenuListItem,
  title: 'Composants/DsfrSideMenuListItem',
  argTypes: {
    active: {
      control: 'boolean',
      description:
        'Indique si l\'item du menu correspond à la page courante (`true`) ou non (`false`)',
    },
  },
} satisfies Meta<typeof DsfrSideMenuListItem>

export default meta

type Story = StoryObj<typeof meta>

export const ElementDeListeDeMenuLateral: Story = {
  render: (args) => ({
    components: {
      DsfrSideMenu,
      DsfrSideMenuList,
      DsfrSideMenuListItem,
      DsfrSideMenuLink,
    },

    setup () {
      return {
        args,
      }
    },

    template: `
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList :id="args.id">
      <DsfrSideMenuListItem :active="args.active">
        <DsfrSideMenuLink
          :active="args.active"
          to="/"
        >
          Lien 1
        </DsfrSideMenuLink>
      </DsfrSideMenuListItem>
    </DsfrSideMenuList>
  </DsfrSideMenu>
  `,
  }),
  args: {
    active: false,
    id: 'list-id',
  },
}
