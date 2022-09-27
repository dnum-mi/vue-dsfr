import DsfrLanguageSelector from './DsfrLanguageSelector.vue'

export default {
  component: DsfrLanguageSelector,
  title: 'Composants/Sélecteur de langues - DsfrLanguageSelector',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
    languages: {
      control: 'object',
      description: 'Tableau d’objets des langues proposées par le sélecteur nécessite un code ISO et un label par objet',
    },
  },
}

export const SelecteurDeLangue = (args) => ({
  components: { DsfrLanguageSelector },
  data () {
    return args
  },
  template: `
    <DsfrLanguageSelector
      :languages="languages"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
SelecteurDeLangue.args = {
  languages: [{ label: 'English', codeIso: 'en' }, { label: 'Deutsch', codeIso: 'de' }, { label: 'Nederlands', codeIso: 'nl' }],
}
