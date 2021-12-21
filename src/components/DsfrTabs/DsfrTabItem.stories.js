import DsfrTabItem from './DsfrTabItem.vue'

export default {
  component: DsfrTabItem,
  title: 'Composants/Onglets - DsfrTabs',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    tabTitle: {
      control: 'object',
      description: 'Props de `DsfrTabItem` : Titre de l’onglet `DsfrTabItem` - **Obligatoire**',
    },
    panelId: {
      control: 'text',
      description: 'Props de `DsfrTabItem` et `DsfrTabContent` : Identifiant de l’élément correspondant au contenu de l’onglet à afficher ; doit être identique à la props `tab-id` du `DsfrTabItem` correspondant - **Obligatoire**',
    },
    tabId: {
      control: 'text',
      description: 'Props de `DsfrTabItem`  et `DsfrTabContent`: Identifiant du titre de l’onglet ̛ ; doit être identique à la props `panel-id` du `DsfrTabContent` correspondant - **Obligatoire**',
    },
    icon: {
      control: 'text',
      description: 'Props de `DsfrTabItem` : Nom de l’icône à afficher',
    },
  },
}

export const TitreDOnglet = (args) => ({
  components: {
    DsfrTabItem,
  },

  data () {
    return args
  },

  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <div class="fr-tabs" style="overflow: visible">
      <ul
        class="fr-tabs__list"
        role="tablist"
      >
        <DsfrTabItem
          :panel-id="panelId"
          :tab-id="tabId"
          :icon="icon"
          :selected="true"
        >
          {{ tabTitle }}
        </DsfrTabItem>
      </ul>
    </div>
  </div>
  `,
})
TitreDOnglet.args = {
  dark: false,
  panelId: 'tab-content-0',
  tabId: 'tab-0',
  icon: 'ri-checkbox-circle-line',
  tabTitle: 'Titre onglet seul',
}
