import type { Meta, StoryObj } from '@storybook/vue3-vite'

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
    titleTag: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      description: 'Balise HTML du titre de l’étape en cours (par défaut `h2`)',
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
      :titleTag="titleTag"
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
    titleTag: 'h2',
  },
}
