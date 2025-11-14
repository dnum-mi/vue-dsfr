import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'

import VIcon from '../VIcon/VIcon.vue'

import DsfrCallout from './DsfrCallout.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant)
 */
const meta = {
  component: DsfrCallout,
  title: 'Composants/DsfrCallout',
  tags: ['message'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Permet de passer le titre désiré en chaîne de caractères',
    },
    content: {
      control: 'text',
      description: 'Permet de passer le contenu désiré en chaîne de caractères',
    },
    icon: {
      control: 'text',
      description:
        'Permet de passer l\'icône désirée en chaîne de caractères (cf. remix-icon)',
    },
    accent: {
      control: 'text',
      description:
        'Permet de passer la couleur d\'accentuation',
    },
    button: {
      control: 'object',
      description:
        '(optionnel) Objet contenant les props à passer à DsfrButton (pour afficher un bouton sous la mise en avant)',
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description:
        'Permet de choisir la balise contenant le titre de la mise en avant (h3 par défaut)',
    },
  },
} satisfies Meta<typeof DsfrCallout>

export default meta

type Story = StoryObj<typeof meta>

export const MiseEnAvantSimple: Story = {
  args: {
    title: 'Titre de la mise en avant',
    button: undefined,
    icon: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
    titleTag: undefined,
  },
  render: (args) => ({
    components: {
      DsfrCallout,
      VIcon,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrCallout
        :title="\`\${args.title} (\${args.titleTag || 'h3'})\`"
        :content="args.content"
        :button="args.button"
        :icon="args.icon"
        :title-tag="args.titleTag"
      />
    `,
  }),
}

const buttonOnclick = fn()
export const MiseEnAvantAvecBouton: Story = {
  args: {
    title: 'Titre de la mise en avant',
    button: {
      label: 'Label bouton',
      onClick: buttonOnclick,
    },
    icon: 'ri-information-line',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
    titleTag: 'h2',
  },
  render: (args) => ({
    components: {
      DsfrCallout,
      VIcon,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrCallout
        :title="\`\${args.title} (\${args.titleTag || 'h3'})\`"
        :content="args.content"
        :button="args.button"
        :icon="args.icon"
        :title-tag="args.titleTag"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const closeButton = canvas.getByRole('button')
    await userEvent.tab()
    expect(buttonOnclick).not.toHaveBeenCalled()
    await userEvent.click(closeButton)

    expect(closeButton).toHaveFocus()
    await delay()
    expect(buttonOnclick).toHaveBeenCalled()
  },
}

export const MiseEnAvantSansTitre: Story = {
  render: (args) => ({
    components: {
      DsfrCallout,
      VIcon,
    },
    setup () {
      return {
        args,
      }
    },
    template: `
      <DsfrCallout
        v-bind="args"
      />
    `,
  }),
  args: {
    button: undefined,
    icon: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
    titleTag: undefined,
  },
}

export const MiseEnAvantAvecAccentuation: Story = {
  render: (args) => ({
    components: {
      DsfrCallout,
      VIcon,
    },
    setup () {
      return {
        args,
      }
    },
    template: `
      <DsfrCallout
        v-bind="args"
      />
    `,
  }),
  args: {
    title: 'Titre de la mise en avant',
    button: undefined,
    icon: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
    titleTag: undefined,
    accent: 'orange-terre-battue',
  },
}
