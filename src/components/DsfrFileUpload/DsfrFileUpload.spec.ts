import { OhVueIcon as VIcon } from 'oh-vue-icons'
import DsfrFileUpload from './DsfrFileUpload.vue'
import { render } from '@testing-library/vue'

describe('DsfrFileUpload', () => {
  it('should render file input without hint nor error', () => {
    const label = 'Texte du label'

    const { container, getByLabelText, getByText } = render(DsfrFileUpload, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        label,
      },
    })

    getByText(label)
    getByLabelText(label)
    const errorEl = container.querySelector('.fr-error-text')

    expect(errorEl).toBeNull()
  })

  it('should render file input without error', () => {
    const hint = 'Indice d’upload sans erreur'
    const label = 'Label d’upload sans erreur'

    const { container, getByText } = render(DsfrFileUpload, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        hint,
        label,
      },
    })

    getByText(label)
    getByText(hint)

    const errorEl = container.querySelector('.fr-error-text')

    expect(errorEl).toBeNull()
  })

  it('should render file input with error', () => {
    const hint = 'Indice d’upload avec erreur'
    const label = 'Label d’upload avec erreur'
    const error = 'Erreur d’upload avec erreur'

    const { container, getByText } = render(DsfrFileUpload, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        hint,
        label,
        error,
      },
    })

    getByText(label)
    getByText(error)

    const errorEl = container.querySelector('.fr-error-text')

    expect(errorEl).toBeDefined()
  })

  it('should accept only pdf', () => {
    const hint = 'Indice d’upload avec erreur'
    const label = 'Label d’upload avec erreur'
    const error = 'Erreur d’upload avec erreur'
    const accept = '.pdf'

    const { container, getByText, getByLabelText } = render(DsfrFileUpload, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        hint,
        label,
        error,
        accept,
      },
    })

    getByText(label)
    const input = getByLabelText(`${label} ${hint}`)
    getByText(error)

    const errorEl = container.querySelector('.fr-error-text')

    expect(errorEl).toBeDefined()
    expect(input).toHaveAttribute('accept', accept)
  })

  it('should accept only pdf and jpg', () => {
    const hint = 'Indice d’upload avec erreur'
    const label = 'Label d’upload avec erreur'
    const error = 'Erreur d’upload avec erreur'
    const acceptString = '.pdf,.jpg'
    const accept = acceptString.split(',')

    const { container, getByText, getByLabelText } = render(DsfrFileUpload, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        hint,
        label,
        error,
        accept,
      },
    })

    getByText(label)
    const input = getByLabelText(`${label} ${hint}`)
    getByText(error)

    const errorEl = container.querySelector('.fr-error-text')

    expect(errorEl).toBeDefined()
    expect(input).toHaveAttribute('accept', acceptString)
  })
})
