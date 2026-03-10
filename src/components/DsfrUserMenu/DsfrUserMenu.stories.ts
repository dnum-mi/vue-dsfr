import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrUserMenu from './DsfrUserMenu.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/en-tete-connectee)
 */
const meta = {
  component: DsfrUserMenu,
  title: 'Composants/DsfrUserMenu',
  argTypes: {
    id: {
      control: 'text',
      description: 'Identifiant unique du menu utilisateur',
    },
    isConnected: {
      control: 'boolean',
      description: 'Indique si l’utilisateur est connecté',
    },
    unconnectedLabel: {
      control: 'text',
      description: 'Libellé du bouton de connexion',
    },
    connectedLabel: {
      control: 'text',
      description: 'Libellé du bouton d’accès à l’espace utilisateur',
    },
    links: {
      control: 'array',
      description: 'Liste des liens du menu utilisateur',
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
