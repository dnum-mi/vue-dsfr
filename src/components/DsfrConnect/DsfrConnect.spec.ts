import { render } from '@testing-library/vue'

import DsfrConnect from './DsfrConnect.vue'

describe('DsfrConnect', () => {
  it('affiche FranceConnect par défaut (sans variant)', () => {
    // Given / When
    const { getByRole, getByTitle } = render(DsfrConnect)

    const button = getByRole('button')
    const link = getByTitle("Qu'est-ce que FranceConnect ?")

    // Then
    expect(button).toHaveClass('fr-connect')
    expect(button).not.toHaveClass('fr-connect--plus')
    expect(button).not.toHaveClass('fr-connect--pro')
    expect(button.textContent).toContain('FranceConnect')
    expect(link).toHaveAttribute('href', 'https://franceconnect.gouv.fr/')
  })

  it('affiche FranceConnect+ avec variant="plus"', () => {
    // Given / When
    const { getByRole, getByTitle } = render(DsfrConnect, {
      props: { variant: 'plus' },
    })

    const button = getByRole('button')
    const link = getByTitle("Qu'est-ce que FranceConnect+ ?")

    // Then
    expect(button).toHaveClass('fr-connect--plus')
    expect(button.textContent).toContain('FranceConnect')
    expect(link).toHaveAttribute('href', 'https://franceconnect.gouv.fr/france-connect-plus')
  })

  it('affiche ProConnect avec variant="pro"', () => {
    // Given / When
    const { getByRole, getByTitle } = render(DsfrConnect, {
      props: { variant: 'pro' },
    })

    const button = getByRole('button')
    const link = getByTitle("Qu'est-ce que FranceConnect Pro ?")

    // Then
    expect(button).toHaveClass('fr-connect--pro')
    expect(button.textContent).toContain('ProConnect')
    expect(link).toHaveAttribute('href', 'https://franceconnect.gouv.fr/france-connect-pro')
  })

  it('affiche les textes en anglais avec lang="en"', () => {
    // Given / When
    const { getByTitle } = render(DsfrConnect, {
      props: { lang: 'en' },
    })

    const link = getByTitle('What is FranceConnect?')

    // Then
    expect(link).toHaveAttribute('href', 'https://franceconnect.gouv.fr/')
  })

  it('affiche les textes en espagnol avec variant="pro" et lang="es"', () => {
    // Given / When
    const { getByTitle } = render(DsfrConnect, {
      props: { variant: 'pro', lang: 'es' },
    })

    const link = getByTitle('¿Qué es FranceConnect Pro?')

    // Then
    expect(link).toHaveAttribute('href', 'https://franceconnect.gouv.fr/france-connect-pro')
  })

  it('revient au français pour une langue non reconnue', () => {
    // Given / When
    const { getByTitle } = render(DsfrConnect, {
      props: { lang: 'xx' },
    })

    // Then
    expect(getByTitle("Qu'est-ce que FranceConnect ?")).toBeDefined()
  })

  it('transmet les attributs natifs au bouton (disabled)', () => {
    // Given / When
    const { getByRole } = render(DsfrConnect, {
      attrs: { disabled: true },
    })

    const button = getByRole('button')

    // Then
    expect(button).toBeDisabled()
  })

  it('le lien s’ouvre dans un nouvel onglet', () => {
    // Given / When
    const { getByRole } = render(DsfrConnect)

    const link = getByRole('link')

    // Then
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
