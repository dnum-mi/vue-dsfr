import { fireEvent, render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

import DsfrDataTable from './DsfrDataTable.vue'

describe('DsfrDataTable', () => {
  it('should render a simple data table with headers and rows', () => {
    // Given
    const title = 'Test Table'
    const headersRow = ['Name', 'Age', 'City']
    const rows = [
      ['Alice', '25', 'Paris'],
      ['Bob', '30', 'Lyon'],
      ['Charlie', '35', 'Marseille'],
    ]

    // When
    const { getByText } = render(DsfrDataTable, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        headersRow,
        rows,
      },
    })

    // Then
    expect(getByText('Alice')).toBeTruthy()
    expect(getByText('Bob')).toBeTruthy()
    expect(getByText('Charlie')).toBeTruthy()
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
          VIcon,
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
          VIcon,
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
    await fireEvent.click(nameHeader!)

    // Then
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')

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
          VIcon,
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

    // Click once for ascending
    await fireEvent.click(nameHeader!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')

    // Click twice for descending
    await fireEvent.click(nameHeader!)

    // Then
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')
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
          VIcon,
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
          VIcon,
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
    const ageHeader = getByText('Age').closest('th')
    const cityHeader = getByText('City').closest('th')

    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
    expect(ageHeader!.getAttribute('aria-sort')).toBe('none')
    expect(cityHeader!.getAttribute('aria-sort')).toBeNull() // Not sortable

    // Click on name to sort
    await fireEvent.click(nameHeader!)
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
          VIcon,
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

    // Initial state
    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')

    // First click - ascending
    await fireEvent.click(nameHeader!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('ascending')

    // Second click - descending
    await fireEvent.click(nameHeader!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('descending')

    // Third click - back to none (unsorted)
    await fireEvent.click(nameHeader!)
    expect(nameHeader!.getAttribute('aria-sort')).toBe('none')
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
          VIcon,
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
})
