import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref } from 'vue'

import DsfrNotice from './DsfrNotice.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bandeau-d-information-importante)
 */
const meta = {
  component: DsfrNotice,
  title: 'Composants/DsfrNotice',
  argTypes: {
    title: {
      control: 'text',
      description: '**Titre** du bandeau d’information importante',
    },
    desc: {
      control: 'text',
      description: '**Titre** du bandeau d’information importante',
    },
    closeable: {
      control: 'boolean',
      description:
        'Ajoute la possibilité de présenter un bouton en forme de croix qui émet l’événement `"close"`',
    },
    type: {
      control: 'text',
      description: '**type** du bandeau d’information',
    },
    onClose: {
      action: fn(),
    },
  },
} as Meta<typeof DsfrNotice>

export default meta

type Story = StoryObj<typeof meta>

export const BandeauDAlerte: Story = {
  args: {
    title: 'Titre du bandeau d\'information importante',
    desc: '',
    type: 'info',
    closeable: false,
  },
  render: (args) => ({
    components: { DsfrNotice },
    setup () {
      const closed = ref(false)
      const close = () => {
        closed.value = true
        setTimeout(() => {
          closed.value = false
        }, 2000)
      }
      return { args, closed, close }
    },
    template: `
      <DsfrNotice
        v-if="!closed"
        :title="args.title"
        :desc="args.desc"
        :closeable="args.closeable"
        :type="args.type"
        @close="close"
      />
    `,
  }),
}

export const BandeauDAlerteWarning: Story = {
  args: {
    title: 'Titre du bandeau d\'information importante',
    type: 'warning',
    closeable: false,
  },
  render: (args) => ({
    components: { DsfrNotice },
    setup () {
      const closed = ref(false)
      const close = () => {
        closed.value = true
        setTimeout(() => {
          closed.value = false
        }, 2000)
      }
      return { args, closed, close }
    },
    template: `
      <DsfrNotice
        v-if="!closed"
        :title="args.title"
        :desc="args.desc"
        :closeable="args.closeable"
        :type="args.type"
        @close="close"
      />
    `,
  }),
}

export const BandeauDAlerteAvecDescription: Story = {
  args: {
    title: 'Titre du bandeau d\'information importante fermable',
    desc: 'Texte de description plutot long lorem ipsum sit consectetur adipiscing elit.',
    type: 'info',
    closeable: false,
  },
  render: (args) => ({
    components: { DsfrNotice },
    setup () {
      const closed = ref(false)
      const close = () => {
        closed.value = true
        setTimeout(() => {
          closed.value = false
        }, 2000)
      }
      return { args, closed, close }
    },
    template: `
      <DsfrNotice
        v-if="!closed"
        :title="args.title"
        :desc="args.desc"
        :closeable="args.closeable"
        :type="args.type"
        @close="close"
      />
    `,
  }),
}

export const BandeauDAlerteFermable: Story = {
  args: {
    title: 'Titre du bandeau d\'information importante fermable',
    desc: 'Texte de description plutot long lorem ipsum sit consectetur adipiscing elit.',
    type: 'info',
    closeable: true,
  },
  render: (args) => ({
    components: { DsfrNotice },
    setup () {
      const closed = ref(false)
      const close = () => {
        closed.value = true
        setTimeout(() => {
          closed.value = false
        }, 2000)
      }
      return { args, closed, close }
    },
    template: `
      <DsfrNotice
        v-if="!closed"
        :title="args.title"
        :desc="args.desc"
        :closeable="args.closeable"
        :type="args.type"
        @close="close"
      />
    `,
  }),
}
