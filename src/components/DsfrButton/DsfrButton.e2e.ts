import DsfrButton from './DsfrButton.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import '../../main.css'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    const buttonText = 'Test button'
    const props = {
      onClick () {}, // eslint-disable-line @typescript-eslint/no-empty-function
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
