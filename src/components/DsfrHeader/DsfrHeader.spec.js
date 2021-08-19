import { render } from '@testing-library/vue'

import DsfrHeader from './DsfrHeader.vue'

describe('DsfrHeader', () => {
  it('should render DsfrHeader with a logo', () => {
    // Given
    const logoText = 'Ministère'

    // When
    const { getByText } = render(DsfrHeader, {
      slots: {
        'logo-text': logoText,
      },
    })
    const logo = getByText(logoText)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })
})
