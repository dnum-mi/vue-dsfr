import { render } from '@testing-library/vue'

import DsfrInput from './DsfrInput.vue'

describe('DsfrInput', () => {
  it('should render DsfrInput with visible label', () => {
    // Given
    const labelVisible = true
    const label = 'Search label'

    // When
    const { getByText } = render(DsfrInput, {
      stubs: ['v-icon'],
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
      stubs: ['v-icon'],
      props: {
        labelVisible,
        label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-label')
    expect(getByText(label)).toHaveClass('invisible')
  })
})
