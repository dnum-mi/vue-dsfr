import { render } from '@testing-library/vue'

import CheckBox from './DsfrCheckbox.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrCheckbox', () => {
  it('should render a checkbox with label in div', () => {
    // Given
    const label = 'Check box label'
    const modelValue = true

    // When
    const { getByText, getByLabelText } = render(CheckBox, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        modelValue,
        name: 'label-1',
      },
    })

    const labelEl = getByText(label)
    const inputCheckBox = getByLabelText(label)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputCheckBox).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputCheckBox.id)
    expect(inputCheckBox.getAttribute('type')).toBe('checkbox')
    expect(inputCheckBox).not.toHaveAttribute('disabled')
  })

  it('should render a checkbox with label in div', () => {
    // Given
    const label = 'Check box label'
    const modelValue = true
    const disabled = true

    // When
    const { getByText, getByLabelText } = render(CheckBox, {
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
      },
    })

    const labelEl = getByText(label)
    const inputCheckBox = getByLabelText(label)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputCheckBox).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputCheckBox.id)
    expect(inputCheckBox.getAttribute('type')).toBe('checkbox')
    expect(inputCheckBox).toHaveAttribute('disabled')
  })
})
