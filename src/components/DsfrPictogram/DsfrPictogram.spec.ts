import { render } from '@testing-library/vue'

import DsfrPictogram from './DsfrPictogram.vue'

const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><g id="artwork-decorative"><path d="M0 0h80v80H0Z" /></g><g id="artwork-major"><path fill="url(#artwork-decorative)" d="M0 0h40v40H0Z" /></g></svg>'
const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgMarkup)}`

describe('DsfrPictogram', () => {
  it('should render an image when imgSrc is given', () => {
    // Given
    const imgSrc = 'https://loremflickr.com/80/80/cat'
    const title = 'Un chat'

    // When
    const { container } = render(DsfrPictogram, { props: { imgSrc, title } })
    const img = container.querySelector('img')

    // Then
    expect(img).toHaveClass('fr-artwork')
    expect(img).toHaveAttribute('src', imgSrc)
    expect(img).toHaveAttribute('alt', '')
    expect(img).toHaveAttribute('title', title)
  })

  it('should render the three artwork layers when svgPath is a sprite url', () => {
    // Given
    const svgPath = '/artwork/pictograms/buildings/school.svg'

    // When
    const { container } = render(DsfrPictogram, { props: { svgPath } })
    const uses = container.querySelectorAll('use')

    // Then
    expect(container.querySelector('svg')).toHaveClass('fr-artwork')
    expect(uses).toHaveLength(3)
    expect(uses[0]).toHaveAttribute('href', `${svgPath}#artwork-decorative`)
    expect(uses[1]).toHaveAttribute('href', `${svgPath}#artwork-minor`)
    expect(uses[2]).toHaveAttribute('href', `${svgPath}#artwork-major`)
  })

  it('should inline the markup when svgPath is a data uri, because use cannot reference one', () => {
    // When
    const { container } = render(DsfrPictogram, { props: { svgPath: svgDataUri } })
    const inlined = container.querySelector('.fr-artwork--inline')

    // Then
    expect(inlined).toHaveAttribute('aria-hidden', 'true')
    expect(inlined!.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('use')).toBeNull()
  })

  it('should suffix the artwork ids to keep two pictograms independent', () => {
    // When
    const { container } = render({
      components: { DsfrPictogram },
      setup: () => ({ svgDataUri }),
      template: '<div><DsfrPictogram :svg-path="svgDataUri" /><DsfrPictogram :svg-path="svgDataUri" /></div>',
    })
    const [first, second] = Array.from(container.querySelectorAll('[id^="artwork-decorative-"]'))

    // Then
    expect(first.id).not.toBe('artwork-decorative')
    expect(first.id).not.toBe(second.id)
  })

  it('should fall back to an image when the data uri cannot be parsed', () => {
    // Given
    const svgPath = 'data:image/svg+xml;base64,Zm9v'

    // When
    const { container } = render(DsfrPictogram, { props: { svgPath } })

    // Then
    expect(container.querySelector('.fr-artwork--inline')).toBeNull()
    expect(container.querySelector('img')).toHaveAttribute('src', svgPath)
  })

  it('should give the sprite a title only when one is given', () => {
    // Given
    const svgPath = '/artwork/pictograms/buildings/school.svg'
    const title = 'Mairie'

    // When
    const { container: withTitle } = render(DsfrPictogram, { props: { svgPath, title } })
    const { container: withoutTitle } = render(DsfrPictogram, { props: { svgPath } })

    // Then
    expect(withTitle.querySelector('title')).toHaveTextContent(title)
    expect(withoutTitle.querySelector('title')).toBeNull()
  })

  it('should render nothing without imgSrc nor svgPath', () => {
    // When
    const { container } = render(DsfrPictogram)

    // Then
    expect(container.querySelector('.fr-artwork')).toBeNull()
  })
})
