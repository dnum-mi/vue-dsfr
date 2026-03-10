import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import DsfrUserMenu from './DsfrUserMenu.vue'

describe('DsfrUserMenu', () => {
  it('renders the base navigation element', () => {
    const { container } = render(DsfrUserMenu, {
      props: { id: 'test-menu' },
    })
    expect(container.querySelector('nav')).toBeTruthy()
  })

  it('use default props', () => {
    const { getByText } = render(DsfrUserMenu)
    // le bouton de connexion non connecté devrait exister
    expect(getByText('Me connecter')).toBeTruthy()
  })
})
