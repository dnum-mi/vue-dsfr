import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { setup } from '@storybook/vue3-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { computed, ref } from 'vue'

import DsfrButton from '../DsfrButton/DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrModal from './DsfrModal.vue'

const delay = (timeout = 100) =>
  new Promise(resolve => setTimeout(resolve, timeout))

setup((app) => {
  app.component('VIcon', VIcon)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/modale)
 */
const meta = {
  component: DsfrModal,
  title: 'Composants/DsfrModal',
  tags: ['autodocs'],
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
    onClose: fn(),
    onActionClick: fn(),
  },
} satisfies Meta<typeof DsfrModal>

export default meta
type Story = StoryObj<typeof meta>

export const ModaleAvecActions: Story = {
  name: 'Modale avec actions',
  render: (args: any) => ({
    components: {
      DsfrModal,
      DsfrButton,
      VIcon,
    },
    setup () {
      const opened = ref(args.opened)
      const modalOrigin = ref(null)

      const modifiedActions = computed(() => {
        return args.actions?.map((action: any) => ({
          ...action,
          onClick: () => {
            args.onActionClick(action.label)
            opened.value = false
          },
        }))
      })

      function close () {
        args.onClose()
        opened.value = false
      }

      return {
        args,
        opened,
        modalOrigin,
        modifiedActions,
        open: () => { opened.value = true },
        close,
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
        :actions="modifiedActions"
        :is-alert="args.isAlert"
        :icon="args.icon"
        :title="args.title"
        :origin="modalOrigin"
        :size="args.size"
        @close="close()"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
      </DsfrModal>
    `,
  }),
  args: {
    opened: false,
    title: 'Titre de la modale',
    isAlert: false,
    icon: 'ri-checkbox-circle-line',
    size: 'md',
    onClose: fn(),
    actions: [
      {
        label: 'Valider',
      },
      {
        label: 'Annuler',
        secondary: true,
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openModalButton = canvas.getByRole('button', { name: 'Ouvre la modale' })
    await userEvent.click(openModalButton)
    await delay()

    let closeModalButton = canvas.getByTitle('Fermer la fenêtre modale')
    expect(closeModalButton).toHaveFocus()
    await userEvent.click(closeModalButton)
    await delay()

    await userEvent.click(openModalButton)
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
    await userEvent.click(closeModalButton)
    await delay()
    expect(openModalButton).toHaveFocus()
  },
}

export const ModaleSansPiedDePage: Story = {
  name: 'Modale sans pied de page',
  render: (args: any) => ({
    components: {
      DsfrModal,
      DsfrButton,
      VIcon,
    },
    setup () {
      const opened = ref(args.opened)
      const modalOrigin = ref(null)

      function close () {
        args.onClose()
        opened.value = false
      }

      return {
        args,
        opened,
        modalOrigin,
        open: () => { opened.value = true },
        close,
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
        :is-alert="args.isAlert"
        :icon="args.icon"
        :title="args.title"
        :origin="modalOrigin"
        :size="args.size"
        @close="close()"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
      </DsfrModal>
    `,
  }),
  args: {
    opened: false,
    title: 'Titre de la modale',
    isAlert: false,
    icon: 'ri-checkbox-circle-line',
    size: 'md',
    actions: undefined,
  },
}

export const ModaleAvecFooterPersonnalise: Story = {
  name: 'Modale avec footer personnalisé',
  render: (args: any) => ({
    components: {
      DsfrModal,
      DsfrButton,
      VIcon,
    },
    setup () {
      const opened = ref(args.opened)
      const modalOrigin = ref(null)

      function close () {
        args.onClose()
        opened.value = false
      }

      return {
        args,
        opened,
        modalOrigin,
        open: () => { opened.value = true },
        close,
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
        :is-alert="args.isAlert"
        :icon="args.icon"
        :title="args.title"
        :origin="modalOrigin"
        :size="args.size"
        @close="close()"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.</p>
        <template #footer>
          Ici pied de page personnalisé
        </template>
      </DsfrModal>
    `,
  }),
  args: {
    opened: false,
    title: 'Titre de la modale',
    isAlert: false,
    icon: 'ri-checkbox-circle-line',
    size: 'md',
    actions: undefined,
  },
}
