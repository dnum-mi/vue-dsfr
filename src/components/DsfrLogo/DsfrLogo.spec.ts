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

  it('should render flag, text and motto, even without setting logoText prop', () => {
    // When
    const { container } = render(DsfrLogo)

    // Then
    const logo = container.querySelector('.fr-logo')
    expect(logo).toBeInTheDocument()
    expect(logo?.innerHTML).toBe('République<br>Française')
  })
})
