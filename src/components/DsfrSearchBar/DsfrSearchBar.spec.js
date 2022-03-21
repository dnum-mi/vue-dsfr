import { render } from '@testing-library/vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import SearchBar from './DsfrSearchBar.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('SearchBar', () => {
  it('should render searchbar with visible label', () => {
    // Given
    const labelVisible = true
    const label = 'Search label'

    // When
    const { getByText } = render(SearchBar, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        labelVisible,
        label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-label')
  })

  it('should render searchbar with invisible label', () => {
    // Given
    const labelVisible = false
    const label = 'Search label'

    // When
    const { getByText } = render(SearchBar, {
      global: {
        components: {
          VIcon,
        },
      },
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
