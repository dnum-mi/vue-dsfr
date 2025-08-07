import { expect, fn, userEvent, within } from '@storybook/test'

import DsfrAccordion from '../DsfrAccordion/DsfrAccordion.vue'
import DsfrAccordionsGroup from '../DsfrAccordion/DsfrAccordionsGroup.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

import DsfrTabContent from './DsfrTabContent.vue'
import DsfrTabs from './DsfrTabs.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

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

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)
 */
const meta = {
  component: DsfrTabs,
  title: 'Composants/DsfrTabs',
  args: {
    tabListName,
    title1,
    tabTitles,
    tabContents,
  },
  argTypes: {
    tabListName: {
      control: 'text',
      description:
        'Nom de la liste d’onglet : servira pour le label (l’attribut `aria-label`) de la liste des titres d’onglets - **Obligatoire**',
    },
    tabTitles: {
      control: 'object',
      description:
        'Tableau (`Array`) d’objets contenant les props à donner à chaque `DsfrTabItem` - **Obligatoire**',
    },
    tabContents: {
      control: 'object',
      description:
        'Tableau de contenu de chaque `DsfrTabContent` - **Obligatoire si `DsfrTabs` n’a pas de contenu**',
    },
    modelValue: {
      control: 'number',
      description:
        'Index de l’onglet selectionné',
    },
    'select-tab': {
      description:
        'Événement émis lorsque l’onglet actif change, avec en argument l’index de l’onglet sélectionné',
    },
    onSelectTab: {
      action: fn(),
    },
  },
}
export default meta

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
      v-model="selectedIndex"
    />
  `,
})
OngletsSimples.args = {
  tabListName,
  tabTitles,
  tabContents,
  selectedIndex: 0,
}
OngletsSimples.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // const firstTab = await canvas.getByLabelText(tabTitles[0].title)
  // await userEvent.click(firstTab)
  const tabs = canvas.getAllByRole('tab')
  const firstTab = tabs[0]
  const secondTab = tabs[1]
  const thirdTab = tabs[2]
  const fourthTab = tabs[3]
  const firstTabPanel = canvas.getByLabelText(tabTitles[0].title)
  const secondTabPanel = canvas.getByLabelText(tabTitles[1].title)
  const thirdTabPanel = canvas.getByLabelText(tabTitles[2].title)
  const fourthTabPanel = canvas.getByLabelText(tabTitles[3].title)
  await userEvent.click(secondTab)
  await userEvent.type(secondTab, '{arrowright}')
  expect(firstTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(secondTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(thirdTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(thirdTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(thirdTab, '{arrowright}')
  await userEvent.type(fourthTab, '{arrowright}')
  expect(thirdTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(thirdTab).not.toHaveAttribute('aria-selected', 'true')
  expect(firstTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(firstTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(firstTab, '{arrowup}')
  expect(firstTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(firstTab).not.toHaveAttribute('aria-selected', 'true')
  expect(fourthTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(fourthTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(fourthTab, '{arrowdown}')
  await userEvent.tab()
  expect(firstTabPanel).toHaveFocus()
  await userEvent.tab()
}

const customTabTitles = [
  {
    title: title1,
    icon: 'ri-checkbox-circle-line',
    tabId: 'tab-0',
    panelId: 'tab-content-0',
  },
  {
    title: 'Titre 2',
    icon: 'ri-checkbox-circle-line',
    tabId: 'tab-1',
    panelId: 'tab-content-1',
  },
  {
    title: 'Titre 3',
    icon: 'ri-checkbox-circle-line',
    tabId: 'tab-2',
    panelId: 'tab-content-2',
  },
  {
    title: 'Titre 4',
    icon: 'ri-checkbox-circle-line',
    tabId: 'tab-3',
    panelId: 'tab-content-3',
  },
]

export const OngletsComplexes = (args) => ({
  components: { DsfrTabs, DsfrTabContent, DsfrButton },
  data () {
    return {
      ...args,
      asc: true,
    }
  },

  template: `
    <DsfrTabs
      ref="tabs"
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      v-model="selectedIndex"
    >
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
      >
        <div>Contenu 1 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
      >
        <div>Contenu 2 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-2"
        tab-id="tab-2"
      >
        <div>Contenu 3 avec d'autres composants</div>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-3"
        tab-id="tab-3"
      >
        <div>Contenu 4 avec d'autres composants</div>
      </DsfrTabContent>
    </DsfrTabs>
    <div style="display: flex; gap: 1rem; margin-block: 1rem;">
      <DsfrButton
        label="Activer le 1er onglet"
        @click="selectedIndex = 0"
      />
      <DsfrButton
        label="Activer le 2è onglet"
        @click="selectedIndex = 1"
      />
      <DsfrButton
        label="Activer le 3è onglet"
        @click="selectedIndex = 2"
      />
      <DsfrButton
        label="Activer le dernier onglet"
        @click="selectedIndex = 3"
      />
    </div>
  `,

  watch: {
    selectedIndex (idx) {
      this.onSelectTab(idx)
    },
  },
})
OngletsComplexes.args = {
  tabContents: [],
  tabListName,
  tabTitles: customTabTitles,
  selectedIndex: 1,
}
OngletsComplexes.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // const firstTab = await canvas.getByLabelText(tabTitles[0].title)
  // await userEvent.click(firstTab)
  const buttons = canvas.getAllByRole('button')
  const tabs = canvas.getAllByRole('tab')
  const firstTab = tabs[0]
  const secondTab = tabs[1]
  const thirdTab = tabs[2]
  const fourthTab = tabs[3]
  const firstTabPanel = canvas.getByLabelText(tabTitles[0].title)
  const secondTabPanel = canvas.getByLabelText(tabTitles[1].title)
  const thirdTabPanel = canvas.getByLabelText(tabTitles[2].title)
  const fourthTabPanel = canvas.getByLabelText(tabTitles[3].title)
  await userEvent.click(buttons.at(1) as HTMLButtonElement)
  await userEvent.type(secondTab, '{arrowright}')
  expect(firstTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(secondTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(thirdTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(thirdTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(thirdTab, '{arrowright}')
  await userEvent.type(fourthTab, '{arrowright}')
  expect(thirdTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(thirdTab).not.toHaveAttribute('aria-selected', 'true')
  expect(firstTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(firstTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(firstTab, '{arrowup}')
  expect(firstTabPanel).not.toHaveClass('fr-tabs__panel--selected')
  expect(firstTab).not.toHaveAttribute('aria-selected', 'true')
  expect(fourthTabPanel).toHaveClass('fr-tabs__panel--selected')
  expect(fourthTab).toHaveAttribute('aria-selected', 'true')
  await userEvent.type(fourthTab, '{arrowdown}')
  await userEvent.tab()
  expect(firstTabPanel).toHaveFocus()
  await userEvent.tab()
  await userEvent.click(buttons.at(2) as HTMLButtonElement)
  expect(firstTab).not.toHaveAttribute('aria-selected', 'true')
  expect(secondTab).not.toHaveAttribute('aria-selected', 'true')
  expect(thirdTab).toHaveAttribute('aria-selected', 'true')
  expect(fourthTab).not.toHaveAttribute('aria-selected', 'true')
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
      v-model="selectedTabIndex"
    >
      <DsfrTabContent
        panel-id="tab-content-0"
        tab-id="tab-0"
      >
        <DsfrAccordionsGroup v-model="selectedAccordion">
          <DsfrAccordion
            id="accordion-1"
            :title="title1"
          >
            Contenu de l’accordéon 1
          </DsfrAccordion>
          <DsfrAccordion
            id="accordion-2"
            :title="title2"
          >
            Contenu de l’accordéon 2
          </DsfrAccordion>
          <DsfrAccordion
            id="accordion-3"
            :title="title3"
          >
            Contenu de l’accordéon 3
          </DsfrAccordion>
        </DsfrAccordionsGroup>
      </DsfrTabContent>

      <DsfrTabContent
        panel-id="tab-content-1"
        tab-id="tab-1"
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
})
OngletsAvecAccordeon.args = {
  tabContents: [],
  tabListName,
  tabTitles: customTabTitles.slice(0, 2),
  selectedTabIndex: 0,
  title1: 'Un titre d’accordéon 1',
  title2: 'Un titre d’accordéon 2',
  title3: 'Un titre d’accordéon 3',
  selectedAccordion: undefined,
}
OngletsAvecAccordeon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const thirdAccordionTitle = canvas.getByText(OngletsAvecAccordeon.args.title3)
  const thirdAccordion = canvas.getByText('Contenu de l’accordéon 3')
  expect(thirdAccordionTitle).toBeVisible()
  expect(thirdAccordion).not.toBeVisible()
  userEvent.click(thirdAccordionTitle)
  await delay(500)
  expect(thirdAccordion).toBeVisible()
}
