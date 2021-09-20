import { render } from '@testing-library/vue'

import DsfrTabs from './DsfrTabs.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTabs', () => {
  it('should render nice nav tabs', () => {
    // Given
    const tablistName = 'Liste d’onglet'
    const title1 = 'Titre 1'
    const tabTitles = [
      { title: title1, id: 'tab1' },
      { title: 'Titre 2' },
      { title: 'Titre 3' },
      { title: 'Titre 4' },
    ]
    const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

    // When
    const { getByTestId, getAllByRole } = render(DsfrTabs, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        tablistName,
        tabTitles,
        tabContents,
      },
    })

    const firstTabEl = getByTestId('test-tab1')
    const tabTitleEls = getAllByRole('presentation')

    // Then
    expect(tabTitleEls[0]).toContainElement(firstTabEl)
    expect(tabTitleEls[0].textContent).toContain(title1)
  })
})
