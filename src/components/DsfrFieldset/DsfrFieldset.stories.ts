import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrFieldset from './DsfrFieldset.vue'

const meta = {
  component: DsfrFieldset,
  title: 'Composants/DsfrFieldset',
  tags: ['formulaire'],
  argTypes: {
    legend: {
      control: 'text',
      description:
        'Slot pour le contenu du titre du `fieldset` (sera dans `<legend class="fr-fieldset__legend">`). Une props du même nom est utilisable pour du texte simple sans mise en forme.',
    },
    legendClass: {
      control: 'text',
      description:
        'Classes à ajouter à l’élément `<legend class="fr-fieldset__legend">`',
    },
    legendId: {
      control: 'text',
      description: 'id de la balise `legend`',
    },
    hint: {
      control: 'text',
      description:
        'Slot pour le contenu de l’indice (sera dans `<span class="fr-hint-text">` qui sera dans `</legend>`). Une props du même nom est utilisable pour du texte simple sans mise en forme.',
    },
    hintClass: {
      control: 'text',
      description:
        'Classe(s) à ajouter à l’élément <span class="fr-hint-text">',
    },
  },
} satisfies Meta<typeof DsfrFieldset>

export default meta

type Story = StoryObj<typeof meta>

export const EnsembleDeChamps: Story = {
  args: {
    legend: 'Titre de l\'ensemble des champs',
    legendId: 'legend-id',
    legendClass: '',
    hintClass: '',
    hint: 'Texte d\'indice',
  },
  render: (args) => ({
    components: {
      DsfrFieldset,
    },
    setup () {
      return { args }
    },
    template: `
    <DsfrFieldset
      :legend="args.legend"
      :hint="args.hint"
      :legend-class="args.legendClass"
      :hint-class="args.hintClass"
      :legend-id="args.legendId"
    >
      Contenu du fieldset
    </DsfrFieldset>
  `,
  }),
}

export const EnsemblePersonnaliseDeChamps: Story = {
  args: {
    legend: 'Contenu personnalisé du titre de l\'ensemble des champs',
    legendId: 'legend-id',
    legendClass: '',
    hintClass: '',
    hint: 'Contenu personnalisé de l\'indice',
  },
  render: (args) => ({
    components: {
      DsfrFieldset,
    },
    setup () {
      return { args }
    },
    template: `
    <DsfrFieldset
      :legend-id="args.legendId"
      :legend-class="args.legendClass"
      :hint-class="args.hintClass"
    >
      <template #legend>
        <h6>{{ args.legend }} avec <em>de l'italique</em> dans un titre</h6>
      </template>
      <template #hint>
        {{ args.hint }} avec <strong>du gras</strong>
      </template>
      Contenu du fieldset
    </DsfrFieldset>
  `,
  }),
}
