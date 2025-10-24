import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from '@storybook/test'

import DsfrHighlight from './DsfrHighlight.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-exergue)
 */
const meta = {
  component: DsfrHighlight,
  title: 'Composants/DsfrHighlight',
  tags: ['message'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte de la mise en avant',
    },
    color: {
      control: 'text',
      description: 'Couleur de la bordure (doit être une couleur du DSFR comme `"green-emeraude"` ou `"purple-glycine"`)',
    },
    small: {
      control: 'boolean',
      description: 'Permet d\'afficher le texte en petit',
    },
    large: {
      control: 'boolean',
      description: 'Permet d\'afficher le texte en plus grand',
    },
  },
} satisfies Meta<typeof DsfrHighlight>

export default meta

type Story = StoryObj<typeof meta>

export const MiseEnExergue: Story = {
  args: {
    small: false,
    large: false,
    text: 'Texte original de la mise en exergue',
    color: undefined,
  },
  render: (args) => ({
    components: {
      DsfrHighlight,
    },

    setup () {
      return { args }
    },

    template: `
    <DsfrHighlight
      :text="args.text"
      :small="args.small"
      :large="args.large"
      :color="args.color"
    />
  `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const highlight = canvas.getByText('Texte original de la mise en exergue')
    expect(highlight).toBeVisible()
  },
}

export const MiseEnExergueAvecSlot: Story = {
  args: {
    small: false,
    large: false,
    text: '',
    color: 'pink-macaron',
    slotText: 'Texte personnalisé de la mise en exergue',
  },
  render: (args) => ({
    components: {
      DsfrHighlight,
    },

    setup () {
      return { args }
    },

    template: `
    <DsfrHighlight
      :text="args.text"
      :small="args.small"
      :large="args.large"
      :color="args.color"
    >
      <template v-if="!args.text">{{ args.slotText }}</template>
    </DsfrHighlight>
  `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const highlight = canvas.getByText('Le fameux slot mis en exergue')
    expect(highlight).toBeVisible()
  },
}
