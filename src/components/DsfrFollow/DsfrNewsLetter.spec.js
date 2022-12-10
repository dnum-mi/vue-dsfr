import { render } from '@testing-library/vue'

import DsfrNewsLetter from './DsfrNewsLetter.vue'

describe('DsfrNewsLetter', () => {
  it('should mount DsfrNewsLetter', () => {
    // Given
    const title = 'Abonnez-vous à notre lettre d’information'
    const description = 'Lorem ipsum dolor sit amet'
    const email = 'toto@gmail.com'
    const labelEmail = 'Votre adresse électronique (ex. : nom@example.com)'
    const placeholder = 'nom@example.com'
    const hintText = 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel...'
    const buttonText = 'S’abonner'
    const buttonTitle = 'S’abonner à notre lettre d’information'

    // When
    const { getByText, getByDisplayValue, getByPlaceholderText } = render(DsfrNewsLetter, {
      global: {
      },
      props: {
        title,
        description,
        email,
        labelEmail,
        placeholder,
        hintText,
        buttonText,
        buttonTitle,
      },
    })

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)
    const emailInputEl = getByDisplayValue(email)
    const labelEmailEl = getByText(labelEmail)
    const placeholderEl = getByPlaceholderText(placeholder)
    const hintTextEl = getByText(hintText)
    const buttonTextEl = getByText(buttonText)

    // Then
    expect(titleEl.tagName).toBe('H3')
    expect(titleEl).toHaveClass('fr-follow__title')
    expect(descriptionEl.tagName).toBe('P')
    expect(descriptionEl).toHaveClass('fr-follow__desc')
    expect(emailInputEl.tagName).toBe('INPUT')
    expect(emailInputEl).toHaveClass('fr-input')
    expect(labelEmailEl.tagName).toBe('LABEL')
    expect(labelEmailEl).toHaveClass('fr-label')
    expect(placeholderEl).toHaveAttribute('placeholder', placeholder)
    expect(hintTextEl.tagName).toBe('P')
    expect(hintTextEl).toHaveClass('fr-hint-text')
    expect(buttonTextEl.tagName).toBe('BUTTON')
    expect(buttonTextEl).toHaveClass('fr-btn')
    expect(buttonTextEl).toHaveAttribute('title', buttonTitle)
  })
})
