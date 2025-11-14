import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, userEvent, within } from 'storybook/test'
import { ref } from 'vue'

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
  },
} satisfies Meta<typeof DsfrTabs>

export default meta

type Story = StoryObj<typeof meta>

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/onglet)
 */
export const OngletsSimples: Story = {
  render: (args: typeof meta.args) => ({
    components: { DsfrTabs },

    setup () {
      return args
    },

    template: `
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
      v-model="modelValue"
    />
  `,
  }),
  args: {
    tabListName,
    tabTitles,
    tabContents,
    modelValue: 0,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
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
    await userEvent.tab()
    expect(firstTabPanel).toHaveFocus()
    await userEvent.type(firstTab, '{arrowleft}')
    await userEvent.tab()
    expect(fourthTabPanel).toHaveFocus()
  },
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

export const OngletsComplexes: Story = {
  render: (args: typeof meta.args) => ({
    components: { DsfrTabs, DsfrTabContent, DsfrButton },

    setup () {
      return args
    },

    template: `
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      v-model="modelValue"
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
        @click="modelValue = 0"
      />
      <DsfrButton
        label="Activer le 2è onglet"
        @click="modelValue = 1"
      />
      <DsfrButton
        label="Activer le 3è onglet"
        @click="modelValue = 2"
      />
      <DsfrButton
        label="Activer le dernier onglet"
        @click="modelValue = 3"
      />
    </div>
  `,
  }),
  args: {
    tabContents: [],
    tabListName,
    tabTitles: customTabTitles,
    modelValue: 0,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
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
    await userEvent.click(buttons[1] as HTMLButtonElement)
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
    await userEvent.tab()
    expect(firstTabPanel).toHaveFocus()
    await userEvent.type(firstTab, '{arrowleft}')
    await userEvent.tab()
    expect(fourthTabPanel).toHaveFocus()
    await userEvent.click(buttons[2] as HTMLButtonElement)
    expect(firstTab).not.toHaveAttribute('aria-selected', 'true')
    expect(secondTab).not.toHaveAttribute('aria-selected', 'true')
    expect(thirdTab).toHaveAttribute('aria-selected', 'true')
    expect(fourthTab).not.toHaveAttribute('aria-selected', 'true')
  },
}

export const OngletsAvecAccordeon: Story = {
  render: (args: typeof meta.args) => ({
    components: { DsfrTabs, DsfrTabContent, DsfrAccordionsGroup, DsfrAccordion },

    setup () {
      const selectedTabIndex = ref(0)
      const selectedAccordion = ref()
      return {
        ...args,
        selectedTabIndex,
        selectedAccordion,
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
  }),
  args: {
    tabContents: [],
    tabListName,
    tabTitles: customTabTitles.slice(0, 2),
    title1: 'Un titre d’accordéon 1',
    title2: 'Un titre d’accordéon 2',
    title3: 'Un titre d’accordéon 3',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const thirdAccordionTitle = canvas.getByText('Un titre d’accordéon 3')
    const thirdAccordion = canvas.getByText('Contenu de l’accordéon 3')
    expect(thirdAccordionTitle).toBeVisible()
    expect(thirdAccordion).not.toBeVisible()
    await userEvent.click(thirdAccordionTitle)
    await delay(500)
    expect(thirdAccordion).toBeVisible()
  },
}
