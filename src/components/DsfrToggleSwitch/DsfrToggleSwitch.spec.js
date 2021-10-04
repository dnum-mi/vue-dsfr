import { render } from '@testing-library/vue'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

describe('DsfrToggleSwitch', () => {
  it('should render toggle switch', () => {
    // Given
    const label = 'Label du switch'
    const hint = 'Indice du switch'
    const disabled = false
    const inputId = '1'

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitch, {
      props: {
        disabled,
        hint,
        inputId,
        label,
      },
    })

    const labelEl = getByText(label)
    const hintEl = getByText(hint)
    const inputEl = getByTestId(inputId)

    // Then
    expect(labelEl).toBeInTheDocument()
    expect(hintEl).toBeInTheDocument()
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).not.toBeDisabled()
  })

  it('should render disabled toggle switch', () => {
    // Given
    const label = 'Label du switch'
    const hint = 'Indice du switch'
    const disabled = true
    const inputId = '2'

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitch, {
      props: {
        disabled,
        hint,
        inputId,
        label,
      },
    })

    const labelEl = getByText(label)
    const hintEl = getByText(hint)
    const inputEl = getByTestId(inputId)

    // Then
    expect(labelEl).toBeInTheDocument()
    expect(hintEl).toBeInTheDocument()
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toBeDisabled()
  })
})
