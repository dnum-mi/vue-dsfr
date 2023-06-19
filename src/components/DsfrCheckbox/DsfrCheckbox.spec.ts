import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

import CheckBox from './DsfrCheckbox.vue'

describe('DsfrCheckbox', () => {
  it('should render a checkbox with label in div', () => {
    // Given
    const label = 'Check box label'
    const modelValue = true
    const validMessage = 'Message de succès'

    // When
    const { getByText, getByLabelText, getByRole } = render(CheckBox, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        modelValue,
        name: 'label-1',
        validMessage,
      },
    })

    const input = getByRole('checkbox')
    const labelEl = getByText(label)
    const inputCheckBox = getByLabelText(label)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(input.checked).toBe(true)
    expect(inputCheckBox).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputCheckBox.id)
    expect(inputCheckBox.getAttribute('type')).toBe('checkbox')
    expect(inputCheckBox).not.toHaveAttribute('disabled')
  })

  it('should render a checkbox with label in div', () => {
    // Given
    const label = 'Check box label'
    const modelValue = false
    const disabled = true
    const errorMessage = 'Message d’erreur'

    // When
    const { getByText, getByLabelText, getByRole } = render(CheckBox, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        modelValue,
        name: 'label-1',
        disabled,
        errorMessage,
      },
    })

    const input = getByRole('checkbox')
    const labelEl = getByText(label)
    const inputCheckBox = getByLabelText(label)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputCheckBox).toBeInTheDocument()
    expect(input.checked).toBe(false)
    expect(labelEl.getAttribute('for')).toBe(inputCheckBox.id)
    expect(inputCheckBox.getAttribute('type')).toBe('checkbox')
    expect(inputCheckBox).toHaveAttribute('disabled')
  })
})
