import type { Meta, StoryObj } from '@storybook/vue3-vite'

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
    titleTag: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'p'],
      description: 'Balise HTML utilisée pour le titre du sommaire',
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
      :title-tag="args.titleTag"
      :anchors="args.anchors"
    />
  `,
  }),
  args: {
    title: 'Exemple de sommaire avec niveau de titre personnalisé',
    titleTag: 'h3',
    anchors: [
      { link: '#', name: 'Première étape' },
      { link: '#', name: 'Deuxième étape' },
      { link: '#', name: 'Troisième étape' },
    ],
  },
}
