import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    name: 'Home',
    component: { template: '<div />' },
  }],
})

describe('DsfrNavigationMegaMenuCategory', () => {
  it('should render a navigation mega menu', async () => {
    const title = 'Nom de catégorie'
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

    const { getAllByTestId, getByText } = render(DsfrNavigationMegaMenuCategory, {
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

    const linkEls = getAllByTestId('nav-router-link')
    const h5El = getByText(title)

    expect(h5El).toHaveClass('fr-nav__link')
    expect(linkEls.length).toBe(links.length)
  })
})
