import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

import DsfrQuote from './DsfrQuote.vue'

describe('DsfrQuote', () => {
  it('should render a complete DsfrQuote', () => {
    const quote = 'LA citation'
    const author = 'Pierre-Louis EGAUD'
    const firstSourceText = 'Détail 1'
    const details = [
      firstSourceText,
      'Détail 2',
      'Détail 3',
      {
        url: 'https://www.wikipedia.fr',
        label: 'wikipedia',
      },
    ]
    const illustration = 'illustration'
    const source = 'Duckduckgo'
    const sourceUrl = 'https://www.duckduckgo.com'
    const quoteImage = 'https://placekitten.com/g/150/150'

    const { container, getByText } = render(DsfrQuote, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        quote,
        author,
        details,
        illustration,
        source,
        sourceUrl,
        quoteImage,
      },
    })
    const imgEl = container.querySelector('.fr-responsive-img')
    const quoteEl = container.querySelector('blockquote p')
    const citeEl = getByText(source)
    const firstLink = getByText('Détail 1')
    const lastLink = container.querySelectorAll('.fr-quote__source li')[details.length]

    expect(quoteEl).toBeInTheDocument()
    expect(citeEl).toBeInTheDocument()
    expect(quoteEl.innerHTML).toContain(quote)
    expect(imgEl).toHaveAttribute('src', quoteImage)
    expect(firstLink).not.toHaveAttribute('href')
    expect(firstLink.innerHTML).toContain(firstSourceText)
    expect(lastLink.querySelector('a')).toHaveAttribute('href')
  })
})
