import DsfrTabContent from './DsfrTabContent.vue'

export default {
  component: DsfrTabContent,
  title: 'Composants/Onglets - DsfrTabs',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    panelId: {
      control: 'text',
      description: 'Props de `DsfrTabContent` : Identifiant de l’élément correspondant au contenu de l’onglet à afficher ; doit être identique à la props `tab-id` du `DsfrTabItem` correspondant - **Obligatoire**',
    },
    tabId: {
      control: 'text',
      description: 'Props de et `DsfrTabContent`: Identifiant du titre de l’onglet ̛ ; doit être identique à la props `panel-id` du `DsfrTabContent` correspondant - **Obligatoire**',
    },
    selected: {
      control: 'boolean',
      description: 'Indique si cet onglet est celui sélectionné (`true`) ou non (`false`, défaut)',
    },
    asc: {
      control: 'boolean',
      description: 'Indique si l’onglet suivant à afficher est à droite (`true`, ascendant) ou à gauche (`false`)',
    },
  },
}

export const ContenuDOnglet = (args) => ({
  components: {
    DsfrTabContent,
  },

  data () {
    return args
  },

  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <div class="fr-tabs" style="overflow: visible">
      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
        :selected="selected"
        :asc="asc"
      >
        <div>Contenu personnalisé</div>
      </DsfrTabContent>
    </div>
  </div>
  `,
})
ContenuDOnglet.args = {
  dark: false,
  panelId: 'tab-content-0',
  tabId: 'tab-0',
  selected: true,
  asc: true,
}
