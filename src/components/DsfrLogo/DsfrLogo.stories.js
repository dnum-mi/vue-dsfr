import DsfrLogo from './DsfrLogo.vue'

export default {
  component: DsfrLogo,
  title: 'Composants/Logo Officiel - DsfrLogo',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrLogo
        :small="small"
        :large="large"
        :logo-text="logoText"
      />
    </div>
  `,
})
Logo.args = {
  dark: false,
  logoText: ['République', 'Française'],
  small: false,
  large: false,
}
