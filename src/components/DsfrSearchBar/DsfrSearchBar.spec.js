import { render } from '@testing-library/vue'

import SearchBar from './DsfrSearchBar.vue'

describe('SearchBar', () => {
  it('should render searchbar with visible label', () => {
    // Given
    const labelVisible = true
    const label = 'Search label'

    // When
    const { getByText } = render(SearchBar, {
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

  it('should render searchbar with invisible label', () => {
    // Given
    const labelVisible = false
    const label = 'Search label'

    // When
    const { getByText } = render(SearchBar, {
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
