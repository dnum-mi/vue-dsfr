import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import VIcon from '../VIcon/VIcon.vue'
import DsfrFooter from './DsfrFooter.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { template: '<div />' },
    },
    {
      path: '/a11y',
      name: 'A11y',
      component: { template: '<div />' },
    },
    {
      path: '/after',
      name: 'After',
      component: { template: '<div />' },
    },
    {
      path: '/before',
      name: 'Before',
      component: { template: '<div />' },
    },
    {
      path: '/mentions-legales',
      name: 'LegalMentions',
      component: { template: '<div />' },
    },
    {
      path: '/donnees-personnelles',
      name: 'PersonalData',
      component: { template: '<div />' },
    },
    {
      path: '/cookies',
      name: 'Cookies',
      component: { template: '<div />' },
    },
  ],
})

describe('DsfrFooter', () => {
  it('should mount DsfrFooter with all links', async () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'
    const testIdBeforeLink = '/before'
    const testIdAfterLink = '/after'
    const mainPartner = {
      name: 'Partenaire principal',
      href: 'https://www.youtube.com',
      logo: 'https://loremflickr.com/150/150/cat?random=1',
      alt: 'Partenaire principal',
    }
    const subPartners = [
      {
        name: 'Partenaire secondaire 1',
        href: 'https://www.youtube.com',
        logo: 'https://loremflickr.com/150/150/cat?random=2',
        alt: 'Partenaire secondaire 1',
      },
      {
        name: 'Partenaire secondaire 2',
        href: 'https://www.youtube.com',
        logo: 'https://loremflickr.com/150/150/cat?random=3',
        alt: 'Partenaire secondaire 2',
      },
    ]
    const partners = {
      mainPartner,
      subPartners,
    }

    // When
    const { container, getByTestId } = render(DsfrFooter, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
        afterMandatoryLinks: [
          { label: 'After', to: testIdAfterLink, 'data-testid': '/after' },
          { label: 'After ext', href: 'https://example.com' },
        ],
        beforeMandatoryLinks: [{ label: 'Before', to: testIdBeforeLink, 'data-testid': '/before' }],
        partners,
      },
    })

    await router.isReady()

    const ecosystemLinkList = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')
    const partnerLinks = container.querySelectorAll('.fr-footer__partners-link')
    const bottomLinks = container.querySelectorAll('.fr-footer__bottom-link')
    const extLinks = [...bottomLinks].filter((link) => link.getAttribute('href')?.startsWith('https'))

    // Then
    expect(ecosystemLinkList).toHaveLength(4)
    expect(partnerLinks).toHaveLength(3)
    expect(extLinks).toHaveLength(1)
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
    expect(getByTestId(testIdBeforeLink)).toHaveClass('fr-footer__bottom-link')
    expect(getByTestId(testIdAfterLink)).toHaveClass('fr-footer__bottom-link')
  })

  it('should mount DsfrFooter with few links', async () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'
    const licenceText = 'Licence ouverte'

    // When
    const { container, getByTestId } = render(DsfrFooter, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
        licenceText,
      },
    })

    await router.isReady()

    const ecosystemLinkList = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')
    const licenceEl = container.querySelector('.fr-footer__bottom-copy')

    // Then
    expect(ecosystemLinkList).toHaveLength(4)
    expect(licenceEl).not.toBeNull()
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
  })

  it('should not display div.fr-footer__bottom-copy if licenceText is empty string', async () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'
    const licenceText = ''

    // When
    const { container, getByTestId } = render(DsfrFooter, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
        licenceText,
      },
    })

    await router.isReady()

    const ecosystemLinksLis = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')
    const licenceEl = container.querySelector('.fr-footer__bottom-copy')

    // Then
    expect(ecosystemLinksLis).toHaveLength(4)
    expect(licenceEl).toBeNull()
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
  })

  it('should not display div.fr-footer__bottom-copy if licenceText is null', async () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'
    const licenceText = null

    // When
    const { container, getByTestId } = render(DsfrFooter, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
        licenceText,
      },
    })

    await router.isReady()

    const ecosystemLinksLis = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')
    const licenceEl = container.querySelector('.fr-footer__bottom-copy')

    // Then
    expect(ecosystemLinksLis).toHaveLength(4)
    expect(licenceEl).toBeNull()
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
  })
})
