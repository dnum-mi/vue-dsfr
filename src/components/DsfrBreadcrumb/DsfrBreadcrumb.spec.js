import { render } from '@testing-library/vue'

import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

describe('DsfrBreadcrumb', () => {
  it('should render DsfrBreadcrumb with right content', async () => {
    // Given
    const secondLinkText = 'Lien 2'
    const currentPageText = 'Lien 3'

    const links = [
      {
        to: '/lien-1',
        text: 'Lien 1',
      },
      {
        to: '/lien-2',
        text: secondLinkText,
      },
      {
        text: currentPageText,
      },
    ]

    // When
    const { getByRole, findAllByTestId } = render(DsfrBreadcrumb, {
      propsData: {
        links,
      },
    })

    const navEl = getByRole('navigation')
    const currentItemEl = await findAllByTestId('lis')

    // Then
    expect(navEl.tagName).toBe('NAV')
    expect(currentItemEl).toHaveLength(3)
  })
})
