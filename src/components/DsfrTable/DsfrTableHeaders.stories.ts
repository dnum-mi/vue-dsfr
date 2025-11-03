import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrTable from './DsfrTable.vue'
import DsfrTableHeaders from './DsfrTableHeaders.vue'

const meta = {
  component: DsfrTableHeaders,
  title: 'Composants/DsfrTableHeaders',
  argTypes: {
    title: { control: 'text' },
    headers: {
      control: 'object',
      description: 'Liste des en-têtes du tableau (tableau de string).',
    },
  },
} as Meta<typeof DsfrTableHeaders>

export default meta
type Story = StoryObj<typeof meta>

const title = 'Utilisateurs'
const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Portable', 'Statut']

export const EnTetesDeTableau: Story = {
  args: {
    title,
    headers,
  },
  render: (args: any) => ({
    components: {
      DsfrTable,
      DsfrTableHeaders,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTable
        :title="args.title"
      >
        <template v-slot:header>
          <DsfrTableHeaders :headers="args.headers" />
        </template>
        <tr>
          <td colspan="6">
            Corps du tableau
          </td>
        </tr>
      </DsfrTable>
    `,
  }),
}
