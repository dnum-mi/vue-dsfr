import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrFranceConnect from './DsfrFranceConnect.vue'

/**
 * [Voir quand l\'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-franceconnect)
 */
const meta = {
  component: DsfrFranceConnect,
  title: 'Composants/DsfrFranceConnect',
  argTypes: {
    secure: {
      control: 'boolean',
      description:
        'Change le bouton pour une version FranceConnect+ (pour les démarches nécessitant une sécurité renforcée)',
    },
  },
} satisfies Meta<typeof DsfrFranceConnect>

export default meta

type Story = StoryObj<typeof meta>

export const BoutonFranceConnect = (args) => ({
  components: {
    DsfrFranceConnect,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFranceConnect
      :secure="secure"
    />
  `,
})

BoutonFranceConnect.args = {
  secure: false,
}
