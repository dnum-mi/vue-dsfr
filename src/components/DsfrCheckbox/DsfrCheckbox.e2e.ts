import DsfrCheckbox from './DsfrCheckbox.vue'
import DsfrCheckboxSet from './DsfrCheckboxSet.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

describe('DsfrCheckbox', () => {
  it('should mount one single Checkbox with error message', () => {
    const name = 'LE nom'
    const label = 'LE label'
    const errorMessage = 'ERREUR très bien décrite'
    const hint = 'Hint (et pas int)'
    const modelValue = true

    cy.mount(DsfrCheckbox, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        name,
        label,
        errorMessage,
        hint,
        modelValue,
      },
    })
      .get('.fr-checkbox-group')
      .should('be.visible')
      .get('.fr-checkbox-group--error')
      .should('be.visible')
      .find('input')
      .should('have.attr', 'type', 'checkbox')
      .get('.fr-checkbox-group')
      .find('.fr-label')
      .should('be.visible')
      .should('contain', label)
      .get('.fr-checkbox-group')
      .find('.fr-label')
      .find('.fr-hint-text')
      .should('contain', hint)
      .get('.fr-checkbox-group')
      .find('.fr-message--info')
      .should('be.visible')
      .should('contain', errorMessage)
  })

  it('should mount one single Checkbox with valid message', () => {
    const name = 'LE nom'
    const label = 'LE label'
    const validMessage = 'Message très valide'
    const hint = 'Hint (et pas int)'
    const modelValue = true

    cy.mount(DsfrCheckbox, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        name,
        label,
        validMessage,
        hint,
        modelValue,
      },
    })
      .get('.fr-checkbox-group')
      .should('be.visible')
      .get('.fr-checkbox-group--valid')
      .should('be.visible')
      .find('input')
      .should('have.attr', 'type', 'checkbox')
      .get('.fr-checkbox-group')
      .find('.fr-label')
      .should('be.visible')
      .should('contain', label)
      .get('.fr-checkbox-group')
      .find('.fr-label')
      .find('.fr-hint-text')
      .should('contain', hint)
      .get('.fr-checkbox-group')
      .find('.fr-message--info')
      .should('be.visible')
      .should('contain', validMessage)
  })
})

