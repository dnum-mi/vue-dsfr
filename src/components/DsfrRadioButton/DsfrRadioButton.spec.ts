import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

import RadioButton from './DsfrRadioButton.vue'

describe('DsfrRadioButton', () => {
  it('should render a radio button with label in div', () => {
    // Given
    const label = 'Radio button label'
    const value = 1
    const name = 'radio-button-name'

    // When
    const { getByText, getByDisplayValue } = render(RadioButton, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        value,
        name,
      },
    })

    const labelEl = getByText(label)
    const inputRadio = getByDisplayValue(value)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputRadio).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputRadio.id)
  })

  it('should render a rich radio button with image', () => {
    // Given
    const label = 'Rich radio button label'
    const value = 1
    const name = 'rich-radio-button-name'
    const img = 'http://placekitten.com/150/200'

    // When
    const { getByText, getByDisplayValue, container } = render(RadioButton, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        value,
        name,
        img,
      },
    })

    const labelEl = getByText(label)
    const inputRadio = getByDisplayValue(value)
    const imgEl = container.querySelector('.fr-radio-rich__img')

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputRadio).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputRadio.id)
    expect(imgEl.firstChild.getAttribute('src')).toBe(img)
  })
})
