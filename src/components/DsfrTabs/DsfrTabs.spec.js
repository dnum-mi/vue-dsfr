import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrTabs from './DsfrTabs.vue'

describe('DsfrTabs', () => {
  it('should render nice nav tabs', async () => {
    // Given
    const tabListName = 'Liste d’onglet'
    const title1 = 'Titre 1'
    const title2 = 'Titre 2'
    const title3 = 'Titre 3'

    const tabTitles = [
      { title: title1, tabId: 'tab1' },
      { title: title2 },
      { title: title3 },
      { title: 'Titre 4' },
    ]

    const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

    // When
    const { getByText, getByTestId, getAllByRole, getByRole } = render(DsfrTabs, {
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

    const tabListEl = getByRole('tablist')

    const firstTabEl = getByTestId('test-tab1')
    const secondTabEl = getByText(title2)
    const thirdTabEl = getByText(title3)
    const tabTitleEls = getAllByRole('presentation')
    const tabItemEls = getAllByRole('tab')

    let i = 0
    for (const tabItemEl of tabItemEls) {
      if (i === 0) {
        expect(tabItemEl).toHaveAttribute('aria-selected', 'true')
      } else {
        expect(tabItemEl).toHaveAttribute('aria-selected', 'false')
      }
      expect(tabItemEl).toHaveClass('fr-tabs__tab')
      i++
    }

    await fireEvent.click(secondTabEl)
    await fireEvent.click(thirdTabEl)
    await fireEvent.click(secondTabEl)

    i = 0
    for (const tabItemEl of tabItemEls) {
      if (i === 1) {
        expect(tabItemEl).toHaveAttribute('aria-selected', 'true')
      } else {
        expect(tabItemEl).toHaveAttribute('aria-selected', 'false')
      }
      i++
    }

    // Then
    expect(tabTitleEls[0]).toContainElement(firstTabEl)
    expect(tabTitleEls[0].textContent).toContain(title1)
    expect(tabTitleEls[0].textContent).toContain(title1)
    expect(tabListEl).toHaveClass('fr-tabs__list')
    expect(tabItemEls).toHaveLength(4)
  })

  it('should render tabs with proper aria-* attributes', async () => {
    // Given
    const tabListName = 'Liste d’onglet'
    const title1 = 'Titre 1'
    const title2 = 'Titre 2'
    const title3 = 'Titre 3'

    const tabTitles = [
      { title: title1 },
      { title: title2 },
      { title: title3 },
      { title: 'Titre 4' },
    ]

    const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

    // When
    const { container, getAllByRole, getByRole } = render(DsfrTabs, {
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

    getByRole('tablist')

    const tabItemEls = getAllByRole('tab')
    const panelEls = container.querySelectorAll('.fr-tabs__panel')

    // Then
    expect(tabItemEls).toHaveLength(tabTitles.length)
    expect(panelEls).toHaveLength(tabTitles.length)
    let i = 0
    for (const tabPanelEl of panelEls) {
      expect(tabPanelEl).toHaveAttribute('role', 'tabpanel')
      expect(tabItemEls[i]).toHaveAttribute('role', 'tab')
      expect(tabPanelEl).toHaveAttribute('aria-labelledby', tabItemEls[i].id)
      expect(tabItemEls[i]).toHaveAttribute('aria-controls', tabPanelEl.id)
      i++
    }
  })
})
