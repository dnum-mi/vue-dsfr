import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { template: '<div />' },
    },
    {
      path: '/path1',
      name: 'One',
      component: { template: '<div />' },
    },
    {
      path: '/path2',
      name: 'Two',
      component: { template: '<div />' },
    },
  ],
})

describe('DsfrBreadcrumb', () => {
  it('should render DsfrBreadcrumb with right content', async () => {
    // Given
    const secondLinkText = 'Lien 2'
    const currentPageText = 'Lien 3'

    const links = [
      {
        to: 'path1',
        text: 'Lien 1',
      },
      {
        to: '/path2',
        text: secondLinkText,
      },
      {
        text: currentPageText,
      },
    ]

    // When
    const { getByRole, findAllByTestId } = render(DsfrBreadcrumb, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      propsData: {
        links,
      },
    })

    await router.isReady()

    const navEl = getByRole('navigation')
    const currentItemEl = await findAllByTestId('lis')

    // Then
    expect(navEl.tagName).toBe('NAV')
    expect(currentItemEl).toHaveLength(3)
  })

  it('should render DsfrBreadcrumb with no content', async () => {
    // Given

    // When
    const { getByRole } = render(DsfrBreadcrumb, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      propsData: {
      },
    })

    await router.isReady()

    const navEl = getByRole('navigation')

    // Then
    expect(navEl.tagName).toBe('NAV')
  })
})
