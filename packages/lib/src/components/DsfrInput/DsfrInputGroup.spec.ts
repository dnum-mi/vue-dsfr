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
})
