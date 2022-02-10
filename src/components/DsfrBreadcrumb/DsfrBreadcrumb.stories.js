import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

export default {
  component: DsfrBreadcrumb,
  title: 'Composants/Fil d’Ariane - DsfrBreadcrumb',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },

    links: {
      control: 'object',
      description: 'Tableau d’objets, chaque objet contiendra 2 propriétés : `to` avec le lien et `text` avec le texte à afficher',
    },
  },
}

const secondLinkText = 'Lien deux'
const currentPageText = 'Lien 3 avec plein de texte et patati et patata'

const links = [
  {
    to: '/lien-1',
    text: 'Lien 1',
  },
  {
    to: '/lien-2',
    text: secondLinkText,
  },
  {
    text: currentPageText,
  },
]

export const FilDAriane = (args) => ({
  components: { DsfrBreadcrumb },
  data () {
    return args
  },
  template: `
    <DsfrBreadcrumb
      :links="links"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})

FilDAriane.args = {
  dark: false,
  links,
}
