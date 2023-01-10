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
      description: 'Tableau d’objets des langues proposées par le sélecteur : chaque élément doit être un objet avec un code ISO `codeIso` et un `label`',
    },
    currentLanguage: {
      control: 'text',
      description: 'Code ISO du language courant (doit correspondre au `codeIso` d’un des objets de la props `languages`',
    },
    select: {
      description: 'Événement émis lors du clic sur l’une des langues proposées après dépliage de la liste',
    },
    onSelect: {
      action: 'Clic sur une langue',
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
