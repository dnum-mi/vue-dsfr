import DsfrInput from './DsfrInput.vue'
import '../../main.css'

const label = 'Label champ de saisie'
const labelVisible = true
const disabled = false
const isTextarea = true
const isValid = true

describe('DsfrInput', () => {
  it('should mount DsfrInput', () => {
    cy.mount(DsfrInput, {
      props: {
        label,
        labelVisible,
        disabled,
        isTextarea,
        isValid,
      },
    })
      .get('.fr-label')
      .should('be.visible')
      .should('contain', label)
      .get('textarea')
      .should('be.visible')
      .should('have.class', 'fr-input--valid')
  })
})
