import DsfrButton from './DsfrButton.vue'

export default {
  component: DsfrButton,
  title: 'Basic/Button',
  argTypes: {
    primary: { control: 'boolean' },
    label: { control: 'text', value: 'Test default' },
    onClick: {},
    disabled: { control: 'boolean' },
  },
}

export const Primary = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :primary="primary"
      :label="label"
      :disabled="disabled"
      @click="onClick"
    />
  `,
})
Primary.args = {
  label: 'Button',
  primary: true,
  disabled: false,
}

export const Secondary = (args) => ({
  components: { DsfrButton },
  template: '<DsfrButton :secondary="secondary" :label="label" />',
})
