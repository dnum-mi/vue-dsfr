import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    name: 'Home',
    component: { template: '<div />' },
  }],
})

describe('DsfrNavigationMegaMenu', () => {
  it('should render a navigation mega menu', async () => {
    const title = 'Titre du mega menu'
    const description = 'Description du mega menu'
    const link = {
      to: '/',
      text: 'Voir toute la rubrique',
    }
    const menus = [
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
    ]

    const { getByTestId, getByText, getAllByText } = render(DsfrNavigationMegaMenu, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        title,
        link,
        description,
        menus,
      },
    })

    await router.isReady()

    const [button, titleEl] = getAllByText(title)
    const descEl = getByText(description)
    const megaMenuWrapper = getByTestId('mega-menu-wrapper')

    expect(button.tagName).toBe('BUTTON')
    expect(titleEl.tagName).toBe('H4')
    expect(megaMenuWrapper.id).toBe(button.getAttribute('aria-controls'))
    expect(descEl).toHaveClass('fr-displayed-lg')
  })
})
