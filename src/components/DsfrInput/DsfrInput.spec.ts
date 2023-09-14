import { render } from '@testing-library/vue'

import DsfrInput from './DsfrInput.vue'

describe('DsfrInput', () => {
  it('should render DsfrInput with visible label', () => {
    // Given
    const labelVisible = true
    const label = 'Search label'

    // When
    const { getByText } = render(DsfrInput, {
      props: {
        labelVisible,
        label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-label')
    expect(getByText(label)).not.toHaveClass('invisible')
  })

  it('should render DsfrInput with invisible label', () => {
    // Given
    const labelVisible = false
    const label = 'Search label'

    // When
    const { getByText } = render(DsfrInput, {
      props: {
        labelVisible,
        label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-label')
    expect(getByText(label)).toHaveClass('invisible')
  })

  it('should render DsfrInput with proper aria-describedby attribute if descriptionId is provided', () => {
    // Given
    const descriptionId = 'labelId'

    // When
    const { container } = render(DsfrInput, {
      props: {
        descriptionId,
      },
    })

    // Then
    const inputNode = container.querySelector('input')
    expect(inputNode).toHaveAttribute('aria-describedby', 'labelId')
  })

  it('should render DsfrInput without any aria-describedby attribute if descriptionId not provided', () => {
    // When
    const { container } = render(DsfrInput, {
      props: {
        descriptionId: undefined,
      },
    })

    // Then
    const inputNode = container.querySelector('input')
    expect(inputNode).not.toHaveAttribute('aria-describedby')
  })
})
