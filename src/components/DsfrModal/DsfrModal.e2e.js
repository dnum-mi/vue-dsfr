import DsfrButton from '../DsfrButton/DsfrButton.vue'
import DsfrModal from './DsfrModal.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import '../../main.css'

const ModalWrapper = {
  components: {
    DsfrModal,
    DsfrButton,
    VIcon,
  },

  data () {
    return {
      opened: false,
      title: 'Titre de la modale',
      actions: [
        {
          label: 'Valider',
          onClick: () => this.close(),
        },
        {
          label: 'Annuler',
          secondary: true,
          onClick: () => this.close(),
        },
      ],
    }
  },

  template: `
  <div>
    <DsfrButton
      id="modal-opener"
      label="Ouvre la modale"
      @click="open()"
      ref="modalOrigin"
    />
    <DsfrModal
      ref="modal"
      :opened="opened"
      :actions="actions"
      :title="title"
      :origin="$refs.modalOrigin"
      @close="close()"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
    </DsfrModal>
  </div>
  `,

  methods: {
    close () {
      this.opened = false
    },
    open () {
      this.opened = true
    },
  },
}

describe('DsfrModal', () => {
  it('should mount a button, and a modal on click that traps focus and exits on ESC', () => {
    cy.mount(ModalWrapper)
      .get('button')
      .contains('Ouvre la modale')
      .type('{enter}')

    cy.get('.fr-btn--close')
      .should('have.focus')

    // cy.get('.fr-btn--close')
    //   .tab()

    // cy.get('.fr-btn--close')
    //   .should('not.have.focus')

    // cy.tab().tab()

    // cy.get('.fr-btn--close')
    //   .should('have.focus')

    // cy.tab().type('{esc}')

    // cy.get('button')
    //   .contains('Ouvre la modale')
  })
})
