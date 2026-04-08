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
