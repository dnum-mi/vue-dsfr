import { render } from '@testing-library/vue'

import DsfrLogo from './DsfrLogo.vue'

describe('DsfrLogo', () => {
  it('should render flag, text and motto', () => {
    // Given
    const text = 'Gouvernement'

    // When
    const { getByText } = render(DsfrLogo, {
      props: {
        logoText: text,
      },
    })

    // Then
    expect(getByText(text)).toBeInTheDocument()
    expect(getByText(text)).toHaveClass('fr-logo')
  })
})
