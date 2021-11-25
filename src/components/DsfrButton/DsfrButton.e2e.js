import { mount } from '@cypress/vue'
import DsfrButton from './DsfrButton.vue'
import VIcon from '../../icons.js'
import '../../main.css'

describe('DsfrButton', () => {
  it('Simple Button', () => {
    const buttonText = 'Test button'
    mount(DsfrButton, {
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
