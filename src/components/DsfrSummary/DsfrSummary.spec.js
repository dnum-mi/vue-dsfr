import { render } from '@testing-library/vue'

import DsfrSummary from './DsfrSummary.vue'

describe('DsfrSummary', () => {
  it('should render a summary', () => {
    // Given
    const title = 'Exemple de sommaire'
    const anchors = [{ link: '#first', name: 'Première étape' }, { link: '#second', name: 'Deuxième étape' }, { link: '#third', name: 'Troisième étape' }]

    // When
    const { getByText } = render(DsfrSummary, {
      props: {
        title,
        anchors,
      },
    })
    const anchorTest = getByText('Deuxième étape')

    // Then
    expect(anchorTest).toHaveProperty('href')
    expect(anchorTest.href).toMatch('#second')
  })
})
