import DsfrButton from './DsfrButton.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import '../../main.css'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    const buttonText = 'Test button'
    cy.mount(DsfrButton, {
      global: {
        components: {
          VIcon,
        },
      },
      slots: {
        default: () => buttonText,
      },
    })
      .get('button')
      .contains(buttonText)
      .click()
  })
})
