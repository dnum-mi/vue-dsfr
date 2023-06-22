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

  it('should render flag, text and motto', () => {
    // When
    const { getByText } = render(DsfrLogo)

    // Then
    expect(getByText('Gouvernement')).toBeInTheDocument()
    expect(getByText('Gouvernement')).toHaveClass('fr-logo')
  })
})
