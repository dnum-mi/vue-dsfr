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

  it('should mount DsfrNewsLetter only callout', () => {
    // Given
    const title = 'Abonnez-vous à notre lettre d’information'
    const description = 'Lorem ipsum dolor sit amet'
    const email = 'toto@gmail.com'
    const labelEmail = 'Votre adresse électronique (ex. : nom@example.com)'
    const placeholder = 'nom@example.com'
    const hintText = 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel...'
    const buttonText = 'S’abonner'
    const buttonTitle = 'S’abonner à notre lettre d’information'
    const onlyCallout = true

    // When
    const { getByText, queryByText, queryByDisplayValue, queryByPlaceholderText } = render(DsfrNewsLetter, {
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
        buttonAction: () => undefined,
        onlyCallout,
      },
    })

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)
    const emailInputEl = queryByDisplayValue(email)

    const labelEmailEl = queryByText(labelEmail)
    const placeholderEl = queryByPlaceholderText(placeholder)
    const hintTextEl = queryByText(hintText)
    const buttonTextEl = getByText(buttonText)

    // Then
    expect(titleEl.tagName).toBe('H3')
    expect(titleEl).toHaveClass('fr-follow__title')
    expect(descriptionEl.tagName).toBe('P')
    expect(descriptionEl).toHaveClass('fr-follow__desc')
    expect(emailInputEl).toBeNull()
    expect(labelEmailEl).toBeNull()
    expect(placeholderEl).toBeNull()
    expect(hintTextEl).toBeNull()
    expect(buttonTextEl.tagName).toBe('BUTTON')
    expect(buttonTextEl).toHaveClass('fr-btn')
    expect(buttonTextEl).toHaveAttribute('title', buttonTitle)
  })

  it('should associate the label with its own input', () => {
    // Given
    const labelEmail = 'Votre adresse électronique'

    // When
    const { container } = render(DsfrNewsLetter, { props: { labelEmail } })
    const label = container.querySelector('label')
    const input = container.querySelector('input')

    // Then
    expect(label).toHaveAttribute('for', input.id)
  })

  it('should describe the input by the error message and mark it invalid', () => {
    // Given
    const error = 'Le format de l’adresse électronique est incorrect'

    // When
    const { container } = render(DsfrNewsLetter, { props: { error } })
    const input = container.querySelector('input')
    const errorEl = container.querySelector('.fr-error-text')

    // Then
    expect(input).toHaveAttribute('aria-describedby', errorEl.id)
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveClass('fr-input--error')
  })

  it('should describe the input by the hint when there is no error', () => {
    // Given
    const hintText = 'Vous pouvez vous désabonner à tout moment'

    // When
    const { container } = render(DsfrNewsLetter, { props: { hintText } })
    const input = container.querySelector('input')
    const hintEl = container.querySelector('.fr-hint-text')

    // Then
    expect(input).toHaveAttribute('aria-describedby', hintEl.id)
  })

  it('should not describe the input by an empty hint', () => {
    // When
    const { container } = render(DsfrNewsLetter)

    // Then
    expect(container.querySelector('input')).not.toHaveAttribute('aria-describedby')
    expect(container.querySelector('.fr-hint-text')).toBeNull()
  })

  it('should give two newsletters distinct ids', () => {
    // When
    const { container } = render({
      components: { DsfrNewsLetter },
      template: '<div><DsfrNewsLetter hint-text="Indice" error="Erreur" /><DsfrNewsLetter hint-text="Indice" error="Erreur" /></div>',
    })
    const ids = Array.from(container.querySelectorAll('[id]')).map(el => el.id)

    // Then
    expect(ids).toHaveLength(8)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
