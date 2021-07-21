import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

export default {
  component: DsfrRadioButtonSet,
  title: 'Basic/DsfrRadioButton',
  argTypes: {
    dark: { control: 'boolean' },
    disabled: { control: 'boolean' },
    inline: { control: 'boolean' },
    legend: { control: 'text' },
    options: { control: 'object' },
    modelValue: { control: 'text' },
    error: { control: 'text' },
  },
}

export const RadioButtonSet = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :inline="inline"
    />
  </div>`,
})
RadioButtonSet.args = {
  legend: 'Légende des champs',
  selectedValue: 1,
  inline: false,
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :disabled="disabled"
      :error-message="error"
      :inline="inline"
    />
  </div>`,
})
RadioButtonSetInError.args = {
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :disabled="disabled"
      :valid-message="validMessage"
      :inline="inline"
    />
  </div>`,
})
RadioButtonSetInSuccess.args = {
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :disabled="disabled"
      :inline="inline"
    />
  </div>`,
})
RadioButtonSetDisabled.args = {
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :disabled="disabled"
      :inline="inline"
    />
  </div>`,
})
RadioButtonSetInline.args = {
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
