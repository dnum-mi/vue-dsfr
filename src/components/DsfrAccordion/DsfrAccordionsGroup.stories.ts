import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'
import DsfrAccordion from './DsfrAccordion.vue'

import { expect, within } from '@storybook/test'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon/)
 */
export default {
  component: DsfrAccordionsGroup,
  title: 'Composants/DsfrAccordionsGroup',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` de l’accordéon. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    expandedId: {
      control: 'radio',
      options: ['none', 'accordion-1', 'accordion-2', 'accordion-3'],
      description: 'Valeur de l’`id` de l’accordéon déplié',
    },
    title1: {
      control: 'text',
      description: 'Titre du premier accordéon',
    },
    title2: {
      control: 'text',
      description: 'Titre du deuxième accordéon',
    },
    title3: {
      control: 'text',
      description: 'Titre du troisième accordéon',
    },
  },
}

export const AccordeonGroupe = (args) => ({
  components: {
    DsfrAccordionsGroup,
    DsfrAccordion,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
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
  `,
})
AccordeonGroupe.args = {
  title1: 'Un titre d’accordéon 1',
  title2: 'Un titre d’accordéon 2',
  title3: 'Un titre d’accordéon 3',
  selectedAccordion: undefined,
}

AccordeonGroupe.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon 1')
  expect(title1).toBeVisible()
  const content1 = canvas.getByText('Contenu de l’accordéon 1')
  expect(content1).not.toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).not.toBeVisible()
}
