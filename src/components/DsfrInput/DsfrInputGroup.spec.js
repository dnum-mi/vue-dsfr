import { render } from '@testing-library/vue'

import DsfrInputGroup from './DsfrInputGroup.vue'

describe('DsfrInputGroup', () => {
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
