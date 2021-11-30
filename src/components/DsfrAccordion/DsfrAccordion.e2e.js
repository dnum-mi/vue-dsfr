import { mount } from '@cypress/vue'
import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'
import VIcon from '../../icons.js'

import '../../main.css'

const title1 = 'Intitulé de l’accordéon 1'
const content1 = 'Contenu de l’accordéon 1'
const title2 = 'Intitulé de l’accordéon 2'
const content2 = 'Contenu de l’accordéon 2'
const title3 = 'Intitulé de l’accordéon 3'
const content3 = 'Contenu de l’accordéon 3'

const AccordionWrapper = {
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
    VIcon,
  },

  data () {
    return {
      title1,
      title2,
      title3,
      content1,
      content2,
      content3,
    }
  },

  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrAccordionsGroup>
      <li>
        <DsfrAccordion
          id="accordion1"
          :title="title1"
        >
          Contenu de l’accordéon
        </DsfrAccordion>
      </li>
      <li>
        <DsfrAccordion
          id="accordion2"
          :title="title2"
        >
          Contenu de l’accordéon
        </DsfrAccordion>
      </li>
      <li>
        <DsfrAccordion
          id="accordion3"
          :title="title3"
        >
          Contenu de l’accordéon
        </DsfrAccordion>
      </li>
    </DsfrAccordionsGroup>
  </div>`,
}

describe('DsfrAccordion', () => {
  it('should mount Accordion', () => {
    const title = 'Intitulé de l’accordéon'
    const content = 'Contenu de l’accordéon'

    mount(DsfrAccordion, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        expanded: false,
      },
      slots: {
        default: () => content,
      },
    })
      .get('.fr-collapse')
      .should('not.be.visible')

    cy.get('.fr-accordion__btn')
      .click()
      .get('.fr-collapse')
      .should('be.visible')

    cy.tab()
      .get('.fr-accordion__btn')
      .contains(title)
      .type('{enter}')
      .get('.fr-collapse')
      .should('not.be.visible')
  })

  it('should mount AccordionsGroup', () => {
    mount(AccordionWrapper)
      .get('.fr-collapse')
      .should('not.be.visible')

    cy.tab()
      .get('li:first-child .fr-accordion__btn')
      .should('have.focus')
      .contains(title1)
      .type('{enter}')
      .get('.fr-collapse')
      .should('be.visible')

    cy.tab()
      .get('li:nth-child(2) .fr-accordion__btn')
      .should('have.focus')
      .contains(title2)
      .type(' ')
      .get('#accordion2')
      .should('be.visible')
      .get('li:nth-child(2) .fr-accordion__btn')
      .should('have.focus')
      .contains(title2)
      .type(' ')
      .get('#accordion2')
      .should('not.be.visible')
  })
})
