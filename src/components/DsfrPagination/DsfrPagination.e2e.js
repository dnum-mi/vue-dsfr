import DsfrPagination from './DsfrPagination.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

const PaginationWrapper = {
  components: {
    DsfrPagination,
  },
  template: `<div>
    <DsfrPagination :pages="pages" v-model:currentPage="currentPage" />
  </div>`,
  data () {
    return {
      currentPage: 1,
      pages: [
        { label: '1', href: '/#', title: 'Page 1' },
        { label: '2', href: '/#', title: 'Page 2' },
        { label: '3', href: '/#', title: 'Page 3' },
        { label: '4', href: '/#', title: 'Page 4' },
        { label: '5', href: '/#', title: 'Page 5' },
      ],
    }
  },
}

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages', () => {
    cy.mount(PaginationWrapper, {
      global: {
        components: {
          VIcon,
        },
      },
    })
    cy.get('[title="Page 3"]')
      .should('not.have.attr', 'aria-current', 'page')
      .click()
      // .should('have.attr', 'aria-current', 'page')
  })
})
