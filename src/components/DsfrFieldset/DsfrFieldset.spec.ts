import { render } from '@testing-library/vue'

import DsfrFieldset from './DsfrFieldset.vue'

describe('DsfrFieldset', () => {
  it('should render a DsfrFieldset component', () => {
    const legend = 'Texte de la légende'
    const slotContent = 'Contenu du slot par défaut'
    const hint = 'Texte d̛’indice'
    const legendClass = 'test-legend-class'
    const hintClass = 'test-hint-class'
    const { container, getByText } = render(DsfrFieldset, {
      props: {
        legend,
        legendClass,
        legendId: 'legend-id',
        hint,
        hintClass,
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
    const hintInnerEl = hintEl.firstElementChild

    const contentEl = hintEl.nextElementSibling

    expect(fieldsetEl).not.toBeNull()
    expect(fieldsetEl).toHaveClass('fr-fieldset')
    expect(legendEl).toBe(legendByText)
    expect(fieldsetByText).toBe(contentEl)
    expect(hintByText).toBe(hintInnerEl)
    expect(legendEl).toHaveClass('fr-fieldset__legend')
    expect(legendEl).toHaveClass('test-legend-class')
    expect(legendEl).toHaveAttribute('id', 'legend-id')
    expect(hintEl).toHaveClass('fr-fieldset__element')
    expect(hintInnerEl).toHaveClass('fr-hint-text')
    expect(hintInnerEl).toHaveClass('test-hint-class')
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
    const hintInnerEl = hintEl.firstElementChild

    const contentEl = hintEl.nextElementSibling

    expect(fieldsetEl).not.toBeNull()
    expect(fieldsetEl).toHaveClass('fr-fieldset')
    expect(legendEl).toBe(legendByText)
    expect(fieldsetByText).toBe(contentEl)
    expect(hintByText).toBe(hintInnerEl)
    expect(legendEl).toHaveClass('fr-fieldset__legend')
    expect(legendEl).toHaveAttribute('id', 'legend-id')
    expect(hintEl).toHaveClass('fr-fieldset__element')
    expect(hintInnerEl).toHaveClass('fr-hint-text')
  })
})
