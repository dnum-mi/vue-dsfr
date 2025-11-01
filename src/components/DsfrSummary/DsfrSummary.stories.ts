import type { Meta, StoryObj } from '@storybook/vue3'

import DsfrSummary from './DsfrSummary.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire)
 */
const meta = {
  component: DsfrSummary,
  title: 'Composants/DsfrSummary',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre du sommaire',
    },
    anchors: {
      control: 'object',
      description:
        'Tableau d\'objets contenant le nom des ancres et le lien correspondant',
    },
  },
} satisfies Meta<typeof DsfrSummary>

export default meta

type Story = StoryObj<typeof meta>

export const Sommaire: Story = {
  render: (args) => ({
    components: { DsfrSummary },
    setup () {
      return { args }
    },
    template: `
    <DsfrSummary
      :title="args.title"
      :anchors="args.anchors"
    />
  `,
  }),
  args: {
    title: 'Exemple de sommaire',
    anchors: [
      { link: '#', name: 'Première étape' },
      { link: '#', name: 'Deuxième étape' },
      { link: '#', name: 'Troisième étape' },
    ],
  },
}
