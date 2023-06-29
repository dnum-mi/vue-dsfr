import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'

import DsfrSelect from './DsfrSelect.vue'

describe('DsfrSelect', () => {
  it('should render an empty select', async () => {
    const defaultOptionLabel = 'Sélectionnez une option'

    const { container, getByText } = render(DsfrSelect, {
    })

    const defaultOption = getByText(defaultOptionLabel)
    const selectEl = container.querySelector('select')

    expect(defaultOption.selected).toBe(true)
    expect(selectEl.querySelectorAll('option')).toHaveLength(1)
  })

  it('should render a select', async () => {
    const defaultOptionLabel = 'Sélectionnez une option'
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
})
