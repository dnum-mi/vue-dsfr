import { render } from '@testing-library/vue'

import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'

describe('DsfrNavigationMenuItem', () => {
  it('should render a navigation item', () => {
    const content = 'Contenu d’un item de menu de navigation'

    const { getByText } = render(DsfrNavigationMenuItem, {
      slots: {
        default: content,
      },
    })

    const liEl = getByText(content)

    expect(liEl).toHaveClass('fr-menu__item')
    expect(liEl).not.toHaveClass('fr-menu__item--active')
    expect(liEl).toHaveAttribute('id')
  })
})
