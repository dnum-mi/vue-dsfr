import { fireEvent, render } from '@testing-library/vue'

import DsfrTableHeaders from './DsfrTableHeaders.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrTableHeaders', () => {
  it('should render simple header row', async () => {
    // Given
    const onClick = jest.fn()
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
      expect(header).toContainHTML(headers[i].text || headers[i])
      i++
    }
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
