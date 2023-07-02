import DsfrHighlight from './DsfrHighlight.vue'
import '../../main.css'

const text = 'Texte original de la mise en exergue'

describe('DsfrHighlight', () => {
  it('should mount DsfrHighlight', () => {
    cy.mount(DsfrHighlight, {
      props: {
        small: false,
        large: true,
        text,
      },
    })
    cy.get('.fr-highlight')
      .should('be.visible')
      .find('.fr-text--lg')
      .should('contain', text)
  })
})
