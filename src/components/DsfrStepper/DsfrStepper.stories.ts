import type { Meta, StoryObj } from '@storybook/vue3'

import DsfrStepper from './DsfrStepper.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/indicateur-d-etape)
 */
const meta = {
  component: DsfrStepper,
  title: 'Composants/DsfrStepper',
  argTypes: {
    steps: {
      control: 'object',
      description: 'Tableau de strings des labels d’étapes',
    },
    currentStep: {
      control: 'number',
      description: 'Etape active idx de l’élément actif du tableau + 1',
    },
  },
} satisfies Meta<typeof DsfrStepper>

export default meta

type Story = StoryObj<typeof meta>

export const IndicateurDesEtapes: Story = {
  render: (args) => ({
    components: { DsfrStepper },
    setup () {
      return args
    },
    template: `
    <DsfrStepper
      :steps="steps"
      :currentStep="currentStep"
    />
  `,
  }),
  args: {
    steps: [
      'Première étape',
      'Deuxième étape',
      'Troisième étape',
      'Quatrième étape',
    ],
    currentStep: 1,
  },
}
