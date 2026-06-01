import { fireEvent, render } from '@testing-library/vue'

import DsfrTooltip from './DsfrTooltip.vue'

describe('DsfrTooltip', () => {
  it('should render tooltip trigger and content', () => {
    const content = 'Aide contextuelle'
    const label = 'Afficher l‘aide'

    const { container, getByRole } = render(DsfrTooltip, {
      props: {
        content,
      },
      slots: {
        default: label,
      },
    })

    const trigger = getByRole('button')
    const tooltip = container.querySelector('.fr-tooltip')

    expect(trigger).toHaveTextContent(label)
    expect(trigger).toHaveAttribute('aria-describedby')
    expect(tooltip).toBeTruthy()
    expect(tooltip).toHaveTextContent(content)
  })

  it('should keep tooltip visible when clicking on it (click mode)', async () => {
    const content = 'Aide contextuelle'
    const label = 'Afficher l\'aide'

    const { container, getByRole } = render(DsfrTooltip, {
      props: { content },
      slots: { default: label },
    })

    const trigger = getByRole('button')
    const tooltipEl = container.querySelector('.fr-tooltip') as HTMLElement

    await fireEvent.focus(trigger)
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')

    // Simuler un blur vers le tooltip (comme un clic sur celui-ci)
    await fireEvent.blur(trigger, { relatedTarget: tooltipEl })
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')
  })

  it('should hide tooltip when blur goes outside tooltip (click mode)', async () => {
    const content = 'Aide contextuelle'
    const label = 'Afficher l\'aide'

    const { container, getByRole } = render(DsfrTooltip, {
      props: { content },
      slots: { default: label },
    })

    const trigger = getByRole('button')
    const tooltipEl = container.querySelector('.fr-tooltip') as HTMLElement

    await fireEvent.focus(trigger)
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')

    // Simuler un blur vers un élément extérieur
    await fireEvent.blur(trigger, { relatedTarget: document.body })
    expect(tooltipEl).not.toHaveClass('fr-tooltip--shown')
  })

  it('should keep tooltip visible when mouse moves from source to tooltip (hover mode)', async () => {
    const content = 'Aide contextuelle'
    const label = 'Info'

    const { container } = render(DsfrTooltip, {
      props: { content, onHover: true },
      slots: { default: label },
    })

    const trigger = container.querySelector('.fr-link') as HTMLElement
    const tooltipEl = container.querySelector('.fr-tooltip') as HTMLElement

    // Simuler le mouseover sur la source pour afficher la tooltip
    await fireEvent.mouseOver(trigger)
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')

    // Simuler le mouseleave de la source vers le tooltip
    await fireEvent.mouseLeave(trigger, { relatedTarget: tooltipEl })
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')
  })

  it('should hide tooltip when mouse leaves tooltip to outside (hover mode)', async () => {
    const content = 'Aide contextuelle'
    const label = 'Info'

    const { container } = render(DsfrTooltip, {
      props: { content, onHover: true },
      slots: { default: label },
    })

    const trigger = container.querySelector('.fr-link') as HTMLElement
    const tooltipEl = container.querySelector('.fr-tooltip') as HTMLElement

    await fireEvent.mouseOver(trigger)
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')

    // Aller sur le tooltip
    await fireEvent.mouseLeave(trigger, { relatedTarget: tooltipEl })
    expect(tooltipEl).toHaveClass('fr-tooltip--shown')

    // Quitter le tooltip vers l'extérieur
    await fireEvent.mouseLeave(tooltipEl, { relatedTarget: document.body })
    expect(tooltipEl).not.toHaveClass('fr-tooltip--shown')
  })

  it('should not propagate Escape keydown when tooltip is shown', async () => {
    const content = 'Aide contextuelle'
    const label = 'Afficher l\'aide'

    const { container, getByRole } = render(DsfrTooltip, {
      props: {
        content,
      },
      slots: {
        default: label,
      },
    })

    const trigger = getByRole('button')
    const tooltip = container.querySelector('.fr-tooltip')
    const documentKeydownHandler = vi.fn()

    expect(tooltip).toBeTruthy()
    document.addEventListener('keydown', documentKeydownHandler)

    try {
      await fireEvent.focus(trigger)
      expect(tooltip).toHaveClass('fr-tooltip--shown')

      await fireEvent.keyDown(trigger, { key: 'Escape' })

      expect(documentKeydownHandler).not.toHaveBeenCalled()
      expect(tooltip).not.toHaveClass('fr-tooltip--shown')
    } finally {
      document.removeEventListener('keydown', documentKeydownHandler)
    }
  })
})
