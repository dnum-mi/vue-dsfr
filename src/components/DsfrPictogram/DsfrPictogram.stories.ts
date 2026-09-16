import type { Meta, StoryObj } from '@storybook/vue3-vite'

import svgCityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg'
import svgSchool from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/school.svg'

import DsfrPictogram from './DsfrPictogram.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/pictogramme)
 *
 * Nous vous invitons à regarder plutôt la [nouvelle documentation](https://vue-ds.fr/composants/DsfrPictogram) pour ce composant
 */
const meta = {
  component: DsfrPictogram,
  title: 'Composants/DsfrPictogram',
  argTypes: {
    imgSrc: {
      control: 'text',
      description: 'Chemin d’une image à utiliser comme pictogramme, prioritaire sur `svgPath`',
    },
    svgPath: {
      control: 'text',
      description: 'Chemin du pictogramme SVG, tel qu’importé depuis `@gouvfr/dsfr/dist/artwork/pictograms`',
    },
    svgAttrs: {
      control: 'object',
      description: 'Attributs à poser sur la balise `svg`, fusionnés avec `viewBox`, `width` et `height` par défaut',
    },
    title: {
      control: 'text',
      description: 'Titre du pictogramme, à ne renseigner que s’il porte une information absente du texte environnant',
    },
  },
} satisfies Meta<typeof DsfrPictogram>

export default meta

type Story = StoryObj<typeof meta>

export const Pictogramme: Story = {
  args: {
    svgPath: svgSchool,
  },
  render: (args) => ({
    components: {
      DsfrPictogram,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrPictogram :img-src="args.imgSrc" :svg-path="args.svgPath" :svg-attrs="args.svgAttrs" :title="args.title" />
    `,
  }),
}

export const PictogrammesDeTaillesDifferentes: Story = {
  args: {
    svgPath: svgCityHall,
  },
  render: (args) => ({
    components: {
      DsfrPictogram,
    },
    setup () {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <DsfrPictogram :svg-path="args.svgPath" />
        <DsfrPictogram :svg-path="args.svgPath" :svg-attrs="{ width: '40px', height: '40px' }" />
        <DsfrPictogram :svg-path="args.svgPath" :svg-attrs="{ width: '24px', height: '24px' }" />
      </div>
    `,
  }),
}
