import { fireEvent, render, waitFor } from '@testing-library/vue'

import DsfrTag from '../DsfrTag/DsfrTag.vue'

import DsfrTable from './DsfrTable.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTable', () => {
  it('should render simple table', () => {
    // Given
    const title = 'Utilisateurs'
    const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']
    const rows = [
      [
        'EGAUD',
        'Pierre-Louis',
        'pierre.egaud@ninja.com',
        '01 02 03 04 05',
        '06 01 02 03 04',
        {
          component: 'DsfrTag',
          label: 'Erreur',
          class: 'error',
        },
      ],
      [
        'DEBROIZE',
        'Clément',
        'clement.debroize@ninja.com',
        '01 02 03 04 05',
        '06 01 02 03 04',
        {
          component: 'DsfrTag',
          label: 'Succès',
          class: 'success',
        },
      ],
      [
        'ORMIERES',
        'Stan',
        'stan.ormieres@ninja.com',
        '01 02 03 04 05',
        '06 01 02 03 04',
        {
          component: 'DsfrTag',
          label: 'Info',
          class: 'info',
        },
      ],
    ]

    // When
    const { container } = render(DsfrTable, {
      global: {
        components: {
          VIcon,
          DsfrTag,
        },
      },
      props: {
        title,
        headers,
        rows,
      },
    })

    const trs = container.querySelectorAll('tr')
    const successEl = container.querySelectorAll('p.success')
    const errorEl = container.querySelectorAll('p.error')
    const infoEl = container.querySelectorAll('p.info')

    // Then
    expect(trs).toHaveLength(4)
    expect(successEl).toHaveLength(1)
    expect(errorEl).toHaveLength(1)
    expect(infoEl).toHaveLength(1)
  })

  it('should render empty table', () => {
    // Given
    const title = 'Utilisateurs'

    // When
    const { container } = render(DsfrTable, {
      global: {
        components: {
          VIcon,
          DsfrTag,
        },
      },
      props: {
        title,
      },
    })

    const trs = container.querySelectorAll('tr')

    // Then
    expect(trs).toHaveLength(0)
  })

  it('should update page count when rows change', async () => {
    // Given
    const title = 'Utilisateurs'

    const headers = ['Nom', 'Prénom']
    const rows = generateRowsWithTwoColumns(5)
    const props = {
      title,
      headers,
      rows,
      pagination: true,
    }

    const component = render(DsfrTable, {
      global: {
        components: {
          VIcon,
          DsfrTag,
        },
      },
      props,
    })

    // When
    const newRows = generateRowsWithTwoColumns(25)

    component.rerender({
      ...props,
      rows: newRows,
    })

    // Then
    await waitFor(() => {
      expect(component.getByText('Page 1 sur 3')).toBeDefined()
    })
  })

  it('should update page count when selected different number of results per page', async () => {
    // Given
    const title = 'Utilisateurs'

    const headers = ['Nom', 'Prénom']
    const rows = generateRowsWithTwoColumns(50)
    const props = {
      title,
      headers,
      rows,
      pagination: true,
    }

    const component = render(DsfrTable, {
      global: {
        components: {
          VIcon,
          DsfrTag,
        },
      },
      props,
    })

    // When
    const select = component.getByLabelText('Résultats par page :')
    await fireEvent.update(select, '25')

    // Then
    await waitFor(() => {
      expect(component.getByText('Page 1 sur 2')).toBeDefined()
    })
  })

  function generateRowsWithTwoColumns (numberOfRows: number): string[][] {
    const rows: string[][] = []

    for (let i = 0; i < numberOfRows; i++) {
      rows.push(['EGAUD', 'Pierre-Louis'])
    }

    return rows
  }
})
