import type { Meta, StoryObj } from '@storybook/vue3'

import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabs from './DsfrTabs.vue'

const meta = {
  component: DsfrTabContent,
  title: 'Composants/DsfrTabs',
  argTypes: {
    panelId: {
      control: 'text',
      description:
        'Props de `DsfrTabContent` : Identifiant de l’élément correspondant au contenu de l’onglet à afficher ; doit être identique à la props `tab-id` du `DsfrTabItem` correspondant - **Obligatoire**',
    },
    tabId: {
      control: 'text',
      description:
        'Props de et `DsfrTabContent`: Identifiant du titre de l’onglet ̛ ; doit être identique à la props `panel-id` du `DsfrTabContent` correspondant - **Obligatoire**',
    },
    selectedTabIndex: {
      control: 'number',
      description:
        'Index de l’onglet sélectionné (0 pour le premier onglet)',
      table: {
        category: 'Props du parent (DsfrTabs)',
      },
    },
    tabListName: {
      control: 'text',
      description: 'Nom de la liste d’onglet (utilisée dans le aria-label de la liste `<ul>`)',
      table: {
        category: 'Props du parent (DsfrTabs)',
      },
    },
    tabTitles: {
      control: 'object',
      description: 'Titres des onglets',
      table: {
        category: 'Props du parent (DsfrTabs)',
      },
    },
  },
} satisfies Meta<typeof DsfrTabContent>

export default meta

type Story = StoryObj<typeof meta>

export const ContenuDOnglet: Story = {
  render: (args) => ({
    components: {
      DsfrTabs,
      DsfrTabContent,
    },

    setup () {
      return args
    },

    template: `
    <DsfrTabs
      v-model="selectedTabIndex"
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
    >
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
      >
        <div>Contenu personnalisé</div>
      </DsfrTabContent>
    </DsfrTabs>
  `,
  }),
  args: {
    panelId: 'tab-content-0',
    selectedTabIndex: 0,
    tabId: 'tab-0',
    tabListName: 'Liste d\'onglet',
    tabTitles: [
      {
        title: 'Titre 1',
        icon: 'ri-checkbox-circle-line',
        tabId: 'tab-0',
        panelId: 'tab-content-0',
      },
    ],
  },
}
