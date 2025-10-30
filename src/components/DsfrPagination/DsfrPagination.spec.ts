import { fireEvent, render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

import Pagination from './DsfrPagination.vue'

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages', async () => {
    // Given
    const pages = [
      { label: '1', href: '/#' },
      { label: '2', href: '/#' },
      { label: '3', href: '/#' },
      { label: '4', href: '/#' },
      { label: '5', href: '/#' },
    ]
    const currentPage = 1

    // When
    const { getByText, emitted } = render(Pagination, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        pages,
        currentPage,
      },
    })

    const thirdLink = getByText('3')
    await fireEvent.click(thirdLink)

    // Then
    expect(emitted()['update:current-page']).toBeTruthy()
    expect(emitted()['update:current-page'][0][0]).toBe(2)
  })
})
