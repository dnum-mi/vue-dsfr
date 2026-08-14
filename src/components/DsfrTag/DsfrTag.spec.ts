import type { DsfrTagsProps } from './DsfrTags.types'

import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import VIcon from '../VIcon/VIcon.vue'

import DsfrTag from './DsfrTag.vue'
import DsfrTags from './DsfrTags.vue'

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
    expect(firstTagEl).toHaveClass('fr-tag')
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
        small: true,
      },
    })

    const firstTagEl = getByText(label)

    // Then
    expect(firstTagEl).toHaveClass('fr-tag')
    expect(firstTagEl).toHaveClass('fr-tag--sm')
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
    expect(firstTagEl).toHaveClass('fr-tag')
    expect(secondTagEl).toHaveClass('fr-tag')
  })

  it('déduit l’état sélectionné depuis modelValue', () => {
    // Étant donné
    type TagValue = 'fruit' | 'legume'
    const tags: DsfrTagsProps<TagValue>['tags'] = [
      {
        label: 'Les fruits',
        selectable: true,
        value: 'fruit',
      },
      {
        label: 'Les légumes',
        selectable: true,
        value: 'legume',
      },
    ]

    // Quand
    const { getByRole } = render(DsfrTags, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        modelValue: ['fruit'],
        tags,
      },
    })

    const selectedTag = getByRole('button', { name: 'Les fruits' })
    const unselectedTag = getByRole('button', { name: 'Les légumes' })

    // Alors
    expect(selectedTag).toHaveAttribute('aria-pressed', 'true')
    expect(unselectedTag).toHaveAttribute('aria-pressed', 'false')
  })
})
