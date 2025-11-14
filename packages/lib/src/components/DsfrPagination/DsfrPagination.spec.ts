import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import VIcon from '../VIcon/VIcon.vue'

import Pagination from './DsfrPagination.vue'

function makePages (n: number) {
  return Array.from({ length: n }, (_, i) => ({
    label: String(i + 1),
    href: `#p${i + 1}`,
    title: `page ${i + 1}`,
  }))
}

describe('DsfrPagination', () => {
  it('should render a list of links to give quick access to several pages without title if undefined', async () => {
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
    const { getByText, getAllByRole, emitted } = render(Pagination, {
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
    const pageLinks = getAllByRole('link', { name: /\d+/ })

    // Then
    expect(emitted()['update:current-page']).toBeTruthy()
    expect(emitted()['update:current-page'][0][0]).toBe(2)
    pageLinks.forEach((link) => {
      expect(link.getAttribute('title')).toBe(null)
    })
  })

  it('should render a list of links without title if equal to label', async () => {
    // Given
    const pages = [
      { label: '1', title: '1', href: '/#' },
      { label: '2', title: '2', href: '/#' },
      { label: '3', title: '3', href: '/#' },
      { label: '4', title: '4', href: '/#' },
      { label: '5', title: '5', href: '/#' },
    ]
    const currentPage = 1

    // When
    const { getAllByRole } = render(Pagination, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        pages,
        currentPage,
        currentPageTitleSuffix: ' - page courante',
      },
    })

    const pageLinks = getAllByRole('link', { name: /\d+/ })

    // Then
    pageLinks.forEach((link) => {
      if (link.ariaCurrent !== 'page') {
        expect(link.getAttribute('title')).toBe(null)
      } else {
        expect(link.getAttribute('title')).equal('2 - page courante')
      }
    })
  })

  it('should render a list of links with appropriate title', async () => {
    // Given
    const pages = makePages(6)

    // When
    const { getByRole } = render(Pagination, {
      global: { components: { VIcon } },
      props: {
        pages,
        currentPage: 2,
        truncLimit: 4,
        firstPageTitle: 'Première page',
        lastPageTitle: 'Dernière page',
        nextPageTitle: 'Page suivante',
        prevPageTitle: 'Page précédente',
        currentPageTitleSuffix: ' - page courante',
        ellipsisTitle: 'Pages intermédiaires non affichées',
      },
    })

    const nextLink = getByRole('link', { name: 'Page suivante' })
    const prevLink = getByRole('link', { name: 'Page précédente' })
    const firstLink = getByRole('link', { name: 'Première page' })
    const lastLink = getByRole('link', { name: 'Dernière page' })
    const currentLink = getByRole('link', { current: 'page' })
    // Then
    expect(nextLink.getAttribute('title')).toBe('Page suivante')
    expect(prevLink.getAttribute('title')).toBe('Page précédente')
    expect(firstLink.getAttribute('title')).toBe('Première page')
    expect(lastLink.getAttribute('title')).toBe('Dernière page')
    expect(currentLink.getAttribute('title')).toBe('page 3 - page courante')
  })

  it('renders navigation with default aria-label', () => {
    // Given
    const pages = makePages(3)

    // When
    const { getByRole } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages },
    })

    // Then
    expect(getByRole('navigation', { name: 'Pagination' })).toBeTruthy()
  })

  it('emits update:current-page when using navigation controls and page links', async () => {
    // Given
    const pages = makePages(5)

    // When
    const { getByRole, getByText, emitted } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages, currentPage: 1 },
    })

    await fireEvent.click(getByRole('link', { name: 'Page suivante' })) // next -> 2
    await fireEvent.click(getByRole('link', { name: 'Page précédente' })) // prev -> 0
    await fireEvent.click(getByRole('link', { name: 'Première page' })) // first -> 0
    await fireEvent.click(getByRole('link', { name: 'Dernière page' })) // last -> pages.length - 1
    await fireEvent.click(getByText('3')) // specific page -> index 2

    // Then
    const emits = emitted()['update:current-page']
    expect(emits).toBeTruthy()
    expect(emits![0][0]).toBe(2)
    expect(emits![1][0]).toBe(0)
    expect(emits![2][0]).toBe(0)
    expect(emits![3][0]).toBe(pages.length - 1)
    expect(emits![4][0]).toBe(2)
  })

  it('applies truncation and shows ellipsis when pages.length > truncLimit', () => {
    // Given
    const pages = makePages(15)
    const currentPage = 5

    // When
    const { getAllByRole, getAllByText } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages, currentPage },
    })

    // Then
    // find links whose accessible name contains a digit (covers cases with ellipsis + digits)
    const pageLinks = getAllByRole('link', { name: /\d+/ })
    const ellipsis = getAllByText('...')

    const firstEllipsis = ellipsis[0].textContent?.trim() ?? ''
    expect(firstEllipsis.includes('...')).toBe(true)

    expect(pageLinks.length).toBeLessThan(pages.length)

    const lastEllipsis = ellipsis[1].textContent?.trim() ?? ''
    expect(lastEllipsis.includes('...')).toBe(true)
  })

  it('should have correct title attributes on page links', () => {
    // Given
    const pages = makePages(5)

    // When
    const { getAllByRole } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages, currentPage: 0, currentPageTitleSuffix: ' - page courante' },
    })

    // Then
    const pageLinks = getAllByRole('link', { name: /\d+/ })
    pageLinks.forEach((link, index) => {
      if (link.ariaCurrent === 'page') {
        expect(link.getAttribute('title')).toBe(`page ${index + 1} - page courante`)
      } else {
        expect(link.getAttribute('title')).toBe(`page ${index + 1}`)
      }
    })
  })

  it('should have correct title attributes on page links when titles are equal to labels', () => {
    // Given
    const pages = makePages(5).map((page) => ({ ...page, title: page.label }))

    // When
    const { getAllByRole } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages, currentPage: 0, currentPageTitleSuffix: ' - page courante' },
    })

    // Then
    const pageLinks = getAllByRole('link', { name: /\d+/ })
    pageLinks.forEach((link) => {
      if (link.ariaCurrent !== 'page') {
        expect(link.getAttribute('title')).toBe(null)
      } else {
        expect(link.getAttribute('title')).equal('1 - page courante')
      }
    })
  })

  it('should disable navigation controls and add disabled class at boundaries', () => {
    // Given
    const pages = makePages(5)

    // When
    const { getByRole } = render(Pagination, {
      global: { components: { VIcon } },
      props: { pages, currentPage: 0 },
    })

    // Then
    expect(getByRole('link', { name: 'Première page' }).getAttribute('aria-disabled')).toBe('true')
    expect(getByRole('link', { name: 'Première page' }).classList.contains('fr-pagination__link--disabled')).toBe(true)
    expect(getByRole('link', { name: 'Page précédente' }).getAttribute('aria-disabled')).toBe('true')
    expect(getByRole('link', { name: 'Page précédente' }).classList.contains('fr-pagination__link--disabled')).toBe(true)
  })
})
