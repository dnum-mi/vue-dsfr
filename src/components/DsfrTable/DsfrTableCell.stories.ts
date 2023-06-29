import { setup } from '@storybook/vue3'
import DsfrTag from '../DsfrTag/DsfrTag.vue'
import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'
import DsfrTableCell from './DsfrTableCell.vue'

setup(app => {
  app.component('DsfrTag', DsfrTag) // Composant utilisé dans les stories CelluleDeTableauAvecComposant et CelluleDeTableauComplexe
})

export default {
  component: DsfrTableCell,
  title: 'Composants/DsfrTableCell',
  argTypes: {
    title: { control: 'text' },
    headers: {
      control: 'object',
      description: 'Liste des en-têtes du tableau (tableau de string). *N.B. : Ne fait pas partie du composant.*',
    },
    field: {
      control: 'string',
      description: 'Contenu du champ. Peut être une string ou bien un objet',
    },
    onClickCell: {
      action: 'Clic sur l’étiquette !',
      description: 'Fonction pour montrer le clic sur une cellule (Ici seulement pour "Cellule de tableau complexe")',
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
  'aria-label': 'Vers la page d’accueil',
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

})
CelluleDeTableauSimple.args = {
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

})
CelluleDeTableauAvecElementHtml.args = {
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

})
CelluleDeTableauAvecComposant.args = {
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

})
CelluleDeTableauComplexe.args = {
  title,
  headers,
  field: fieldWithComponent,
  cellAttrs,
}
