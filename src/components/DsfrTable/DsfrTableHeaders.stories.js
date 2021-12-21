import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'

export default {
  component: DsfrTableHeaders,
  title: 'Composants/Tableau/En-têtes de tableau - DsfrTableHeaders',
  argTypes: {
    title: { control: 'text' },
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="headers" />
        </template>
        &lt;Corps du tableau>
      </DsfrTable>
    </div>
  `,

})
EnTetesDeTableau.args = {
  dark: false,
  title,
  headers,
}
