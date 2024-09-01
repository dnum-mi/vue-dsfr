import { fireEvent, render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'
import DsfrAlert from './DsfrAlert.vue'

describe('DsfrAlert', () => {
  it('should mount DsfrAlert with right content', () => {
    // Given
    const alertTitle = 'Titre de l’alerte'
    const alertDescription = 'Description de l’alerte'

    // When
    const { getByText } = render(DsfrAlert, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title: alertTitle,
        description: alertDescription,
        type: 'error',
      },
    })

    const titleEl = getByText(alertTitle)
    const descritptionEl = getByText(alertDescription)

    // Then
    expect(titleEl.tagName).toBe('H3')
    expect(titleEl).toHaveClass('fr-alert__title')
    expect(descritptionEl.tagName).toBe('DIV')
    expect(descritptionEl).toHaveClass('fr-alert')
  })

  it('should mount DsfrAlert with right content with description in slot', () => {
    // Given
    const alertTitle = 'Titre de l’alerte'
    const alertDescription = 'Description de l’alerte'

    // When
    const { getByText } = render(DsfrAlert, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title: alertTitle,
        type: 'info',
      },
      slots: {
        default: alertDescription,
      },
    })

    const titleEl = getByText(alertTitle)
    const descritptionEl = getByText(alertDescription)

    // Then
    expect(titleEl.tagName).toBe('H3')
    expect(titleEl).toHaveClass('fr-alert__title')
    expect(descritptionEl.tagName).toBe('DIV')
    expect(descritptionEl).toHaveClass('fr-alert')
  })

  it('should mount DsfrAlert with a working close button', async () => {
    // Given
    const alertTitle = 'Titre de l’alerte'
    const alertDescription = 'Description de l’alerte'
    const type = 'error'

    // When
    const { emitted, getByTitle } = render(DsfrAlert, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title: alertTitle,
        description: alertDescription,
        closed: false,
        closeable: true,
        type,
      },
    })

    const closeBtn = getByTitle('Fermer')
    await fireEvent.click(closeBtn)

    // Then
    expect(closeBtn).toHaveClass('fr-btn--close')
    expect(emitted()).toHaveProperty('close')
    expect(emitted().close).toHaveLength(1)
  })
})
