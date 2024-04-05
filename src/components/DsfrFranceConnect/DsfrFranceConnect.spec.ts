import { render } from '@testing-library/vue'

import DsfrFranceConnect from './DsfrFranceConnect.vue'

describe('DsfrFranceConnect', () => {
  it('should mount DsfrFranceConnect with right content', () => {
    // Given
    const secure = true
    // When
    const { getByTitle } = render(DsfrFranceConnect, {
      props: {
        secure,
      },
    })

    const link = getByTitle('Qu’est-ce que FranceConnect+ ? - nouvelle fenêtre')

    // Then
    expect(link.href).toBe('https://franceconnect.gouv.fr/france-connect-plus')
  })

  it('should mount DsfrFranceConnect with specific url', () => {
    // Given
    const secure = true
    const url = 'https://specific-domain.gouv.fr/specific-url'

    // When
    const { getByTitle, getByRole } = render(DsfrFranceConnect, {
      props: {
        secure,
        url,
      },
    })

    const link = getByTitle('Qu’est-ce que FranceConnect+ ? - nouvelle fenêtre')
    const button = getByRole('button')

    // Then
    expect(link.href).toBe(url)
    expect(button.textContent).toBe('S’identifier avec FranceConnect+')
  })
})
