import DsfrInput from './DsfrInput.vue'

export default {
  component: DsfrInput,
  title: 'Basic/DsfrInput',
  argTypes: {
    dark: { control: 'boolean' },
    label: { control: 'text' },
    labelVisible: { control: 'boolean' },
    placeholder: { control: 'text' },
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
        :label="label"
        :placeholder="placeholder"
        :dark="dark"
        :labelVisible="labelVisible"
      />
    </div>
  `,
})
LabelNotVisible.args = {
  label: 'Label champ de saisie',
  labelVisible: false,
  placeholder: 'Placeholder',
  dark: false,
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
        :label="label"
        :labelVisible="true"
        :placeholder="placeholder"
        :dark="dark"
      />
    </div>
  `,
})

LabelVisible.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  dark: false,
}
