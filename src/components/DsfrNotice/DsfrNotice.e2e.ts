import { defineComponent } from 'vue'
import DsfrNotice from './DsfrNotice.vue'

const DsfrNoticeWrapper = defineComponent({
  components: {
    DsfrNotice,
  },
  props: {
    title: String,
    closeable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data () {
    return {
      showNotice: true,
    }
  },
  template: `
    <DsfrNotice v-if="showNotice" :closeable="closeable" @close="showNotice = false">
      {{ title }}
      <em>et un peu de texte en plus</em>
    </DsfrNotice>
  `,
})

describe('DsfrNotice', () => {
  it('should render a Notice', () => {
    cy.mount(DsfrNoticeWrapper, {
      data () {
        return {
          showNotice: true,
        }
      },
      props: {
        closeable: true,
        title: 'Titre de la notice',
      },
      methods: {
        onClose () {
          this.showNotice = false
        },
      },
    })
    cy.get('.fr-notice__title')
      .should('exist')
      .should('be.visible')
      .should('contain', 'et un peu de texte en plus')
    cy.get('.fr-btn--close')
      .should('be.visible')
      .click()
    cy.get('.fr-notice__title')
      .should('not.exist')
  })

  it('should render a Notice without close button', () => {
    cy.mount(DsfrNoticeWrapper, {
      data () {
        return {
          showNotice: true,
        }
      },
      props: {
        closeable: false,
        title: 'Titre de la notice sans bouton pour fermer',
      },
      methods: {
        onClose () {
          this.showNotice = false
        },
      },
    })
    cy.get('.fr-notice__title')
      .should('exist')
      .should('be.visible')
    cy.get('.fr-btn--close')
      .should('not.exist')
  })
})
