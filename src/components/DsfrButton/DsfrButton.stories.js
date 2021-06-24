import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default {
  component: DsfrButton,
  title: 'Basic/Button',
  argTypes: {
    secondary: { control: 'boolean' },
    dark: { control: 'boolean' },
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        :disabled="disabled"
        @click="onClick"
      />
    </div>
  `,
})
Primary.args = {
  label: 'Label bouton',
  disabled: false,
  dark: false,
}

export const Secondary = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        :disabled="disabled"
        :secondary="secondary"
        @click="onClick"
      />
    </div>
  `,
})
Secondary.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  dark: false,
  secondary: true,
}
