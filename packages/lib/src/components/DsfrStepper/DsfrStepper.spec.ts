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
})
