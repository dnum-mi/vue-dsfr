import { fireEvent, render } from '@testing-library/vue'

import DsfrMultiselect from './DsfrMultiselect.vue'

describe('DsfrMultiselect', () => {
  it('should render a multiselect', async () => {
    // Given
    const options = [
      'Dupont',
      'Martin',
      'Durand',
      'Petit',
      'Lefevre',
    ]
    const values = []

    // When
    const { getByRole, getAllByRole } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
      },
    })

    const button = getByRole('button')
    expect(button.textContent).toBe(' Sélectionner une option')
    await fireEvent.click(button)

    const checkboxes = getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5)
  })

  it('should render a multiselect with selected options', async () => {
    // Given
    const options = [
      'Dupont',
      'Martin',
      'Durand',
      'Petit',
      'Lefevre',
    ]
    const values = ['Dupont', 'Martin']

    // When
    const { getByRole, getAllByRole } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
      },
    })

    const button = getByRole('button')
    expect(button.textContent).toBe(' 2 options sélectionnées')
    await fireEvent.click(button)

    const checkboxes = getAllByRole('checkbox')
    await fireEvent.click(checkboxes[1])

    expect(button.textContent).toBe(' 1 option sélectionnée')
  })

  it('should test search', async () => {
    // Given
    const options = [
      'Dupont',
      'Martin',
      'Durand',
      'Petit',
      'Lefevre',
    ]
    const values = ['Dupont', 'Martin']

    // When
    const { getByRole, getAllByRole } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
        search: true,
      },
    })

    const button = getByRole('button')
    await fireEvent.click(button)

    const checkboxes = getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5)

    const search = getByRole('textbox')
    await fireEvent.update(search, 'petit')

    const checkboxesAfterSearch = getAllByRole('checkbox')
    expect(checkboxesAfterSearch).toHaveLength(1)
  })

  it('should use search to filter', async () => {
    // Given
    const options = [
      'Dupont',
      'Martin',
      'Durand',
      'Petit',
      'Lefevre',
    ]
    const values = ['Dupont', 'Martin']

    // When
    const { getByRole, getAllByRole } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
        search: true,
      },
    })

    const button = getByRole('button')
    await fireEvent.click(button)

    const checkboxes = getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5)

    const search = getByRole('textbox')
    await fireEvent.update(search, 'petit')

    const checkboxesAfterSearch = getAllByRole('checkbox')
    expect(checkboxesAfterSearch).toHaveLength(1)
  })

  it('should use selectAll', async () => {
    // Given
    const options = [
      'Dupont',
      'Martin',
      'Durand',
      'Petit',
      'Lefevre',
    ]
    const values = ['Dupont', 'Martin']

    // When
    const { getByRole } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
        selectAll: true,
      },
    })

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(button.textContent).toBe(' 2 options sélectionnées')

    const buttonSelectAll = getByRole('button', { name: 'Tout sélectionner' })
    await fireEvent.click(buttonSelectAll)

    expect(button.textContent).toBe(' 5 options sélectionnées')
  })

  it('should render with object as option', async () => {
    // Given
    const options = [
      {
        nom: 'Dupont',
        prenom: 'Marie',
        age: 28,
      },
      {
        nom: 'Martin',
        prenom: 'Paul',
        age: 34,
      },
      {
        nom: 'Durand',
        prenom: 'Lucie',
        age: 22,
      },
      {
        nom: 'Petit',
        prenom: 'Julien',
        age: 45,
      },
      {
        nom: 'Lefevre',
        prenom: 'Elise',
        age: 30,
      },
    ]

    const values = ['Dupont', 'Martin']

    // When
    const { getByRole, getByText } = render(DsfrMultiselect, {
      props: {
        modelValue: values,
        options,
        idKey: 'nom',
        labelKey: 'prenom',
      },
    })

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(button.textContent).toBe(' 2 options sélectionnées')

    const input = getByText(/Paul/)

    expect(input).toBeTruthy()
  })
})
