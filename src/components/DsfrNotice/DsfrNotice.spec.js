import { render, fireEvent } from '@testing-library/vue'
import DsfrNotice from './DsfrNotice.vue'

describe('DsfrNotice', () => {
  it('should render a notice', async () => {
    // Given
    const title = 'Titre de la notice'
    const closeable = true

    // When
    const { getByText, getByRole, emitted } = render(DsfrNotice, {
      props: {
        closeable,
        title,
      },
    })

    getByText(title)
    const closeButton = getByRole('button')
    await fireEvent.click(closeButton)

    // Then
    expect(emitted().close).toBeTruthy()
  })

  it('should render a notice', async () => {
    // Given
    const title = 'Titre de la notice'
    const closeable = false

    // When
    const { getByText, getByRole } = render(DsfrNotice, {
      props: {
        closeable,
        title,
      },
    })

    getByText(title)
    expect(() => getByRole('button')).toThrow()
  })
})
