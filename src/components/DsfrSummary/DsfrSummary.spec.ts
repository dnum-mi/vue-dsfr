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

  it('should render the title with the default tag h2', () => {
    // Given
    const title = 'Sommaire'
    const anchors = [{ link: '#first', name: 'Première étape' }]

    // When
    const { getByText } = render(DsfrSummary, {
      props: { title, anchors },
    })

    // Then
    expect(getByText(title).tagName.toLowerCase()).toBe('h2')
  })

  it.each(['h2', 'h3', 'h4', 'h5', 'p'] as const)('should render the title as <%s>', (titleTag) => {
    // Given
    const title = 'Sommaire'
    const anchors = [{ link: '#first', name: 'Première étape' }]

    // When
    const { getByText } = render(DsfrSummary, {
      props: { title, anchors, titleTag },
    })

    // Then
    expect(getByText(title).tagName.toLowerCase()).toBe(titleTag)
  })
})
