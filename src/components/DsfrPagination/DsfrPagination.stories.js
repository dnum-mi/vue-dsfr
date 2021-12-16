import DsfrPagination from './DsfrPagination.vue'

export default {
  component: DsfrPagination,
  title: 'Composants/Pagination - Pagination',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre* (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    links: {
      control: 'array',
      description: 'Permet de lister les pages d’un site en associant un label et une url dans une liste',
    },
    currentPage: {
      control: 'number',
      description: 'Indique la page sur laquelle se trouve l’utilisateur afin de pouvoir utiliser les raccourcis page précédente et page suivante',
    },
  },
}

export const Pagination = (args) => ({
  components: {
    DsfrPagination,
  },

  data () {
    return { ...args }
  },

  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrPagination
        :links="links"
        :currentPage="currentPage"
      />
    </div>
  `,
})

Pagination.args = {
  links: [
    { label: '1', url: '#page1', title: 'Page 1' },
    { label: '2', url: '#page2', title: 'Page 2' },
    { label: '3', url: '#page3', title: 'Page 3' },
    { label: '4', url: '#page4', title: 'Page 4' },
    { label: '5', url: '#page5', title: 'Page 5' },
  ],
  currentPage: 1,
}
