import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

import Segmented from './DsfrSegmented.vue'

describe('DsfrSegmented', () => {
  it('should render a radio button with label in div', () => {
    // Given
    const label = 'Segemented label'
    const value = 1
    const name = 'segmented-name'

    // When
    const { getByText, getByDisplayValue } = render(Segmented, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        value,
        name,
      },
    })

    const labelEl = getByText(label)
    const inputRadio = getByDisplayValue(value)

    // Then
    expect(labelEl).toHaveClass('fr-label')
    expect(inputRadio).toBeInTheDocument()
    expect(labelEl.getAttribute('for')).toBe(inputRadio.id)
  })
})
