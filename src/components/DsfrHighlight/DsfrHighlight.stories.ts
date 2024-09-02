import { within, expect } from '@storybook/test'
import DsfrHighlight from './DsfrHighlight.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-exergue)
 */
export default {
  component: DsfrHighlight,
  title: 'Composants/DsfrHighlight',
  argTypes: {
    text: {
      control: 'text',
      description: 'Texte de la mise en avant',
    },
    small: {
      control: 'boolean',
      description: 'Permet d’afficher le texte en petit',
    },
    large: {
      control: 'boolean',
      description: 'Permet d’afficher le texte en plus grand',
    },
  },
}

export const MiseEnExergue = (args) => ({
  components: {
    DsfrHighlight,
  },

  data () {
    return { ...args }
  },

  template: `
    <DsfrHighlight
      :text="text"
      :small="small"
      :large="large"
    />
  `,
})
MiseEnExergue.args = {
  small: false,
  large: false,
  text: 'Texte original de la mise en exergue',
}
MiseEnExergue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const highlight = canvas.getByText(MiseEnExergue.args.text)
  expect(highlight).toBeVisible()
}

export const MiseEnExergueAvecSlot = (args) => ({
  components: {
    DsfrHighlight,
  },

  data () {
    return { ...args }
  },

  template: `
    <DsfrHighlight
      :text="text"
      :small="small"
      :large="large"
    >
      <template v-if="!text">{{ slotText }}</template>
    </DsfrHighlight>
  `,
})
MiseEnExergueAvecSlot.args = {
  small: false,
  large: false,
  text: '',
  slotText: 'Le fameux slot mis en exergue',
}
MiseEnExergueAvecSlot.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const highlight = canvas.getByText(MiseEnExergueAvecSlot.args.slotText)
  expect(highlight).toBeVisible()
}
