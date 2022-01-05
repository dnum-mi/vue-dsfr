import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

export default {
  component: DsfrRadioButtonSet,
  title: 'Composants/Boutons radio/Groupe de boutons radio - DsfrRadioButtonSet',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le bouton radio doit être désactivé (`true`) ou non (`false`, défaut)',
    },
    inline: {
      control: 'boolean',
      description: 'Indique si les boutons doivent être affichés en ligne (`true`) ou chacun sur une ligne (`false`, défaut)',
    },
    legend: {
      control: 'text',
      description: 'Titre du groupe de bouton',
    },
    options: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    onChange: { action: 'changed' },
  },
}

export const RadioButtonSet = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set"
      :options="options"
      :inline="inline"
      @update:model-value="onChange"
    />
  </div>`,
})
RadioButtonSet.args = {
  dark: false,
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const RadioButtonSetInError = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-errors"
      :options="options"
      :disabled="disabled"
      :error-message="error"
      :inline="inline"
      @update:model-value="onChange"
    />
  </div>`,
})
RadioButtonSetInError.args = {
  dark: false,
  error: "Texte de l'erreur",
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
      hint: 'Description 3',
    },
  ],
}

export const RadioButtonSetInSuccess = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-success"
      :options="options"
      :disabled="disabled"
      :valid-message="validMessage"
      :inline="inline"
      @update:model-value="onChange"
    />
  </div>`,
})
RadioButtonSetInSuccess.args = {
  dark: false,
  validMessage: 'Succès au chocolat',
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
      hint: 'Description 3',
    },
  ],
}

export const RadioButtonSetDisabled = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-disabled"
      :options="options"
      :disabled="disabled"
      :inline="inline"
      @update:model-value="onChange"
    />
  </div>`,
})
RadioButtonSetDisabled.args = {
  dark: false,
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: true,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const RadioButtonSetInline = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-inline"
      :options="options"
      :disabled="disabled"
      :inline="inline"
      @update:model-value="onChange"
    />
  </div>`,
})
RadioButtonSetInline.args = {
  dark: false,
  legend: 'Légende des champs en ligne',
  selectedValue: 1,
  disabled: true,
  inline: true,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}
