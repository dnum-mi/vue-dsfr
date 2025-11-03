import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { setup } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'

import DsfrTag from '../DsfrTag/DsfrTag.vue'

import DsfrTable from './DsfrTable.vue'
import DsfrTableCell from './DsfrTableCell.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'

setup((app) => {
  app.component('DsfrTag', DsfrTag) // Composant utilisé dans les stories CelluleDeTableauAvecComposant et CelluleDeTableauComplexe
})

const meta = {
  component: DsfrTableCell,
  title: 'Composants/DsfrTableCell',
  argTypes: {
    title: { control: 'text' },
    headers: {
      control: 'object',
      description:
        'Liste des en-têtes du tableau (tableau de string). *N.B. : Ne fait pas partie du composant.*',
    },
    field: {
      control: 'string',
      description: 'Contenu du champ. Peut être une string ou bien un objet',
    },
    onClickCell: {
      action: fn(),
      description:
        'Fonction pour montrer le clic sur une cellule (Ici seulement pour "Cellule de tableau complexe")',
    },
  },
} as Meta<typeof DsfrTableCell>

export default meta
type Story = StoryObj<typeof meta>

const title = 'Utilisateurs'
const headers = ['Nom']
const simpleField = 'EGAUD'

const fieldWithComponent = {
  component: 'DsfrTag',
  label: 'Succès',
  class: 'success',
}

const fieldWithComponentSimple = {
  component: 'a',
  text: 'Vers la page d\'accueil',
  href: '/',
  'aria-label': 'Vers la page d’accueil',
}

const cellAttrs = {
  class: 'pointer',
  style: 'font-style: italic',
}

export const CelluleDeTableauSimple: Story = {
  args: {
    title,
    headers,
    field: simpleField,
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableCell,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template #header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <tr>
          <DsfrTableCell :field="args.field" />
        </tr>
      </DsfrTable>
    `,
  }),
}

export const CelluleDeTableauAvecElementHtml: Story = {
  args: {
    title,
    headers,
    field: fieldWithComponentSimple,
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableCell,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template #header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <tr>
          <DsfrTableCell :field="args.field" />
        </tr>
      </DsfrTable>
    `,
  }),
}

export const CelluleDeTableauAvecComposant: Story = {
  args: {
    title,
    headers,
    field: fieldWithComponent,
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableCell,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template #header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <tr>
          <DsfrTableCell :field="args.field" />
        </tr>
      </DsfrTable>
    `,
  }),
}

export const CelluleDeTableauComplexe: Story = {
  args: {
    title,
    headers,
    field: fieldWithComponent,
    cellAttrs,
    onClickCell: fn(),
  },
  render: (args) => ({
    components: {
      DsfrTable,
      DsfrTableCell,
      DsfrTableHeaders,
    },
    setup () {
      const computedCellAttrs = { ...args.cellAttrs, onClick: () => args.onClickCell(args.field) }
      return { args, computedCellAttrs }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template #header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <tr>
          <DsfrTableCell :field="args.field" :cell-attrs="computedCellAttrs" />
        </tr>
      </DsfrTable>
    `,
  }),
}
