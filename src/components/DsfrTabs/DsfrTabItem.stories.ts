import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabItem from './DsfrTabItem.vue'
import DsfrTabs from './DsfrTabs.vue'

const meta = {
  component: DsfrTabItem,
  title: 'Composants/DsfrTabs',
  argTypes: {
    tabTitle: {
      control: 'object',
      description:
        'Titre de l’onglet `DsfrTabItem` - **Obligatoire**',

      table: {
        category: 'Props du parent (DsfrTabs)',
      },
    },
    panelId: {
      control: 'text',
      description:
        'Props de `DsfrTabItem` et `DsfrTabContent` : Identifiant de l’élément correspondant au contenu de l’onglet à afficher ; doit être identique à la props `tab-id` du `DsfrTabItem` correspondant - **Obligatoire**',
    },
    tabId: {
      control: 'text',
      description:
        'Props de `DsfrTabItem` et `DsfrTabContent` : Identifiant du titre de l’onglet ̛ ; doit être identique à la props `panel-id` du `DsfrTabContent` correspondant - **Obligatoire**',
    },
    icon: {
      control: 'text',
      description: 'Props de `DsfrTabItem` : Nom de l’icône à afficher',
    },
  },
} satisfies Meta<typeof DsfrTabItem>

export default meta

type Story = StoryObj<typeof meta>

export const TitreDOnglet: Story = {
  render: (args) => ({
    components: {
      DsfrTabs,
      DsfrTabContent,
      DsfrTabItem,
    },

    setup () {
      return args
    },

    template: `
    <DsfrTabs v-model="selectedTabIndex" tab-list-name="Exemple d’onglets avec un seul DsfrTabItem">
      <template #tab-items>
        <DsfrTabItem
          :panel-id="panelId"
          :tab-id="tabId"
          :icon="icon"
        >
          {{ tabTitle }}
        </DsfrTabItem>
      </template>
      <DsfrTabContent
        :panel-id="panelId"
        :tab-id="tabId"
      >
        Contenu de l’onglet
      </DsfrTabContent>
    </DsfrTabs>
  `,
  }),
  args: {
    panelId: 'tab-content-0',
    tabId: 'tab-0',
    icon: 'ri-checkbox-circle-line',
    tabTitle: 'Titre onglet seul',
    selectedTabIndex: 0,
  },
}
