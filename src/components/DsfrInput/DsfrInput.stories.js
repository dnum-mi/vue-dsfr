import DsfrInput from './DsfrInput.vue'

export default {
  component: DsfrInput,
  title: 'Basic/Champ de saisie (Input)',
  argTypes: {
    dark: { control: 'boolean' },
    label: { control: 'text' },
    labelVisible: { control: 'boolean' },
    placeholder: { control: 'text' },
    modelValue: { controle: 'text' },
  },
}

export const LabelNotVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrInput
        :modelValue="modelValue"
        :label="label"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
      />
    </div>
  `,
})
LabelNotVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: false,
  placeholder: 'Placeholder',
  modelValue: undefined,
}

export const LabelVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrInput
        :modelValue="modelValue"
        :label="label"
        :labelVisible="true"
        :placeholder="placeholder"
      />
    </div>
  `,
})

LabelVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: undefined,
}
