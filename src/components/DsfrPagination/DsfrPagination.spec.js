import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render, fireEvent } from '@testing-library/vue'

import Pagination from './DsfrPagination.vue'

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages', async () => {
    // Given
    const pages = [
      { label: '1', href: '/#', title: 'Page 1' },
      { label: '2', href: '/#', title: 'Page 2' },
      { label: '3', href: '/#', title: 'Page 3' },
      { label: '4', href: '/#', title: 'Page 4' },
      { label: '5', href: '/#', title: 'Page 5' },
    ]
    const currentPage = 1

    // When
    const { getByTitle, emitted } = render(Pagination, {
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

    const thirdLink = getByTitle('Page 3')
    await fireEvent.click(thirdLink)

    // Then
    expect(emitted()['update:currentPage']).toBeTruthy()
    expect(emitted()['update:currentPage'][0][0]).toBe(2)
  })
})
