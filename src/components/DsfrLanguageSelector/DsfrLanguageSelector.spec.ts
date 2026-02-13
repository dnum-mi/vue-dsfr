import { render } from '@testing-library/vue'

import DsfrLanguageSelector from './DsfrLanguageSelector.vue'

describe('DsfrLanguageSelector', () => {
  it('should render a language selector', () => {
    // Given
    const languages = [{ label: 'Français', codeIso: 'fr' }, { label: 'English', codeIso: 'en' }, { label: 'Deutsch', codeIso: 'de' }, { label: 'Nederlands', codeIso: 'nl' }]

    // When
    const { getByText } = render(DsfrLanguageSelector, {
      props: {
        languages,
      },
    })
    const defaultLanguage = getByText('FR - Français')
    const customLabel1 = getByText('EN - English')
    const wrapper = document.querySelector('.fr-translate.fr-nav')

    // Then
    expect(defaultLanguage).toHaveAttribute('aria-current')
    expect(customLabel1).toHaveAttribute('lang')
    expect(wrapper?.tagName).toBe('DIV')
  })
  it('should render a language selector with a nav wrapper tag (if requested)', () => {
    // Given
    const languages = [{ label: 'Français', codeIso: 'fr' }, { label: 'English', codeIso: 'en' }, { label: 'Deutsch', codeIso: 'de' }, { label: 'Nederlands', codeIso: 'nl' }]

    // When
    render(DsfrLanguageSelector, {
      props: {
        languages,
        wrapperTag: 'nav',
      },
    })
    const wrapper = document.querySelector('.fr-translate.fr-nav')

    // Then
    expect(wrapper?.tagName).toBe('NAV')
  })
})
