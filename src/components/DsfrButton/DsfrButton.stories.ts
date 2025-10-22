import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from '@storybook/test'

import VIcon from '../VIcon/VIcon.vue'

import DsfrButton from './DsfrButton.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)
 */
const meta = {
  component: DsfrButton,
  title: 'Composants/DsfrButton',
  tags: ['bouton'],
  argTypes: {
    label: {
      control: 'text',
      description: '**Texte** du bouton',
    },
    secondary: {
      control: 'boolean',
      description: 'Permet de basculer sur la variante de style "secondary"',
    },
    tertiary: {
      control: 'boolean',
      description: 'Permet de basculer sur la variante de style "tertiary"',
    },
    noOutline: {
      control: 'boolean',
      description:
        'Permet de basculer sur la variante de style "tertiary-nooutline"',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la taille du groupe de bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le bouton est **inactivé**',
    },
    icon: {
      control: 'text',
      description:
        '**Nom de l\'icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-search-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l\'icône est à gauche',
    },
    iconRight: {
      control: 'boolean',
      description: 'Indique si l\'icône doit **s\'afficher à droite** (`true`)',
    },
    onClick: { action: fn() },
  },
} satisfies Meta<typeof DsfrButton>

export default meta

type Story = StoryObj<typeof meta>

export const BoutonPrimaire: Story = {
  args: {
    label: 'Label bouton',
    secondary: false,
    tertiary: false,
    disabled: false,
    icon: '',
    iconOnly: false,
    iconRight: false,
    noOutline: false,
    size: undefined,
    theClick: fn(),
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      const onClickWrapper = () => {
        args.theClick()
        args.onClick()
      }
      return { args, onClickWrapper }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :secondary="args.secondary"
        :tertiary="args.tertiary"
        :disabled="args.disabled"
        :icon="args.icon"
        :size="args.size"
        :no-outline="args.noOutline"
        :icon-only="args.iconOnly"
        :icon-right="args.iconRight"
        @click="onClickWrapper()"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(args.theClick).not.toHaveBeenCalled()
    button.click()
    expect(args.theClick).toHaveBeenCalledOnce()
  },
}

export const BoutonPrimaireAvecIcone: Story = {
  args: {
    label: 'Label bouton',
    disabled: false,
    icon: 'ri-search-line',
    iconRight: false,
    noOutline: false,
    size: undefined,
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      return { args }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :disabled="args.disabled"
        :icon="args.icon"
        :size="args.size"
        :no-outline="args.noOutline"
        :icon-right="args.iconRight"
        @click="args.onClick"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button.firstElementChild?.nextElementSibling).toContainHTML('<svg')
  },
}

export const BoutonPrimaireAvecIconeAnimee: Story = {
  args: {
    label: 'Label bouton',
    disabled: false,
    icon: { name: 'ri-loader-4-line', animation: 'spin' },
    iconRight: true,
    noOutline: false,
    size: undefined,
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      return { args }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :disabled="args.disabled"
        :icon="args.icon"
        :size="args.size"
        :no-outline="args.noOutline"
        :icon-right="args.iconRight"
        @click="args.onClick"
      />
    `,
  }),
}

export const BoutonSecondaire: Story = {
  args: {
    label: 'Label bouton secondaire',
    disabled: false,
    secondary: true,
    noOutline: false,
    size: undefined,
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      return { args }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :disabled="args.disabled"
        :secondary="args.secondary"
        :no-outline="args.noOutline"
        :size="args.size"
        @click="args.onClick"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button).toHaveClass('fr-btn--secondary')
  },
}

export const BoutonTertiaire: Story = {
  args: {
    label: 'Label bouton secondaire',
    disabled: false,
    tertiary: true,
    noOutline: false,
    size: undefined,
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      return { args }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :disabled="args.disabled"
        :tertiary="args.tertiary"
        :no-outline="args.noOutline"
        :size="args.size"
        @click="args.onClick"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button).toHaveClass('fr-btn--tertiary')
  },
}

export const BoutonTertiaireSansBordure: Story = {
  args: {
    label: 'Label bouton secondaire',
    disabled: false,
    tertiary: true,
    noOutline: true,
    size: undefined,
  },
  render: (args) => ({
    components: { DsfrButton },
    setup () {
      return { args }
    },
    template: `
      <DsfrButton
        :label="args.label"
        :disabled="args.disabled"
        :tertiary="args.tertiary"
        :no-outline="args.noOutline"
        :size="args.size"
        @click="args.onClick"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button).toHaveClass('fr-btn--tertiary-no-outline')
  },
}
BoutonTertiaireSansBordure.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(button).toHaveClass('fr-btn--tertiary-no-outline')
}

export const SuiteDeBoutons: Story = {
  args: {
    label: 'Texte du bouton',
    disabled: false,
    btns: [
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
        iconRight: true,
      },
      {
        label: 'Label 4',
        secondary: true,
        icon: 'ri-checkbox-circle-line',
        iconRight: true,
      },
    ],
  },
  render: (args) => ({
    components: {
      DsfrButton,
      VIcon,
    },
    setup () {
      return { args }
    },
    template: `
      <div style="margin: 1rem 0;" v-for="btn in args.btns">
        <DsfrButton
          :disabled="btn.disabled"
          :secondary="btn.secondary"
          :label="btn.label"
          :icon="btn.icon"
          :no-outline="btn.noOutline"
          :size="btn.size"
          :iconRight="btn.iconRight"
          @click="args.onClick"
        />
      </div>
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