describe('DsfrCheckboxSet', () => {
  it('should mount a Checkboxes Set', () => {
    const legend = 'Légende des champs'
    const disabled = false
    const inline = false
    const errorMessage = ''
    const validMessage = ''
    const modelValue = []
    const options = [
      {
        label: 'Valeur 1',
        id: 'name1',
        name: 'name1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        id: 'name2',
        name: 'name2',
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        id: 'name3',
        name: 'name3',
      },
    ]

    cy.mount(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
          DsfrCheckbox,
        },
      },
      props: {
        legend,
        disabled,
        inline,
        errorMessage,
        validMessage,
        modelValue,
        options,
      },
    })
      .get('.fr-form-group')
      .should('be.visible')
      .find('.fr-fieldset')
      .should('be.visible')
      .find('.fr-fieldset__legend')
      .should('be.visible')
      .should('contain', legend)
      .get('.fr-fieldset')
      .find('.fr-fieldset__content')
      .should('be.visible')
      .get('.fr-fieldset')
      .find('fr-message--info')
      .should('not.exist')

    // cy.tab()
    //   .get('.fr-checkbox-group:first-child input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[0].name)
    //   .should('have.attr', 'id', options[0].id)
    //   .get('.fr-checkbox-group:first-child label')
    //   .should('contain', options[0].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[0].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(2) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[1].name)
    //   .should('have.attr', 'id', options[1].id)
    //   .get('.fr-checkbox-group:nth-child(2) label')
    //   .should('contain', options[1].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[1].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(3) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[2].name)
    //   .should('have.attr', 'id', options[2].id)
    //   .get('.fr-checkbox-group:nth-child(3) label')
    //   .should('contain', options[2].label)
    //   .find('.fr-hint-text')
    //   .should('not.exist')
  })

  it('should mount a Checkboxes Set with valid message', () => {
    const legend = 'Légende des champs'
    const disabled = false
    const inline = false
    const errorMessage = ''
    const validMessage = 'Bien joué !'
    const modelValue = []
    const options = [
      {
        label: 'Valeur 1',
        id: 'name1',
        name: 'name1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        id: 'name2',
        name: 'name2',
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        id: 'name3',
        name: 'name3',
      },
    ]

    cy.mount(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
          DsfrCheckbox,
        },
      },
      props: {
        legend,
        disabled,
        inline,
        errorMessage,
        validMessage,
        modelValue,
        options,
      },
    })
      .get('.fr-form-group')
      .should('be.visible')
      .find('.fr-fieldset')
      .should('be.visible')
      .find('.fr-fieldset__legend')
      .should('be.visible')
      .should('contain', legend)
      .get('.fr-fieldset')
      .find('.fr-fieldset__content')
      .should('be.visible')
      .get('.fr-fieldset')
      .find('.fr-message--info')
      .should('be.visible')
      .should('contain', validMessage)

    // cy.tab()
    //   .get('.fr-checkbox-group:first-child input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[0].name)
    //   .should('have.attr', 'id', options[0].id)
    //   .get('.fr-checkbox-group:first-child label')
    //   .should('contain', options[0].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[0].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(2) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[1].name)
    //   .should('have.attr', 'id', options[1].id)
    //   .get('.fr-checkbox-group:nth-child(2) label')
    //   .should('contain', options[1].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[1].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(3) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[2].name)
    //   .should('have.attr', 'id', options[2].id)
    //   .get('.fr-checkbox-group:nth-child(3) label')
    //   .should('contain', options[2].label)
    //   .find('.fr-hint-text')
    //   .should('not.exist')
  })

  it('should mount a Checkboxes Set with error message', () => {
    const legend = 'Légende des champs'
    const disabled = false
    const inline = false
    const errorMessage = 'Perdu !'
    const validMessage = ''
    const modelValue = []
    const options = [
      {
        label: 'Valeur 1',
        id: 'name1',
        name: 'name1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        id: 'name2',
        name: 'name2',
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        id: 'name3',
        name: 'name3',
      },
    ]

    cy.mount(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
          DsfrCheckbox,
        },
      },
      props: {
        legend,
        disabled,
        inline,
        errorMessage,
        validMessage,
        modelValue,
        options,
      },
    })
      .get('.fr-form-group')
      .should('be.visible')
      .find('.fr-fieldset')
      .should('be.visible')
      .find('.fr-fieldset__legend')
      .should('be.visible')
      .should('contain', legend)
      .get('.fr-fieldset')
      .find('.fr-fieldset__content')
      .should('be.visible')
      .get('.fr-fieldset')
      .find('.fr-message--info')
      .should('be.visible')
      .should('contain', errorMessage)

    // cy.tab()
    //   .get('.fr-checkbox-group:first-child input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[0].name)
    //   .should('have.attr', 'id', options[0].id)
    //   .get('.fr-checkbox-group:first-child label')
    //   .should('contain', options[0].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[0].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(2) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[1].name)
    //   .should('have.attr', 'id', options[1].id)
    //   .get('.fr-checkbox-group:nth-child(2) label')
    //   .should('contain', options[1].label)
    //   .find('.fr-hint-text')
    //   .should('contain', options[1].hint)

    // cy.tab()
    //   .get('.fr-checkbox-group:nth-child(3) input')
    //   .should('have.focus')
    //   .click({ force: true })
    //   .should('be.checked')
    //   .should('have.attr', 'name', options[2].name)
    //   .should('have.attr', 'id', options[2].id)
    //   .get('.fr-checkbox-group:nth-child(3) label')
    //   .should('contain', options[2].label)
    //   .find('.fr-hint-text')
    //   .should('not.exist')
  })

  it('should mount a Checkboxes Set in line', () => {
    const legend = 'Légende des champs'
    const disabled = false
    const inline = true
    const errorMessage = ''
    const validMessage = ''
    const modelValue = []
    const options = [
      {
        label: 'Valeur 1',
        id: 'name1',
        name: 'name1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        id: 'name2',
        name: 'name2',
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        id: 'name3',
        name: 'name3',
      },
    ]

    cy.mount(DsfrCheckboxSet, {
      global: {
        components: {
          VIcon,
          DsfrCheckbox,
        },
      },
      props: {
        legend,
        disabled,
        inline,
        errorMessage,
        validMessage,
        modelValue,
        options,
      },
    })
      .get('.fr-form-group')
      .should('be.visible')
      .find('.fr-fieldset--inline')
      .should('be.visible')
  })
})
