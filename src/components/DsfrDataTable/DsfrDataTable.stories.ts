import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrDataTable from './DsfrDataTable.vue'

const meta = {
  component: DsfrDataTable,
  title: 'Composants/DsfrDataTable',
  argTypes: {
    id: {
      control: 'text',
      description: 'Identifiant unique du tableau (généré aléatoirement par défaut)',
    },
    title: {
      control: 'text',
      description: 'Titre du tableau affiché dans la caption',
    },
    headersRow: {
      description: 'En-têtes des colonnes du tableau',
    },
    rows: {
      description: 'Données du tableau (tableaux ou objets)',
    },
    selectableRows: {
      control: 'boolean',
      description: 'Afficher des cases à cocher pour sélectionner les lignes',
    },
    sortableRows: {
      description: 'Rendre les lignes triables (true pour toutes, ou tableau de clés)',
    },
    verticalBorders: {
      control: 'boolean',
      description: 'Afficher les bordures verticales du tableau',
    },
    bottomCaption: {
      control: 'boolean',
      description: 'Placer la caption en bas du tableau',
    },
    noCaption: {
      control: 'boolean',
      description: 'Masquer complètement la caption',
    },
    pagination: {
      control: 'boolean',
      description: 'Activer la pagination',
    },
    paginationOptions: {
      description: 'Options de nombre de lignes par page',
    },
    paginationAriaLabel: {
      control: 'text',
      description: 'Label aria pour la pagination',
    },
    rowsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Nombre de lignes par page',
    },
    sortedBy: {
      control: 'text',
      description: 'Clé de la colonne par laquelle le tableau est trié',
    },
    sortedDesc: {
      control: 'boolean',
      description: 'Indique si le tri est descendant (true) ou ascendant (false)',
    },
  },
} satisfies Meta<typeof DsfrDataTable>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
  render: (args) => ({
    components: { DsfrDataTable },

    setup () {
      return args
    },

    template: `
    <div class="fr-container fr-my-2v">
      <DsfrDataTable
        title="Titre du tableau (caption)"
        :headers-row="headersRow"
        no-caption
        :rows="rows"
      />
    </div>
  `,
  }),
  args: {
    headersRow: [
      'ID',
      'Name',
      'Email',
    ],
    rows: [
      [1, 'John Doe', 'john.doe@gmail.com'],
      [2, 'Jane Doe', 'jane.doe@gmail.com'],
      [3, 'James Bond', 'james.bond@mi6.gov.uk'],
      [4, 'Alice Johnson', 'alice.johnson@example.com'],
      [5, 'Bob Smith', 'bob.smith@example.com'],
      [6, 'Carol Williams', 'carol.williams@example.com'],
      [7, 'David Brown', 'david.brown@example.com'],
      [8, 'Emma Davis', 'emma.davis@example.com'],
      [9, 'Frank Miller', 'frank.miller@example.com'],
      [10, 'Grace Wilson', 'grace.wilson@example.com'],
      [11, 'Henry Moore', 'henry.moore@example.com'],
      [12, 'Iris Taylor', 'iris.taylor@example.com'],
    ],
  },
}

