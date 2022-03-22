import { render } from '@testing-library/vue'

import DsfrFieldset from './DsfrFieldset.vue'

describe('DsfrFieldset', () => {
  it('should render a DsfrFieldset component', () => {
    const legend = 'Texte de la légende'
    const slotContent = 'Contenu du slot par défaut'
    const hint = 'Texte d̛’indice'
    const { container, getByText } = render(DsfrFieldset, {
      props: {
        legend,
        legendId: 'legend-id',
        hint,
      },
      slots: {
        default: slotContent,
      },
    })

    const fieldsetEl = container.querySelector('fieldset')
    const legendEl = fieldsetEl.firstElementChild
    const legendByText = getByText(legend)
    const fieldsetByText = getByText(slotContent)
    const hintByText = getByText(hint)

    const hintEl = legendEl.nextElementSibling

    expect(fieldsetEl).not.toBeNull()
    expect(fieldsetEl).toHaveClass('fr-fieldset')
    expect(legendEl).toBe(legendByText)
    expect(fieldsetByText).toBe(fieldsetEl)
    expect(hintByText).toBe(hintEl)
    expect(legendEl).toHaveClass('fr-fieldset__legend')
    expect(legendEl).toHaveAttribute('id', 'legend-id')
    expect(hintEl).toHaveClass('fr-hint-text')
  })

  it('should render a complex DsfrFieldset component', () => {
    const legend = 'Contenu du slot de la légende'
    const slotContent = 'Contenu du slot par défaut'
    const hint = 'Contenu du slot de l’indice'
    const { container, getByText } = render(DsfrFieldset, {
      props: {
        legendId: 'legend-id',
      },
      slots: {
        default: slotContent,
        hint,
        legend,
      },
    })

    const fieldsetEl = container.querySelector('fieldset')
    const legendEl = fieldsetEl.firstElementChild
    const legendByText = getByText(legend)
    const fieldsetByText = getByText(slotContent)
    const hintByText = getByText(hint)

    const hintEl = legendEl.nextElementSibling

    expect(fieldsetEl).not.toBeNull()
    expect(fieldsetEl).toHaveClass('fr-fieldset')
    expect(legendEl).toBe(legendByText)
    expect(fieldsetByText).toBe(fieldsetEl)
    expect(hintByText).toBe(hintEl)
    expect(legendEl).toHaveClass('fr-fieldset__legend')
    expect(legendEl).toHaveAttribute('id', 'legend-id')
    expect(hintEl).toHaveClass('fr-hint-text')
  })
})
