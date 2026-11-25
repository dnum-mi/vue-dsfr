import { render } from '@testing-library/vue'

import DsfrInputGroup from './DsfrInputGroup.vue'

describe('DsfrInputGroup', () => {
  it('should disable DsfrInputGroup with disabled="true"', () => {
    // Given
    const descriptionId = 'my-id'
    const inputGroupId = 'my-group-id'
    const disabled = true

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        descriptionId,
        inputGroupId,
        disabled,

      },
    })

    // Then

    expect(getByTestId(inputGroupId)).toHaveClass('fr-input-group--disabled')
    expect(getByTestId(inputGroupId).querySelector('input')).toHaveProperty('disabled')
  })

  it('should not disable DsfrInputGroup with disabled="false"', () => {
    // Given
    const descriptionId = 'my-id'
    const inputGroupId = 'my-group-id'
    const disabled = false

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        descriptionId,
        inputGroupId,
        disabled,
      },
    })

    // Then

    expect(getByTestId(inputGroupId)).not.toHaveClass('fr-input-group--disabled')
    expect(getByTestId(inputGroupId).querySelector('input')).toHaveProperty('disabled', false)
  })

  it('should render DsfrInputGroup with error message', () => {
    // Given
    const errorMessage = 'my error message'
    const descriptionId = 'my-id'

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        errorMessage,
        descriptionId,
      },
    })

    // Then
    expect(getByTestId(descriptionId)).toHaveTextContent(errorMessage)
  })

  it('should render DsfrInputGroup with valid message', () => {
    // Given
    const validMessage = 'my valid message'
    const descriptionId = 'my-id'

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        validMessage,
        descriptionId,
      },
    })

    // Then
    expect(getByTestId(descriptionId)).toHaveTextContent(validMessage)
  })
  it('should set aria-invalid on the input when there is an error', () => {
    // When
    const { container } = render(DsfrInputGroup, {
      props: {
        errorMessage: 'Champ obligatoire',
        descriptionId: 'my-id',
      },
    })

    // Then
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'my-id')
  })

  it('should not set aria-invalid on the input without error', () => {
    // When
    const { container } = render(DsfrInputGroup, {
      props: {
        validMessage: 'Champ valide',
      },
    })

    // Then
    expect(container.querySelector('input')).not.toHaveAttribute('aria-invalid')
  })

  it('should not be in error with an empty error messages array', () => {
    // Given
    const inputGroupId = 'my-input-group'

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      props: {
        inputGroupId,
        errorMessage: [],
      },
    })

    // Then
    const group = getByTestId(inputGroupId)
    const input = group.querySelector('input')
    expect(group).not.toHaveClass('fr-input-group--error')
    expect(input).not.toHaveClass('fr-input--error')
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
  })

  it('should display the valid message when the error messages array is empty', () => {
    // Given
    const inputGroupId = 'my-input-group'
    const validMessage = 'Champ valide'

    // When
    const { getByTestId, getByText } = render(DsfrInputGroup, {
      props: {
        inputGroupId,
        descriptionId: 'my-id',
        errorMessage: [],
        validMessage,
      },
    })

    // Then
    expect(getByTestId(inputGroupId)).toHaveClass('fr-input-group--valid')
    expect(getByText(validMessage)).toHaveClass('fr-valid-text')
    expect(getByTestId(inputGroupId).querySelector('input')).toHaveAttribute('aria-describedby', 'my-id')
  })

  it('should link every error message of an array to the input', () => {
    // When
    const { container } = render(DsfrInputGroup, {
      props: {
        descriptionId: 'my-id',
        errorMessage: ['Erreur 1', 'Erreur 2'],
      },
    })

    // Then
    expect(container.querySelector('input')).toHaveAttribute('aria-describedby', 'my-id-1 my-id-2')
    expect(container.querySelector('#my-id-2')).toHaveTextContent('Erreur 2')
  })
})
