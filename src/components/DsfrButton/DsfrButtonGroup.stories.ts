import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from '@storybook/test'

import VIcon from '../VIcon/VIcon.vue'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/groupe-de-boutons)
 */
const meta = {
  component: DsfrButtonGroup,
  title: 'Composants/DsfrButtonGroup',
  tags: ['bouton'],
  argTypes: {
    buttons: {
      control: 'object',
      description:
        'Tableau d\'objets, chaque objet contiendra les props à passer à DsfrButton',
    },
    inlineLayoutWhen: {
      control: 'radio',
      options: ['never', 'always', 'small', 'medium', 'large'],
      description:
        'Indique si le groupe de boutons doit apparaître en empilement horizontal (toujours, ou seulement sur les tailles de vue spécifiées)',
    },
    equisized: {
      control: 'boolean',
      description:
        'Indique si la taille des boutons doit être la même pour tous les boutons (prend la taille du plus large) si est à `true`, ou si chaque bouton doit avoir sa propre taille si est à `false`',
    },
    reverse: {
      control: 'boolean',
      description:
        'Indique si l’ordre des boutons doit être inversé par rapport au DOM.\n\n *N.B. : Ne fonctionne que si `align` est à `right`*',
    },
    iconRight: {
      control: 'boolean',
      description:
        'Inverse la position des icônes par rapport au texte.\n\n *N.B. : Ne fonctionne que si la prop n\'est pas définie sur chaque bouton*',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la taille du groupe de bouton',
    },
    align: {
      control: 'radio',
      options: ['default', 'center', 'right'],
      description: 'Indique l\'alignement du groupe de boutons',
    },
  },
} satisfies Meta<typeof DsfrButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const GroupeDeBoutons: Story = {
  args: {
    align: 'center',
    inlineLayoutWhen: 'never',
    reverse: false,
    iconRight: false,
    size: 'medium',
    buttons: [
      {
        label: 'Label 1',
        icon: 'ri-checkbox-circle-line',
      },
      {
        label: 'Label 2',
        secondary: true,
        icon: 'ri-checkbox-circle-line',
      },
      {
        label: 'Label 3',
        icon: 'ri-checkbox-circle-line',
      },
      {
        label: 'Label 4',
        secondary: true,
        icon: 'ri-checkbox-circle-line',
      },
    ],
  },
  render: (args) => ({
    components: {
      DsfrButtonGroup,
      VIcon,
    },
    setup () {
      const buttons = (args.buttons || []).map((btn) => ({ ...btn, onClick: () => {} }))
      return { args, buttons }
    },
    template: `
      <DsfrButtonGroup
        :buttons="buttons"
        :size="args.size"
        :align="args.align"
        :inline-layout-when="args.inlineLayoutWhen"
        :icon-right="args.iconRight"
        :reverse="args.reverse"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttons = canvas.getAllByRole('button')
    expect(buttons).toHaveLength(4)
    for (const button of buttons) {
      expect(button).toBeVisible()
    }
  },
}
