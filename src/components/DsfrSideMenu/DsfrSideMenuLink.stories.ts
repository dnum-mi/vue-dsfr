import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'

const meta = {
  component: DsfrSideMenuLink,
  title: 'Composants/DsfrSideMenuLink',
  argTypes: {
    to: {
      control: 'text',
      description:
        'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `RouterLink` pour un lien interne',
    },
    active: {
      control: 'boolean',
      description:
        'Indique si le lien correspond à la page courante (`true`) ou non (`false`)',
    },
  },
} satisfies Meta<typeof DsfrSideMenuLink>

export default meta

type Story = StoryObj<typeof meta>

export const LienDansUnElementDeListeDeMenuLateral: Story = {
  render: (args) => ({
    components: {
      DsfrSideMenu,
      DsfrSideMenuList,
      DsfrSideMenuListItem,
      DsfrSideMenuLink,
    },

    setup () {
      return {
        ...args,
      }
    },

    template: `
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList :id="id">
      <DsfrSideMenuListItem :active="active">
        <DsfrSideMenuLink
          :active="active"
          :to="to"
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
    to: '/',
    id: 'list-id',
  },
}
