import { render } from '@testing-library/vue'

import RadioButton from './DsfrRadioButton.vue'

describe('DsfrRadioButton', () => {
  it('should render a radio button with label in div', () => {
    // Given
    const label = 'Radio button label'
    const value = 1

    // When
    const { getByText, getByDisplayValue } = render(RadioButton, {
      props: {
        label,
        value,
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
