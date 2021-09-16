import { render } from '@testing-library/vue'

import DsfrTag from './DsfrTag.vue'
import DsfrTags from './DsfrTags.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTag', () => {
  it('should render simple tag', () => {
    // Given
    const label = 'Tag simple'
    const icon = 'ri-arrow-left-line'

    // When
    const { getByText } = render(DsfrTag, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        icon,
      },
    })

    const firstTagEl = getByText(label)

    // Then
    expect(firstTagEl.parentNode).toHaveClass('fr-tag')
  })

  it('should render small simple tag', () => {
    // Given
    const label = 'Tag simple'
    const icon = 'ri-arrow-left-line'

    // When
    const { getByText } = render(DsfrTag, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
        icon,
        sm: true,
      },
    })

    const firstTagEl = getByText(label)

    // Then
    expect(firstTagEl.parentNode).toHaveClass('fr-tag')
    expect(firstTagEl.parentNode).toHaveClass('fr-tag--sm')
  })
})

describe('DsfrTags', () => {
  it('should render two tags', () => {
    // Given
    const label = 'Tag simple'
    const label2 = 'Tag simple 2'
    const tags = [
      {
        label,
      },
      {
        label: label2,
        icon: 'ri-arrow-left-line',
      },
    ]

    // When
    const { getByText } = render(DsfrTags, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        tags,
      },
    })

    const firstTagEl = getByText(label)
    const secondTagEl = getByText(label2)

    // Then
    expect(firstTagEl.parentNode).toHaveClass('fr-tag')
    expect(secondTagEl.parentNode).toHaveClass('fr-tag')
  })
})
