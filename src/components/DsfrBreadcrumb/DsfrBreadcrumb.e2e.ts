import DsfrBreadcrumb from './DsfrBreadcrumb.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

describe('DsfrBreadCrumb', () => {
  it('should mount breadcrumb', () => {
    const links = [
      {
        text: 'Racine',
        to: '/',
      },
      {
        text: 'Sous dossier',
        to: '/sousdossier',
      },
      {
        text: 'terminus',
        to: '/sousdossier/terminus',
      },
    ]

    cy.mount(DsfrBreadcrumb, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        links,
      },
    })
    // eslint-disable-next-line
    cy.viewport(500, 500)
      .get('.fr-breadcrumb')
      .should('be.visible')
      .get('.fr-breadcrumb__button')
      .click()
      .wait(300)

    // cy.get('.fr-breadcrumb__list')
    //   .should('be.visible')
    //   .get('.fr-breadcrumb__item')
    //   .should('be.visible')
    //   .get('.fr-breadcrumb__link')
    //   .contains('Racine')
    //   .should('be.visible')
    //   .get('.fr-breadcrumb__link')
    //   .contains('Sous dossier')
    //   .should('be.visible')
    //   .get('.fr-breadcrumb__link')
    //   .contains('terminus')
    //   .should('be.visible')
  })
})
