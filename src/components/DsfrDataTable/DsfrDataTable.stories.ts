import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { action } from 'storybook/actions'

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
      description: 'Titre du tableau affiché dans la caption (prop obligatoire)',
    },
    headersRow: {
      description: 'En-têtes des colonnes du tableau (array de strings ou objects { key, label })',
    },
    rows: {
      description: 'Données du tableau (array de tableaux ou objets)',
    },
    selectableRows: {
      control: 'boolean',
      description: 'Afficher des cases à cocher pour sélectionner les lignes',
    },
    sortableRows: {
      description: 'Rendre les lignes triables (true pour toutes, ou tableau de clés)',
    },
    sorted: {
      control: 'text',
      description: 'Clé de colonne pour le tri par défaut',
    },
    sortFn: {
      description: 'Fonction personnalisée de tri',
      control: false,
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
    captionDetail: {
      control: 'text',
      description: 'Détail supplémentaire dans la caption',
    },
    multilineTable: {
      control: 'boolean',
      description: 'Permettre le contenu sur plusieurs lignes',
    },
    noScroll: {
      control: 'boolean',
      description: 'Désactiver le scroll horizontal du tableau',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille des cellules du tableau',
    },
    topBarDetail: {
      control: 'text',
      description: 'Texte de détail dans la barre supérieure du tableau (concerne la sélection)',
    },
    topBarButtons: {
      description: 'Boutons à afficher dans la barre supérieure (concerne la sélection)',
      control: false,
    },
    topBarButtonsSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille des boutons de la barre supérieure',
    },
    pagination: {
      control: 'boolean',
      description: 'Activer la pagination',
    },
    paginationWrapperClass: {
      description: 'Classes CSS pour le wrapper de pagination',
      control: false,
    },
    paginationOptions: {
      description: 'Options de nombre de lignes par page',
    },
    paginationAriaLabel: {
      control: 'text',
      description: 'Label aria pour la pagination',
    },
    paginationSelectLabel: {
      control: 'text',
      description: 'Label du select de pagination',
    },
    currentPage: {
      control: { type: 'number', min: 0 },
      description: 'Page actuelle (0-indexed)',
    },
    rowsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Nombre de lignes par page',
    },
    bottomActionBarClass: {
      description: 'Classes CSS pour la barre d\'actions inférieure',
      control: false,
    },
    bottomBarDetail: {
      control: 'text',
      description: 'Texte de détail dans la barre inférieure du tableau',
    },
    bottomBarButtons: {
      description: 'Boutons à afficher dans la barre inférieure',
      control: false,
    },
    bottomBarButtonsSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille des boutons de la barre inférieure',
    },
    sortedBy: {
      control: 'text',
      description: 'Clé de la colonne par laquelle le tableau est trié (v-model)',
    },
    sortedDesc: {
      control: 'boolean',
      description: 'Indique si le tri est descendant (true) ou ascendant (false) (v-model)',
    },
    selection: {
      description: 'Lignes sélectionnées (v-model)',
      control: false,
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
        :title="title"
        :headers-row="headersRow"
        no-caption
        :rows="rows"
      />
    </div>
  `,
  }),
  args: {
    title: 'Titre du tableau (caption)',
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

export const Selection: Story = {
  name: 'Sélection',
  render: (args) => ({
    components: { DsfrDataTable },

    setup () {
      return args
    },

    template: `
    <div class="fr-container fr-my-2v">
      <DsfrDataTable
        v-model:selection="selection"
        :title="title"
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
    title: 'Titre du tableau (caption)',
    headersRow: [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'id',
        label: 'ID',
      },
      {
        key: 'email',
        label: 'Email',
      },
    ],
    rows: [
      ['John Doe', 1, 'john.doe@gmail.com'],
      ['Jane Doe', 2, 'jane.doe@gmail.com'],
      ['James Bond', 3, 'james.bond@mi6.gov.uk'],
      ['Alice Johnson', 4, 'alice.johnson@example.com'],
      ['Bob Smith', 5, 'bob.smith@example.com'],
      ['Carol Williams', 6, 'carol.williams@example.com'],
      ['David Brown', 7, 'david.brown@example.com'],
      ['Emma Davis', 8, 'emma.davis@example.com'],
      ['Frank Miller', 9, 'frank.miller@example.com'],
      ['Grace Wilson', 10, 'grace.wilson@example.com'],
      ['Henry Moore', 11, 'henry.moore@example.com'],
      ['Iris Taylor', 12, 'iris.taylor@example.com'],
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
        :top-bar-detail="topBarDetail"
        :top-bar-buttons="topBarButtons"
        :bottom-bar-detail="bottomBarDetail"
        :bottom-bar-buttons="bottomBarButtons"
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
    topBarDetail: 'nombre de lignes sélectionnées',
    topBarButtons: [
      {
        label: 'Action sur la sélection',
        secondary: false,
        onClick: action('bouton d\'action sur la sélection cliqué'),
      },
    ],
    bottomBarDetail: 'nombre total de lignes ',
    bottomBarButtons: [
      {
        label: 'Action globale',
        secondary: false,
        onClick: action('bouton d\'action globale cliqué'),
      },
    ],
  },
}

