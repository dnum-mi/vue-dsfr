import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'
import { spy } from '../../../tests/unit/test-utils.js'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

describe('DsfrButtonGroup', () => {
  it('should mount DsfrButtonGroup with content', async () => {
    // Given
    const labelPrimary = 'Button primary'
    const labelSecondary = 'Button secondary'
    const onClickFirst = spy()
    const onClickSecond = spy()
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
    expect(wrapper).not.toHaveClass('fr-btns-group--sm')
    expect(onClickFirst.mock.calls.length).toBe(1)
    expect(onClickSecond.mock.calls.length).toBe(1)
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
    expect(wrapper).toHaveClass('fr-btns-group--sm')
  })
})
