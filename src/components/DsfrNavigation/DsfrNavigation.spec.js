import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import { spy } from '@tests/unit/test-utils.js'

import DsfrNavigation from './DsfrNavigation.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    name: 'Home',
    component: { template: '<div />' },
  }],
})

const secondMenuTitle = 'Menu déroulant'
const megaMenuTitle = 'Mega Menu déroulant'

const navItems = [
  {
    to: '#essai',
    text: 'Accès direct',
  },
  {
    title: secondMenuTitle,
    links: [
      {
        text: 'Lien 1',
        to: '/',
      },
      {
        text: 'Lien 2',
        to: '/',
      },
      {
        text: 'Lien 3',
        to: '/',
      },
      {
        text: 'Lien 4',
        to: '/',
      },
      {
        text: 'Lien 5',
        to: '/',
      },
    ],
  },
  {
    title: megaMenuTitle,
    link: {
      to: '/',
      text: 'Voir toute la rubrique',
    },
    menus: [
      {
        title: 'Nom de catégorie',
        links: [
          {
            text: 'Lien 1',
            to: '/',
          },
          {
            text: 'Lien 2',
            to: '/',
          },
          {
            text: 'Lien 3',
            to: '/',
          },
          {
            text: 'Lien 4',
            to: '/',
          },
          {
            text: 'Lien 5',
            to: '/',
          },
        ],
      },
      {
        title: 'Nom de catégorie',
        links: [
          {
            text: 'Lien 1',
            to: '/',
          },
          {
            text: 'Lien 2',
            to: '/',
          },
          {
            text: 'Lien 3',
            to: '/',
          },
          {
            text: 'Lien 4',
            to: '/',
          },
          {
            text: 'Lien 5',
            to: '/',
          },
        ],
      },
      {
        title: 'Nom de catégorie',
        links: [
          {
            text: 'Lien 1',
            to: '/',
          },
          {
            text: 'Lien 2',
            to: '/',
          },
          {
            text: 'Lien 3',
            to: '/',
          },
          {
            text: 'Lien 4',
            to: '/',
          },
          {
            text: 'Lien 5',
            to: '/',
          },
        ],
      },
    ],
  },
]

describe('DsfrNavigation', () => {
  it('should render navigation menu', async () => {
    const { getByRole } = render(DsfrNavigation, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        navItems,
      },
    })

    await router.isReady()

    const navEl = getByRole('navigation')

    expect(navEl).toHaveClass('fr-nav')
    expect(navEl).toHaveAttribute('aria-label', 'Menu principal')
  })

  it('should render navigation menu and expand menu on click', async () => {
    const label = 'Navigation ppale'
    const menuItemText = 'menu item text'

    const mySpy = spy()
    navItems[1].links[0].onClick = mySpy
    navItems[1].links[0].text = menuItemText

    const { getByText, getAllByText, getByRole, getByTestId } = render(DsfrNavigation, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        navItems,
        label,
      },
    })

    await router.isReady()

    const menuContainer = getByTestId('navigation-menu')
    const menu = getByText(secondMenuTitle)
    const megaMenu = getAllByText(megaMenuTitle)[0]
    const menuItemEl = getByText(menuItemText)

    const navEl = getByRole('navigation')

    expect(menuContainer).not.toHaveClass('fr-collapse--expanded')

    await fireEvent.click(menu)

    expect(navEl).toHaveClass('fr-nav')
    expect(navEl).toHaveAttribute('aria-label', label)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    expect(menuContainer).toHaveClass('fr-collapse')
    expect(menuContainer).toHaveClass('fr-collapse--expanded')

    await fireEvent.click(megaMenu)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    expect(menuContainer).toHaveClass('fr-collapse')
    expect(menuContainer).not.toHaveClass('fr-collapse--expanded')
    expect(megaMenu.parentElement.querySelector('.fr-mega-menu')).toHaveClass('fr-collapse--expanded')

    await fireEvent.click(menu)
    await fireEvent.click(menuItemEl)

    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    expect(megaMenu.parentElement.querySelector('.fr-mega-menu')).not.toHaveClass('fr-collapse--expanded')
    expect(menuContainer).not.toHaveClass('fr-collapse--expanded')
  })
})
