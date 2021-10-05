import { render } from '@testing-library/vue'

import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

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
      global: {
        components: {
          VIcon,
        },
      },
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

  it('should render DsfrBreadcrumb with no content', async () => {
    // Given

    // When
    const { getByRole } = render(DsfrBreadcrumb, {
      global: {
        components: {
          VIcon,
        },
      },
      propsData: {
      },
    })

    const navEl = getByRole('navigation')

    // Then
    expect(navEl.tagName).toBe('NAV')
  })
})
