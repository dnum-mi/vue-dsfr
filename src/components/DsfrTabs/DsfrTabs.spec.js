import { render } from '@testing-library/vue'

import DsfrTabs from './DsfrTabs.vue'

describe('DsfrTabs', () => {
  it('should render nice nav tabs', () => {
    // Given
    const tablistName = 'Liste d’onglet'
    const title1 = 'Titre 1'
    const tabTitles = [title1, 'Titre 2', 'Titre 3', 'Titre 4']
    const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

    // When
    const { getByText, getAllByRole } = render(DsfrTabs, {
      props: {
        tablistName,
        tabTitles,
        tabContents,
      },
    })

    const firstTabEl = getByText(title1)
    const tabTitleEls = getAllByRole('presentation')

    // Then
    expect(tabTitleEls[0]).toContainElement(firstTabEl)
  })
})
