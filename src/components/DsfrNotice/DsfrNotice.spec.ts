import { render, fireEvent } from '@testing-library/vue'
import DsfrNotice from './DsfrNotice.vue'

describe('DsfrNotice', () => {
  it('should render a closeable notice', async () => {
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

    const titleEl = getByText(title)
    expect(titleEl).toHaveClass('fr-notice__title')
    const closeButton = getByRole('button')
    await fireEvent.click(closeButton)

    // Then
    expect(emitted().close).toBeTruthy()
  })

  it('should render a notice', async () => {
    // Given
    const title = 'Titre de la notice'
    const desc = 'Description de la notice'
    const closeable = false

    // When
    const { getByText, getByRole } = render(DsfrNotice, {
      props: {
        closeable,
        title,
        desc,
      },
    })

    const titleEl = getByText(title)
    expect(titleEl).toHaveClass('fr-notice__title')
    const descEl = getByText(desc)
    expect(descEl).toHaveClass('fr-notice__desc')
    expect(() => getByRole('button')).toThrow()
  })
})
