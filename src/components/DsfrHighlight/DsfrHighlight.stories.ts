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
      <p v-if="!text">Le fameux slot mis en exergue</p>
    </DsfrHighlight>
  `,
})
MiseEnExergueAvecSlot.args = {
  small: false,
  large: false,
  text: '',
}
