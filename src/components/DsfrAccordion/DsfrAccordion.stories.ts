import { expect, within } from 'storybook/test'

import DsfrCheckboxSet from '../DsfrCheckbox/DsfrCheckboxSet.vue'

import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/accordeon/)
 */
export default {
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
    expand: {
      description:
        'Événement déclenché au clic sur le titre de l’accordéon et qui renvoie l’`id` de l’accordéon correspondant.',
    },
    expandedId: {
      control: 'text',
      description: 'Id de l’accordéon déplié',
    },
  },
}

export const Accordeon = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      title1: `${args.title} 1`,
      title2: `${args.title} 2`,
    }
  },

  template: `
  <DsfrAccordionsGroup v-model="selectedAccordion">
    <DsfrAccordion
      :title="title1"
    >
      Contenu de l’accordéon 1
    </DsfrAccordion>
    <DsfrAccordion
      :title="title2"
    >
      Contenu de l’accordéon 2
    </DsfrAccordion>
  </DsfrAccordionsGroup>
  `,
})
Accordeon.args = {
  title: 'Un titre d’accordéon',
  selectedAccordion: undefined,
}
Accordeon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon 1')
  expect(title1).toBeVisible()
  const content1 = canvas.getByText('Contenu de l’accordéon 1')
  expect(content1).not.toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).toBeVisible()
}

export const AccordeonSimple = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      title1: `${args.title} 1`,
    }
  },

  template: `
    <DsfrAccordion
      :title="title1"
    >
      Contenu de l’accordéon 1
    </DsfrAccordion>
  `,
})
AccordeonSimple.args = {
  title: 'Un titre d’accordéon',
  selectedAccordion: undefined,
}
AccordeonSimple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon 1')
  expect(title1).toBeVisible()
  const content1 = canvas.getByText('Contenu de l’accordéon 1')
  expect(content1).not.toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).toBeVisible()
}

export const AccordeonDejaOuvert = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      expandedId: 'accordeon-1',
      title1: `${args.title} 1`,
      title2: `${args.title} 2`,
    }
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
})
AccordeonDejaOuvert.args = {
  title: 'Un titre d’accordéon',
  selectedAccordion: 0,
}
AccordeonDejaOuvert.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon 1')
  expect(title1).toBeVisible()
  const content1 = canvas.getByText('Contenu de l’accordéon 1')
  await delay(500)
  expect(content1).toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).not.toBeVisible()
  title1.click()
}

export const AccordeonDansUnAccordeon = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      title1: `${args.title} 1`,
      title2: `${args.title} 2`,
      titleSub1: `${args.titleSub} 1.1`,
      titleSub2: `${args.titleSub} 1.2`,
      expandedId: undefined,
      subExpandedId: undefined,
    }
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
})
AccordeonDansUnAccordeon.args = {
  title: 'Un titre d’accordéon',
  titleSub: 'Accordéon dans l’accordéon',
  selectedAccordion: undefined,
  selectedSubAccordion: undefined,
}
AccordeonDansUnAccordeon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon 1')
  expect(title1).toBeVisible()
  title1.click()
  await delay(500)
  const title12 = canvas.getByText('Accordéon dans l’accordéon 1.2')
  expect(title12).toBeVisible()
  title12.click()
  await delay(500)
  const content12 = canvas.getByText('Contenu de l’accordéon dans l’accordéon 1.2')
  expect(content12).toBeVisible()
  await delay(500)
}

export const AccordeonTitreCustom = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      title1: args.title1,
      title2: args.title2,
      expandedId: undefined,
    }
  },

  template: `
    <DsfrAccordionsGroup v-model="selectedAccordion">
      <DsfrAccordion
      >
        <template #title><h1>{{title1}}</h1></template>
        Contenu de l’accordéon avec titre customisé
      </DsfrAccordion>
      <DsfrAccordion
        :title="title2"
      >
        Test DsfrAccordion
      </DsfrAccordion>
    </DsfrAccordionsGroup>
  `,
})
AccordeonTitreCustom.args = {
  title1: 'Un titre d’accordéon customisé',
  title2: 'Un autre titre d’accordéon',
  selectedAccordion: undefined,
}
AccordeonTitreCustom.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Un titre d’accordéon customisé')
  expect(title1.tagName).toBe('H1')
  const content1 = canvas.getByText('Contenu de l’accordéon avec titre customisé')
  expect(content1).not.toBeVisible()
  title1.click()
  await delay(500)
  expect(content1).toBeVisible()
}

export const AccordeonAvecCheckbox = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
    DsfrCheckboxSet,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      accordions: args.accordions,
    }
  },

  template: `
    <DsfrAccordionsGroup v-model="selectedAccordion">
      <template
        v-for="(accordion, name) in accordions"
        :id="\`accordion_${name}\`"
        :key="name"
      >
        <DsfrAccordion
          :id="name"
          :title="name"
        >
          <DsfrCheckboxSet
            :options="accordion.options"
          />
        </DsfrAccordion>
      </template>
    </DsfrAccordionsGroup>
  `,
})
AccordeonAvecCheckbox.args = {
  selectedAccordion: undefined,
  accordions: {
    'Accordéon 1': {
      options: [
        { label: 'Option 1.1', value: 'option1', name: 'option1' },
        { label: 'Option 1.2', value: 'option2', name: 'option2' },
        { label: 'Option 1.3', value: 'option3', name: 'option3' },
      ],
    },
    'Accordéon 2': {
      options: [
        { label: 'Option 2.1', value: 'option1', name: 'option1' },
        { label: 'Option 2.2', value: 'option2', name: 'option2' },
        { label: 'Option 2.3', value: 'option3', name: 'option3' },
      ],
    },
    'Accordéon 3': {
      options: [
        { label: 'Option 3.1', value: 'option1', name: 'option1' },
        { label: 'Option 3.2', value: 'option2', name: 'option2' },
        { label: 'Option 3.3', value: 'option3', name: 'option3' },
      ],
    },
  },
}

AccordeonAvecCheckbox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const title1 = canvas.getByText('Accordéon 1')
  const title2 = canvas.getByText('Accordéon 2')
  const optionLabel11 = canvas.getByText('Option 1.1')
  const option11 = canvas.getByLabelText('Option 1.1')
  const optionLabel21 = canvas.getByText('Option 2.1')
  expect(optionLabel11).not.toBeVisible()
  title1.click()
  await delay(500)
  expect(optionLabel11).toBeVisible()
  expect(optionLabel21).not.toBeVisible()
  expect(option11).toHaveProperty('checked', false)
  optionLabel11.click()
  expect(option11).toHaveProperty('checked', true)
  title2.click()
  await delay(500)
  expect(optionLabel11).not.toBeVisible()
  expect(optionLabel21).toBeVisible()
}
