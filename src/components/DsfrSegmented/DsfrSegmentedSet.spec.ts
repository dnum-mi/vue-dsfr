import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import SegmentedSet from './DsfrSegmentedSet.vue'

describe('DsfrSegmentedSet', () => {
  it('should render a set of simple segmented with label in div', () => {
    // Given
    const legend = 'Légende pour l’ensemble des champs'
    const selectedValue = 1

    // When
    const { getByText, getByRole } = render(SegmentedSet, {
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

    getByRole('group')
    const legendEl = getByText(legend)

    // Then
    expect(legendEl).toBeInTheDocument()
  })

  it('should render a set of segmented with label in div', async () => {
    // Given
    const legend = 'Légende pour l’ensemble des champs'
    const disabledLabel = 'Label 2'
    const disabledValue = 2
    const selectedLabel = 'Label 1'
    const selectedValue = 1
    const toClickLabel = 'Label 3'
    const options = [
      {
        label: selectedLabel,
        value: selectedValue,
        disabled: false,
      },
      {
        label: disabledLabel,
        value: disabledValue,
        disabled: true,
      },
      {
        label: toClickLabel,
        value: 3,
        disabled: false,
      },
    ]

    // When
    const { getByText, getByDisplayValue } = render(SegmentedSet, {
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
    const selectedSegmented = getByDisplayValue(selectedValue)
    const uncheckedSegmented = getByDisplayValue(3)

    await fireEvent.click(uncheckedSegmented)

    // Then
    expect(legendEl).toBeInTheDocument()
    expect(disabledInput).toBeDisabled()
    expect(selectedSegmented).not.toBeDisabled()
    expect(selectedSegmented).not.toBeChecked()
    expect(uncheckedSegmented).toBeChecked()
  })
})
