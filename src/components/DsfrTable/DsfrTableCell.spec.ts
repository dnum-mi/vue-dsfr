import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import DsfrTableCell from './DsfrTableCell.vue'
import DsfrTag from '../DsfrTag/DsfrTag.vue'

import { spy } from '../../../tests/unit/test-utils.js'

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

  it('should render a cell with a html component', () => {
    // Given
    const field = {
      component: 'a',
      text: 'Vers la page d’accueil',
      href: '/',
      'aria-label': 'Vers la page d’accueil',
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
    const a = tdEl.querySelector('a')
    expect(a).toContainHTML(field.text)
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
    const onClick = spy()

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
