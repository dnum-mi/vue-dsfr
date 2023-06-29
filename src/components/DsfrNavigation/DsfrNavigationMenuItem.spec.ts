import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

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
    expect(liEl).not.toHaveAttribute('aria-current')
    expect(liEl).toHaveAttribute('id')
  })

  it('should render an active navigation item', () => {
    const content = 'Contenu d’un item de menu de navigation'

    const { getByText } = render(DsfrNavigationMenuItem, {
      props: {
        active: true,
      },
      slots: {
        default: content,
      },
    })

    const liEl = getByText(content)

    expect(liEl).toHaveClass('fr-menu__item')
    expect(liEl).toHaveAttribute('aria-current', 'page')
    expect(liEl).toHaveAttribute('id')
  })
})
