import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import RadioButtonSet from './DsfrRadioButtonSet.vue'

describe('DsfrRadioButtonSet', () => {
  it('should render a set of radio buttons with label in div', () => {
    // Given
    const legend = 'Légende pour l’ensemble des champs'
    const selectedValue = 1

    // When
    const { getByText, getByRole } = render(RadioButtonSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend,
        modelValue: selectedValue,
      },
    })

    getByRole('radiogroup')
    const legendEl = getByText(legend)

    // Then
    expect(legendEl).toBeInTheDocument()
  })

  it('should render a set of radio buttons with label in div', async () => {
    // Given
    const legend = 'Légende pour l’ensemble des champs'
    const disabledLabel = 'Label 2'
    const disabledValue = 2
    const selectedLabel = 'Label 1'
    const selectedValue = 1
    const toClickLabel = 'Label 3'
    const errorMessage = 'Message d’erreur'
    const options = [
      {
        label: selectedLabel,
        value: selectedValue,
        hint: 'Indice 1',
        disabled: false,
      },
      {
        label: disabledLabel,
        value: disabledValue,
        hint: 'Indice 2',
        disabled: true,
      },
      {
        label: toClickLabel,
        value: 3,
        hint: 'Indice 3',
        disabled: false,
      },
    ]

    // When
    const { getByText, getByDisplayValue } = render(RadioButtonSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        errorMessage,
        options,
        legend,
        modelValue: selectedValue,
      },
    })

    const legendEl = getByText(legend)
    const disabledInput = getByDisplayValue(disabledValue)
    const selectedRadioButton = getByDisplayValue(selectedValue)
    const uncheckedRadioButton = getByDisplayValue(3)

    await fireEvent.click(uncheckedRadioButton)

    // Then
    expect(legendEl).toBeInTheDocument()
    expect(disabledInput).toBeDisabled()
    expect(selectedRadioButton).not.toBeDisabled()
    expect(selectedRadioButton).not.toBeChecked()
    expect(uncheckedRadioButton).toBeChecked()
  })
})
