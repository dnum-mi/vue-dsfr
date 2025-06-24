import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import VIcon from '../VIcon/VIcon.vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrHeader from './DsfrHeader.vue'

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
    {
      path: '/path3',
      name: 'Three',
      component: { template: '<div />' },
    },
  ],
})
describe.skip('DsfrHeader', () => { // Skipped because of this issue: https://github.com/focus-trap/focus-trap-react/issues/785
  it('should render DsfrHeader with a logo', async () => {
    // Given
    const logoText = 'Gouvernement'
    const serviceTitle = 'Nom du service'
    const serviceDescription = 'Description du service'

    // When
    const { getByText } = render(DsfrHeader, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        serviceTitle,
        serviceDescription,
      },
    })

    await router.isReady()

    const logo = getByText(logoText)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })

  it('should render DsfrHeader with a logo and quicklinks', async () => {
    // Given
    const logoText = ['République', 'Française']
    const serviceTitle = 'Nom du service'
    const serviceDescription = 'Description du service'
    const showSearch = true
    const quickLinks = [
      { label: 'Lien1', to: '/path1', icon: '' },
      { label: 'Lien2', to: '/path2', icon: 'ri-notification-3-line' },
      { label: 'Lien3', to: '/path3', icon: 'ri-phone-line', iconRight: true },
    ]

    // When
    const { getByTestId } = render(DsfrHeader, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        logoText,
        serviceTitle,
        serviceDescription,
        quickLinks,
        showSearch,
      },
    })

    await router.isReady()

    const logo = getByTestId('header-logo')
    const openMenuBtn = getByTestId('open-menu-btn')
    await fireEvent.click(openMenuBtn)

    const closeModalBtn = getByTestId('close-modal-btn')
    await fireEvent.click(closeModalBtn)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })

  it('should render DsfrHeader with a BETA badge', async () => {
    // Given
    const logoText = 'Gouvernement'
    const serviceTitle = 'Nom du service'
    const serviceDescription = 'Description du service'
    const showBeta = true

    // When
    const { getByText } = render(DsfrHeader, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        logoText,
        serviceTitle,
        serviceDescription,
        showBeta,
      },
    })

    await router.isReady()

    const betaBadge = getByText('BETA')

    // Then
    expect(betaBadge).toHaveClass('fr-badge')
  })
})
