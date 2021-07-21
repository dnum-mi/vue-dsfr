import { fireEvent, render } from '@testing-library/vue'

import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

describe('DsfrCheckboxSet', () => {
  it('should render a group of checkboxes in fieldset', () => {
    // Given
    const firstLabelText = 'Premier label'
    const firstHintText = 'Premier indice'
    const secondLabelText = 'Deuxième label'
    const secondHintText = 'Deuxième indice'
    const thirdLabelText = 'Troisième label'
    const thirdHintText = 'Troisième indice'
    const options = [
      {
        id: '1',
        label: firstLabelText,
        checked: false,
        hint: firstHintText,
      },
      {
        id: '2',
        label: secondLabelText,
        checked: false,
        hint: secondHintText,
      },
      {
        id: '3',
        label: thirdLabelText,
        checked: false,
        hint: thirdHintText,
      },
    ]
    const legendText = "Légende de l'ensemble des champs"

    // When
    const { getByText, getAllByTestId } = render(DsfrCheckboxSet, {
      props: {
        legend: legendText,
        options,
      },
    })

    // Then
    expect(getByText(firstLabelText)).toBeInTheDocument()
    expect(getAllByTestId('t-checkbox')).toHaveLength(3)
  })
  it('should render a group of checkboxes in fieldset', async () => {
    // Given
    const firstLabelText = 'Premier label'
    const firstHintText = 'Premier indice'
    const secondLabelText = 'Deuxième label'
    const secondHintText = 'Deuxième indice'
    const thirdLabelText = 'Troisième label'
    const thirdHintText = 'Troisième indice'
    const options = [
      {
        id: '1',
        name: 'name1',
        label: firstLabelText,
        checked: false,
        hint: firstHintText,
      },
      {
        id: '2',
        name: 'name2',
        label: secondLabelText,
        checked: false,
        hint: secondHintText,
      },
      {
        id: '3',
        name: 'name3',
        label: thirdLabelText,
        checked: false,
        hint: thirdHintText,
      },
    ]
    const legendText = "Légende de l'ensemble des champs"

    // When
    const { getByText, getByTestId } = render(DsfrCheckboxSet, {
      props: {
        legend: legendText,
        options,
      },
    })
    await fireEvent(
      getByText(firstLabelText),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    // Then
    expect(getByTestId('input-checkbox-1')).toBeInTheDocument()
    expect(getByTestId('input-checkbox-1')).toHaveAttribute('name', 'name1')
    expect(getByTestId('input-checkbox-1')).toHaveAttribute('checked')
  })
})
