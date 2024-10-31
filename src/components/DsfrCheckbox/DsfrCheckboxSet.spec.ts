import { fireEvent, render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

describe('DsfrCheckboxSet', () => {
  it('should render a simple group of checkboxes in fieldset', () => {
    // Given
    const firstLabelText = 'Premier label'
    const firstHintText = 'Premier indice'
    const secondLabelText = 'Deuxième label'
    const secondHintText = 'Deuxième indice'
    const thirdLabelText = 'Troisième label'
    const thirdHintText = 'Troisième indice'
    const modelValue = []
    const options = [
      {
        id: '1',
        label: firstLabelText,
        value: 'un',
        hint: firstHintText,
        modelValue,
        name: '1',
      },
      {
        id: '2',
        label: secondLabelText,
        value: 'deux',
        hint: secondHintText,
        modelValue,
        name: '2',
      },
      {
        id: '3',
        label: thirdLabelText,
        value: 'trois',
        hint: thirdHintText,
        modelValue,
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
    const modelValue = ['name2']

    const options = [
      {
        id: '1',
        name: 'name1',
        value: 'name1',
        label: firstLabelText,
        hint: firstHintText,
      },
      {
        id: '2',
        name: 'name2',
        value: 'name2',
        label: secondLabelText,
        hint: secondHintText,
      },
      {
        id: '3',
        name: 'name3',
        value: 'name3',
        label: thirdLabelText,
        hint: thirdHintText,
      },
    ]
    const legendText = 'Légende de l’ensemble des champs'

    // When
    const { getByText, getByLabelText, getByTestId } = render(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend: legendText,
        options,
        modelValue,
        validMessage: 'Message d’erreur',
      },
    })

    const firstLabelEl = getByText(firstLabelText)
    const secondLabelEl = getByText(secondLabelText)
    const thirdLabelEl = getByText(`${thirdLabelText}`)
    const thirdInput = getByLabelText(`${thirdLabelText} ${thirdHintText}`)
    const firstInput = getByTestId('input-checkbox-1')
    const secondInput = getByTestId('input-checkbox-2')
    // @ts-expect-error This is a checkbox input event, so `checked` property is present
    expect((firstInput).checked).toBe(false)
    // @ts-expect-error This is a checkbox input event, so `checked` property is present
    expect(secondInput.checked).toBe(true)
    await fireEvent.click(firstLabelEl)
    await fireEvent.click(secondLabelEl)
    await fireEvent.click(thirdLabelEl)

    // Then
    expect(firstInput).toBeInTheDocument()
    expect(firstInput).toHaveAttribute('name', 'name1')
    expect(secondInput).toHaveAttribute('name', 'name2')
    // @ts-expect-error This is a checkbox input event, so `checked` property is present
    expect((firstInput).checked).toBe(true)
    // @ts-expect-error This is a checkbox input event, so `checked` property is present
    expect(secondInput.checked).toBe(false)
    expect(thirdInput.checked).toBe(true)
  })

  it('should render no checkboxes', async () => {
    // Given
    const legend = 'Le titre des checkboxes'
    // When
    const { getByText } = render(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend,
      },
    })
    const legendEl = getByText(legend)

    // Then
    expect(legendEl.nextElementSibling).toBe(null)
  })
})
