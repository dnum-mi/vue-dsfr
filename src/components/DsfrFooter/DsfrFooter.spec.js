import { render } from '@testing-library/vue'

import DsfrFooter from './DsfrFooter.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrFooter', () => {
  it('should mount DsfrFooter with right content', () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'
    const testIdBeforeLink = '/before'
    const testIdAfterLink = '/after'
    const mainPartner = {
      name: 'Partenaire principal',
      href: 'https://www.youtube.com',
      logo: 'https://placekitten.com/150/150',
      alt: 'Partenaire principal',
    }
    const subPartners = [
      {
        name: 'Partenaire secondaire 1',
        href: 'https://www.youtube.com',
        logo: 'https://placekitten.com/145/151',
        alt: 'Partenaire secondaire 1',
      },
      {
        name: 'Partenaire secondaire 2',
        href: 'https://www.youtube.com',
        logo: 'https://placekitten.com/150/152',
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
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
        afterMandatoryLinks: [{ label: 'After', to: testIdAfterLink }],
        beforeMandatoryLinks: [{ label: 'Before', to: testIdBeforeLink }],
        partners,
      },
    })

    const ecosystemLinksLis = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')
    const partnerLinks = container.querySelectorAll('.fr-footer__partners-link')

    // Then
    expect(ecosystemLinksLis).toHaveLength(4)
    expect(partnerLinks).toHaveLength(3)
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
    expect(getByTestId(testIdBeforeLink)).toHaveClass('fr-footer__bottom-link')
    expect(getByTestId(testIdAfterLink)).toHaveClass('fr-footer__bottom-link')
  })

  it('should mount DsfrFooter with right content', () => {
    // Given
    const testIdMentionsLegales = '/mentions-legales'

    // When
    const { container, getByTestId } = render(DsfrFooter, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        a11yCompliance: 'totalement conforme',
      },
    })

    const ecosystemLinksLis = container.querySelectorAll('.fr-footer__content-list .fr-footer__content-link')

    // Then
    expect(ecosystemLinksLis).toHaveLength(4)
    expect(getByTestId(testIdMentionsLegales)).toHaveClass('fr-footer__bottom-link')
  })
})
