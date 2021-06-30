import { render } from '@testing-library/vue'

import DsfrButton from './DsfrButton.vue'

describe('DsfrButton', () => {
  it('should mount DsfrButton with right content', () => {
    // Given
    const label = 'Button label'

    // When
    const { getByText } = render(DsfrButton, {
      slots: {
        default: label,
      },
    })

    // Then
    getByText(label)
  })

  it('should mount DsfrButton with "*secondary" class', () => {
    // Given
    const label = 'Button label'

    // When
    const { getByText } = render(DsfrButton, {
      props: {
        secondary: true,
      },
      slots: {
        default: label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-btn--secondary')
  })
})
