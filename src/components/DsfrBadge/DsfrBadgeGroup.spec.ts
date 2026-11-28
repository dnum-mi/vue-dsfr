import { render } from '@testing-library/vue'

import DsfrBadgeGroup from './DsfrBadgeGroup.vue'

describe('DsfrBadgeGroup', () => {
  it('should render a group of badges in a ul.fr-badges-group', () => {
    // Given
    const badges = [
      { label: 'Badge 1' },
      { label: 'Badge 2', type: 'success' },
      { label: 'Badge 3', small: true },
    ]
    // When
    const { container, getByText } = render(DsfrBadgeGroup, {
      props: {
        badges,
      },
    })
    const ul = container.querySelector('ul.fr-badges-group')

    // Then
    expect(ul).not.toBeNull()
    expect(ul?.children).toHaveLength(3)
    badges.forEach(({ label }) => {
      const badge = getByText(label).parentElement
      expect(badge?.tagName).toBe('SPAN')
      expect(badge).toHaveClass('fr-badge')
      expect(badge?.parentElement?.tagName).toBe('LI')
    })
  })

  it('should pass HTML attributes such as style to each badge', () => {
    // Given
    const badges = [
      { label: 'Badge long', ellipsis: true, style: 'max-width: 150px' },
    ]
    // When
    const { getByText } = render(DsfrBadgeGroup, {
      props: {
        badges,
      },
    })
    const badge = getByText('Badge long').parentElement

    // Then
    expect(badge).not.toBeNull()
    expect(badge?.getAttribute('style') ?? '').toContain('max-width')
  })

  it('should render an empty group when no badges are given', () => {
    // When
    const { container } = render(DsfrBadgeGroup, {
      props: {
        badges: [],
      },
    })
    const ul = container.querySelector('ul.fr-badges-group')

    // Then
    expect(ul).not.toBeNull()
    expect(ul?.children).toHaveLength(0)
  })
})
