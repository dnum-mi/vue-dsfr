import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

describe('DsfrToggleSwitch', () => {
  it('should render toggle switch', () => {
    // Given
    const label = 'Label du switch'
    const hint = 'Indice du switch'
    const disabled = false
    const inputId = '1'

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitch, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        disabled,
        hint,
        inputId,
        label,
      },
    })

    const labelEl = getByText(label)
    const hintEl = getByText(hint)
    const inputEl = getByTestId(inputId)

    // Then
    expect(labelEl).toBeInTheDocument()
    expect(hintEl).toBeInTheDocument()
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).not.toBeDisabled()
    expect(labelEl.closest('div')).not.toHaveClass('fr-toggle--label-left')
    expect(labelEl.closest('div')).not.toHaveClass('fr-toggle--border-bottom')
  })

  it('should render disabled toggle switch', () => {
    // Given
    const label = 'Label du switch'
    const hint = 'Indice du switch'
    const disabled = true

    // When
    const { getByText } = render(DsfrToggleSwitch, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        disabled,
        hint,
        label,
      },
    })

    const labelEl = getByText(label)
    const hintEl = getByText(hint)

    // Then
    expect(labelEl).toBeInTheDocument()
    expect(hintEl).toBeInTheDocument()
  })

  it('should render toggle switch with label left and border', () => {
    // Given
    const label = 'Label du switch'
    const hint = 'Indice du switch'
    const disabled = false
    const inputId = '1'
    const labelLeft = true
    const borderBottom = true

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitch, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        disabled,
        hint,
        inputId,
        label,
        labelLeft,
        borderBottom,
      },
    })

    const labelEl = getByText(label)
    const hintEl = getByText(hint)
    const inputEl = getByTestId(inputId)

    // Then
    expect(labelEl).toBeInTheDocument()
    expect(hintEl).toBeInTheDocument()
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).not.toBeDisabled()
    expect(labelEl.closest('div')).toHaveClass('fr-toggle--label-left')
    expect(labelEl.closest('div')).toHaveClass('fr-toggle--border-bottom')
  })
})
