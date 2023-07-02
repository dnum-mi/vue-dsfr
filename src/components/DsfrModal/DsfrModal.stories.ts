import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import DsfrModal from './DsfrModal.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'
import { setup } from '@storybook/vue3'

addIcons(RiCheckboxCircleLine)

const delay = (timeout = 100) => new Promise(resolve => setTimeout(resolve, timeout))

setup(app => {
  app.component('VIcon', VIcon)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/modale)
 */
export default {
  component: DsfrModal,
  title: 'Composants/DsfrModal',
  argTypes: {
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
    VIcon,
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
  opened: false,
  title: 'Titre de la modale',
  isAlert: false,
  icon: 'ri-checkbox-circle-line',
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

Modal.play = async ({ canvasElement }) => {
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
