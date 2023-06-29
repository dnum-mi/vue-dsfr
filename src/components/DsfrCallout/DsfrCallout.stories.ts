import { type Meta } from '@storybook/vue3'
import { expect, jest } from '@storybook/jest'
import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'
import { within, userEvent } from '@storybook/testing-library'

import { RiInformationLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrCallout from './DsfrCallout.vue'

addIcons(RiInformationLine)

const delay = (timeout = 100) => new Promise(resolve => setTimeout(resolve, timeout))

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-avant)
 */
const meta: Meta<typeof DsfrCallout> = {
  component: DsfrCallout,
  title: 'Composants/DsfrCallout',
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
      description: 'Permet de passer l’icône désirée en chaîne de caractères (cf. remix-icon)',
    },
    button: {
      control: 'object',
      description: '(optionnel) Objet contenant les props à passer à DsfrButton (pour afficher un bouton sous la mise en avant)',
    },
    onClick: {
      action: 'Clicked',
    },
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre de la mise en avant (h3 par défaut)',
    },
  },
}

export default meta

export const MiseEnAvantSimple = (args) => ({
  components: {
    DsfrCallout,
    VIcon,
  },

  data () {
    return {
      ...args,
      button: args.button && {
        ...args.button,
        onClick: args.onClick,
      },
    }
  },

  template: `
    <DsfrCallout
      :title="\`\${title} (\${titleTag || 'h3'})\`"
      :content="content"
      :button="button"
      :icon="icon"
      :title-tag="titleTag"
    />
  `,

})
MiseEnAvantSimple.args = {
  title: 'Titre de la mise en avant',
  button: undefined,
  icon: '',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
  titleTag: undefined,
}

export const MiseEnAvant = (args) => ({
  components: {
    DsfrCallout,
    VIcon,
  },

  data () {
    return {
      ...args,
      button: args.button,
    }
  },

  template: `
    <DsfrCallout
      :title="\`\${title} (\${titleTag || 'h3'})\`"
      :content="content"
      :button="button"
      :icon="icon"
      :title-tag="titleTag"
    />
  `,

})
const buttonOnclick = jest.fn()
MiseEnAvant.args = {
  title: 'Titre de la mise en avant',
  button: {
    label: 'Label bouton',
    onClick: buttonOnclick,
  },
  icon: 'ri-information-line',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
  titleTag: 'h2',
}

MiseEnAvant.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const closeButton = canvas.getByRole('button')
  await userEvent.tab()
  expect(buttonOnclick).not.toHaveBeenCalled()
  await userEvent.click(closeButton)

  expect(closeButton).toHaveFocus()
  await delay()
  expect(buttonOnclick).toHaveBeenCalled()
}
