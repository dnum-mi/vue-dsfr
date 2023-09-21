import { render } from '@testing-library/vue'
import DsfrBackToTop from './DsfrBackToTop.vue'

describe('DsfrBackToTop', () => {
  it('should render a success BackToTop', async () => {
    const label = 'Haut de page'
    const expectClass = 'fr-link fr-icon-arrow-up-fill'
    const position = 'left'

    const { getByText } = render(DsfrBackToTop, {
      props: {
        label,
        position,
      },
    })

    const anchorElement = getByText(label)
    expect(anchorElement).toBeDefined()
    // Verifier si a possède la class attendu
    expect(anchorElement).toHaveClass(expectClass)
    expect(anchorElement).toHaveClass(`fr-link--icon-${position}`)
  })
})
