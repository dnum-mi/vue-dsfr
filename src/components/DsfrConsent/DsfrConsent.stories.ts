import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import DsfrConsent from './DsfrConsent.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/gestionnaire-de-consentement)
 */
const meta = {
  component: DsfrConsent,
  title: 'Composants/DsfrConsent',
  argTypes: {
    onAcceptAll: {
      action: fn(),
    },
    onRefuseAll: {
      action: fn(),
    },
    onCustomize: {
      action: fn(),
    },
    url: {
      control: 'text',
      description:
        'Url de la page concernant les "Données personnelles et cookies" sur votre site ou application.',
    },
  },
} satisfies Meta<typeof DsfrConsent>

export default meta

type Story = StoryObj<typeof meta>

export const GestionnaireDeConsentementSimple: Story = {
  args: {
    url: '/',
  } as any,
  render: (args) => ({
    components: { DsfrConsent },
    setup () {
      return { args }
    },
    template: `
      <DsfrConsent
        @accept-all="(args as any).onAcceptAll()"
        @refuse-all="(args as any).onRefuseAll()"
        @customize="(args as any).onCustomize()"
        :url="args.url"
      />
    `,
  }),
}

export const GestionnaireDeConsentementPersonnalisé: Story = {
  render: () => ({
    components: { DsfrConsent },
    template: `
      <DsfrConsent>
        Description personnalisée
      </DsfrConsent>
    `,
  }),
}
