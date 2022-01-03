import { mount } from '@cypress/vue'
import DsfrPagination from './DsfrPagination.vue'
import VIcon from '../../icons.js'

import '../../main.css'

const PaginationWrapper = {
  components: {
    DsfrPagination,
  },
  template: `<div>
    <DsfrPagination :links="links" v-model:currentPage="currentPage" />
  </div>`,
  data () {
    return {
      currentPage: 1,
      links: [
        { label: '1', url: '#page1', title: 'Page 1' },
        { label: '2', url: '#page2', title: 'Page 2' },
        { label: '3', url: '#page3', title: 'Page 3' },
        { label: '4', url: '#page4', title: 'Page 4' },
        { label: '5', url: '#page5', title: 'Page 5' },
      ],
    }
  },
}

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages', () => {
    mount(PaginationWrapper, {
      global: {
        components: {
          VIcon,
        },
      },
    })
    cy.get('[title="Page 3"]')
      .should('not.have.attr', 'aria-current', 'page')
      .click()
      .should('have.attr', 'aria-current', 'page')
  })
})
