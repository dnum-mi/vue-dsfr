import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableRow from './DsfrTableRow.vue'

export default {
  component: DsfrTableRow,
  title: 'Composants/DsfrTableRow',
  argTypes: {
    title: { control: 'text' },
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
    rowAttrs: {
      control: 'object',
      description: 'Objet contenant les props à passer à la balise `<tr>`',
    },
    onClickRow: {
      action: 'Clicked on row',
      description: 'Fonction pour montrer le clic sur une ligne',
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
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <DsfrTableRow :row-data="rowData" />
      </DsfrTable>
  `,

})
LigneDeTableauSimple.args = {
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
    <DsfrTable
      :title="title"
      :headers="headers"
    >
      <DsfrTableRow :row-data="rowData" />
    </DsfrTable>
  `,

})
LigneDeTableauAvecComposant.args = {
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
      <DsfrTable
        :title="title"
        :headers="headers"
      >
        <DsfrTableRow :row-data="rowData" :row-attrs="rowAttrs" />
      </DsfrTable>
  `,

})
LigneDeTableauComplexe.args = {
  title,
  headers,
  rowData: complexRowData.rowData,
  rowAttrs: complexRowData.rowAttrs,
}
