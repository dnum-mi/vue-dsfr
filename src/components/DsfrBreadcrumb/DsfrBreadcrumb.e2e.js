import { mount } from '@cypress/vue'
import DsfrBreadcrumb from './DsfrBreadcrumb.vue'
import VIcon from '../../icons.js'

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

    mount(DsfrBreadcrumb, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        links,
      },
    })
      .get('.fr-breadcrumb')
      .should('be.visible')
      .get('.fr-breadcrumb__button')
      .click()

    cy.get('.fr-breadcrumb__list')
      .should('be.visible')
      .get('.fr-breadcrumb__item')
      .should('be.visible')
      .get('.fr-breadcrumb__link')
      .contains('Racine')
      .should('be.visible')
      .get('.fr-breadcrumb__link')
      .contains('Sous dossier')
      .should('be.visible')
      .get('.fr-breadcrumb__link')
      .contains('terminus')
      .should('be.visible')
  })
})
