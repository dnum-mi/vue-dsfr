import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrButtonGroup', () => {
  it('should mount DsfrButtonGroup with right content', async () => {
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
    expect(onClickFirst).toHaveBeenCalled()
    expect(onClickSecond).toHaveBeenCalled()
  })
})
