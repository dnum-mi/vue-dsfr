import DsfrTabs from './DsfrTabs.vue'
import DsfrTabContent from './DsfrTabContent.vue'

import { addIcons } from 'oh-vue-icons'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'
import DsfrAccordionsGroup from '../DsfrAccordion/DsfrAccordionsGroup.vue'
import DsfrAccordion from '../DsfrAccordion/DsfrAccordion.vue'

addIcons(RiCheckboxCircleLine)

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/onglet)
 */
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
    initialSelectedIndex: {
      control: 'number',
      description: 'Index de l’onglet selectionné par défaut à l’affichage du composant.',
    },
    'select-tab': {
      description: 'Événement émis lorsque l’onglet actif change, avec en argument l’index de l’onglet sélectionné',
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
  'Contenu 1 avec seulement des strings',
  'Contenu 2 avec seulement des strings',
  'Contenu 3 avec seulement des strings',
  'Contenu 4 avec seulement des strings',
]

export const OngletsSimples = (args) => ({
  components: { DsfrTabs },
  data () {
    return args
  },
  template: `
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
      :initial-selected-index="initialSelectedIndex"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
OngletsSimples.args = {
  dark: false,
  tabListName,
  tabTitles,
  tabContents,
  initialSelectedIndex: 0,
}

const customTabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line', tabId: 'tab-0', panelId: 'tab-content-0' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line', tabId: 'tab-1', panelId: 'tab-content-1' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line', tabId: 'tab-2', panelId: 'tab-content-2' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line', tabId: 'tab-3', panelId: 'tab-content-3' },
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
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :initial-selected-index="initialSelectedIndex"
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
        <div>Contenu 3 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
        :selected="selectedTabIndex === 3"
        :asc="asc"
      >
        <div>Contenu 4 avec d'autres composants</div>
      </DsfrTabContent>
    </DsfrTabs>
  `,

  methods: {
    selectTab (idx) {
      this.onSelectTab(idx)
      this.asc = this.selectedTabIndex < idx
      this.selectedTabIndex = idx
    },
  },

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
OngletsComplexes.args = {
  dark: false,
  tabListName,
  tabTitles: customTabTitles,
  selectedTabIndex: 1,
  initialSelectedIndex: 1,
}

export const OngletsAvecAccordeon = (args) => ({
  components: { DsfrTabs, DsfrTabContent, DsfrAccordionsGroup, DsfrAccordion },
  data () {
    return {
      ...args,
      asc: true,
    }
  },

  template: `
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :initial-selected-index="initialSelectedIndex"
      @select-tab="selectTab"
    >
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
        :selected="selectedTabIndex === 0"
        :asc="asc"
      >
        <DsfrAccordionsGroup>
          <li>
            <DsfrAccordion
              id="accordion-1"
              :title="title1"
              :expanded-id="expandedId"
              @expand="expandedId = $event"
            >
              Contenu de l’accordéon 1
            </DsfrAccordion>
          </li>
          <li>
            <DsfrAccordion
              id="accordion-2"
              :title="title2"
              :expanded-id="expandedId"
              @expand="id => expandedId = id"
            >
              Contenu de l’accordéon 2
            </DsfrAccordion>
          </li>
          <li>
            <DsfrAccordion
              id="accordion-3"
              :title="title3"
              :expanded-id="expandedId"
              @expand="id => expandedId = id"
            >
              Contenu de l’accordéon 3
            </DsfrAccordion>
          </li>
        </DsfrAccordionsGroup>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
        :selected="selectedTabIndex === 1"
        :asc="asc"
      >
        <div>Contenu 2 avec d'autres composants</div>
      </DsfrTabContent>
    </DsfrTabs>
  `,

  methods: {
    selectTab (idx) {
      this.onSelectTab(idx)
      this.asc = this.selectedTabIndex < idx
      this.selectedTabIndex = idx
    },
  },

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
OngletsAvecAccordeon.args = {
  dark: false,
  tabListName,
  tabTitles: [
    { title: 'Onglet avec accordéon', icon: 'ri-checkbox-circle-line', tabId: 'tab-0', panelId: 'tab-content-0' },
    { title: 'Titre 2', icon: 'ri-checkbox-circle-line', tabId: 'tab-1', panelId: 'tab-content-1' },
  ],
  selectedTabIndex: 0,
  initialSelectedIndex: 0,
  title1: 'Un titre d’accordéon 1',
  title2: 'Un titre d’accordéon 2',
  title3: 'Un titre d’accordéon 3',
  expandedId: '',
}
