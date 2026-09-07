import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrBadge from './DsfrBadge.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/badge)
 */
const meta = {
  component: DsfrBadge,
  title: 'Composants/DsfrBadge',
  tags: ['chip'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label (texte) du badge',
    },
    type: {
      options: ['error', 'success', 'new', 'info', 'warning', 'standard', undefined],
      control: 'radio',
      description:
        '(Optionnel) **Type** du badge : `error` (Erreur), `success` (Succès), `new` (Nouveau), `info` (Information), `warning` (Avertissement), `standard` (couleur d’accent personnalisée via `colorAccent`)',
    },
    colorAccent: {
      options: [
        'green-tilleul-verveine',
        'green-bourgeon',
        'green-emeraude',
        'green-menthe',
        'green-archipel',
        'blue-ecume',
        'blue-cumulus',
        'purple-glycine',
        'pink-macaron',
        'pink-tuile',
        'yellow-tournesol',
        'yellow-moutarde',
        'orange-terre-battue',
        'brown-cafe-creme',
        'brown-caramel',
        'brown-opera',
        'beige-gris-galet',
        undefined,
      ],
      control: 'select',
      description:
        '(Optionnel) Couleur d’accent du badge, utilisée uniquement quand `type` vaut `standard`',
    },
    noIcon: {
      control: 'boolean',
      description: 'Permet de ne pas afficher d’icône (si `true`)',
    },
    small: {
      control: 'boolean',
      description: 'Permet d’afficher une petite icône (si `true`)',
    },
    ellipsis: {
      control: 'boolean',
      description: 'Permet de couper le texte avec des points de suspension si le texte est trop long',
    },
  },
} satisfies Meta<typeof DsfrBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Badge: Story = {
  args: {
    small: false,
    type: 'success',
    label: 'Succès au chocolat vert',
    noIcon: false,
  },
  render: (args) => ({
    components: {
      DsfrBadge,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrBadge :label="args.label" :small="args.small" :type="args.type" :color-accent="args.colorAccent" :no-icon="args.noIcon" />
    `,
  }),
}

export const TousLesBadges: Story = {
  args: {
    label: 'Exemple', // Valeur par défaut, non utilisée car hardcodée dans le template
  },
  render: () => ({
    components: {
      DsfrBadge,
    },
    template: `
      <p>
        <DsfrBadge label="Simple" />
      </p>
      <p>
        <DsfrBadge style="width: 300px" ellipsis label="Label très long qui, normalement, devrait être coupé par une ellipse" />
      </p>
      <p>
        <DsfrBadge label="Succès" type="success" />
      </p>
      <p>
        <DsfrBadge label="Erreur" type="error" />
      </p>
      <p>
        <DsfrBadge label="Attention !" type="warning" />
      </p>
      <p>
        <DsfrBadge label="Information" type="info" />
      </p>
      <p>
        <DsfrBadge label="Nouveauté" type="new" />
      </p>
      <p>
        <DsfrBadge label="Standard" type="standard" />
      </p>
      <p>
        <DsfrBadge label="Standard glycine" type="standard" color-accent="purple-glycine" />
      </p>
    `,
  }),
}
