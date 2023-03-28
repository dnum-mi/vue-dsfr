import { render } from '@testing-library/vue'

import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'

describe('DsfrHeaderMenuLink', () => {
  it('should render DsfrHeaderMenuLink with a router link', async () => {
    // Given
    const to = '/path1'
    const label = 'One'

    // When
    const { getByText } = render(DsfrHeaderMenuLink, {
      props: {
        to,
        label,
      },
    })

    const quickLink = getByText(label)

    // Then
    expect(quickLink).toHaveAttribute('to', to)
  })
  it('should render DsfrHeaderMenuLink with an external link', async () => {
    // Given
    const href = 'https://design.numerique.gouv.fr/'
    const label = 'DesignGouv'

    // When
    const { getByText } = render(DsfrHeaderMenuLink, {
      props: {
        href,
        label,
      },
    })

    const quickLink = getByText(label)

    // Then
    expect(quickLink).toHaveAttribute('href', href)
  })
  it('should render DsfrHeaderMenuLink with a mailto link', async () => {
    // Given
    const href = 'mailto:vue-dsfr@interieur.gouv.fr'
    const label = 'Nous contacter'

    // When
    const { getByText } = render(DsfrHeaderMenuLink, {
      props: {
        href,
        label,
      },
    })

    const quickLink = getByText(label)

    // Then
    expect(quickLink).toHaveAttribute('href', href)
  })
})
