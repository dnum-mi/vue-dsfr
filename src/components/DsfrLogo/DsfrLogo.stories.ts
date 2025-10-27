import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, within } from '@storybook/test'

import DsfrLogo from './DsfrLogo.vue'

const meta = {
  component: DsfrLogo,
  title: 'Composants/DsfrLogo',
  argTypes: {
    logoText: {
      control: 'object',
      description:
        '`string` ou tableau (`Array`) de `string` à afficher entre la Marianne et la devise. Si un tableau est donné, chaque `string` sera sur une ligne distincte',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le logo doit avoir une **petite taille**',
    },
    large: {
      control: 'boolean',
      description: 'Indique si le logo doit avoir une **grande taille**',
    },
  },
} satisfies Meta<typeof DsfrLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Logo: Story = {
  args: {
    logoText: ['République', 'Française'],
    small: false,
    large: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const logoText = Array.isArray(args.logoText) ? args.logoText.join('.*') : args.logoText
    const p = canvas.getByText(new RegExp(logoText as string))
    expect(p).toHaveClass('fr-logo')
  },
}
