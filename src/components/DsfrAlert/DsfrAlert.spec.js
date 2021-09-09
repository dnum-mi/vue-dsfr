import { fireEvent, render } from '@testing-library/vue'

import DsfrAlert from './DsfrAlert.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

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
    expect(titleEl.tagName).toBe('P')
    expect(titleEl).toHaveClass('fr-alert__title')
    expect(descritptionEl.tagName).toBe('P')
    expect(descritptionEl).toHaveClass('fr-alert__description')
  })

  it('should mount DsfrAlert with a working close button', async () => {
    // Given
    const alertTitle = 'Titre de l’alerte'
    const alertDescription = 'Description de l’alerte'

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
        type: 'error',
        closed: false,
        closeable: true,
      },
    })

    const closeBtn = getByTitle('Fermer')
    await fireEvent.click(closeBtn)

    // Then
    expect(closeBtn).toHaveClass('close-icon')
    expect(emitted()).toHaveProperty('close')
    expect(emitted().close).toHaveLength(1)
  })
})
