import { fireEvent, render } from '@testing-library/vue'

import DsfrTableCell from './DsfrTableCell.vue'
import DsfrTag from '../DsfrTag/DsfrTag.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTableCell', () => {
  it('should render simple cell', () => {
    // Given
    const field = 'Cell content'

    // When
    const { container } = render(DsfrTableCell, {
      global: {
        component: {
          VIcon,
        },
      },
      props: {
        field,
      },
    })

    // Then
    const tdEl = container.querySelector('td')

    expect(tdEl).toContainHTML(field)
  })

  it('should render a cell with a component', () => {
    // Given
    const label = 'Label de l’étiquette'
    const field = {
      component: 'DsfrTag',
      label,
    }

    // When
    const { container } = render(DsfrTableCell, {
      global: {
        components: {
          DsfrTag,
          VIcon,
        },
      },
      props: {
        field,
      },
    })

    // Then
    const tdEl = container.querySelector('td')
    const tagEl = tdEl.querySelector('.fr-tag')
    expect(tagEl).toContainHTML(label)
  })

  it('should render a cell with an onClick', async () => {
    // Given
    const field = 'Contenu'
    const onClick = jest.fn()

    // When
    const { container } = render(DsfrTableCell, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        field,
        cellAttrs: {
          onClick,
        },
      },
    })

    const tdEl = container.querySelector('td')

    await fireEvent.click(tdEl)
    await fireEvent.click(tdEl)

    // Then
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})
