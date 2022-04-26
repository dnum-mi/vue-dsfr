import DsfrHighlight from './DsfrHighlight.vue'

export default {
  component: DsfrHighlight,
  title: 'Composants/Mise en Exergue - DsfrHighlight',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
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
  dark: false,
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
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
  dark: false,
  small: false,
  large: false,
  text: '',
}
