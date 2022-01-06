import { render, fireEvent } from '@testing-library/vue'
import { ref } from 'vue'

import Pagination from './DsfrPagination.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages', async () => {
    // Given
    const links = [
      { label: '1', url: '#page1', title: 'Page 1' },
      { label: '2', url: '#page2', title: 'Page 2' },
      { label: '3', url: '#page3', title: 'Page 3' },
      { label: '4', url: '#page4', title: 'Page 4' },
      { label: '5', url: '#page5', title: 'Page 5' },
    ]
    const currentPage = ref(1)

    // When
    const { getByTitle, emitted } = render(Pagination, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        links,
        currentPage,
      },
    })

    const thirdLink = getByTitle('Page 3')
    console.log('Current page is #' + currentPage.value)
    await fireEvent.click(thirdLink)
    console.log('Current page is #' + currentPage.value)

    // Then
    expect(emitted()['update:currentPage']).toBeTruthy()
    expect(emitted()['update:currentPage'][0][0]).toBe(3)
  })
})
