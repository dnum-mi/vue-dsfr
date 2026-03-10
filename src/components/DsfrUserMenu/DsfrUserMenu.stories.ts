import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrUserMenu from './DsfrUserMenu.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/menu-utilisateur)
 */
const meta = {
  component: DsfrUserMenu,
  title: 'Composants/DsfrUserMenu',
  argTypes: {
    id: {
      control: 'text',
      description: 'Identifiant unique du menu utilisateur',
    },
  },
} as Meta<typeof DsfrUserMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'user-menu-example',
  },
}
