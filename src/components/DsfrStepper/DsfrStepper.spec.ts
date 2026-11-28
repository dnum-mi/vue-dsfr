import { render } from '@testing-library/vue'

import DsfrStepper from './DsfrStepper.vue'

describe('DsfrStepper', () => {
  it('should render a stepper at the third step on four', () => {
    // Given
    const steps = ['Première étape', 'Deuxième étape', 'Troisième étape', 'Quatrième étape']
    const currentStep = 3
    // When
    const { getByText } = render(DsfrStepper, {
      props: {
        steps,
        currentStep,
      },
    })
    const stepTest = getByText('Étape 3 sur 4')

    // Then
    expect(stepTest).toHaveClass('fr-stepper__state')
  })

  it('should render the title with the default h2 tag', () => {
    // Given
    const steps = ['Première étape']
    const title = 'Première étape'
    // When
    const { getByText } = render(DsfrStepper, {
      props: {
        steps,
        currentStep: 1,
      },
    })
    const titleEl = getByText(title)

    // Then
    expect(titleEl.tagName).toBe('H2')
    expect(titleEl).toHaveClass('fr-stepper__title')
  })

  it('should render the title with a custom titleTag', () => {
    // Given
    const steps = ['Première étape']
    const title = 'Première étape'
    // When
    const { getByText } = render(DsfrStepper, {
      props: {
        steps,
        currentStep: 1,
        titleTag: 'h4',
      },
    })
    const titleEl = getByText(title)

    // Then
    expect(titleEl.tagName).toBe('H4')
    expect(titleEl).toHaveClass('fr-stepper__title')
  })

  it('should render the title as a p when titleTag is p', () => {
    // Given
    const steps = ['Première étape']
    const title = 'Première étape'
    // When
    const { getByText } = render(DsfrStepper, {
      props: {
        steps,
        currentStep: 1,
        titleTag: 'p',
      },
    })
    const titleEl = getByText(title)

    // Then
    expect(titleEl.tagName).toBe('P')
    expect(titleEl).toHaveClass('fr-stepper__title')
  })
})
