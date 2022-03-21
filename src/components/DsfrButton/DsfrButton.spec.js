import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrButton from './DsfrButton.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrButton', () => {
  it('should mount DsfrButton with right content', () => {
    // Given
    const label = 'Button label'

    // When
    const { getByText } = render(DsfrButton, {
      global: {
        components: {
          VIcon,
        },
      },
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
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        secondary: true,
      },
      slots: {
        default: label,
      },
    })

    // Then
    expect(getByText(label).parentNode).toHaveClass('fr-btn--secondary')
  })
})
