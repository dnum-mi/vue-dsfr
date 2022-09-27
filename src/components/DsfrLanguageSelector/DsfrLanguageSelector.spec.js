import { render } from '@testing-library/vue'

import DsfrLanguageSelector from './DsfrLanguageSelector.vue'

describe('DsfrLanguageSelector', () => {
  it('should render a language selector', () => {
    // Given
    const languages = [{ label: 'English', codeIso: 'en' }, { label: 'Deutsch', codeIso: 'de' }, { label: 'Nederlands', codeIso: 'nl' }]

    // When
    const { getByText } = render(DsfrLanguageSelector, {
      props: {
        languages,
      },
    })
    const defaultLanguage = getByText('FR - Français')
    const customLabel1 = getByText('EN - English')

    // Then
    expect(defaultLanguage).toHaveAttribute('aria-current')
    expect(customLabel1).toHaveAttribute('lang')
  })
})
