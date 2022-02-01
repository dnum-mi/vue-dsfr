import { mount } from '@cypress/vue'
import DsfrAlert from './DsfrAlert.vue'
import VIcon from '../../icons.js'

import '../../main.css'

describe('DsfrAlert', () => {
  it('should mount small closeable Alert', () => {
    const title = 'Intitulé de l\'alert'
    const description = 'description de l\'alert'
    const small = true
    const closeable = true

    mount(DsfrAlert, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        description,
        small,
        closeable,
      },
    })
      .get('.fr-alert')
      .should('be.visible')
      .get('.alert-content')
      .should('be.visible')

    cy.get('.fr-alert__description')
      .should('be.visible')
      .contains(description)

    cy.get('.close-icon')
      .should('be.visible')
  })

  it('should mount medium error Alert', () => {
    const title = 'Intitulé de l\'alert medium'
    const description = 'description de l\'alert medium'
    const type = 'error'

    mount(DsfrAlert, {
      props: {
        title,
        description,
        type,
      },
    })
      .get('.fr-alert')
      .should('be.visible')
      .get('.alert-content')
      .should('be.visible')
      .get('.fr-alert__title')
      .should('be.visible')

    cy.get('.fr-alert__description')
      .should('be.visible')
      .contains(description)

    cy.get('.fr-alert--error')
      .should('be.visible')
  })
})
