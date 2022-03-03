import { fireEvent, render } from '@testing-library/vue'

import DsfrConsent from './DsfrConsent.vue'

describe('DsfrContent', () => {
  it('should render a block consent with external link', async () => {
    const url = 'https://mapofmetal.com/'

    const { emitted, getByText, getByTestId } = render(DsfrConsent, {
      props: {
        url,
      },
      slots: {
        // default: slotContent,
      },
    })

    // getByText(slotContent)

    const acceptAllBtn = getByText('Tout accepter')
    const refuseAllBtn = getByText('Tout refuser')
    const customizeBtn = getByText('Personnaliser')

    await fireEvent.click(acceptAllBtn)

    expect(emitted()['accept-all'].length).toBe(1)

    await fireEvent.click(refuseAllBtn)

    expect(emitted()['refuse-all'].length).toBe(1)

    await fireEvent.click(customizeBtn)

    expect(emitted().customize.length).toBe(1)

    const isThisExternalLink = getByTestId('link')

    expect(isThisExternalLink).toHaveAttribute('href', url)
  })

  it('should render a block consent with internal link', async () => {
    const url = '/'

    const { getByTestId } = render(DsfrConsent, {
      props: {
        url,
      },
    })

    const isThisExternalLink = getByTestId('link')

    expect(isThisExternalLink).toHaveAttribute('to', url)
  })

  it('should render a block consent with slot content', async () => {
    const slotContent = 'Description personnalisée'

    const { getByText } = render(DsfrConsent, {
      slots: {
        default: slotContent,
      },
    })

    getByText(slotContent)
  })
})
