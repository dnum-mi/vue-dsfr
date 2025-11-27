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
})
