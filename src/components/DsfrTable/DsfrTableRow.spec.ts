import { fireEvent, render } from '@testing-library/vue'

import DsfrTableRow from './DsfrTableRow.vue'

import { spy } from '../../../tests/unit/test-utils.js'

describe('DsfrTableRow', () => {
  it('should render simple row', () => {
    // Given
    const rowContent = 'Row content'

    // When
    const { container } = render(DsfrTableRow, {
      slots: {
        default: rowContent,
      },
    })

    // Then
    const trEl = container.querySelector('tr')
    expect(trEl).toContainHTML(rowContent)
  })

  it('should render row with a click', async () => {
    // Given
    const rowData = ['bla', 'ble', 'bli']
    const onClick = spy()

    // When
    const { container } = render(DsfrTableRow, {
      props: {
        rowData,
        rowAttrs: {
          onClick,
        },
      },
    })

    const trEl = container.querySelector('tr')
    const tdEls = container.querySelectorAll('td')
    await fireEvent.click(trEl)

    // Then
    expect(tdEls).toHaveLength(rowData.length)
    expect(onClick).toHaveBeenCalled()
  })
})
