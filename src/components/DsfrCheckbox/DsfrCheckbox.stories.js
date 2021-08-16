import DsfrCheckbox from './DsfrCheckbox.vue'

export default {
  component: DsfrCheckbox,
  title: 'Basic/Case à cocher - Checkbox',
  argTypes: {
    dark: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    hint: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    errorMessage: { control: 'text' },
    validMessage: { control: 'text' },
    onChange: { action: 'changed' },
  },
}

export const Checkbox = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return { ...args }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :modelValue="checked"
        :hint="hint"
        :name="name || 'name1'"
        @update:modelValue="updateChecked($event)"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})
Checkbox.args = {
  disabled: false,
  dark: false,
  checked: false,
  label: 'Checkbox 1',
  name: 'name1',
  value: false,
  hint: 'Description 1',
}

export const CheckboxAvecErreur = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :modelValue="checked"
        :hint="hint"
        @update:modelValue="updateChecked($event)"
        :error-message="errorMessage"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})
CheckboxAvecErreur.args = {
  disabled: false,
  dark: false,
  checked: false,
  label: 'Checkbox 1',
  value: false,
  hint: 'Description 1',
  errorMessage: 'Erreur formulaire',
}

export const CheckboxAvecSucces = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :modelValue="checked"
        :hint="hint"
        @update:modelValue="updateChecked($event)"
        :valid-message="validMessage"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})

CheckboxAvecSucces.args = {
  disabled: false,
  dark: false,
  checked: false,
  label: 'Checkbox 1',
  value: false,
  hint: 'Description 1',
  validMessage: 'Formulaire valide',
}