export const Complexe: Story = {
  render: (args) => ({
    components: { DsfrDataTable },

    setup () {
      return args
    },

    template: `
    <div class="fr-container fr-my-2v">
      <DsfrDataTable
        v-model:selection="selection"
        title="Titre du tableau (caption)"
        :headers-row="headersRow"
        :rows="rows"
        selectable-rows
        sortable-rows
        v-model:sorted-by="sortedBy"
        v-model:sorted-desc="sortedDesc"
        row-key="id"
      >
        <template #header="{ key, label }">
          <div>
            <em>{{ label }}</em>
          </div>
        </template>

        <template #cell="{ colKey, cell }">
          <template v-if="colKey === 'email'">
            <a :href="'mailto:' + cell">{{ cell }}</a>
          </template>
          <template v-else>
            {{ cell }} <em>({{ colKey }})</em>
          </template>
        </template>
      </DsfrDataTable>
      <p>IDs sélectionnées : {{ selection }}</p>
      <p>Tri courant : {{ sortedBy ? (sortedBy + ' — ' + (sortedDesc ? 'descendant' : 'ascendant')) : 'aucun' }}</p>
    </div>
  `,
  }),
  args: {
    headersRow: [
      {
        key: 'id',
        label: 'ID',
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'email',
        label: 'Email',
      },
    ],
    rows: [
      [1, 'John Doe', 'john.doe@gmail.com'],
      [2, 'Jane Doe', 'jane.doe@gmail.com'],
      [3, 'James Bond', 'james.bond@mi6.gov.uk'],
      [4, 'Alice Johnson', 'alice.johnson@example.com'],
      [5, 'Bob Smith', 'bob.smith@example.com'],
      [6, 'Carol Williams', 'carol.williams@example.com'],
      [7, 'David Brown', 'david.brown@example.com'],
      [8, 'Emma Davis', 'emma.davis@example.com'],
      [9, 'Frank Miller', 'frank.miller@example.com'],
      [10, 'Grace Wilson', 'grace.wilson@example.com'],
      [11, 'Henry Moore', 'henry.moore@example.com'],
      [12, 'Iris Taylor', 'iris.taylor@example.com'],
    ],
    selection: [],
    sortedBy: 'id',
    sortedDesc: false,
  },
}

export const PlusComplexe: Story = {
  render: (args) => ({
    components: { DsfrDataTable },

    setup () {
      return args
    },

    template: `
    <div class="fr-container fr-my-2v" style="width: 800px;">
      <DsfrDataTable
        v-model:selection="selection"
        v-model:current-page="currentPage"
        :headers-row
        :rows
        :selectable-rows
        row-key="id"
        :title
        :pagination
        :rows-per-page
        :pagination-options
        :sorted
        v-model:sorted-by="sortedBy"
        v-model:sorted-desc="sortedDesc"
        :sortable-rows
      >
        <template #header="{ label }">
          <em>{{ label }}</em>
        </template>

        <template #cell="{ colKey, cell }">
          <template v-if="colKey === 'email'">
            <a :href="'mailto:' + cell">{{ cell }}</a>
          </template>
          <template v-else>
            {{ cell }} <em>({{ colKey }})</em>
          </template>
        </template>
      </DsfrDataTable>
      <p>IDs sélectionnées : {{ selection }}</p>
      <p>Tri courant : {{ sortedBy ? (sortedBy + ' — ' + (sortedDesc ? 'descendant' : 'ascendant')) : 'aucun' }}</p>
    </div>
  `,
  }),
  args: {
    headersRow: [
      {
        key: 'id',
        label: 'ID',
      },
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'email',
        label: 'Email',
      },
    ],
    rows: [
      { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com' },
      { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
      { id: 3, name: 'James Bond', email: 'james.bond@mi6.gov.uk' },
      { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { id: 5, name: 'Bob Smith', email: 'bob.smith@example.com' },
      { id: 6, name: 'Carol Williams', email: 'carol.williams@example.com' },
      { id: 7, name: 'David Brown', email: 'david.brown@example.com' },
      { id: 8, name: 'Emma Davis', email: 'emma.davis@example.com' },
      { id: 9, name: 'Frank Miller', email: 'frank.miller@example.com' },
      { id: 10, name: 'Grace Wilson', email: 'grace.wilson@example.com' },
      { id: 11, name: 'Henry Moore', email: 'henry.moore@example.com' },
      { id: 12, name: 'Iris Taylor', email: 'iris.taylor@example.com' },
    ],
    currentPage: 0,
    selection: [],
    pagination: true,
    paginationOptions: [3, 5, 10],
    rowsPerPage: 5,
    title: 'Titre du tableau (caption)',
    selectable: true,
    sorted: 'id',
    sortedBy: 'id',
    sortedDesc: false,
    sortableRows: ['id', 'name', 'email'],
    selectableRows: true,
  },
}
