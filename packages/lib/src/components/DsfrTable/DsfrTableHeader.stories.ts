import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref } from 'vue'

import VIcon from '../VIcon/VIcon.vue'

import DsfrTable from './DsfrTable.vue'
import DsfrTableHeader from './DsfrTableHeader.vue'

import './table.stories.css'

const meta = {
  component: DsfrTableHeader,
  title: 'Composants/DsfrTableHeader',
  argTypes: {
    header: {
      control: 'text',
      description: 'Texte de l’en-tête du tableau',
    },
    headerAttrs: {
      control: 'object',
      description:
        'Objet contenant les props ou événements à passer à la balise `th`',
    },
    icon: {
      control: 'object',
      description:
        'Objet contenant les props à passer à VIcon pour afficher une icône dans l’en-tête',
    },
    onClickHeader: {
      action: fn(),
      description: 'Fonction pour montrer le clic sur un en-tête',
    },
  },
} as Meta<typeof DsfrTableHeader>

export default meta
type Story = StoryObj<typeof meta>

const header = 'En-tête'
const headerAttrs = {
  class: 'ns-resize',
  onClick: () => {},
}

export const EnTeteDeTableau: Story = {
  args: {
    header,
    headerAttrs,
    onClickHeader: fn(),
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableHeader,
      VIcon,
    },
    setup () {
      const computedHeaderAttrs = {
        ...args.headerAttrs,
        onClick () {
          args.onClickHeader(args.header)
        },
      }
      return { args, computedHeaderAttrs }
    },
    template: `
      <DsfrTable
        title="Titre du tableau"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="args.header" :header-attrs="computedHeaderAttrs" />
          </tr>
        </template>
        <tr>
          <td>
            Corps du tableau
          </td>
        </tr>
      </DsfrTable>
    `,
  }),
}

const icon = {
  name: 'ri-sort-desc',
}

export const EnTeteDeTableauAvecIcone: Story = {
  args: {
    header,
    headerAttrs: {
      ...headerAttrs,
      style: 'display: flex; justify-content: space-between; align-items: center',
    },
    icon,
    onClickHeader: fn(),
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableHeader,
      VIcon,
    },
    setup () {
      const currentIcon = ref(args.icon)

      const computedHeaderAttrs = {
        ...args.headerAttrs,
        onClick: () => {
          const iconName = currentIcon.value?.name
          currentIcon.value =
            iconName === 'ri-sort-desc'
              ? { name: 'ri-sort-asc' }
              : iconName === 'ri-sort-asc'
                ? undefined
                : { name: 'ri-sort-desc' }
          args.onClickHeader(args.header)
        },
      }

      return { args, computedHeaderAttrs, currentIcon }
    },
    template: `
      <DsfrTable
        title="Titre du tableau"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="args.header" :header-attrs="computedHeaderAttrs" :icon="currentIcon" />
          </tr>
        </template>
        <tr>
          <td>
            Corps du tableau
          </td>
        </tr>
      </DsfrTable>
    `,
  }),
}
