import { render } from '@testing-library/vue'

import RadioButton from './DsfrRadioButton.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

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
})
