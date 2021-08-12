import DsfrLogo from './DsfrLogo.vue'

export default {
  component: DsfrLogo,
  title: 'Basic/Logo Officiel (Official logo)',
  argTypes: {
    dark: { control: 'boolean' },
    text: { control: 'text' },
    size: {
      options: ['small', 'normal', 'large'],
      control: { type: 'radio' },
    },
  },
}

export const Logo = (args, { argTypes }) => ({
  components: {
    DsfrLogo,
  },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrLogo
        :small="size === 'small'"
        :large="size === 'large'"
      >
        {{ text }}
      </DsfrLogo>
    </div>
  `,
})
Logo.args = {
  dark: false,
  text: 'République Française',
  size: 'normal',
}
