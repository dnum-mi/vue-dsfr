import DsfrTable from './DsfrTable.vue'
import DsfrTag from '../DsfrTag/DsfrTag.vue'

import { app } from '@storybook/vue3'

app.component('DsfrTag', DsfrTag)

export default {
  components: DsfrTable,
  title: 'Éléments/Table',
  argTypes: {
    title: { control: 'text' },
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre* (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    noCaption: {
      control: 'boolean',
      description: 'Indique si la balise caption doit être visible (`false`, défaut) ou cachée (`true`)',
    },
    headers: {
      control: 'object',
      description: 'Permet de voir la ligne des titres des colonnes du tableau',
    },
    rows: {
      control: 'object',
      description: 'Permet de voir les lignes du tableau, on peut afficher un composant ou un texte simple',
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
  [
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
  [
    'ORMIERES',
    'Stan',
    'stan.ormieres@ninja.com',
    '01 02 03 04 05',
    '06 01 02 03 04',
    {
      component: 'DsfrTag',
      label: 'Info',
      class: 'info',
    },
  ],
]
const noCaption = false

export const TableauSimple = (args) => ({
  components: {
    DsfrTable,
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
        :headers="headers"
        :rows="rows"
        :no-caption="noCaption"
      />
    </div>
  `,

})
TableauSimple.args = {
  dark: false,
  title,
  headers,
  rows,
  noCaption,
}
