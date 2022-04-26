import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    name: 'Home',
    component: { template: '<div />' },
  }],
})

describe('DsfrNavigationMenuLink', () => {
  it('should render a navigation menu link (internal)', async () => {
    const to = '/'
    const text = 'Texte du lien'

    const { getByTestId } = render(DsfrNavigationMenuLink, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        to,
        text,
      },
    })

    await router.isReady()

    const link = getByTestId('nav-router-link')
    expect(link.innerHTML).toBe(text)
    expect(link).toHaveAttribute('href', to)
  })
})
