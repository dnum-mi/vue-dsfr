import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import DsfrModal from './DsfrModal.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrModal', () => {
  it('should render modal', () => {
    const content = 'Contenu de la modale'

    const { getByText, getByRole } = render(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
      slots: {
        default: content,
      },
    })

    const modalEl = getByRole('dialog', { hidden: true })
    const modalContentEl = getByText(content)

    expect(modalEl).toHaveClass('fr-modal')
    expect(modalContentEl).toBeInTheDocument()
    expect(modalContentEl).toHaveClass('fr-modal__content')
  })

  it('should render modal and close it with button', async () => {
    const content = 'Contenu de la modale'

    const { getByText, getByRole } = render(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        opened: true,
      },
      slots: {
        default: content,
      },
    })

    const closeBtn = getByText('Fermer')
    const modalEl = getByRole('dialog', { hidden: true })
    const modalContentEl = getByText(content)

    await fireEvent.click(closeBtn)

    expect(modalEl).toBeInTheDocument()
    expect(modalEl).toHaveClass('fr-modal')
    expect(closeBtn).toBeInTheDocument()
    expect(modalContentEl).toHaveClass('fr-modal__content')
  })

  it('should render modal and close it with escape', async () => {
    const content = 'Contenu de la modale'

    const { getByText, getByRole } = render(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        opened: true,
      },
      slots: {
        default: content,
      },
    })

    const closeBtn = getByText('Fermer')
    const modalEl = getByRole('dialog', { hidden: true })
    const modalContentEl = getByText(content)

    await fireEvent.keyDown(document.activeElement || document.body, { key: 'Enter' })
    await fireEvent.keyDown(document.activeElement || document.body, { key: 'Escape' })

    expect(modalEl).toBeInTheDocument()
    expect(modalEl).toHaveClass('fr-modal')
    expect(closeBtn).toBeInTheDocument()
    expect(modalContentEl).toHaveClass('fr-modal__content')
  })
})
