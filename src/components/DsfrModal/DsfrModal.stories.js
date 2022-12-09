import DsfrModal from './DsfrModal.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

export default {
  component: DsfrModal,
  title: 'Composants/Modale - DsfrModal',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    actions: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contiendra les props à donner à `DsfrButton`',
    },
    isAlert: {
      control: 'boolean',
      description: 'Booléen permettant de mettre un `role="alert"` (si `true`) sur la modal ou non (`false`, défaut)',
    },
    origin: {
      control: 'text',
      description: 'Valeur de l’attribut `id` du bouton qui déclenche l’ouverture de la modale',
    },
    opened: {
      control: 'boolean',
      description: 'Booléen permettant d\'ouvrir (`true`) ou fermer la modale (`false`, défaut)',
    },
    title: {
      control: 'text',
      description: 'Titre de la modale',
    },
    icon: {
      control: 'text',
      description: 'Icone à afficher au début du titre de la modale',
    },
    close: {
      description: 'Événement déclenché à la fermeture de la modale',
    },
    onClick: {
      action: 'close',
    },
  },
}

export const Modal = (args) => ({
  components: {
    DsfrModal,
    DsfrButton,
  },

  data () {
    return {
      ...args,
      actions: args.actions.map(action => ({ ...action, onClick: () => { args.onClick(); this.onClose() } })),
    }
  },

  template: `
    <DsfrButton
      label="Ouvre la modale"
      @click="open()"
      ref="modalOrigin"
    />
    <DsfrModal
      ref="modal"
      :opened="opened"
      :actions="actions"
      :is-alert="isAlert"
      :icon="icon"
      :title="title"
      :origin="$refs.modalOrigin"
      @close="onClose()"
    >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
    </DsfrModal>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

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
  title: 'Titre de la modale',
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
