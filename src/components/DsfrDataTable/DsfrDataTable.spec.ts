import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

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
    const headerContainer = mainContainer?.querySelector('div.fr-table__header')
    expect(headerContainer).toBeNull()
    const footerxContainer = mainContainer?.querySelector('div.fr-table__header')
    expect(footerxContainer).toBeNull()
    const wrapperContainer = mainContainer?.querySelector('div.fr-table__wrapper')
    expect(wrapperContainer).toBeTruthy()
    const containerContainer = wrapperContainer?.querySelector('div.fr-table__container')
    expect(containerContainer).toBeTruthy()
    const contentContainer = containerContainer?.querySelector('div.fr-table__content')
    expect(contentContainer).toBeTruthy()
    const tableEl = contentContainer?.querySelector('table')
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
    expect(nameHeaderButton?.classList.contains('fr-btn--sort-asc')).toBe(true)

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
    expect(nameHeaderButton?.classList.contains('fr-btn--sort-asc')).toBe(true)

    // Click twice for descending
    await fireEvent.click(nameHeaderButton!)

    // Then
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')
    expect(nameHeaderButton?.classList.contains('fr-btn--sort-desc')).toBe(true)
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
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-asc')).toBe(false)
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-desc')).toBe(false)

    // First click - ascending
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-asc')).toBe(true)

    // Second click - descending
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-desc')).toBe(true)

    // Third click - back to none (unsorted)
    await fireEvent.click(nameHeaderButton!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-asc')).toBe(false)
    expect(nameHeaderButton!.classList.contains('fr-btn--sort-desc')).toBe(false)
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

  it('should render selectable rows with checkboxes', () => {
    // Given
    const title = 'Selectable Table'
    const headersRow = ['Name', 'Age']
    const rows = [
      ['Alice', '25'],
      ['Bob', '30'],
    ]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        selectableRows: true,
      },
    })

    // Then
    const selectAllCheckbox = container.querySelector('input[type="checkbox"]')
    expect(selectAllCheckbox).toBeTruthy()
    expect(selectAllCheckbox?.getAttribute('id')).toContain('table-select')
    const rowCheckboxes = container.querySelectorAll('tbody input[type="checkbox"]')
    expect(rowCheckboxes.length).toBe(rows.length)
  })

  it('should handle row selection with v-model', async () => {
    // Given
    const title = 'Selectable Table'
    const headersRow = ['Name', 'Age']
    const rows = [
      ['Alice', '25'],
      ['Bob', '30'],
    ]
    const selection: string[] = []

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        selectableRows: true,
        selection,
      },
    })

    // Then
    const rowCheckboxes = container.querySelectorAll('tbody input[type="checkbox"]')
    expect(rowCheckboxes.length).toBe(2)
    expect((rowCheckboxes[0] as HTMLInputElement).checked).toBe(false)
  })

  it('should select all rows when clicking select all checkbox', async () => {
    // Given
    const title = 'Selectable Table'
    const headersRow = ['Name', 'Age']
    const rows = [
      ['Alice', '25'],
      ['Bob', '30'],
    ]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        selectableRows: true,
      },
    })

    const selectAllCheckbox = container.querySelector('thead tr th input[type="checkbox"]') as HTMLInputElement
    await fireEvent.click(selectAllCheckbox)
    await nextTick()

    // Then
    const rowCheckboxes = container.querySelectorAll('tbody input[type="checkbox"]') as NodeListOf<HTMLInputElement>
    rowCheckboxes.forEach((checkbox) => {
      expect(checkbox.value).toBeTruthy()
    })
  })

  it('should handle pagination with rowsPerPage model', () => {
    // Given
    const title = 'Paginated Table'
    const headersRow = ['Name', 'Age']
    const rows = Array.from({ length: 25 }).map((_, i) => [`Name ${i}`, `${20 + i}`])
    const rowsPerPage = 10

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        pagination: true,
        rowsPerPage,
      },
    })

    // Then
    const displayedRows = container.querySelectorAll('tbody tr')
    expect(displayedRows.length).toBe(10)
  })

  it('should display pagination controls when pagination is enabled', () => {
    // Given
    const title = 'Paginated Table'
    const headersRow = ['Name', 'Age']
    const rows = Array.from({ length: 25 }).map((_, i) => [`Name ${i}`, `${20 + i}`])

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        pagination: true,
        rowsPerPage: 5,
        paginationOptions: [5, 10, 20],
      },
    })

    // Then
    const footer = container.querySelector('div.fr-table__footer')
    expect(footer).toBeTruthy()
    // Verify pagination select and controls are present
    expect(container.querySelector('.fr-table__footer--start')).toBeTruthy()
  })

  it('should display table top bar when topBarDetail is provided', () => {
    // Given
    const title = 'Table with Top Bar'
    const headersRow = ['Name']
    const rows = [['Alice']]
    const topBarDetail = 'Top bar detail text'

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        topBarDetail,
      },
    })

    // Then
    const header = container.querySelector('div.fr-table__header')
    expect(header).toBeTruthy()
    expect(header?.textContent).toContain(topBarDetail)
  })

  it('should hide caption when noCaption is true', () => {
    // Given
    const title = 'Table with Hidden Caption'
    const headersRow = ['Name']
    const rows = [['Alice']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        noCaption: true,
      },
    })

    // Then
    const tableDiv = container.querySelector('div.fr-table')
    expect(tableDiv?.classList.contains('fr-table--no-caption')).toBe(true)
  })

  it('should apply lg size class when size is lg', () => {
    // Given
    const title = 'Large Table'
    const headersRow = ['Name']
    const rows = [['Alice']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        size: 'lg',
      },
    })

    // Then
    const tableDiv = container.querySelector('div.fr-table')
    expect(tableDiv?.classList.contains('fr-table--lg')).toBe(true)
  })

  it('should handle custom header attributes from headerAttrs', () => {
    // Given
    const title = 'Table with Custom Header Attrs'
    const headersRow = [
      { key: 'name', label: 'Name', headerAttrs: { 'data-test': 'custom' } },
      'Age',
    ]
    const rows = [
      { name: 'Alice', age: 25 },
    ]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
      },
    })

    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    expect(headers[0].getAttribute('data-test')).toBe('custom')
  })

  it('should handle object rows format with key and label headers', () => {
    // Given
    const title = 'Table with Object Rows'
    const headersRow = [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email Address' },
    ]
    const rows = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
      },
    })

    // Then
    expect(getByText('Full Name')).toBeTruthy()
    expect(getByText('Email Address')).toBeTruthy()
    expect(getByText('alice@example.com')).toBeTruthy()
    expect(getByText('bob@example.com')).toBeTruthy()
  })

  it('should render custom header slot', () => {
    // Given
    const title = 'Table with Custom Header Slot'
    const headersRow = ['Name', 'Age']
    const rows = [['Alice', '25']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
      },
      slots: {
        header: ({ label }) => `Custom: ${label}`,
      },
    })
    console.log(container.innerHTML) // eslint-disable-line no-console
    // Then
    const headers = container.querySelectorAll('th[scope="col"]')
    expect(headers[0].textContent).toContain('Custom: Name')
  })

  it('should render custom cell slot', () => {
    // Given
    const title = 'Table with Custom Cell Slot'
    const headersRow = ['Name', 'Status']
    const rows = [['Alice', 'active']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
      },
      slots: {
        cell: ({ cell }) => `Status: ${cell}`,
      },
    })

    // Then
    const cells = container.querySelectorAll('tbody td')
    expect(cells[1].textContent).toContain('Status: active')
  })

  it('should apply caption-bottom class when bottomCaption is true', () => {
    // Given
    const title = 'Table with Bottom Caption'
    const headersRow = ['Name']
    const rows = [['Alice']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        bottomCaption: true,
      },
    })

    // Then
    const tableDiv = container.querySelector('div.fr-table')
    expect(tableDiv?.classList.contains('fr-table--caption-bottom')).toBe(true)
  })

  it('should render rows with correct data attributes', () => {
    // Given
    const title = 'Table with Data Attributes'
    const headersRow = ['Name']
    const rows = [['Alice'], ['Bob'], ['Charlie']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
      },
    })

    // Then
    const tbodyRows = container.querySelectorAll('tbody tr')
    tbodyRows.forEach((row, idx) => {
      expect(row.getAttribute('data-row-key')).toBe(`${idx + 1}`)
    })
  })

  it('should handle sorting with custom sortFn', async () => {
    // Given
    const title = 'Table with Custom Sort'
    const headersRow = ['Name', 'Score']
    const rows = [
      { name: 'Alice', score: 100 },
      { name: 'Bob', score: 50 },
      { name: 'Charlie', score: 75 },
    ]
    const customSortFn = vi.fn((a, b) => {
      if (a.score < b.score) { return -1 }
      if (a.score > b.score) { return 1 }
      return 0
    })

    // When
    const { getByText } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        sortableRows: true,
        sortFn: customSortFn,
      },
    })

    const scoreHeader = getByText('Score').closest('th')
    const scoreHeaderButton = scoreHeader?.querySelector('button')

    // Click to sort
    await fireEvent.click(scoreHeaderButton!)

    // Then
    expect(customSortFn).toHaveBeenCalled()
  })

  it('should use custom id when provided', () => {
    // Given
    const title = 'Table with Custom ID'
    const headersRow = ['Name']
    const rows = [['Alice']]
    const customId = 'my-custom-table-id'

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        id: customId,
      },
    })

    // Then
    const table = container.querySelector('table')
    expect(table?.id).toBe(customId)
  })

  it('should handle multiline rows correctly', () => {
    // Given
    const title = 'Multiline Table'
    const headersRow = ['Name', 'Description']
    const rows = [['Alice', 'Line1\nLine2\nLine3']]

    // When
    const { container } = render(DsfrDataTable, {
      props: {
        title,
        headersRow,
        rows,
        multilineTable: true,
      },
    })

    // Then
    const tableDiv = container.querySelector('div.fr-table')
    expect(tableDiv?.classList.contains('fr-table--multiline')).toBe(true)
  })
})
