import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrToggleSwitchGroup from './DsfrToggleSwitchGroup.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)
 */
const meta = {
  component: DsfrToggleSwitchGroup,
  title: 'Composants/DsfrToggleSwitchGroup',
  tags: ['formulaire'],
  argTypes: {
    legend: {
      control: 'text',
      description: 'Légende du groupe d\'interrupteurs',
    },
    borders: {
      control: 'boolean',
      description: 'Affiche une bordure en bas de chaqueinterrupteur du groupe',
    },
    disabled: {
      control: 'boolean',
      description:
        'État activé/désactivé du groupe d\'interrupteurs',
    },
    id: {
      control: 'text',
      description: 'Id du groupe d\'interrupteurs',
    },
    activeText: {
      control: 'text',
      description: 'Texte à afficher sous chaque interrupteur lorsqu\'il est activé',
    },
    inactiveText: {
      control: 'text',
      description: 'Texte à afficher sous chaque interrupteur lorsqu\'il est désactivé',
    },
    noText: {
      control: 'boolean',
      description: 'Désactive l\'affichage de activeText et inactiveText',
    },
    toggleSwitches: {
      control: 'object',
      description:
        'Tableau d\'objets, chaque objet contiendra les props à passer à DsfrToggleSwitch',
    },
    status: {
      control: 'radio',
      options: [undefined, 'valid', 'error'],
      description:
        'Indique le statut du groupe d\'interrupteurs (valide, ou en erreur - undefined pour aucun statut)',
    },
    validMessage: {
      control: 'text',
      description: 'Message de validation du groupe d\'interrupteurs',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d\'erreur du groupe d\'interrupteurs',
    },
  },
} satisfies Meta<typeof DsfrToggleSwitchGroup>

export default meta

type Story = StoryObj<typeof meta>

export const GroupeDInterrupteurs: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitchGroup },
    setup () {
      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitchGroup
      :legend="args.legend"
      :borders="args.borders"
      :disabled="args.disabled"
      :id="args.id"
      :active-text="args.activeText"
      :inactive-text="args.inactiveText"
      :no-text="args.noText"
      :toggle-switches="args.toggleSwitches"
      :status="args.status"
      :valid-message="args.validMessage"
      :error-message="args.errorMessage"
    />
  `,
  }),
  args: {
    legend: 'Légende pour l\'ensemble des éléments du groupe',
    id: 'toggle-group-1',
    toggleSwitches: [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ],
  },
}

export const GroupeDInterrupteursAvecTextePersonalisé: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitchGroup },
    setup () {
      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitchGroup
      :legend="args.legend"
      :borders="args.borders"
      :disabled="args.disabled"
      :id="args.id"
      :active-text="args.activeText"
      :inactive-text="args.inactiveText"
      :no-text="args.noText"
      :toggle-switches="args.toggleSwitches"
    />
  `,
  }),
  args: {
    legend: 'Légende pour l\'ensemble des éléments du groupe',
    id: 'toggle-group-1',
    activeText: 'Oui',
    inactiveText: 'Non',
    toggleSwitches: [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ],
  },
}

export const GroupeDInterrupteursAvecBordures: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitchGroup },
    setup () {
      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitchGroup
      :legend="args.legend"
      :borders="args.borders"
      :disabled="args.disabled"
      :id="args.id"
      :active-text="args.activeText"
      :inactive-text="args.inactiveText"
      :no-text="args.noText"
      :toggle-switches="args.toggleSwitches"
    />
  `,
  }),
  args: {
    legend: 'Légende pour l\'ensemble des éléments du groupe',
    id: 'toggle-group-1',
    borders: true,
    toggleSwitches: [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ],
  },
}

export const GroupeDInterrupteursDésactivé: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitchGroup },
    setup () {
      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitchGroup
      :legend="args.legend"
      :borders="args.borders"
      :disabled="args.disabled"
      :id="args.id"
      :active-text="args.activeText"
      :inactive-text  ="args.inactiveText"
      :no-text="args.noText"
      :toggle-switches="args.toggleSwitches"
    />
  `,
  }),
  args: {
    legend: 'Légende pour l\'ensemble des éléments du groupe',
    id: 'toggle-group-1',
    disabled: true,
    toggleSwitches: [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ],
  },
}

export const GroupeDInterrupteursAvecMessageDErreur: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitchGroup },
    setup () {
      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitchGroup
      :legend="args.legend"
      :borders="args.borders"
      :disabled="args.disabled"
      :id="args.id"
      :active-text="args.activeText"
      :inactive-text  ="args.inactiveText"
      :no-text="args.noText"
      :toggle-switches="args.toggleSwitches"
      :status="args.status"
      :error-message="args.errorMessage"
    />
  `,
  }),
  args: {
    legend: 'Légende pour l\'ensemble des éléments du groupe',
    id: 'toggle-group-1',
    status: 'error',
    errorMessage: 'Il y a une erreur sur ce groupe d\'interrupteurs',
    toggleSwitches: [
      {
        modelValue: true,
        label: 'Premier élément du groupe',
        inputId: 'toggle-1',
      },
      {
        modelValue: false,
        label: 'Deuxième élément du groupe',
        inputId: 'toggle-2',
      },
      {
        modelValue: true,
        label: 'Troisième élément du groupe',
        inputId: 'toggle-3',
      },
    ],
  },
}
