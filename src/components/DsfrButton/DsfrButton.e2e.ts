import DsfrButton from './DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'
import '../../main.css'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    const buttonText = 'Test button'
    const props = {
      onClick () {},
    }
    cy.spy(props, 'onClick')

    cy.mount(DsfrButton, {
      global: {
        components: {
          VIcon,
        },
      },
      props,
      slots: {
        default: () => buttonText,
      },
    })
      .get('button')
      .contains(buttonText)
      .click()
  })
})
