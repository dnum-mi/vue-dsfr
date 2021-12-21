import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

export default {
  component: DsfrCheckboxSet,
  title: 'Composants/Case à cocher/Groupe de cases à cocher - DsfrCheckboxSet',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },

    disabled: {
      control: 'boolean',
      description: 'Indique si l’ensemble des checkboxes doivent être désactivées (`true`) ou non (`false`, défaut)',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    inline: {
      control: 'boolean',
      description: 'Indique si les checkboxes doivent apparaître sur une seule ligne (`true`) ou non (`false`, défaut)',
    },
    legend: {
      control: 'text',
      description: 'Titre de l’ensemble (Set) des checkboxes',
    },
    options: {
      control: 'object',
      description: 'Tableau de `string` (la valeur `value` de la checkbox sera identique au `label`) ou d’objets contenant les props à passer à chaque composant DsfrCheckbox, sauf `modelValue` qui sera calculée à partir de `modelValue` du DsfrCheckboxSet.',
    },
    modelValue: {
      control: 'object',
      description: 'Tableau des valeurs sélectionnées (cochées) du groupe de checkboxes',
    },
    onChange: {
      action: 'changed',
    },
  },
}

export const CheckboxSet = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :options="options"
      :inline="inline"
      :disabled="disabled"
      :errorMessage="errorMessage"
      :validMessage="validMessage"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSet.args = {
  dark: false,
  legend: 'Légende des champs',
  disabled: false,
  inline: false,
  errorMessage: '',
  validMessage: '',
  modelValue: [],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
    },
  ],
}

export const CheckboxSetAvecErreur = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetAvecErreur.args = {
  dark: false,
  legend: 'Légende des champs',
  disabled: false,
  inline: false,
  errorMessage: 'Message d\'erreur',
  modelValue: [],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      checked: false,
    },
  ],
}

export const CheckboxSetAvecSucces = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})

CheckboxSetAvecSucces.args = {
  dark: false,
  legend: 'Légende des champs',
  modelValue: [],
  inline: false,
  validMessage: 'Message de succès',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      checked: false,
    },
  ],
}

export const CheckboxSetInline = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInline.args = {
  dark: false,
  legend: 'Légende des champs en ligne',
  modelValue: [],
  inline: true,
  errorMessage: '',
  validMessage: '',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      checked: false,
    },
  ],
}

export const CheckboxSetInlineAvecErreur = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecErreur.args = {
  dark: false,
  legend: 'Légende des champs en ligne',
  modelValue: [],
  inline: true,
  errorMessage: 'Message d\'erreur',
  validMessage: '',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      checked: false,
    },
  ],
}

export const CheckboxSetInlineAvecSucces = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecSucces.args = {
  dark: false,
  legend: 'Légende des champs en ligne',
  modelValue: [],
  inline: true,
  errorMessage: '',
  validMessage: 'Message de succès',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      checked: false,
    },
  ],
}
