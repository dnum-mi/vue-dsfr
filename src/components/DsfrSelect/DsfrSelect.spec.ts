import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'

import DsfrSelect from './DsfrSelect.vue'

describe('DsfrSelect', () => {
  it('should render an empty select', async () => {
    const defaultOptionLabel = 'Sélectionner une option'

    const { container, getByText } = render(DsfrSelect, {
    })

    const defaultOption = getByText(defaultOptionLabel)
    const selectEl = container.querySelector('select')

    expect(defaultOption.selected).toBe(true)
    expect(selectEl.querySelectorAll('option')).toHaveLength(1)
  })

  it('should render a select', async () => {
    const defaultOptionLabel = 'Sélectionner une option'
    const firstOptionLabel = 'Option 1'
    const secondOptionLabel = 'Option 2'
    const selectId = 'select-id'
    const options = [
      firstOptionLabel,
      secondOptionLabel,
      'Option 3',
      'Option 4',
      'Option 5',
      'Option 6',
    ]

    const { container, getByText } = render(DsfrSelect, {
      props: {
        options,
        modelValue: undefined,
        selectId,
      },
    })

    const defaultOption = getByText(defaultOptionLabel)
    const firstOption = getByText(firstOptionLabel)
    const secondOption = getByText(secondOptionLabel)
    const selectEl = container.querySelector(`#${selectId}`)

    await userEvent.selectOptions(selectEl, [secondOption])

    expect(defaultOption.selected).toBe(false)
    expect(firstOption.selected).toBe(false)
    expect(secondOption.selected).toBe(true)
  })

  it('Should disable Options 2 and 5', async () => {
    const options = [{
      text: 'Option 1',
      value: 1,
    }, {
      text: 'Option 2',
      value: 2,
      disabled: true,
    }, {
      text: 'Option 3',
      value: 3,
      disabled: false,
    }, {
      text: 'Option 4',
      value: 4,
    }, {
      text: 'Option 5',
      value: 5,
      disabled: true,
    }, {
      text: 'Option 6',
      value: 6,
    }]
    const selectId = 'select-id'

    const { getByText } = render(DsfrSelect, {
      props: {
        options,
        modelValue: undefined,
        selectId,
      },
    })

    options.forEach((option) => {
      const element = getByText(option.text)
      const activeState = option.disabled !== undefined ? option.disabled : false
      expect(element.disabled).toBe(activeState)
    })
  })
  it('should render optgroup', async () => {
    const optionGroups = [
      {
        label: 'groupe 1',
        disabled: true,
        options: [
          { value: 'Value 1', text: 'Text 1' },
          { value: 'Value 2', text: 'Text 2' },
        ],
      },
      {
        label: 'groupe 2',
        options: [
          { value: 'Value 3', text: 'Text 3' },
          { value: 'Value 4', text: 'Text 4', disabled: true },
          { value: 'Value 5', text: 'Text 5' },
        ],
      },
    ]
    const selectId = 'select-id'
    const { container, getByText } = render(DsfrSelect, {
      props: {
        optionGroups,
        modelValue: undefined,
        selectId,
      },
    })
    const selectEl = container.querySelector('select')

    const optGroupEls = selectEl.querySelectorAll('optgroup')
    const optionEl1 = getByText('Text 1')
    const optionEl2 = getByText('Text 2')
    const optionEl3 = getByText('Text 3')
    const optionEl4 = getByText('Text 4')

    expect(optGroupEls[0].disabled).toBe(true)
    expect(optGroupEls[0].ariaDisabled).toBe('true')

    expect(optionEl1?.ariaDisabled).toBe('true')
    expect(optionEl2?.ariaDisabled).toBe('true')

    expect(optGroupEls[1].disabled).toBe(false)
    expect(optGroupEls[1].ariaDisabled).toBe('false')

    expect(optionEl3?.ariaDisabled).toBe('false')
    expect(optionEl4?.ariaDisabled).toBe('true')
    expect(optionEl4.disabled).toBe(true)
  })
  it('should link the error message to the select', () => {
    const errorMessage = 'Veuillez choisir une option'

    const { container, getByText } = render(DsfrSelect, {
      props: {
        selectId: 'pays',
        errorMessage,
      },
    })

    const selectEl = container.querySelector('select')
    const messageEl = getByText(errorMessage)
    const messagesGroupEl = container.querySelector('.fr-messages-group')

    expect(messageEl).toHaveAttribute('id', 'pays-message-error')
    expect(messagesGroupEl).toHaveAttribute('id', 'pays-messages')
    expect(messagesGroupEl).toHaveAttribute('aria-live', 'polite')
    expect(messagesGroupEl).toContainElement(messageEl)
    expect(container.querySelector('.fr-select-group')).toContainElement(messagesGroupEl as HTMLElement)
    expect(selectEl).toHaveAttribute('aria-describedby', 'pays-messages')
    expect(selectEl).toHaveAttribute('aria-invalid', 'true')
  })

  it('should give distinct message ids to several selects in error', () => {
    const { container } = render({
      components: { DsfrSelect },
      template: `
        <DsfrSelect error-message="Erreur 1" />
        <DsfrSelect error-message="Erreur 2" />
      `,
    })

    const ids = Array.from(container.querySelectorAll('.fr-error-text')).map(el => el.id)

    expect(ids).toHaveLength(2)
    expect(ids[0]).not.toBe(ids[1])
  })

  it('should keep the provided aria-describedby and descriptionId', () => {
    const { container } = render(DsfrSelect, {
      props: {
        selectId: 'pays',
        descriptionId: 'aide-pays',
        errorMessage: 'Erreur',
      },
      attrs: {
        'aria-describedby': 'info-externe',
      },
    })

    expect(container.querySelector('select')).toHaveAttribute('aria-describedby', 'info-externe aide-pays pays-messages')
  })

  it('should not set aria-invalid when the select is not in error', () => {
    const { container } = render(DsfrSelect, {
      props: {
        selectId: 'pays',
        successMessage: 'C’est bon',
      },
    })

    const selectEl = container.querySelector('select')

    expect(selectEl).not.toHaveAttribute('aria-invalid')
    expect(container.querySelector('#pays-message-valid')).toHaveTextContent('C’est bon')
  })
  it('should keep an explicit aria-invalid attribute when the select is not in error', () => {
    const { container } = render(DsfrSelect, {
      attrs: {
        'aria-invalid': 'true',
      },
    })

    expect(container.querySelector('select')).toHaveAttribute('aria-invalid', 'true')
  })
})
