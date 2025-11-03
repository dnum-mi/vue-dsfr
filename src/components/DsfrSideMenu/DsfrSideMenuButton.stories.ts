import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuButton from './DsfrSideMenuButton.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'

const meta = {
  component: DsfrSideMenuButton,
  title: 'Composants/DsfrSideMenuButton',
  argTypes: {
    active: {
      control: 'boolean',
      description: 'indique que l’item de menu correspond à la page courante',
    },
    expanded: {
      control: 'boolean',
      description:
        'Permet de dire si le menu associé est plié (`false`) ou déplié (`true`)',
    },
    controlId: {
      control: 'text',
      description:
        'Valeur de l’id du menu associé qui sera plié et déplié lors du clic sur ce bouton',
    },
  },
} satisfies Meta<typeof DsfrSideMenuButton>

export default meta

type Story = StoryObj<typeof meta>

export const BoutonDeMenuDepliable: Story = {
  render: (args) => ({
    components: {
      DsfrSideMenu,
      DsfrSideMenuList,
      DsfrSideMenuListItem,
      DsfrSideMenuLink,
      DsfrSideMenuButton,
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
    <DsfrSideMenuList :id="id">
      <DsfrSideMenuListItem>
        <DsfrSideMenuButton
          :active="args.active"
          :expanded="args.expanded"
          :control-id="args.controlId"
          @toggle-expand="args.expanded = !args.expanded"
        >
          Item de menu actif avec sous-menu
        </DsfrSideMenuButton>
        <DsfrSideMenuList
          :id="args.controlId"
          :expanded="args.expanded"
          collapsable
        >
          <DsfrSideMenuListItem>
            <DsfrSideMenuLink
              to="/one"
            >
              Lien 1
            </DsfrSideMenuLink>
          </DsfrSideMenuListItem>
          <DsfrSideMenuListItem>
            <DsfrSideMenuLink
              to="/two"
            >
              Lien 2
            </DsfrSideMenuLink>
          </DsfrSideMenuListItem>
        </DsfrSideMenuList>
      </DsfrSideMenuListItem>
    </DsfrSideMenuList>
  </DsfrSideMenu>
  `,
  }),
  args: {
    active: false,
    expanded: false,
    controlId: 'sidemenu-1',
    id: 'list-id',
  },
}
