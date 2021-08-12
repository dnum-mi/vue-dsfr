import { render } from '@testing-library/vue'

import DsfrLogo from './DsfrLogo.vue'

describe('DsfrLogo', () => {
  it('should render flag, text and motto', () => {
    // Given
    const text = 'République française'

    // When
    const { getByText } = render(DsfrLogo, {
      slots: {
        default: text,
      },
    })

    // Then
    expect(getByText(text)).toBeInTheDocument()
    expect(getByText(text)).toHaveClass('fr-logo')
  })
})
