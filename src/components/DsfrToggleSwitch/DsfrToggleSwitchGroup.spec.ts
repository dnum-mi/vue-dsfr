import { render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrToggleSwitchGroup from './DsfrToggleSwitchGroup.vue'

describe('DsfrToggleSwitchGroup', () => {
  it('should render toggle switch group', () => {
    // Given
    const id = 'toggle-group-1'
    const legend = 'légende du groupe d\'interrupteurs'
    const toggleSwitches = [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ]

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitchGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        id,
        legend,
        toggleSwitches,
        borders: true,
      },
    })

    const legendEl = getByText(legend)
    const inputEl1 = getByTestId(`${id}-${toggleSwitches[0].inputId!}`)
    const inputEl2 = getByTestId(`${id}-${toggleSwitches[1].inputId!}`)
    const inputEl3 = getByTestId(`${id}-${toggleSwitches[2].inputId!}`)
    // Then
    expect(legendEl).toBeInTheDocument()
    expect(inputEl1).toBeInTheDocument()
    expect(inputEl2).toBeInTheDocument()
    expect(inputEl3).toBeInTheDocument()
    expect(inputEl1).toBeChecked()
    expect(inputEl2).not.toBeChecked()
    expect(inputEl3).toBeChecked()
    expect(inputEl1.closest('div')).toHaveClass('fr-toggle--border-bottom')
    expect(inputEl2.closest('div')).toHaveClass('fr-toggle--border-bottom')
    expect(inputEl3.closest('div')).toHaveClass('fr-toggle--border-bottom')
  })

  it('should render disabled toggle switch group', () => {
    // Given
    const id = 'toggle-group-1'
    const legend = 'légende du groupe d\'interrupteurs'
    const disabled = true
    const toggleSwitches = [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ]

    // When
    const { getByText, getByTestId } = render(DsfrToggleSwitchGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        id,
        disabled,
        legend,
        toggleSwitches,
      },
    })

    const legendEl = getByText(legend)
    const fieldsetEl = document.querySelector('fieldset')
    // Then
    expect(legendEl).toBeInTheDocument()
    expect(fieldsetEl).toBeDisabled()
    toggleSwitches.forEach((toggleSwitch) => {
      const inputEl = getByTestId(`${id}-${toggleSwitch.inputId!}`)
      expect(inputEl).toBeInTheDocument()
      expect(inputEl).toBeDisabled()
    })
  })

  it('should not render toggle group error status if status is not error nor valid', () => {
    // Given
    const legend = 'légende du groupe d’interrupteurs'
    const toggleSwitches = [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
      },
    ]

    // When
    render(DsfrToggleSwitchGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend,
        toggleSwitches,
      },
    })

    const statusEl = document.querySelector('.fr-messages-group')
    const errorMessageEl = document.querySelector('.fr-message--error')
    const validMessageEl = document.querySelector('.fr-message--valid')
    // Then

    expect(statusEl).toBeInTheDocument()
    expect(errorMessageEl).not.toBeInTheDocument()
    expect(validMessageEl).not.toBeInTheDocument()
  })

  it('should render toggle switch group error status if status is error', () => {
    // Given
    const legend = 'légende du groupe d’interrupteurs'
    const disabled = false
    const toggleSwitches = [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
      },
    ]
    const status = 'error'
    const errorMessage = 'Il y a une erreur dans ce groupe d’interrupteurs'

    // When
    const { getByText } = render(DsfrToggleSwitchGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        disabled,
        legend,
        toggleSwitches,
        status,
        errorMessage,
      },
    })
    const errorMessageEl = getByText(errorMessage)

    // Then
    expect(errorMessageEl).toBeInTheDocument()
    expect(errorMessageEl).toHaveClass('fr-message--error')
  })

  it('should render toggle switch group valid status if status is valid', () => {
    // Given
    const legend = 'légende du groupe d’interrupteurs'
    const disabled = false
    const toggleSwitches = [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
      },
    ]
    const status = 'valid'
    const validMessage = 'Ce groupe d’interrupteurs est valide'

    // When
    const { getByText } = render(DsfrToggleSwitchGroup, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        disabled,
        legend,
        toggleSwitches,
        status,
        validMessage,
      },
    })
    const statusEl = document.querySelector('.fr-messages-group')
    // Then
    expect(statusEl).toBeInTheDocument()
    expect(getByText(validMessage)).toBeInTheDocument()
  })
})
