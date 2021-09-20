import DsfrModal from './DsfrModal.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default {
  component: DsfrModal,
  title: 'Éléments/Modale - Modal',
}

export const Modal = (args) => ({
  components: {
    DsfrModal,
    DsfrButton,
  },
  data () {
    return { ...args }
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrButton
      label="Ouvre la modale"
      @click="open()"
    />
    <DsfrModal
      :opened="opened"
      :actions="actions"
      @close="onClose"
    >
      <h1
        id="fr-modal-title-modal-1"
        class="fr-modal__title"
      >
        <span class="fr-fi-arrow-right-line fr-fi--lg" />Titre de la modale
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
    </DsfrModal>
  </div>
  `,
  methods: {
    onClose () {
      this.opened = false
    },
    open () {
      this.opened = true
    },
  },
})

Modal.args = {
  dark: false,
  opened: false,
  actions: [
    {
      label: 'Valider',
    },
    {
      label: 'Annuler',
      secondary: true,
    },
  ],
}
