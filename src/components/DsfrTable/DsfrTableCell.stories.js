import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableCell from './DsfrTableCell.vue'

export default {
  component: DsfrTableCell,
  title: 'Composants/Tableau/Cellule de tableau - DsfrTableCell',
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
    onClickCell: {
      action: 'Clicked on cell',
    },
  },
}

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
  'aria-label': "Vers la page d'accueil",
}

const cellAttrs = {
  class: 'pointer',
  style: 'font-style: italic',
}

export const CelluleDeTableauSimple = (args) => ({
  components: {
    DsfrTable,
    DsfrTableCell,
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
      <template #header>
        <DsfrTableHeaders :headers="headers" />
      </template>
      <tr>
        <DsfrTableCell :field="field" />
      </tr>
    </DsfrTable>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
CelluleDeTableauSimple.args = {
  dark: false,
  title,
  headers,
  field: simpleField,
}

export const CelluleDeTableauAvecElementHtml = (args) => ({
  components: {
    DsfrTable,
    DsfrTableCell,
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
        <template #header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <tr>
          <DsfrTableCell :field="field" />
        </tr>
      </DsfrTable>
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
CelluleDeTableauAvecElementHtml.args = {
  dark: false,
  title,
  headers,
  field: fieldWithComponentSimple,
}

export const CelluleDeTableauAvecComposant = (args) => ({
  components: {
    DsfrTable,
    DsfrTableCell,
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
        <template #header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <tr>
          <DsfrTableCell :field="field" />
        </tr>
      </DsfrTable>
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
CelluleDeTableauAvecComposant.args = {
  dark: false,
  title,
  headers,
  field: fieldWithComponent,
}

export const CelluleDeTableauComplexe = (args) => ({
  components: {
    DsfrTable,
    DsfrTableCell,
    DsfrTableHeaders,
  },

  data () {
    return {
      ...args,
      cellAttrs: { ...cellAttrs, onClick: () => args.onClickCell(args.field) },
    }
  },

  template: `
      <DsfrTable
        :title="title"
      >
        <template #header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        <tr>
          <DsfrTableCell :field="field" :cell-attrs="cellAttrs" />
        </tr>
      </DsfrTable>
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
CelluleDeTableauComplexe.args = {
  dark: false,
  title,
  headers,
  field: fieldWithComponent,
  cellAttrs,
}
