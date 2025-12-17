import { fireEvent, render } from '@testing-library/vue'
import { expect } from 'vitest'

import DsfrDataTable from './DsfrDataTable.vue'

describe('DsfrDataTable', () => {
  it('should render a simple data table with headers and rows according to dsfr markup', () => {
    // Given
    const title = 'Test Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
      ['Charlie', '35', 'Marseille'],
    ]

    // When
    const { getByText, container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
      },
    })

    // Then
    const mainContainer = container.querySelector('div.fr-table')
    expect(mainContainer).toBeTruthy()
    const firstSubContainer = mainContainer?.querySelector('div.fr-table__wrapper')
    expect(firstSubContainer).toBeTruthy()
    const secondSubContainer = firstSubContainer?.querySelector('div.fr-table__container')
    expect(secondSubContainer).toBeTruthy()
    const thirdSubContainer = secondSubContainer?.querySelector('div.fr-table__content')
    expect(thirdSubContainer).toBeTruthy()
    const tableEl = thirdSubContainer?.querySelector('table')
    expect(tableEl).toBeTruthy()
    const captionEL = tableEl?.querySelector('caption')
    expect(captionEL).toBeTruthy()
    expect(captionEL).toBe(getByText(title))
    const theadEl = tableEl?.querySelector('thead')
    expect(theadEl).toBeTruthy()
    const headerCells = theadEl?.querySelectorAll('th[scope="col"]')
    expect(headerCells?.length).toBe(headersRow.length)
    headersRow.forEach((header, index) => {
      expect(headerCells?.[index].textContent).toContain(header)
    })
    const tbodyEl = tableEl?.querySelector('tbody')
    expect(tbodyEl).toBeTruthy()
    const rowElements = tbodyEl?.querySelectorAll('tr')
    expect(rowElements?.length).toBe(rows.length)
    rows.forEach((row, rowIndex) => {
      const cells = rowElements?.[rowIndex].querySelectorAll(['th', 'td'].join(','))
      expect(cells?.length).toBe(row.length)
    })

    expect(getByText('Alice')).toBeTruthy()
    expect(getByText('Bob')).toBeTruthy()
    expect(getByText('Charlie')).toBeTruthy()
  })

  it('should render caption even if noCaption is true', () => {
    // Given
    const title = 'Test Table with Caption undisplayed'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]
    const noCaption = true

    // When
    const { getByText, container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        noCaption,
      },
    })

    // Then
    const captionEl = container.querySelector('caption')
    expect(captionEl).toBeTruthy()
    expect(captionEl).toBe(getByText(title))
  })

  it('should render table classes based on props', () => {
    // Given
    const title = 'Test Table with Classes'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]
    const bottomCaption = true
    const captionDetail = 'Table detail text'
    const verticalBorders = true
    const multilineTable = true
    const size = 'sm'
    const noScroll = true

    // When
    const { container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        bottomCaption,
        captionDetail,
        verticalBorders,
        multilineTable,
        size,
        noScroll,
      },
    })

    // Then
    const tableDiv = container.querySelector('div.fr-table')
    expect(tableDiv).toBeTruthy()
    expect(tableDiv?.classList.contains('fr-table--caption-bottom')).toBe(true)
    expect(tableDiv?.classList.contains('fr-table--bordered')).toBe(true)
    expect(tableDiv?.classList.contains('fr-table--no-scroll')).toBe(true)
    expect(tableDiv?.classList.contains('fr-table--multiline')).toBe(true)
    expect(tableDiv?.classList.contains('fr-table--sm')).toBe(true)
    const captionEl = container.querySelector('caption')
    expect(captionEl).toBeTruthy()
    const captionDetailEl = captionEl?.querySelector('.fr-table__caption__desc')
    expect(captionDetailEl).toBeTruthy()
    expect(captionDetailEl?.textContent).toContain(captionDetail)
  })
  it('should render sortable columns with appropriate markup', async () => {
    // Given
    const title = 'Sortable Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: ['Name'],
      },
    })
    // Then

    const nameHeader = getByText('Name')
    const nameHeaderButton = nameHeader.querySelector('button')

    expect(nameHeader).toBeTruthy()
    expect(nameHeader?.textContent).toContain('Name')
    expect(nameHeaderButton).toBeTruthy()
    expect(nameHeaderButton?.classList.contains('fr-btn--sort')).toBe(true)
  })

  it('should set aria-sort="none" on sortable columns that are not currently sorted', () => {
    // Given
    const title = 'Sortable Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]

    // When
    const { container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    headers.forEach((header) => {
      expect(header.getAttribute('aria-sort')).toBe('none')
    })
  })

  it('should set aria-sort="ascending" on the currently sorted column when sorting ascending', async () => {
    // Given
    const title = 'Sortable Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    const nameHeader = getByText('Name').closest('th')
    const nameHeaderButton = nameHeader?.querySelector('button')

    // Click to sort ascending
    if (nameHeaderButton) {
      await fireEvent.click(nameHeaderButton)
    }

    // Then
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')
    expect(nameHeaderButton).toBeTruthy()
    expect(nameHeaderButton?.getAttribute('aria-sort')).toBe('ascending')

    const ageHeader = getByText('Age').closest('th')
    const cityHeader = getByText('City').closest('th')
    expect(ageHeader!.getAttribute('aria-sort')).toBe('none')
    expect(cityHeader!.getAttribute('aria-sort')).toBe('none')
  })

  it('should set aria-sort="descending" on the currently sorted column when sorting descending', async () => {
    // Given
    const title = 'Sortable Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    const nameHeader = getByText('Name').closest('th')
    const nameHeaderButton = nameHeader?.querySelector('button')

    // Click once for ascending
    await fireEvent.click(nameHeaderButton!)
    await setTimeout(() => {}, 1000) // Wait for DOM update
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')
    expect(nameHeaderButton?.getAttribute('aria-sort')).toBe('ascending')

    // Click twice for descending
    await fireEvent.click(nameHeaderButton!)

    // Then
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')
    expect(nameHeaderButton?.getAttribute('aria-sort')).toBe('descending')
  })

  it('should not set aria-sort on non-sortable tables', () => {
    // Given
    const title = 'Non-sortable Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
    ]

    // When
    const { container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: false,
      },
    })

    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    headers.forEach((header) => {
      expect(header.getAttribute('aria-sort')).toBeNull()
    })
  })

  it('should only set aria-sort on specifically sortable columns when sortableRows is an array', async () => {
    // Given
    const title = 'Partially Sortable Table'
    const headersRow = [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'city', label: 'City' },
    ]
    const rows = [
      { name: 'Alice', age: 25, city: 'Paris' },
      { name: 'Bob', age: 30, city: 'Lyon' },
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: ['name', 'age'], // Only name and age are sortable
      },
    })

    // Then
    const nameHeader = getByText('Name').closest('th')
    const nameHeaderButton = nameHeader!.querySelector('button')
    const ageHeader = getByText('Age').closest('th')
    const cityHeader = getByText('City').closest('th')
    const cityHeaderButton = cityHeader!.querySelector('button')

    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
    expect(ageHeader!.getAttribute('aria-sort')).toBe('none')
    expect(cityHeader!.getAttribute('aria-sort')).toBeNull() // Not sortable
    expect(cityHeaderButton).toBeNull() // No button for non-sortable column

    // Click on name to sort
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')
    expect(ageHeader!.getAttribute('aria-sort')).toBe('none')
    expect(cityHeader!.getAttribute('aria-sort')).toBeNull()
  })

  it('should cycle through sort states: none -> ascending -> descending -> none', async () => {
    // Given
    const title = 'Sortable Table'
    const headersRow = ['Name']
    const rows = [['Alice'], ['Bob']]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    const nameHeader = getByText('Name').closest('th')
    const nameHeaderButton = nameHeader?.querySelector('button')

    // Initial state
    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
    expect(nameHeaderButton!.getAttribute('aria-sort')).toBe('none')

    // First click - ascending
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')
    expect(nameHeaderButton!.getAttribute('aria-sort')).toBe('ascending')

    // Second click - descending
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')
    expect(nameHeaderButton!.getAttribute('aria-sort')).toBe('descending')

    // Third click - back to none (unsorted)
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
    expect(nameHeaderButton!.getAttribute('aria-sort')).toBe('none')
  })

  it('should handle empty rows array without errors', () => {
    // Given
    const title = 'Empty Table'
    const headersRow = ['Name', 'Age']
    const rows: string[][] = []

    // When
    const { container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    expect(headers.length).toBe(2)
    headers.forEach((header) => {
      expect(header.getAttribute('aria-sort')).toBe('none')
    })
  })

  it('should handle single row table correctly', () => {
    // Given
    const title = 'Single Row Table'
    const headersRow = ['Name', 'Age']
    const rows = [['Alice', '25']]

    // When
    const { container } = render(DsfrDataTable, {
      global: {
        components: {
        },
      },
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
      },
    })

    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    expect(headers.length).toBe(2)
    headers.forEach((header) => {
      expect(header.getAttribute('aria-sort')).toBe('none')
    })
    const rowElements = container.querySelectorAll('tbody tr')
    expect(rowElements.length).toBe(1)
    const cells = rowElements[0].querySelectorAll('td')
    expect(cells.length).toBe(2)
    expect(cells[0].textContent).toContain('Alice')
    expect(cells[1].textContent).toContain('25')
  })
})
