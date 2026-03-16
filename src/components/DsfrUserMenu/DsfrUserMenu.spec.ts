import { fireEvent, render } from '@testing-library/vue'

import DsfrUserMenu from './DsfrUserMenu.vue'

describe('DsfrUserMenu', () => {
  // Tests de rendu de base
  it('renders the base navigation element', () => {
    const { container } = render(DsfrUserMenu, {
      props: { id: 'test-menu' },
    })
    expect(container.querySelector('nav')).toBeTruthy()
  })

  it('uses default props', () => {
    const { getByText } = render(DsfrUserMenu)
    // le bouton de connexion non connecté devrait exister
    expect(getByText('Me connecter')).toBeTruthy()
  })
})
// Tests état non connecté
describe('when not connected', () => {
  it('displays the unconnected button with correct label', () => {
    const { getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: false,
        unconnectedLabel: 'Connexion',
      },
    })
    expect(getByText('Connexion')).toBeTruthy()
  })

  it('does not display the menu', () => {
    const { container } = render(DsfrUserMenu, {
      props: { isConnected: false },
    })
    const menu = container.querySelector('.usermenu__menu')
    expect(menu).toBeFalsy()
  })
})

// Tests état connecté
describe('when connected', () => {
  it('displays the connected button with correct label', () => {
    const { getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        connectedLabel: 'Mon espace',
      },
    })
    expect(getByText('Mon espace')).toBeTruthy()
  })

  it('displays user info when hasUserInfo is true', () => {
    const { getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        userLabel: 'Jean Dupont',
        userInfo: 'jean@example.com',
        hasUserInfo: true,
      },
    })
    expect(getByText('Jean Dupont')).toBeTruthy()
    expect(getByText('jean@example.com')).toBeTruthy()
  })

  it('does not display user info when hasUserInfo is false', () => {
    const { queryByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        userLabel: 'Jean Dupont',
        userInfo: 'jean@example.com',
        hasUserInfo: false,
      },
    })
    expect(queryByText('jean@example.com')).toBeFalsy()
  })
})

// Tests des liens du menu
describe('menu links', () => {
  it('displays all provided links', () => {
    const { getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        links: [
          { text: 'Profil', to: '/profile' },
          { text: 'Paramètres', to: '/settings' },
          { text: 'Aide', to: '/help' },
        ],
      },
    })
    expect(getByText('Profil')).toBeTruthy()
    expect(getByText('Paramètres')).toBeTruthy()
    expect(getByText('Aide')).toBeTruthy()
  })

  it('has correct href on links', () => {
    const { container } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        links: [
          { text: 'Profil', to: '/profile' },
        ],
      },
    })
    const link = container.querySelector('a[href="/profile"]')
    expect(link).toBeTruthy()
  })

  it('closes menu when a link is clicked', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        links: [
          { text: 'Profil', to: '/profile' },
        ],
      },
    })

    // Ouvrir le menu
    const button = getByText('Mon espace')
    await fireEvent.click(button)
    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être expanded
    let menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).toHaveClass('fr-collapse--expanded')

    // Cliquer sur le lien
    const link = getByText('Profil')
    await fireEvent.click(link)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être fermé
    menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).not.toHaveClass('fr-collapse--expanded')
  })
})

// Tests du bouton de déconnexion
describe('disconnect button', () => {
  it('displays disconnect button when hasDisconnectButton is true', () => {
    const { getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        hasDisconnectButton: true,
        disconnectButtonLabel: 'Déconnexion',
      },
    })
    expect(getByText('Déconnexion')).toBeTruthy()
  })

  it('does not display disconnect button when hasDisconnectButton is false', () => {
    const { queryByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        hasDisconnectButton: false,
        disconnectButtonLabel: 'Déconnexion',
      },
    })
    expect(queryByText('Déconnexion')).toBeFalsy()
  })

  it('emits disconnect event when button is clicked', async () => {
    const { getByText, emitted } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        hasDisconnectButton: true,
      },
    })

    const button = getByText('Me déconnecter')
    await fireEvent.click(button)

    expect(emitted().disconnect).toBeTruthy()
    expect(emitted().disconnect).toHaveLength(1)
  })

  it('closes menu when disconnect button is clicked', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        hasDisconnectButton: true,
      },
    })

    // Ouvrir le menu
    const connectedButton = getByText('Mon espace')
    await fireEvent.click(connectedButton)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être expanded
    let menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse--expanded')

    // Cliquer sur déconnexion
    const disconnectButton = getByText('Me déconnecter')
    await fireEvent.click(disconnectButton)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être fermé
    menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).not.toHaveClass('fr-collapse--expanded')
  })
})

// Tests du toggle du menu
describe('menu toggle', () => {
  it('opens menu when connected button is clicked', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
      },
    })

    const button = getByText('Mon espace')
    await fireEvent.click(button)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    const menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).toHaveClass('fr-collapse--expanded')
  })

  it('closes menu when clicking outside', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
      },
    })

    // Ouvrir le menu
    const button = getByText('Mon espace')
    await fireEvent.click(button)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    let menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).toHaveClass('fr-collapse--expanded')

    // Cliquer en dehors
    await fireEvent.click(document.body)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être fermé
    menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).not.toHaveClass('fr-collapse--expanded')
  })

  it('closes menu when Escape key is pressed', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
      },
    })

    // Ouvrir le menu
    const button = getByText('Mon espace')
    await fireEvent.click(button)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    let menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).toHaveClass('fr-collapse--expanded')

    // Appuyer sur Escape
    await fireEvent.keyDown(document, { key: 'Escape', code: 'Escape', charCode: 27 })

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    // Menu devrait être fermé
    menu = container.querySelector('.usermenu__menu')
    expect(menu).toHaveClass('fr-collapse')
    expect(menu).not.toHaveClass('fr-collapse--expanded')
  })
})

// Tests ARIA et accessibilité
describe('accessibility', () => {
  it('has aria-controls on connected button', () => {
    const { container } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        id: 'user-menu-123',
      },
    })

    const button = container.querySelector('[aria-controls]')
    expect(button).toBeTruthy()
    expect(button?.getAttribute('aria-controls')).toBe('user-menu-123-menu')
  })

  it('has aria-expanded attribute that reflects menu state', async () => {
    const { container, getByText } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
      },
    })

    const button = container.querySelector('[aria-expanded]')
    expect(button?.getAttribute('aria-expanded')).toBe('false')

    await fireEvent.click(getByText('Mon espace'))

    expect(button?.getAttribute('aria-expanded')).toBe('true')
  })

  it('has proper id attributes for menu and buttons', () => {
    const { container } = render(DsfrUserMenu, {
      props: {
        isConnected: true,
        id: 'test-menu',
      },
    })

    expect(container.querySelector('#test-menu-menu')).toBeTruthy()
    expect(container.querySelector('#test-menu-connected-button')).toBeTruthy()
  })
})
