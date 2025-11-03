import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from 'storybook/test'
import { ref, watch } from 'vue'

import DsfrPagination from './DsfrPagination.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pagination)
 */
const meta = {
  component: DsfrPagination,
  title: 'Composants/DsfrPagination',
  argTypes: {
    pages: {
      control: 'object',
      description:
        'Permet de lister les pages d’un site en associant un label et une url dans une liste',
    },
    currentPage: {
      control: 'number',
      description:
        'Indique la page sur laquelle se trouve l’utilisateur afin de pouvoir utiliser les raccourcis page précédente et page suivante',
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
      description:
        'Permet de limiter le nombre de pages affichées dans la pagination (avec un maximum de 5 pages)',
    },
    currentPageTitleSuffix: {
      control: 'text',
      description:
        'Permet d’ajouter un suffixe au titre de la page courante pour indiquer à l’utilisateur qu’il se trouve sur cette page',
    },
    'onUpdate:currentPage': fn(),
  },
} satisfies Meta<typeof DsfrPagination>

export default meta
type Story = StoryObj<typeof meta>

const render = (args: any) => ({
  components: {
    DsfrPagination,
  },
  setup () {
    const currentPage = ref(args.currentPage)
    watch(currentPage, (newPage) => {
      args['onUpdate:currentPage'](newPage)
    })
    return {
      args,
      currentPage,
    }
  },
  template: `
      <DsfrPagination
        :pages="args.pages"
        v-model:current-page="currentPage"
        :trunc-limit="args.truncLimit"
        :current-page-title-suffix="args.currentPageTitleSuffix"
      />
  `,
})

export const Pagination: Story = {
  render,
  args: {
    pages: [
      {
        label: '1',
        href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:0',
        title: 'Page 1',
      },
      {
        label: '2',
        href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:1',
        title: 'Page 2',
      },
      {
        label: '3',
        href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:2',
        title: 'Page 3',
      },
      {
        label: '4',
        href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:3',
        title: 'Page 4',
      },
      {
        label: '5',
        href: '/?path=/story/composants-pagination-pagination--pagination&args=currentPage:4',
        title: 'Page 5',
      },
    ],
    truncLimit: 5,
    currentPage: 0,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')
    expect(links).toHaveLength(9)

    const currentPageLink = canvas.getByText(`${(args.currentPage || 0) + 1}`)
    expect(currentPageLink).toHaveAttribute('aria-current', 'page')
    const secondPageLink = canvas.getByText(`${(args.currentPage || 0) + 2}`)
    expect(secondPageLink).not.toHaveAttribute('aria-current', 'page')
  },
}

export const PaginationTronquee: Story = {
  name: 'Pagination tronquée',
  render,
  args: {
    pages: [
      {
        label: '1',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:0',
        title: 'Page 1',
      },
      {
        label: '2',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:1',
        title: 'Page 2',
      },
      {
        label: '3',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:2',
        title: 'Page 3',
      },
      {
        label: '4',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:3',
        title: 'Page 4',
      },
      {
        label: '5',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:4',
        title: 'Page 5',
      },
      {
        label: '6',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:5',
        title: 'Page 6',
      },
      {
        label: '7',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:6',
        title: 'Page 7',
      },
      {
        label: '8',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:7',
        title: 'Page 8',
      },
      {
        label: '9',
        href: '?path=/story/composants-pagination-pagination--pagination-truncated&args=currentPage:8',
        title: 'Page 9',
      },
    ],
    truncLimit: 3,
    currentPage: 3,
  },
}
