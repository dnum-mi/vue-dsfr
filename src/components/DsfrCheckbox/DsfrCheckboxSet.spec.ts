import { OhVueIcon as VIcon } from 'oh-vue-icons'
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
        name: '1',
      },
      {
        id: '2',
        label: secondLabelText,
        checked: false,
        hint: secondHintText,
        name: '2',
      },
      {
        id: '3',
        label: thirdLabelText,
        checked: false,
        hint: thirdHintText,
        name: '3',
      },
    ]
    const legendText = 'Légende de l’ensemble des champs'

    // When
    const { getByText, container } = render(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend: legendText,
        errorMessage: 'Message d’erreur',
        options,
      },
    })

    // Then
    expect(getByText(firstLabelText)).toBeInTheDocument()
    expect(container.querySelectorAll('.fr-checkbox-group')).toHaveLength(3)
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
        hint: firstHintText,
      },
      {
        id: '2',
        name: 'name2',
        label: secondLabelText,
        hint: secondHintText,
      },
      {
        id: '3',
        name: 'name3',
        label: thirdLabelText,
        hint: thirdHintText,
      },
    ]
    const legendText = 'Légende de l’ensemble des champs'

    // When
    const { getByText, getByTestId } = render(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend: legendText,
        options,
        validMessage: 'Message d’erreur',
        modelValue: ['name3'],
      },
    })

    const firstLabelEl = getByText(firstLabelText)
    const secondLabelEl = getByText(secondLabelText)
    const firstInput = getByTestId('input-checkbox-1')
    const secondInput = getByTestId('input-checkbox-2')
    await fireEvent.click(firstLabelEl)
    await fireEvent.click(secondLabelEl)
    await fireEvent.click(secondLabelEl)

    // Then
    expect(firstInput).toBeInTheDocument()
    expect(firstInput).toHaveAttribute('name', 'name1')
    // @ts-ignore This is a checkbox input event, so `checked` property is present
    expect((firstInput).checked).toBe(true)
    // @ts-ignore This is a checkbox input event, so `checked` property is present
    expect(secondInput.checked).toBe(false)
  })

  it('should render no checkboxes', async () => {
    // Given
    // When
    const { container } = render(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
      },
    })
    const checkboxes = container.querySelector('.fr-fieldset__content')

    // Then
    expect(checkboxes.firstElementChild).toBe(null)
  })
})
