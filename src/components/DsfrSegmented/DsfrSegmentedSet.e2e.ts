import DsfrSegmentedSet from './DsfrSegmentedSet.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import '../../main.css'

describe('DsfrSegmentedSet', () => {
  it('should mount Segemented Set', () => {
    cy.mount(DsfrSegmentedSet, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        legend: 'Légende des champs',
        hint: 'Description 1',
        selectedValue: 1,
        inline: false,
        modelValue: '1',
        name: 'segmentedset',
        options: [
          {
            label: 'Valeur 1',
            value: '1',
          },
          {
            label: 'Valeur 2',
            value: '2',
            disabled: true,
          },
          {
            label: 'Valeur 3',
            value: '3',
          },
        ],
      },
    })
      .get('.fr-segmented__element:first-child input')
      .should('not.have.focus')
  })
})
