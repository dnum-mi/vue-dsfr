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

  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrHighlight
        :text="text"
        :small="small"
        :large="large"
      />
    </div>
  `,
})

MiseEnExergue.args = {
  small: false,
  large: false,
  text: 'Texte original de la mise en exergue',
}
