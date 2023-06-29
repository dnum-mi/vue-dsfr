import { render } from '@testing-library/vue'

import DsfrSideMenu from './DsfrSideMenu.vue'

describe('DsfrSideMenu', () => {
  it('should render a DsfrSideMenu component', () => {
    const headingTitle = 'Titre de la rubrique'

    const { getByRole, getByText } = render(DsfrSideMenu, {
      props: {
        id: 'id',
        headingTitle,
      },
    })
    // Il y a un élément 'nav' avec un rôle 'navigation'
    // dont l’attribut 'aria-label' est "Menu latéral"
    const navEl = getByRole('navigation')
    expect(navEl.tagName).toBe('NAV')
    expect(navEl).toHaveAttribute('aria-labelledby')
    // e premier enfant de navEl est un div avec la classe 'fr-sidemenu__inner'
    expect(navEl.firstElementChild).toHaveClass('fr-sidemenu__inner')
    // l’enfant suivant doit être un bouton qui doit avoir la classe 'fr-sidemenu__btn'
    const buttonEl = getByText('Dans cette rubrique')
    expect(buttonEl.tagName).toBe('BUTTON')
    expect(buttonEl).toHaveClass('fr-sidemenu__btn')
    const sideMenuWrapper = buttonEl.nextElementSibling
    expect(buttonEl).toHaveAttribute('aria-controls', sideMenuWrapper.id)
    expect(sideMenuWrapper).toHaveClass('fr-collapse')
    expect(sideMenuWrapper.firstElementChild).toHaveClass('fr-sidemenu__title')
    expect(sideMenuWrapper.firstElementChild).toContainHTML(headingTitle)
  })
})
