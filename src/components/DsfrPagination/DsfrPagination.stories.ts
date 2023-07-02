import DsfrPagination from './DsfrPagination.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pagination)
 */
export default {
  component: DsfrPagination,
  title: 'Composants/DsfrPagination',
  argTypes: {
    pages: {
      control: 'object',
      description: 'Permet de lister les pages d’un site en associant un label et une url dans une liste',
    },
    currentPage: {
      control: 'number',
      description: 'Indique la page sur laquelle se trouve l’utilisateur afin de pouvoir utiliser les raccourcis page précédente et page suivante',
    },
    firstPageTitle: {
      control: 'text',
      description: 'Indique le titre de la première page',
    },
    lastPageTitle: {
      control: 'text',
      description: 'Indique le titre de la dernière page',
    },
    nextPageTitle: {
      control: 'text',
      description: 'Indique le titre de la page suivante',
    },
    prevPageTitle: {
      control: 'text',
      description: 'Indique le titre de la page suivante',
    },
    truncLimit: {
      control: 'number',
      description: 'Permet de limiter le nombre de pages affichées dans la pagination (avec un maximum de 5 pages)',
    },
    'update:currentPage': {
      description: 'Événement émis lors du changement de page courante, avec en argument le numéro de page sélectionné',
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
      <DsfrPagination
        :pages="pages"
        v-model:current-page="currentPage"
      />
  `,

})

Pagination.args = {
  pages: [
    { label: '1', href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:0', title: 'Page 1' },
    { label: '2', href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:1', title: 'Page 2' },
    { label: '3', href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:2', title: 'Page 3' },
    { label: '4', href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:3', title: 'Page 4' },
    { label: '5', href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:4', title: 'Page 5' },
  ],
  currentPage: 0,
}

export const PaginationTruncated = (args) => ({
  components: {
    DsfrPagination,
  },

  data () {
    return { ...args }
  },

  template: `
      <DsfrPagination
        :pages="pages"
        v-model:currentPage="currentPage"
      />
  `,

})

PaginationTruncated.args = {
  pages: [
    { label: '1', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:0', title: 'Page 1' },
    { label: '2', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:1', title: 'Page 2' },
    { label: '3', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:2', title: 'Page 3' },
    { label: '4', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:3', title: 'Page 4' },
    { label: '5', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:4', title: 'Page 5' },
    { label: '6', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:5', title: 'Page 6' },
    { label: '7', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:6', title: 'Page 7' },
    { label: '8', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:7', title: 'Page 8' },
    { label: '9', href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:8', title: 'Page 9' },
  ],
  currentPage: 4,
}
