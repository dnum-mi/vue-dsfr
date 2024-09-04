import DsfrTabs from './DsfrTabs.vue'
import DsfrTabContent from './DsfrTabContent.vue'

export default {
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
    selected: {
      control: 'boolean',
      description:
        'Indique si cet onglet est celui sélectionné (`true`) ou non (`false`, défaut)',
    },
    asc: {
      control: 'boolean',
      description:
        'Indique si l’onglet suivant à afficher est à droite (`true`, ascendant) ou à gauche (`false`)',
    },
  },
}

export const ContenuDOnglet = (args) => ({
  components: {
    DsfrTabs,
    DsfrTabContent,
  },

  data () {
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
})
ContenuDOnglet.args = {
  panelId: 'tab-content-0',
  tabId: 'tab-0',
  selectedTabIndex: 0,
  tabListName: 'Liste d’onglet',
  tabTitles: [
    { title: 'Titre 1', icon: 'ri-checkbox-circle-line', tabId: 'tab-0', panelId: 'tab-content-0' },
  ],
}
