import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane)
 */
export default {
  component: DsfrBreadcrumb,
  title: 'Composants/DsfrBreadcrumb',
  argTypes: {
    links: {
      control: 'object',
      description: 'Tableau d’objets, chaque objet contiendra 2 propriétés : `to` avec le lien et `text` avec le texte à afficher',
    },
    breadcrumbId: {
      control: 'text',
      description: 'Id de la balise `div` à l’intérieur de la balise `nav` du fil d’Ariane',
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

})

FilDAriane.args = {
  links,
}
