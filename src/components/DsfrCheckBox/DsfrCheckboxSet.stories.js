import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

export default {
  component: DsfrCheckboxSet,
  title: 'Basic/DsfrCheckbox',
  argTypes: {
    dark: { control: 'boolean' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    validMessage: { control: 'text' },
    inline: { control: 'boolean' },
    legend: { control: 'text' },
    options: { control: 'object' },
    success: { control: 'text' },
    onChange: { action: 'changed' },
  },
}

export const CheckboxSet = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSet.args = {
  legend: 'Légende des champs',
  selectedValue: [],
  inline: false,
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

export const CheckboxSetAvecErreur = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :error-message="errorMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetAvecErreur.args = {
  legend: 'Légende des champs',
  selectedValue: [],
  inline: false,
  errorMessage: 'Message d\'erreur',
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})

CheckboxSetAvecSucces.args = {
  legend: 'Légende des champs',
  selectedValue: [],
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInline.args = {
  legend: 'Légende des champs en ligne',
  selectedValue: [],
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecErreur.args = {
  legend: 'Légende des champs en ligne',
  selectedValue: [],
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
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCheckboxSet
      :legend="legend"
      v-model="selectedValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  </div>`,
  watch: {
    selectedValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecSucces.args = {
  legend: 'Légende des champs en ligne',
  selectedValue: [],
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
