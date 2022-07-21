import DsfrTabs from './DsfrTabs.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

describe('DsfrTabs', () => {
  it('should mount Tabs', () => {
    cy.mount(DsfrTabs, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        tabListName: 'Liste d’onglets',
        tabTitles: [
          { title: 'Titre 1', icon: 'ri-checkbox-circle-line' },
          { title: 'Titre 2', icon: 'ri-checkbox-circle-line' },
          { title: 'Titre 3', icon: 'ri-checkbox-circle-line' },
          { title: 'Titre 4', icon: 'ri-checkbox-circle-line' },
        ],
        tabContents: [
          'Contenu Tab1',
          'Contenu Tab2',
          'Contenu Tab3',
          'Contenu Tab4',
        ],
      },
    })

    // cy.tab()

    // cy.get('li:first-child button')
    //   .should('have.focus')
    //   .type('{rightArrow}')
    //   .should('not.have.focus')

    // cy.get('li:nth-child(2)  button')
    //   .should('have.focus')
    //   .type('{end}')
    //   .should('not.have.focus')

    // cy.get('li:last-child  button')
    //   .should('have.focus')
    //   .type('{home}')
    //   .should('not.have.focus')

    // cy.get('li:first-child  button')
    //   .should('have.focus')
    //   .type('{leftArrow}')
    //   .should('not.have.focus')

    // cy.get('li:last-child  button')
    //   .should('have.focus')
    //   .type('{rightArrow}')
    //   .should('not.have.focus')

    // cy.get('li:first-child  button')
    //   .should('have.focus')
  })
})
