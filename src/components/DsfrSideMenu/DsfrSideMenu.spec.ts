import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

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
    // le premier enfant de navEl est un div avec la classe 'fr-sidemenu__inner'
    expect(navEl.firstElementChild).toHaveClass('fr-sidemenu__inner')
    // l’enfant suivant doit être un bouton qui doit avoir la classe 'fr-sidemenu__btn'
    const buttonEl = getByText('Dans cette rubrique')
    expect(buttonEl.tagName).toBe('BUTTON')
    expect(buttonEl).toHaveClass('fr-sidemenu__btn')
    const sideMenuWrapper = buttonEl.nextElementSibling
    expect(buttonEl).toHaveAttribute('aria-controls', sideMenuWrapper?.id)
    expect(buttonEl).toHaveAttribute('aria-expanded', 'false')

    expect(sideMenuWrapper).toHaveClass('fr-collapse')
    expect(sideMenuWrapper?.firstElementChild).toHaveClass('fr-sidemenu__title')
    expect(sideMenuWrapper?.firstElementChild).toContainHTML(headingTitle)
  })

  it('expand/collapse when button is clicked', async () => {
    const headingTitle = 'Titre de la rubrique'
    const menuItems = [
      {
        id: '11',
        to: '/rubrique-1',
        text: 'Premier titre de niveau 1',
      },
      {
        id: '12',
        text: 'Deuxième titre de niveau 1',
        active: true,
        menuItems: [
          {
            id: '21',
            to: '/rubrique-2/sous-rubrique-1',
            text: 'Premier titre de niveau 2',
          },
          {
            id: '22',
            text: 'Deuxième titre de niveau 2',
            active: true,
            menuItems: [
              {
                id: '31',
                to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1',
                text: 'Premier titre de niveau 3',
              },
              {
                id: '32',
                to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2',
                text: 'Deuxième titre de niveau 3',
                active: true,
              },
            ],
          },
        ],
      },
    ]
    const wrapper = mount(DsfrSideMenu, {
      props: {
        id: 'id',
        headingTitle,
        menuItems,
      },
    })

    const buttonEl = wrapper.find('[aria-controls="22"]')
    const sideMenuWrapper = wrapper.find('[id="22"]')

    await buttonEl.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 300))
    expect(buttonEl.attributes()['aria-expanded']).toEqual('true')

    expect(sideMenuWrapper.classes()).toContain('fr-collapse--expanded')

    await buttonEl.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 300))
    expect(sideMenuWrapper.classes()).not.toContain('fr-collapse--expanded')

    await buttonEl.trigger('click')
    await new Promise((resolve) => setTimeout(resolve, 300))
    expect(sideMenuWrapper.classes()).toContain('fr-collapse--expanded')
  })
})
