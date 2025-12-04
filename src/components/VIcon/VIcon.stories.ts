import type { Meta, StoryObj } from '@storybook/vue3-vite'

import VIcon from './VIcon.vue'

const meta = {
  component: VIcon,
  title: 'Composants/VIcon',
  argTypes: {
    name: {
      control: 'text',
      description: 'Nom de l’icône à afficher (ex: "mdi-home", "vi-github")',
    },
    scale: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.1 },
      description: 'Facteur d’échelle de l’icône (par défaut: 1)',
    },
    title: {
      control: 'text',
      description: 'Titre d’accessibilité pour l’icône',
    },
    label: {
      control: 'text',
      description: 'Label aria-label pour l’accessibilité',
    },
    color: {
      control: 'color',
      description: 'Couleur de l’icône',
    },
    fill: {
      control: 'color',
      description: 'Couleur de remplissage (alternative à color)',
    },
    animation: {
      control: 'select',
      options: ['spin', 'wrench', 'pulse', 'spin-pulse', 'flash', 'float', 'ring'],
      description: 'Animation à appliquer à l’icône',
    },
    speed: {
      control: 'select',
      options: ['normal', 'slow', 'fast'],
      description: 'Vitesse de l’animation',
    },
    flip: {
      control: 'select',
      options: ['horizontal', 'vertical', 'both'],
      description: 'Direction du retournement de l’icône',
    },
    inverse: {
      control: 'boolean',
      description: 'Appliquer l’inversion de couleur (blanc)',
    },
    verticalAlign: {
      control: 'text',
      description: 'Alignement vertical de l’icône (par défaut: -0.2em)',
    },
    display: {
      control: 'select',
      options: ['inline-block', 'block', 'inline', 'flex'],
      description: 'Type d’affichage CSS (par défaut: inline-block)',
    },
    ssr: {
      control: 'boolean',
      description: 'Activer le rendu côté serveur',
    },
  },
} satisfies Meta<typeof VIcon>

export default meta

type Story = StoryObj<typeof meta>

export const IconeDefaut: Story = {
  render: (args) => ({
    components: { VIcon },

    setup () {
      return args
    },

    template: `
    Texte avant
    <VIcon
      :name
      :scale
      :title
      :label
      :color
      :flip
      :ssr
      :vertical-align
      :inverse
    />
    texte après
  `,
  }),
  args: {
    name: 'mdi-home',
    scale: 1,
    title: 'Accueil',
    label: 'Icône d’accueil',
    color: 'currentColor',
    fill: 'currentColor',
    flip: undefined,
    ssr: true,
    verticalAlign: '-0.2em',
    inverse: false,
  },
}

export const IconeAvecAnimation: Story = {
  render: (args) => ({
    components: { VIcon },

    setup () {
      return args
    },

    template: `
    <VIcon
      :name
      :scale
      :title
      :label
      :color
      :flip
      :ssr
      :vertical-align
      :inverse
    />
  `,
  }),
  args: {
    ...IconeDefaut.args,
    name: 'mdi-loading',
    scale: 1.5,
    animation: 'spin',
    speed: 'normal',
    color: '#0066FF',
  },
}

export const IconeDifferentesEchelles: Story = {
  render: (args) => ({
    components: { VIcon },

    setup () {
      return args
    },

    template: `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <VIcon name="mdi-star" :scale="0.8" />
      <VIcon name="mdi-star" :scale="1" />
      <VIcon name="mdi-star" :scale="1.5" />
      <VIcon name="mdi-star" :scale="2" />
    </div>
  `,
  }),
  args: IconeDefaut.args,
}

export const IconeAvecRetournement: Story = {
  render: (args) => ({
    components: { VIcon },

    setup () {
      return args
    },

    template: `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <div style="text-align: center;">
        <VIcon name="mdi-arrow-right" :scale="1.5" />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Normal</p>
      </div>
      <div style="text-align: center;">
        <VIcon name="mdi-arrow-right" :scale="1.5" flip="horizontal" />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Horizontal</p>
      </div>
      <div style="text-align: center;">
        <VIcon name="mdi-arrow-right" :scale="1.5" flip="vertical" />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Vertical</p>
      </div>
      <div style="text-align: center;">
        <VIcon name="mdi-arrow-right" :scale="1.5" flip="both" />
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Les deux</p>
      </div>
    </div>
  `,
  }),
  args: IconeDefaut.args,
}

export const IconeVsCode: Story = {
  render: (args) => ({
    components: { VIcon },

    setup () {
      return args
    },

    template: `
    <VIcon
      :name
      :scale
      :title
      :label
      :color
      :flip
      :ssr
      :vertical-align
      :inverse
    />
  `,
  }),
  args: {
    ...IconeDefaut.args,
    name: 'vi-github',
    scale: 2,
    color: '#181717',
  },
}
