import { render } from '@testing-library/vue'

import DsfrHighlight from './DsfrHighlight.vue'

describe('DsfrHighlight', () => {
  it('should display a highlighted text medium', () => {
    const text = 'Texte de la mise en exergue'

    const { getByText } = render(DsfrHighlight, {
      props: {
        text,
      },
    })

    const pEl = getByText(text)

    expect(pEl.parentNode).toHaveClass('fr-highlight')
    expect(pEl).not.toHaveClass('fr-text--sm')
    expect(pEl).not.toHaveClass('fr-text--lg')
  })

  it('should display a highlighted text medium if large and small are provided as props', () => {
    const text = 'Texte de la mise en exergue'

    const { getByText } = render(DsfrHighlight, {
      props: {
        text,
        small: true,
        large: true,
      },
    })

    const pEl = getByText(text)

    expect(pEl.parentNode).toHaveClass('fr-highlight')
    expect(pEl).not.toHaveClass('fr-text--sm')
    expect(pEl).not.toHaveClass('fr-text--lg')
  })

  it('should display a highlighted text small if small is provided as props', () => {
    const text = 'Texte de la mise en exergue'

    const { getByText } = render(DsfrHighlight, {
      props: {
        text,
        small: true,
      },
    })

    const pEl = getByText(text)

    expect(pEl.parentNode).toHaveClass('fr-highlight')
    expect(pEl).toHaveClass('fr-text--sm')
    expect(pEl).not.toHaveClass('fr-text--lg')
  })

  it('should display a highlighted text large if large is provided as props', () => {
    const text = 'Texte de la mise en exergue'

    const { getByText } = render(DsfrHighlight, {
      props: {
        text,
        large: true,
      },
    })

    const pEl = getByText(text)

    expect(pEl.parentNode).toHaveClass('fr-highlight')
    expect(pEl).not.toHaveClass('fr-text--sm')
    expect(pEl).toHaveClass('fr-text--lg')
  })
})
