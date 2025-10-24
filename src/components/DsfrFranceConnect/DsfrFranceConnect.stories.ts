import type { Meta, StoryObj } from '@storybook/vue3'

import DsfrFranceConnect from './DsfrFranceConnect.vue'

/**
 * [Voir quand l\'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-franceconnect)
 */
const meta = {
  component: DsfrFranceConnect,
  title: 'Composants/DsfrFranceConnect',
  tags: ['autodocs'],
  argTypes: {
    secure: {
      control: 'boolean',
      description:
        'Change le bouton pour une version FranceConnect+ (pour les démarches nécessitant une sécurité renforcée)',
    },
    url: {
      control: 'text',
      description: 'URL de redirection vers la documentation FranceConnect',
    },
  },
} satisfies Meta<typeof DsfrFranceConnect>

export default meta
type Story = StoryObj<typeof meta>

export const BoutonFranceConnect: Story = {
  args: {
    secure: false,
    url: 'https://franceconnect.gouv.fr',
  },
}

export const BoutonFranceConnectPlus: Story = {
  args: {
    secure: true,
    url: 'https://franceconnect.gouv.fr',
  },
}
