import { mount } from '@cypress/vue'
import DsfrButton from './DsfrButton'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    mount(DsfrButton, {
      slots: {
        default: 'Test button',
      },
    })

    cy.get('button').contains('Test button').click()
  })
})
