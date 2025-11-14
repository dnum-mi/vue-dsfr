import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'

import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const meta = {
  component: DsfrAccordionsGroup,
  title: 'Composants/DsfrAccordionsGroup',
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Index de l’accordéon actuellement ouvert (-1 pour aucun)',
    },
  },
} satisfies Meta<typeof DsfrAccordionsGroup>

export default meta

export const AccordeonGroupe: StoryObj<typeof meta> = {
  args: {
    modelValue: -1,
  },
  render: (args) => ({
    components: {
      DsfrAccordionsGroup,
      DsfrAccordion,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrAccordionsGroup v-model="args.modelValue">
        <DsfrAccordion
          title="Un titre d'accordéon 1"
        >
          Contenu de l'accordéon 1
        </DsfrAccordion>
        <DsfrAccordion
          title="Un titre d'accordéon 2"
        >
          Contenu de l'accordéon 2
        </DsfrAccordion>
        <DsfrAccordion
          title="Un titre d'accordéon 3"
        >
          Contenu de l'accordéon 3
        </DsfrAccordion>
      </DsfrAccordionsGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title1 = canvas.getByText('Un titre d\'accordéon 1')
    expect(title1).toBeVisible()
    const content1 = canvas.getByText('Contenu de l\'accordéon 1')
    expect(content1).not.toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).toBeVisible()
    await title1.click()
    await delay(500)
    expect(content1).not.toBeVisible()
  },
}
