import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

describe('DsfrRadioButtonSet', () => {
  it('should mount Tabs', () => {
    cy.mount(DsfrRadioButtonSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend: 'Légende des champs',
        selectedValue: 1,
        inline: false,
        modelValue: '1',
        name: 'radiobuttonset',
        options: [
          {
            label: 'Valeur 1',
            value: '1',
            hint: 'Description 1',
          },
          {
            label: 'Valeur 2',
            value: '2',
            disabled: true,
            hint: 'Description 2',
          },
          {
            label: 'Valeur 3',
            value: '3',
          },
        ],
      },
    })
      .get('.fr-radio-group:first-child input')
      .should('not.have.focus')

    // cy.tab()
    //   .get('.fr-radio-group:first-child input')
    //   .should('have.focus')
    //   .get('.fr-radio-group')
    //   .contains('Valeur 3')
    //   .click({ force: true })
    //   .get('.fr-radio-group:nth-child(3) input')
    //   .should('have.focus')
  })
})
