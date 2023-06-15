import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'

export default {
  component: DsfrTableHeaders,
  title: 'Composants/DsfrTableHeaders',
  argTypes: {
    title: { control: 'text' },
    headers: {
      control: 'object',
      description: 'Liste des en-têtes du tableau (tableau de string).',
    },
  },
}

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']

export const EnTetesDeTableau = (args) => ({
  components: {
    DsfrTable,
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
        &lt;Corps du tableau>
      </DsfrTable>
  `,

})
EnTetesDeTableau.args = {
  title,
  headers,
}
