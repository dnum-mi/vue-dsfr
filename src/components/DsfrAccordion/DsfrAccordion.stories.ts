import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'
import { ref } from 'vue'

import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const meta = {
  component: DsfrAccordion,
  title: 'Composants/DsfrAccordion',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` de l’accordéon. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    title: {
      control: 'text',
      description: 'Intitulé de l’accordéon',
    },
    titleTag: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Balise HTML utilisée pour le titre',
    },
  },
} satisfies Meta<typeof DsfrAccordion>

export default meta

export const Accordeon: StoryObj<typeof meta> = {
  name: 'Accordéon',
  args: {
    title: 'Un titre d’accordéon',
    id: 'accordeon-1',
    titleTag: 'h3',
  },
  render: (args) => ({
    components: {
      DsfrAccordion,
      DsfrAccordionsGroup,
    },
    setup () {
      const selectedAccordion = ref(undefined)
      return { selectedAccordion, args }
    },
    template: `
      <DsfrAccordionsGroup v-model="selectedAccordion">
        <DsfrAccordion
          :title="args.title + ' 1'"
          :title-tag="args.titleTag"
        >
          Contenu de l’accordéon 1
        </DsfrAccordion>
        <DsfrAccordion
          :title="args.title + ' 2'"
          :title-tag="args.titleTag"
        >
          Contenu de l’accordéon 2
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d’accordéon 1')
    expect(title1).toBeVisible()
    const content1 = canvas.getByText('Contenu de l’accordéon 1')
    expect(content1).not.toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).toBeVisible()
  },
}

export const AccordeonSimple: StoryObj<typeof meta> = {
  name: 'Accordéon simple',
  args: {
    title: 'Un titre d’accordéon',
  },
  render: (args) => ({
    components: {
      DsfrAccordion,
    },
    setup () {
      const title1 = `${args.title} 1`
      return { title1 }
    },
    template: `
      <DsfrAccordion
        :title="title1"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d’accordéon 1')
    expect(title1).toBeVisible()
    const content1 = canvas.getByText('Contenu de l’accordéon 1')
    expect(content1).not.toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).toBeVisible()
  },
}

export const AccordeonDejaOuvert: StoryObj<typeof meta> = {
  name: 'Accordéon déjà ouvert',
  args: {
    title: 'Un titre d’accordéon',
  },
  render: (args) => ({
    components: {
      DsfrAccordion,
      DsfrAccordionsGroup,
    },
    setup () {
      const selectedAccordion = ref(0)
      const title1 = `${args.title} 1`
      const title2 = `${args.title} 2`
      return { selectedAccordion, title1, title2 }
    },
    template: `
      <DsfrAccordionsGroup v-model="selectedAccordion">
        <DsfrAccordion
          :title="title1"
          id="accordeon-1"
        >
          Contenu de l’accordéon 1
        </DsfrAccordion>
        <DsfrAccordion
          :title="title2"
          id="accordeon-2"
        >
          Contenu de l’accordéon 2
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d’accordéon 1')
    expect(title1).toBeVisible()
    const content1 = canvas.getByText('Contenu de l’accordéon 1')
    await delay(500)
    expect(content1).toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).not.toBeVisible()
    await title1.click()
  },
}

export const AccordeonDansUnAccordeon: StoryObj<typeof meta> = {
  name: 'Accordéon dans un accordéon',
  args: {
    title: 'Un titre d’accordéon',
  },
  render: (args) => ({
    components: {
      DsfrAccordion,
      DsfrAccordionsGroup,
    },
    setup () {
      const selectedAccordion = ref(undefined)
      const selectedSubAccordion = ref(undefined)
      const title1 = `${args.title} 1`
      const titleSub1 = 'Accordéon dans l’accordéon 1.1'
      const titleSub2 = 'Accordéon dans l’accordéon 1.2'
      return { selectedAccordion, selectedSubAccordion, title1, titleSub1, titleSub2 }
    },
    template: `
      <DsfrAccordionsGroup v-model="selectedAccordion">
        <DsfrAccordion
          :title="title1"
        >
          <DsfrAccordionsGroup v-model="selectedSubAccordion">
            <DsfrAccordion
              :title="titleSub1"
            >
              Contenu de l’accordéon dans l’accordéon 1.1
            </DsfrAccordion>
            <DsfrAccordion
              :title="titleSub2"
            >
              Contenu de l’accordéon dans l’accordéon 1.2
            </DsfrAccordion>
          </DsfrAccordionsGroup>
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d’accordéon 1')
    expect(title1).toBeVisible()
    await title1.click()
    await delay(500)
    const title12 = canvas.getByText('Accordéon dans l’accordéon 1.2')
    expect(title12).toBeVisible()
    await title12.click()
    await delay(500)
    const content12 = canvas.getByText('Contenu de l’accordéon dans l’accordéon 1.2')
    expect(content12).toBeVisible()
    await delay(500)
  },
}

export const AccordeonTitreCustom: StoryObj<typeof meta> = {
  name: 'Accordéon avec titre customisé',
  render: () => ({
    components: {
      DsfrAccordion,
      DsfrAccordionsGroup,
    },
    setup () {
      const selectedAccordion = ref(undefined)
      const title1 = 'Un titre d’accordéon customisé'
      const title2 = 'Un autre titre d’accordéon'
      return { selectedAccordion, title1, title2 }
    },
    template: `
      <DsfrAccordionsGroup v-model="selectedAccordion">
        <DsfrAccordion>
          <template #title><h4 class="fr-text--xl" style="color: var(--success-425-625)">{{title1}}</h4></template>
          Contenu de l’accordéon avec titre customisé
        </DsfrAccordion>
        <DsfrAccordion
          :title="title2"
        >
          Test DsfrAccordion
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d’accordéon customisé')
    expect(title1.tagName).toBe('H4')
    const content1 = canvas.getByText('Contenu de l’accordéon avec titre customisé')
    expect(content1).not.toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).toBeVisible()
  },
}
