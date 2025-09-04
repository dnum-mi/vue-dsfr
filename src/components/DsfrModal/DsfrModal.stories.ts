import { expect, fn, userEvent, within } from '@storybook/test'
import { setup } from '@storybook/vue3'

import DsfrButton from '../DsfrButton/DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrModal from './DsfrModal.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

setup((app) => {
  app.component('VIcon', VIcon)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)
 */
export default {
  component: DsfrModal,
  title: 'Composants/DsfrModal',
  argTypes: {
    actions: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contiendra les props à donner à `DsfrButton`',
    },
    isAlert: {
      control: 'boolean',
      description:
        'Booléen permettant de mettre un `role="alert"` (si `true`) sur la modal ou non (`false`, défaut)',
    },
    origin: {
      control: 'text',
      description:
        'Valeur de l’attribut `id` du bouton qui déclenche l’ouverture de la modale',
    },
    opened: {
      control: 'boolean',
      description:
        'Booléen permettant d\'ouvrir (`true`) ou fermer la modale (`false`, défaut)',
    },
    title: {
      control: 'text',
      description: 'Titre de la modale',
    },
    icon: {
      control: 'text',
      description: 'Icone à afficher au début du titre de la modale',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
      description:
        'Taille de la modale : `SM` (Small), `MD` (Medium), `LG` (Large), `XL`(Extra large). Attention la taille `XL` ne fait pas partie du Design System de l’État',
    },
    close: {
      description: 'Événement déclenché à la fermeture de la modale',
    },
    onClick: {
      action: fn(),
    },
    closeButtonLabel: {
      control: 'text',
      description:
        'Valeur du bouton cliquable permettant la fermeture de la modale',
    },
    closeButtonTitle: {
      control: 'text',
      description:
        'Valeur du texte informatif au survol du bouton cliquable permettant la fermeture de la modale',
    },
  },
}

export const ModalAvecActions = (args) => ({
  components: {
    DsfrModal,
    DsfrButton,
    VIcon,
  },

  data () {
    return args
  },

  computed: {
    modifiedActions () {
      return this.actions.map((action) => ({
        ...action,
        onClick: () => {
          this.onClick?.(action.actionArg)
          this.onClose()
        },
      }))
    },
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
      :actions="modifiedActions"
      :is-alert="isAlert"
      :icon="icon"
      :title="title"
      :origin="$refs.modalOrigin"
      :size="size"
      @close="onClose()"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
    </DsfrModal>
  `,

  methods: {
    onClose () {
      args.onClick('Fermer')
      this.opened = false
    },
    open () {
      this.opened = true
    },
  },
})
ModalAvecActions.args = {
  opened: false,
  title: 'Titre de la modale',
  isAlert: false,
  icon: 'ri-checkbox-circle-line',
  size: 'md',
  actions: [
    {
      label: 'Valider',
      actionArg: 'Valider',
    },
    {
      label: 'Annuler',
      actionArg: 'Annuler',
      secondary: true,
    },
  ],
}

export const ModalSansPiedDePage = (args) => ({
  components: {
    DsfrModal,
    DsfrButton,
    VIcon,
  },

  data () {
    return args
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
      :is-alert="isAlert"
      :icon="icon"
      :title="title"
      :origin="$refs.modalOrigin"
      :size="size"
      @close="onClose()"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
    </DsfrModal>
  `,

  methods: {
    onClose () {
      args.onClick('Fermer')
      this.opened = false
    },
    open () {
      this.opened = true
    },
  },
})
ModalSansPiedDePage.args = {
  opened: false,
  title: 'Titre de la modale',
  isAlert: false,
  icon: 'ri-checkbox-circle-line',
  size: 'md',
  actions: [
    {
      label: 'Valider',
      actionArg: 'Valider',
    },
    {
      label: 'Annuler',
      actionArg: 'Annuler',
      secondary: true,
    },
  ],
}

export const ModalAvecFooterPersonnalise = (args) => ({
  components: {
    DsfrModal,
    DsfrButton,
    VIcon,
  },

  data () {
    return args
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
      :actions="modifiedActions"
      :is-alert="isAlert"
      :icon="icon"
      :title="title"
      :origin="$refs.modalOrigin"
      :size="size"
      @close="onClose()"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
      <template #footer>
        Ici pied de page personnalisé
      </template>
    </DsfrModal>
  `,

  methods: {
    onClose () {
      args.onClick('Fermer')
      this.opened = false
    },
    open () {
      this.opened = true
    },
  },
})
ModalAvecFooterPersonnalise.args = {
  opened: false,
  title: 'Titre de la modale',
  isAlert: false,
  icon: 'ri-checkbox-circle-line',
  size: 'md',
}

ModalAvecActions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const openModalButton = canvas.getByRole('button')
  await userEvent.type(openModalButton, '{enter}')
  let closeModalButton = canvas.getByTitle('Fermer la fenêtre modale')
  await delay()
  expect(closeModalButton).toHaveFocus()
  await userEvent.type(closeModalButton, '{enter}')
  await delay()

  await userEvent.type(openModalButton, '{space}')
  await delay()
  await userEvent.tab()
  await delay()
  const validateButton = canvas.getByText('Valider').parentElement
  expect(validateButton).toHaveFocus()
  await userEvent.tab()
  await userEvent.tab()
  await delay()
  closeModalButton = canvas.getByTitle('Fermer la fenêtre modale')
  expect(closeModalButton).toHaveFocus()
  await userEvent.type(closeModalButton, '{space}')
  await delay()
  expect(openModalButton).toHaveFocus()
}
