import { render } from '@testing-library/vue'

import DsfrHeader from './DsfrHeader.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrHeader', () => {
  it('should render DsfrHeader with a logo', () => {
    // Given
    const logoText = 'Gouvernement'

    // When
    const { getByText } = render(DsfrHeader, {
      global: {
        components: {
          VIcon,
        },
      },
      slots: {
        'logo-text': logoText,
      },
    })
    const logo = getByText(logoText)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })
})
