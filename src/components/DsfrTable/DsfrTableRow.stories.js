import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableRow from './DsfrTableRow.vue'

export default {
  component: DsfrTableRow,
  title: 'Composants/Tableau/Ligne de tableau - DsfrTableRow',
  argTypes: {
    title: { control: 'text' },
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`). *N.B. : Ne fait pas partie du composant.*',
    },
    headers: {
      control: 'object',
      description: 'Liste des en-têtes du tableau (tableau de string). *N.B. : Ne fait pas partie du composant.*',
    },
    rowData: {
      control: 'object',
      description: `Tableau ou objet.

Si c’est un tableau, chaque élément de ce tableau contiendra les props attendues par <a href="/?path=/docs/composants-tableau-cellule-de-tableau-dsfrtablecell--cellule-de-tableau-simple">DsfrTableCell</a>.

Si c’est un objet, il doit avoir une propriété \`row\` dont la valeur sera un tableau qui contiendra les props attendues par <a href="/?path=/docs/composants-tableau-cellule-de-tableau-dsfrtablecell--cellule-de-tableau-simple">DsfrTableCell</a>.
Toutes les autres propriétés seront mises sur l’élément \`<tr>\` de cette ligne.
        `,
    },
    onClickRow: {
      action: 'Clicked on row',
    },
  },
}

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

export const LigneDeTableauSimple = (args) => ({
  components: {
    DsfrTable,
    DsfrTableRow,
    DsfrTableHeaders,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <DsfrTableRow :row-data="rowData" />
      </DsfrTable>
    </div>
  `,

})
LigneDeTableauSimple.args = {
  dark: false,
  title,
  headers,
  rowData,
}

export const LigneDeTableauAvecComposant = (args) => ({
  components: {
    DsfrTable,
    DsfrTableRow,
    DsfrTableHeaders,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <DsfrTableRow :row-data="rowData" />
      </DsfrTable>
    </div>
  `,

})
LigneDeTableauAvecComposant.args = {
  dark: false,
  title,
  headers,
  rowData: rowDataWithComponent,
}

export const LigneDeTableauComplexe = (args) => ({
  components: {
    DsfrTable,
    DsfrTableRow,
    DsfrTableHeaders,
  },

  data () {
    return {
      ...args,
      rowAttrs: {
        ...args.rowAttrs,
        onClick: () => args.onClickRow(args.rowData),
      },
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <DsfrTableRow :row-data="rowData" :row-attrs="rowAttrs" />
      </DsfrTable>
    </div>
  `,

})
LigneDeTableauComplexe.args = {
  dark: false,
  title,
  headers,
  rowData: complexRowData.rowData,
  rowAttrs: complexRowData.rowAttrs,
}
