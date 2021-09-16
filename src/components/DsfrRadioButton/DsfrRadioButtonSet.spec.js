import { render } from '@testing-library/vue'

import RadioButtonSet from './DsfrRadioButtonSet.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrRadioButtonSet', () => {
  it('should render a set of radio buttons with label in div', () => {
    // Given
    const legend = 'Légende pour l’ensemble des champs'
    const disabledLabel = 'Label 2'
    const disabledValue = 2
    const selectedLabel = 'Label 1'
    const selectedValue = 1
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
        label: 'Label 3',
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
        options,
        legend,
        modelValue: selectedValue,
      },
    })

    const legendEl = getByText(legend)
    const disabledInput = getByDisplayValue(disabledValue)
    const selectedRadioButton = getByDisplayValue(selectedValue)
    const uncheckedRadioButton = getByDisplayValue(3)

    // Then
    expect(legendEl).toBeInTheDocument()
    expect(disabledInput).toBeDisabled()
    expect(selectedRadioButton).not.toBeDisabled()
    expect(selectedRadioButton).toBeChecked()
    expect(uncheckedRadioButton).not.toBeChecked()
  })
})
