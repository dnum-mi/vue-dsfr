
import DsfrRadioButton from './DsfrRadioButton.vue'

export default {
  component: DsfrRadioButton,
  title: 'Basic/Bouton radio (Radio button)',
  argTypes: {
    dark: { control: 'boolean' },
    label: { control: 'text' },
    options: { control: 'object' },
    modelValue: { control: 'text' },
    onChange: { action: 'changed' },
  },
}

export const RadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrRadioButton
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :disabled="option.disabled"
        :modelValue="modelValue"
        :value="option.value"
        :hint="option.hint"
        @update:modelValue="updateCheckedValue($event)"
      />
    </div>
  `,
  methods: {
    updateCheckedValue (val) {
      if (val === this.modelValue) {
        return
      }
      this.onChange(val)
      this.modelValue = val
    },
  },
})
RadioButton.args = {
  dark: false,
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
