import DsfrCallout from './DsfrCallout.vue'

import '../../main.css'

describe('DsfrCallout', () => {
  it('should mount Callout with information icon and button', () => {
    const title = 'Titre de la mise en avant'
    const content = 'Description de la mise en avant'

    cy.mount(DsfrCallout, {
      props: {
        title,
        content,
        icon: 'ri-information-fill',
        button: {
          label: 'Label bouton',
        },
      },
    })
      .get('.fr-callout')
      .should('be.visible')
      .get('.fr-callout__title')
      .contains(title)
      .should('be.visible')
      .get('.fr-callout__text')
      .contains(content)
      .should('be.visible')
  })
})
