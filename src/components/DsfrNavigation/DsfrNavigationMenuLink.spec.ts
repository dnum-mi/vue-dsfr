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
  it('should render a navigation menu link (internal) with icon', async () => {
    const to = '/'
    const text = 'Texte du lien'
    const icon = 'ri-check-lineline'

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
        icon,
      },
    })

    await router.isReady()

    const link = getByTestId('nav-router-link')
    expect(link.innerHTML).toBe('<svg class="ov-icon" style="font-size: 1.2em;" aria-hidden="true" width="0" height="0" viewBox="0 0 0 0" fill="currentColor"></svg> ' + text)
    expect(link).toHaveAttribute('href', to)
  })
  it('should render a navigation menu link (internal) without icon', async () => {
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
    expect(link.innerHTML).toBe('<!--v-if--> ' + text)
    expect(link).toHaveAttribute('href', to)
  })
})
