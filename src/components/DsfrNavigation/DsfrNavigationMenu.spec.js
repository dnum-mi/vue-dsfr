import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrNavigationMenu from './DsfrNavigationMenu.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    name: 'Home',
    component: { template: '<div />' },
  }],
})

describe('DsfrNavigationMenu', () => {
  it('should render a navigation mega menu', async () => {
    const title = 'Titre du menu'
    const links = [
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
    ]

    const { getByText, getByTestId, getAllByTestId } = render(DsfrNavigationMenu, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        title,
        links,
      },
    })

    await router.isReady()

    const button = getByText(title).parentElement
    const menuWrapper = getByTestId('navigation-menu')
    const linkEls = getAllByTestId('nav-router-link')

    expect(menuWrapper.id).toBe(button.getAttribute('aria-controls'))
    expect(linkEls).toHaveLength(links.length)
  })
})
