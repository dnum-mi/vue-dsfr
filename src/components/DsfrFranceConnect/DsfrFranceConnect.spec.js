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

    const link = getByTitle('Qu’est ce que FranceConnect+ ? - nouvelle fenêtre')

    // Then
    expect(link.href).toBe('https://franceconnect.gouv.fr/france-connect-plus')
  })
})
