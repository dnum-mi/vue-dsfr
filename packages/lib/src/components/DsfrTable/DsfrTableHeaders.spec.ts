import { fireEvent, render } from '@testing-library/vue'
import { spy } from '@tests/unit/test-utils'

import VIcon from '../VIcon/VIcon.vue'

import DsfrTableHeaders from './DsfrTableHeaders.vue'

describe('DsfrTableHeaders', () => {
  it('should render simple header row', async () => {
    // Given
    const onClick = spy()
    const headers = [
      'Nom',
      'Prenom',
      {
        text: 'Email',
        headerAttrs: {
          onClick,
        },
      },
    ]

    // When
    const { container } = render(DsfrTableHeaders, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        headers,
      },
    })

    // Then
    const trEl = container.querySelector('tr')
    const thEls = trEl.querySelectorAll('th')
    const headerEmail = thEls[2]
    await fireEvent.click(headerEmail)
    expect(thEls).toHaveLength(headers.length)
    let i = 0
    for (const header of thEls) {
      // @ts-expect-error text will be present
      expect(header).toContainHTML((headers[i]).text || headers[i])
      i++
    }
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
