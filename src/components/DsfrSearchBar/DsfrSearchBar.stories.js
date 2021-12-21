import DsfrSearchBar from './DsfrSearchBar.vue'

export default {
  component: DsfrSearchBar,
  title: 'Composants/Barre de recherche - DsfrSearchBar',
  argTypes: {
    label: { control: 'text' },
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    hideIcon: {
      control: 'boolean',
      description: 'Indique si l’icône doit être masqué (`true`) ou non (`false`, défaut)',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Indique si le label doit être visible (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description: 'Texte à afficher si le champ de recherhe n’est pas rempli',
    },
    buttonText: {
      control: 'text',
      description: 'Texte du bouton de la barre de recherche',
    },
    modelValue: {
      control: 'text',
      description: 'Contenu du champ de recherche',
    },
    large: {
      control: 'boolean',
      description: 'Indique si la barre de recherche doit prendre plus de hauteur (`true`) ou non (`false`, défaut)',
    },
  },
}

export const IconOnly = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :button-text="buttonText"
        :hide-icon="hideIcon"
        v-model="modelValue"
        :large="large"
      />
    </div>
  `,
})
IconOnly.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: false,
  placeholder: 'Rechercher',
  buttonText: '',
  labelVisible: false,
  modelValue: '',
  large: false,
}

export const TextNoIcon = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :hide-icon="hideIcon"
        :button-text="buttonText"
      />
    </div>
  `,
})
TextNoIcon.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: true,
  placeholder: 'Rechercher',
  buttonText: 'Rechercher',
  labelVisible: false,
  large: false,
  modelValue: '',
}

export const SearchBarLarge = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :hide-icon="hideIcon"
        :button-text="buttonText"
        :large="large"
      />
    </div>
  `,
})
SearchBarLarge.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: true,
  placeholder: 'Rechercher',
  buttonText: 'Rechercher',
  labelVisible: false,
  modelValue: '',
  large: true,
}
