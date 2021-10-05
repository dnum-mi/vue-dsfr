import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrButtonGroup', () => {
  it('should mount DsfrButtonGroup with content', async () => {
    // Given
    const labelPrimary = 'Button primary'
    const labelSecondary = 'Button secondary'
    const onClickFirst = jest.fn()
    const onClickSecond = jest.fn()
    const buttonsProps = [
      {
        label: labelPrimary,
        onclick: onClickFirst,
      },
      {
        label: labelSecondary,
        secondary: true,
        onclick: onClickSecond,
      },
    ]

    // When
    const { getByText, getByTestId } = render(DsfrButtonGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        class: 'extra-class',
        buttons: buttonsProps,
      },
    })

    const wrapper = getByTestId('fr-btns')
    const firstButtonSpan = getByText(labelPrimary)
    const secondButtonSpan = getByText(labelSecondary)

    await fireEvent.click(firstButtonSpan)
    await fireEvent.click(secondButtonSpan)

    // Then
    expect(firstButtonSpan.parentNode).not.toHaveClass('fr-btn--secondary')
    expect(secondButtonSpan.parentNode).toHaveClass('fr-btn--secondary')
    expect(wrapper).toHaveClass('extra-class')
    expect(wrapper).not.toHaveClass('fr-btns-group--right')
    expect(wrapper).not.toHaveClass('fr-btns-group--inline-sm')
    expect(onClickFirst).toHaveBeenCalled()
    expect(onClickSecond).toHaveBeenCalled()
  })

  it('should mount small DsfrButtonGroup right-aligned content', async () => {
    // Given
    const size = 'small'
    const align = 'right'

    // When
    const { getByTestId } = render(DsfrButtonGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        class: 'extra-class',
        size,
        align,
      },
    })

    const wrapper = getByTestId('fr-btns')

    // Then
    expect(wrapper).toHaveClass('extra-class')
    expect(wrapper).toHaveClass('fr-btns-group--right')
    expect(wrapper).toHaveClass('fr-btns-group--inline-sm')
  })
})
