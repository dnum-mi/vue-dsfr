import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import DsfrTabs from './DsfrTabs.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTabs', () => {
  it('should render nice nav tabs', async () => {
    // Given
    const tabListName = 'Liste d’onglet'
    const title1 = 'Titre 1'
    const title2 = 'Titre 2'
    const title3 = 'Titre 3'

    const tabTitles = [
      { title: title1, id: 'tab1' },
      { title: title2 },
      { title: title3 },
      { title: 'Titre 4' },
    ]

    const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

    // When
    const { getByText, getByTestId, getAllByRole } = render(DsfrTabs, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        tabListName,
        tabTitles,
        tabContents,
      },
    })

    const firstTabEl = getByTestId('test-tab1')
    const secondTabEl = getByText(title2)
    const thirdTabEl = getByText(title3)
    const tabTitleEls = getAllByRole('presentation')
    await fireEvent.click(secondTabEl)
    await fireEvent.click(thirdTabEl)
    await fireEvent.click(secondTabEl)

    // Then
    expect(tabTitleEls[0]).toContainElement(firstTabEl)
    expect(tabTitleEls[0].textContent).toContain(title1)
    expect(tabTitleEls[0].textContent).toContain(title1)
  })
})
