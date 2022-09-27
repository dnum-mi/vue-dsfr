import { render } from '@testing-library/vue'

import DsfrPicture from './DsfrPicture.vue'

describe('DsfrPicture', () => {
  it('should render a figure with div and img with alt and src', () => {
    // Given
    const size = 'small'
    const src = 'https://placekitten.com/300/200'
    const alt = 'Alternative text'
    const legend = 'Photographie d’un chaton'

    // When
    const { container, getByText } = render(DsfrPicture, {
      props: {
        size,
        src,
        alt,
        legend,
      },
    })
    const figureEl = container.querySelector('.fr-content-media')
    const figcaptionEl = getByText(legend)
    const imgEl = container.querySelector('.fr-ratio-16x9')

    // Then
    expect(figureEl).toHaveAttribute('aria-label', legend)
    expect(figureEl.tagName).toBe('FIGURE')
    expect(imgEl).toHaveAttribute('src', src)
    expect(imgEl).toHaveAttribute('alt', alt)
    expect(figcaptionEl.tagName).toBe('FIGCAPTION')
  })
})
