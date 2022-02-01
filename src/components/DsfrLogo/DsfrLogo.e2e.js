import { mount } from '@cypress/vue'
import DsfrLogo from './DsfrLogo.vue'
import '../../main.css'

describe('DsfrLogo', () => {
  it('should mount DsfrLogo', () => {
    const logoText = ['Gouvernement', 'de ouf']
    const small = true
    const large = false

    mount(DsfrLogo, {
      props: {
        logoText,
        small,
        large,
      },
    })
    cy.get('.fr-logo--sm')
      .should('be.visible')
      .should('contain', logoText[0])
      .should('contain', logoText[1])
  })
})
