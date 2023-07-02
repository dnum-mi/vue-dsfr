import DsfrTable from './DsfrTable.vue'
import DsfrTag from '../DsfrTag/DsfrTag.vue'

import { setup } from '@storybook/vue3'

import './table.stories.css'

setup(app => {
  app.component('DsfrTag', DsfrTag)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau)
 */
export default {
  component: DsfrTable,
  title: 'Composants/DsfrTable',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre du tableau (sera dans la balise `caption`)',
    },
    noCaption: {
      control: 'boolean',
      description: 'Indique si la balise caption doit être visible (`false`, défaut) ou cachée (`true`)',
    },
    headers: {
      control: 'object',
      description: 'Liste des en-têtes du tableau (tableau de string). Il existe un slot nommé `headers` pour gérer les en-têtes avec d’autres composants. C’est la même props attendue par <a href="/?path=/docs/composants-tableau-en-t%C3%AAtes-de-tableau-dsfrtableheaders--en-tetes-de-tableau">DsfrTableHeaders</a>',
    },
    rows: {
      control: 'object',
      description: 'Données des lignes du tableau. Chaque élément doit être un objet contenant les props attendues par <a href="/?path=/docs/composants-tableau-ligne-de-tableau-dsfrtablerow--ligne-de-tableau-simple">DsfrTableRow</a>',
    },
    onClickCell: {
      action: 'clicked on cell',
      description: 'Fonction pour montrer le clic sur une cellule (Ici seulement la colonne "Téléphone" de la 3è ligne)',
    },
    onClickRow: {
      action: 'clicked on row',
      description: 'Fonction pour montrer le clic sur une ligne (Ici seulement la 2e ligne)',
    },
  },
}

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']
const rows = [
  [
    'EGAUD',
    'Pierre-Louis',
    'pierre.egaud@ninja.com',
    '01 02 03 04 05',
    '06 01 02 03 04',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  {
    rowAttrs: {
      onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      class: 'pointer',
    },
    rowData: [
      'DEBROIZE',
      'Clément',
      'clement.debroize@ninja.com',
      '01 02 03 04 05',
      '06 01 02 03 04',
      {
        component: 'DsfrTag',
        label: 'Succès',
        class: 'success',
      },
    ],
  },
  [
    'ORMIERES',
    'Stan',
    'stan.ormieres@ninja.com',
    {
      text: '01 02 03 04 05',
      cellAttrs: {
        class: 'pointer',
        onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      },
    },
    '06 01 02 03 04',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
]
const noCaption = false

export const TableauEntier = (args) => ({
  components: {
    DsfrTable,
  },

  data () {
    return {
      ...args,
      rows: args.rows
        .map(
          rowData => Array.isArray(rowData)
            ? rowData.map(field => field.cellAttrs?.onClick ? { ...field, cellAttrs: { ...field.cellAttrs, onClick () { args.onClickCell(field) } } } : field)
            : ({ ...rowData, rowAttrs: { ...rowData.rowAttrs, onClick () { args.onClickRow(rowData) } } }),
        ),
    }
  },

  template: `
      <DsfrTable
        :title="title"
        :headers="headers"
        :rows="rows"
        :no-caption="noCaption"
      />
  `,

})
TableauEntier.args = {
  title,
  headers,
  rows,
  noCaption,
}
