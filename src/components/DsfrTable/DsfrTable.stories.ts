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
    pagination: {
      control: 'boolean',
      description: 'Intègre une pagination au tableau',
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
    defaultCurrentPage: {
      control: 'number',
      description: 'Le numéro de la page dans la pagination',
    },
    defaultOptionSelected: {
      control: 'number',
      description: 'La sélection du nombre d\'enregistrements par page',
    },
  },
}

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']
const rows = [
  [
    'EGAUD',
    'Pierre-Louis',
    'pierre.egaud@castor.fr',
    '02 04 06 08 10',
    '06 05 04 03 02',
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
      'clement.debroize@exile.com',
      '02 44 66 55 99',
      '07 88 77 22 33',
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
      text: '02 77 00 00 77',
      cellAttrs: {
        class: 'pointer',
        onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
      },
    },
    '06 08 07 09 08',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'MONTANA',
    'Tony',
    'tony.montana@depalma.com',
    '02 07 03 19 84',
    '06 07 03 19 84',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  [
    'BOND',
    'James',
    'james.bond@mi6.com',
    '02 00 07 19 62',
    '06 00 07 19 62',
    {
      component: 'DsfrTag',
      label: 'Succès',
      class: 'success',
    },
  ],
  [
    'RAMBO',
    'John',
    'john.rambo@veterans.com',
    '02 00 00 19 82',
    '06 00 00 19 82',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'CONNOR',
    'Sarah',
    'sarah.connor@skynet.com',
    '02 00 00 19 84',
    '06 00 00 19 84',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  [
    'KENOBI',
    'Obiwan',
    'obiwan.kenobi@jedimaster.com',
    '02 00 00 19 77',
    '06 00 00 19 77',
    {
      component: 'DsfrTag',
      label: 'Succès',
      class: 'success',
    },
  ],
  [
    'KRUEGER',
    'Freddy',
    'freddy.krueger@goodnight.com',
    '02 00 00 19 84',
    '06 00 00 19 84',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'LEGRIS',
    'Gandalf',
    'gandalf.leblanc@mellon.com',
    '02 00 00 20 01',
    '06 00 00 20 01',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  [
    'SÖZE',
    'Keyser',
    'keyser.soze@mastermind.com',
    '02 00 00 19 95',
    '06 00 00 19 95',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'HUNT',
    'Ethan',
    'ethan.hunt@impossible.com',
    '02 00 00 19 96',
    '06 00 00 19 96',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
  [
    'HOLMES',
    'Sherlock',
    'sherlock.holmes@whodunit.com',
    '02 00 00 18 87',
    '06 00 00 18 87',
    {
      component: 'DsfrTag',
      label: 'Succès',
      class: 'success',
    },
  ],
  [
    'JONES',
    'Indiana',
    'indiana.jones@london-university.com',
    '02 00 00 19 81',
    '06 00 00 19 81',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
  [
    'WAYNE',
    'Bruce',
    'bruce.wayne@batmail.com',
    '02 00 00 19 89',
    '06 00 00 19 89',
    {
      component: 'DsfrTag',
      label: 'Erreur',
      class: 'error',
    },
  ],
]
const noCaption = false
const pagination = true
const defaultCurrentPage = 2
const defaultOptionSelected = 5

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
        :pagination="pagination"
        :defaultCurrentPage="defaultCurrentPage"
        :defaultOptionSelected="defaultOptionSelected"
      />
  `,

})
TableauEntier.args = {
  title,
  headers,
  rows,
  noCaption,
  pagination,
  defaultCurrentPage,
  defaultOptionSelected,
}
