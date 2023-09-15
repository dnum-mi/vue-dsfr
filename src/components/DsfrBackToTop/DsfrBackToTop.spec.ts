import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'
import DsfrBackToTop from './DsfrBackToTop.vue'

describe('DsfrBackToTop', () => {
  it('should render a success BackToTop', async () => {
    const label = 'Haut de page'
    const position = 'right'

    const { getByText } = render(DsfrBackToTop, {
      props: {
        label,
        position,
      },
    })

    const BackToTop = getByText(label).parentElement
    expect(BackToTop).toHaveClass('Haut de page')
    expect(BackToTop).toHaveClass(`fr-link--icon-${position}`)
  })
})
