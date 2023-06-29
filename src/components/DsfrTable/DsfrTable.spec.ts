import { render } from '@testing-library/vue'

import DsfrTable from './DsfrTable.vue'
import DsfrTag from '../DsfrTag/DsfrTag.vue'

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
})
