import DsfrLogo from './DsfrLogo.vue'

export default {
  component: DsfrLogo,
  title: 'Composants/DsfrLogo',
  argTypes: {
    logoText: {
      control: 'object',
      description: '`string` ou tableau (`Array`) de `string` à afficher entre la Marianne et la devise. Si un tableau est donné, chaque `string` sera sur une ligne distincte',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le logo doit avoir une **petite taille**',
    },
    large: {
      control: 'boolean',
      description: 'Indique si le logo doit avoir une **grande taille**',
    },
  },
}

export const Logo = (args) => ({
  components: {
    DsfrLogo,
  },
  data () {
    return args
  },
  template: `
      <DsfrLogo
        :small="small"
        :large="large"
        :logo-text="logoText"
      />
  `,

})
Logo.args = {
  logoText: ['République', 'Française'],
  small: false,
  large: false,
}
