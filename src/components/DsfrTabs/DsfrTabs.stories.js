import DsfrTabs from './DsfrTabs.vue'
import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabItem from './DsfrTabItem.vue'

import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'

OhVueIcon.add(RiCheckboxCircleLine)

export default {
  component: DsfrTabs,
  title: 'Composants/Onglets - DsfrTabs',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    tabListName: {
      control: 'text',
      description: 'Nom de la liste d’onglet : servira pour le label (l’attribut `aria-label`) de la liste des titres d’onglets - **Obligatoire**',
    },
    tabTitles: {
      control: 'object',
      description: 'Tableau (`Array`) d’objets contenant les props à donner à chaque `DsfrTabItem` - **Obligatoire**',
    },
    tabContents: {
      control: 'object',
      description: 'Tableau de contenu de chaque `DsfrTabContent` - **Obligatoire si `DsfrTabs` n’a pas de contenu**',
    },
    onSelectTab: {
      action: 'onSelectTab',
    },
  },
}

const tabListName = 'Liste d’onglet'
const title1 = 'Titre 1'
const tabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line' },
]
const tabContents = [
  'Contenu 1 avec seulement des string',
  'Contenu2 avec seulement des string',
  'Contenu3 avec seulement des string',
  'Contenu4 avec seulement des string',
]

export const OngletsSimples = (args) => ({
  components: { DsfrTabs, DsfrTabItem },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </div>
  `,
})
OngletsSimples.args = {
  dark: false,
  tabListName,
  tabTitles,
  tabContents,
}

const customTabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line', tabId: 'tab-0' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line', tabId: 'tab-1' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line', tabId: 'tab-2' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line', tabId: 'tab-3' },
]

export const OngletsComplexes = (args) => ({
  components: { DsfrTabs, DsfrTabContent },
  data () {
    return {
      ...args,
      asc: true,
    }
  },

  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      @select-tab="selectTab"
    >
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
        :selected="selectedTabIndex === 0"
        :asc="asc"
      >
        <div>Contenu 1 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
        :selected="selectedTabIndex === 1"
        :asc="asc"
      >
        <div>Contenu 2 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-2"
        tab-id="tab-2"
        :selected="selectedTabIndex === 2"
        :asc="asc"
      >
        <div>Contenu 2 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
        :selected="selectedTabIndex === 3"
        :asc="asc"
      >
        <div>Contenu 2 avec d'autres composants</div>
      </DsfrTabContent>
    </DsfrTabs>
  </div>
  `,

  methods: {
    selectTab (idx) {
      this.onSelectTab(idx)
      this.asc = this.selectedTabIndex < idx
      this.selectedTabIndex = idx
    },
  },
})
OngletsComplexes.args = {
  dark: false,
  tabListName,
  tabTitles: customTabTitles,
  selectedTabIndex: 0,
}
