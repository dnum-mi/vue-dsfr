import DsfrPagination from './DsfrPagination.vue'

export default {
  component: DsfrPagination,
  title: 'Composants/Pagination - Pagination',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre* (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    pages: {
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
        :pages="pages"
        v-model:currentPage="currentPage"
      />
    </div>
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrPagination
        :pages="pages"
        v-model:currentPage="currentPage"
      />
    </div>
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
