import { render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import SearchBar from './DsfrSearchBar.vue'

describe('SearchBar', () => {
  it('should render searchbar', () => {
    // Given
    const label = 'Search label'
    const buttonText = 'Button text'

    // When
    const { getByText } = render(SearchBar, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        buttonText,
        label,
      },
    })

    // Then
    expect(getByText(label)).toHaveClass('fr-label')
    expect(getByText(buttonText).parentElement).toHaveClass('fr-btn')
  })
})