export const EmploiDuTemps: Story = {
  render: (args) => ({
    components: { DsfrDataTable },

    setup () {
      return args
    },

    template: `
    <div class="fr-container fr-my-2v">
      <DsfrDataTable
        :title="title"
        vertical-borders
        :headers-row="[]"
        :rows="[]"
      >
        <template #captionDescription>
          (Résumé) Emploi du temps horaire des Groupes 1 et 2, le matin des jours de la semaine ouvrée (Lundi au Vendredi) :
          <ul>
            <li>la première colonne représente le planning de la journée de Lundi pour les groupes 1 et 2,</li>
            <li>la deuxième colonne représente le planning de la journée de Mardi pour les groupes 1 et 2,</li>
            <li>la troisième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 1,</li>
            <li>la quatrième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 2,</li>
            <li>la cinquième colonne représente le planning de la journée de Vendredi pour les groupes 1 et 2.</li>
          </ul>
        </template>
        <template #thead>
          <tr>
            <th
              id="schedule-thead-0-col-0"
              class="fr-cell--fixed"
              role="columnheader"
              rowspan="2"
            >
              Horaires
            </th>
            <th id="schedule-thead-0-col-1">
              Lundi
            </th>
            <th id="schedule-thead-0-col-2">
              Mardi
            </th>
            <th
              id="schedule-thead-0-col-3"
              colspan="2"
            >
              Mercredi & Jeudi
            </th>
            <th id="schedule-thead-0-col-4">
              Vendredi
            </th>
          </tr>
          <tr>
            <th
              id="schedule-thead-1-col-0"
              headers="schedule-thead-0-col-1"
            >
              Groupes 1 & 2
            </th>
            <th
              id="schedule-thead-1-col-1"
              headers="schedule-thead-0-col-2"
            >
              Groupes 1 & 2
            </th>
            <th
              id="schedule-thead-1-col-2"
              headers="schedule-thead-0-col-3"
            >
              Groupe 1
            </th>
            <th
              id="schedule-thead-1-col-3"
              headers="schedule-thead-0-col-3"
            >
              Groupe 2
            </th>
            <th
              id="schedule-thead-1-col-4"
              headers="schedule-thead-0-col-4"
            >
              Groupes 1 & 2
            </th>
          </tr>
        </template>
        <template #tbody>
          <tr
            id="schedule-row-key-1"
            data-row-key="1"
          >
            <th
              id="schedule-row-0"
              class="fr-cell--fixed"
              headers="schedule-thead-0-col-0"
            >
              8h
            </th>
            <td headers="schedule-row-0 schedule-thead-0-col-1 schedule-thead-1-col-0">
              Français
            </td>
            <td headers="schedule-row-0 schedule-thead-0-col-2 schedule-thead-1-col-1">
              Mathématiques
            </td>
            <td headers="schedule-row-0 schedule-thead-0-col-3 schedule-thead-1-col-2">
              LV1
            </td>
            <td headers="schedule-row-0 schedule-thead-0-col-3 schedule-thead-1-col-3">
              Histoire - Géographie
            </td>
            <td headers="schedule-row-0 schedule-thead-0-col-4 schedule-thead-1-col-4">
              EPS
            </td>
          </tr>
          <tr
            id="schedule-row-key-2"
            data-row-key="2"
          >
            <th
              id="schedule-row-1"
              class="fr-cell--fixed"
              headers="schedule-thead-0-col-0"
            >
              9h
            </th>
            <td
              colspan="5"
              headers="schedule-row-1 schedule-thead-0-col-1 schedule-thead-0-col-2 schedule-thead-0-col-3 schedule-thead-0-col-4"
            >
              Étude dirigée - Exemple de colspan sur toute la ligne
            </td>
          </tr>
          <tr
            id="schedule-row-key-3"
            data-row-key="3"
          >
            <th
              id="schedule-row-2"
              class="fr-cell--fixed"
              headers="schedule-thead-0-col-0"
            >
              10h
            </th>
            <td headers="schedule-row-2 schedule-thead-0-col-1 schedule-thead-1-col-0">
              Mathématiques
            </td>
            <td headers="schedule-row-2 schedule-thead-0-col-2 schedule-thead-1-col-1">
              Histoire - Géographie
            </td>
            <td headers="schedule-row-2 schedule-thead-0-col-3 schedule-thead-1-col-2">
              Français
            </td>
            <td headers="schedule-row-2 schedule-thead-0-col-3 schedule-thead-1-col-3">
              EPS
            </td>
            <td headers="schedule-row-2 schedule-thead-0-col-4 schedule-thead-1-col-4">
              LV1
            </td>
          </tr>
        </template>
      </DsfrDataTable>
    </div>
  `,
  }),
  args: {
    title: 'Emploi du temps complexe avec cellules fusionnées et rowspan et colspan et bordures verticales',
    verticalBorders: true,
  },
}
