import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from '@storybook/test'
import { ref } from 'vue'

import DsfrAlert from './DsfrAlert.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const meta = {
  component: DsfrAlert,
  title: 'Composants/DsfrAlert',
  tags: ['message'],
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` de l’alerte. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    title: {
      control: 'text',
      description: '**Titre** de l\'alerte',
    },
    description: {
      control: 'text',
      description:
        '**Description** de l\'alerte, peux être passé dans le slot par défaut',
    },
    type: {
      options: ['error', 'success', 'info', 'warning'],
      control: 'radio',
      description:
        '**Type** de l\'alerte : `error` (Erreur), `success` (Succès), `warning` (Avertissement), ou `info` (Information)',
    },
    small: {
      control: 'boolean',
      description: 'Permet d\'obtenir une version minimaliste de l\'alerte',
    },
    close: {
      description: 'Event de fermeture de l\'alerte',
    },
    closed: {
      control: 'boolean',
      description: 'Permet d\'alterner entre l\'état ouvert ou fermé de l\'alerte',
    },
    closeable: {
      control: 'boolean',
      description:
        'Ajoute la possibilité de fermer l\'alerte via un bouton en forme de croix',
    },
    titleTag: {
      control: 'text',
      description:
        'Permet de choisir la balise contenant le titre de l\'alerte (h3 par défaut)',
    },
    closeButtonLabel: {
      control: 'text',
      description:
        'Valeur du bouton cliquable permettant la fermeture de l\'alerte',
    },
  },
} satisfies Meta<typeof DsfrAlert>

export default meta
type Story = StoryObj<typeof meta>

export const AlerteSimple: Story = {
  name: 'Alerte avec contrôles',
  args: {
    type: 'info',
    title: 'Titre de l’alerte',
    description: 'Description de l’alerte',
    closeable: false,
    small: false,
    closeButtonLabel: 'Fermer l’alerte',
    titleTag: 'h2',
    alert: true,
  },
  render: (args) => ({
    components: { DsfrAlert },
    setup () {
      const closed = ref(args.closed)
      const close = () => {
        closed.value = true
        setTimeout(() => {
          closed.value = false
        }, 2000)
      }

      return {
        args,
        closed,
        close,
      }
    },
    template: `
      <DsfrAlert
        :title="args.title"
        :description="args.description"
        :type="args.type"
        :small="args.small"
        :closeable="args.closeable"
        :closed="closed"
        :is="args.titleTag"
        @close="close"
      />
    `,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByText('Titre alerte')
    expect(alert).toBeVisible()
    expect(alert).toContainHTML('Titre alerte')
    expect(alert.parentElement).toContainHTML('Description du message')
    const closeButton = alert.parentElement?.querySelector('button') as HTMLButtonElement
    closeButton?.click()
    await delay(500)
    expect(alert).not.toBeVisible()
  },
}

export const Alertes = {
  render: () => ({
    components: { DsfrAlert },
    template: `
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          title="Titre de l’info"
          description="Description de l’info"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
        type="warning"
          title="Titre de l’avertissement"
          description="Description de l’avertissement"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          title="Titre du succès"
          description="Description du succès"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          title="Titre de l’erreur"
          description="Description de l’erreur"
        />
      </div>
    `,
  }),
}

export const PetitesAlertes = {
  render: () => ({
    components: { DsfrAlert },
    template: `
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          description="Description de l’info"
          small="small"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="warning"
          description="Description de l’avertissement"
          small="small"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          description="Description du succès"
          small="small"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          description="Description de l’erreur"
          small="small"
        />
      </div>
    `,
  }),
}

export const AlertesFermables = {
  args: {
    closeable: true,
    small: true,
  },
  render: (args: any) => ({
    components: { DsfrAlert },
    setup () {
      const closed = ref(Array.from({ length: 6 }).map(() => false))
      const close = (idx: number) => {
        closed.value[idx] = true
        setTimeout(() => {
          closed.value[idx] = false
        }, 3000)
      }
      return {
        ...args,
        closed,
        close,
      }
    },
    template: `
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          title="Titre de l’info"
          description="Description de l’info"
          :closed="closed[0]"
          :closeable="closeable"
          @close="close(0)"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          description="Description de l’info"
          :closed="closed[1]"
          :closeable="closeable"
          :small="small"
          @close="close(1)"
        />
      </div>

      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="warning"
          title="Titre de l’avertissement"
          description="Description de l’avertissement"
          :closed="closed[4]"
          :closeable="closeable"
          @close="close(4)"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="warning"
          description="Description de l’avertissement"
          :closed="closed[5]"
          :closeable="closeable"
          :small="small"
          @close="close(5)"
        />
      </div>

      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          title="Titre du succès"
          description="Description du succès"
          :closed="closed[2]"
          :closeable="closeable"
          @close="close(2)"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          description="Description du succès"
          :closed="closed[3]"
          :closeable="closeable"
          :small="small"
          @close="close(3)"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          title="Titre de l’erreur"
          description="Description de l’erreur"
          :closed="closed[4]"
          :closeable="closeable"
          @close="close(4)"
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          description="Description de l’erreur"
          :closed="closed[5]"
          :closeable="closeable"
          :small="small"
          @close="close(5)"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByText('Titre de l’info')
    expect(alert).toBeVisible()
    const closeButton = alert.parentElement?.querySelector('button') as HTMLButtonElement
    closeButton.click()
    await delay(500)
    expect(alert).not.toBeVisible()
  },
}

export const AlertesSlot = {
  render: () => ({
    components: { DsfrAlert },
    template: `
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          title="Titre de l’info"
        >
          Description de l’info
          <br/>
          Saut de ligne
        </DsfrAlert>
      </div>
    `,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByText('Titre de l’info')
    expect(alert.parentElement).toContainHTML('Description de l’info')
    expect(alert.parentElement).toContainHTML('<br />')
    expect(alert.parentElement).toContainHTML('Saut de ligne')
  },
}

export const AlertesAvecRoleAlert = {
  render: () => ({
    components: { DsfrAlert },
    template: `
      <div style="margin: 1rem 0;">
        <DsfrAlert
          alert
          type="info"
          title="Titre de l’avertissement"
        >
          Description de l’avertissement
          <br/>
          Saut de ligne
        </DsfrAlert>
      </div>
    `,
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByRole('alert')
    expect(alert).toBeVisible()
    expect(alert.firstChild).toContainHTML('Titre de l’avertissement')
    expect(alert).toContainHTML('Description de l’avertissement')
  },
}
