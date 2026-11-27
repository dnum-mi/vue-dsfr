import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrBadgeGroup from './DsfrBadgeGroup.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)
 */
const meta = {
  component: DsfrBadgeGroup,
  title: 'Composants/DsfrBadgeGroup',
  tags: ['chip'],
  argTypes: {
    badges: {
      control: 'object',
      description:
        'Tableau d\'objets à passer à chaque `DsfrBadge`, le tag étant forcé à `span` pour respecter le markup DSFR du groupe',
    },
  },
} satisfies Meta<typeof DsfrBadgeGroup>

export default meta

type Story = StoryObj<typeof meta>

export const GroupeDeBadges: Story = {
  render: (args) => ({
    components: { DsfrBadgeGroup },
    setup () {
      return { args }
    },
    template: `
      <DsfrBadgeGroup :badges="args.badges" />
    `,
  }),
  args: {
    badges: [
      { label: 'Badge simple' },
      { label: 'Badge succès', type: 'success' },
      { label: 'Badge erreur', type: 'error' },
      { label: 'Badge info', type: 'info' },
      { label: 'Petit badge', small: true },
      // Le badge long porte une largeur bornée (même mécanisme que `width: 300px`
      // sur le badge seul) : sans contrainte de largeur, `fr-ellipsis` ne tronque pas
      { label: 'Badge avec texte très long qui devrait être tronqué', ellipsis: true, style: 'max-width: 280px' },
    ],
  },
}
