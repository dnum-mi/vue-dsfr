import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableRow from './DsfrTableRow.vue'

const meta = {
  component: DsfrTableRow,
  title: 'Composants/DsfrTableRow',
  argTypes: {
    title: { control: 'text' },
    headers: {
      control: 'object',
      description:
        'Liste des en-têtes du tableau (tableau de string). *N.B. : Ne fait pas partie du composant.*',
    },
    rowData: {
      control: 'object',
      description: `Tableau ou objet.

Si c’est un tableau, chaque élément de ce tableau contiendra les props attendues par <a href="/?path=/docs/composants-dsfrtablecell--docs">DsfrTableCell</a>.

Si c’est un objet, il doit avoir une propriété \`row\` dont la valeur sera un tableau qui contiendra les props attendues par <a href="/?path=/docs/composants-dsfrtablecell--docs">DsfrTableCell</a>.
Toutes les autres propriétés seront mises sur l’élément \`<tr>\` de cette ligne.
        `,
    },
    rowAttrs: {
      control: 'object',
      description: 'Objet contenant les props à passer à la balise `<tr>`',
    },
    onClickRow: {
      action: fn(),
      description: 'Fonction pour montrer le clic sur une ligne',
    },
  },
} as Meta<typeof DsfrTableRow>

export default meta
type Story = StoryObj<typeof meta>

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']
const rowData = [
  'EGAUD',
  'Pierre-Louis',
  'pierre.egaud@ninja.com',
  '01 02 03 04 05',
  '06 01 02 03 04',
  'En cours',
]

const rowDataWithComponent = [
  'EGAUD',
  'Pierre-Louis',
  'pierre.egaud@ninja.com',
  '01 02 03 04 05',
  '06 01 02 03 04',
  {
    component: 'DsfrTag',
    label: 'Succès',
    class: 'success',
  },
]

const complexRowData = {
  rowAttrs: {
    class: 'pointer',
    style: 'text-decoration: line-through',
  },
  rowData: [
    'EGAUD',
    'Pierre-Louis',
    'pierre.egaud@ninja.com',
    '01 02 03 04 05',
    '06 01 02 03 04',
    {
      component: 'DsfrTag',
      label: 'Supprimé',
      class: 'error',
    },
  ],
}

export const LigneDeTableauSimple: Story = {
  args: {
    title,
    headers,
    rowData,
  },
  render: (args: any) => ({
    components: {
      DsfrTable,
      DsfrTableRow,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <DsfrTableRow :row-data="args.rowData" />
      </DsfrTable>
    `,
  }),
}

export const LigneDeTableauAvecComposant: Story = {
  args: {
    title,
    headers,
    rowData: rowDataWithComponent,
  },
  render: (args: any) => ({
    components: {
      DsfrTable,
      DsfrTableRow,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
        :headers="args.headers"
      >
        <DsfrTableRow :row-data="args.rowData" />
      </DsfrTable>
    `,
  }),
}

export const LigneDeTableauComplexe: Story = {
  args: {
    title,
    headers,
    rowData: complexRowData.rowData,
    rowAttrs: complexRowData.rowAttrs,
  },
  render: (args: any) => ({
    components: {
      DsfrTable,
      DsfrTableRow,
      DsfrTableHeaders,
    },
    setup () {
      const rowAttrs = {
        ...args.rowAttrs,
        onClick: () => args.onClickRow(args.rowData),
      }

      return { args, rowAttrs }
    },
    template: `
      <DsfrTable
        :title="args.title"
        :headers="args.headers"
      >
        <DsfrTableRow :row-data="args.rowData" :row-attrs="rowAttrs" />
      </DsfrTable>
    `,
  }),
}
