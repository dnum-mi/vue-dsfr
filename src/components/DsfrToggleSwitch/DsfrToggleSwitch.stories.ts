import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from 'storybook/test'
import { watch } from 'vue'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/interrupteur)
 */
const meta = {
  component: DsfrToggleSwitch,
  title: 'Composants/DsfrToggleSwitch',
  tags: ['formulaire'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label de l’interrupteur',
    },
    hint: {
      control: 'text',
      description: 'Indice de l’interrupteur',
    },
    labelLeft: {
      control: 'boolean',
      description: 'Obslolète (désactivé)',
    },
    borderBottom: {
      control: 'boolean',
      description: 'Affiche une bordure en bas de l’interrupteur',
    },
    disabled: {
      control: 'boolean',
      description:
        'État activé/désactivé de l’interrupteur (activé `false`, ou désactivé `true`)',
    },
    modelValue: {
      control: 'boolean',
      description: 'État On/Off de l’interrupteur (On `false`, ou Off `true`)',
    },
    inputId: {
      control: 'text',
      description: 'Id de l’input',
    },
    onChange: {
      action: fn(),
      description:
        'Appelé à chaque changement de la valeur `checked`.\n\n*N.B. : Ne fait pas partie du composant.*',
      table: { category: 'Hors composant' },
    },
    activeText: {
      control: 'text',
      description: 'Texte à afficher sous l\'interrupteur lorsqu\'il est activé',
    },
    inactiveText: {
      control: 'text',
      description: 'Texte à afficher sous l\'interrupteur lorsqu\'il est désactivé',
    },
    noText: {
      control: 'boolean',
      description: 'Désactive l\'affichage de activeText et inactiveText',
    },
    'update:modelValue': {
      description:
        'Evènement de mise à jour de la valeur contenue dans modelValue',
    },
  },
} satisfies Meta<typeof DsfrToggleSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Interrupteur: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitch },
    setup () {
      watch(() => args.modelValue, (newVal) => {
        args.onChange?.(newVal)
      })

      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitch
      v-model="args.modelValue"
      :label="args.label"
      :hint="args.hint"
      :disabled="args.disabled"
      :input-id="args.inputId"
    />
  `,
  }),
  args: {
    label: 'Interrupteur 1',
    hint: 'Indice',
    disabled: false,
    inputId: 'toggle-1',
    modelValue: true,
  },
}

export const InterrupteurAvecBordure: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitch },
    setup () {
      watch(() => args.modelValue, (newVal) => {
        args.onChange?.(newVal)
      })

      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitch
      v-model="args.modelValue"
      :label="args.label"
      :hint="args.hint"
      :disabled="args.disabled"
      :input-id="args.inputId"
      :borderBottom="args.borderBottom"
    />
  `,
  }),
  args: {
    label: 'Interrupteur 1',
    hint: 'Indice',
    disabled: false,
    inputId: 'toggle-3',
    modelValue: true,
    borderBottom: true,
  },
}

export const InterrupteurAvecTextePersonnalise: Story = {
  name: 'Interrupteur Avec Texte Personnalisé',
  render: (args) => ({
    components: { DsfrToggleSwitch },
    setup () {
      watch(() => args.modelValue, (newVal) => {
        args.onChange?.(newVal)
      })

      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitch
      v-model="args.modelValue"
      :label="args.label"
      :hint="args.hint"
      :disabled="args.disabled"
      :input-id="args.inputId"
      :active-text="args.activeText"
      :inactive-text="args.inactiveText"
    />
  `,
  }),
  args: {
    label: 'Interrupteur 1',
    hint: 'Indice',
    inputId: 'toggle-4',
    modelValue: true,
    disabled: false,
    activeText: 'Autorisé',
    inactiveText: 'Interdit',
  },
  async play ({ canvasElement }) {
    const canvas = within(canvasElement)
    const toggleSwitch = canvas.getByLabelText('Interrupteur 1') as HTMLInputElement
    expect(toggleSwitch).toHaveProperty('checked', true)
    toggleSwitch.click()
    expect(toggleSwitch).toHaveProperty('checked', false)
    toggleSwitch.click()
    expect(toggleSwitch).toHaveProperty('checked', true)

    const hint = canvas.getByText('Indice') as HTMLParagraphElement
    expect(hint).toBeVisible()
  },
}

export const InterrupteurDésactivé: Story = {
  render: (args) => ({
    components: { DsfrToggleSwitch },
    setup () {
      watch(() => args.modelValue, (newVal) => {
        args.onChange?.(newVal)
      })

      return {
        args,
      }
    },
    template: `
    <DsfrToggleSwitch
      v-model="args.modelValue"
      :label="args.label"
      :hint="args.hint"
      :disabled="args.disabled"
      :input-id="args.inputId"
      :no-text="args.noText"
    />
  `,
  }),
  args: {
    label: 'Interrupteur 1',
    hint: 'Indice',
    inputId: 'toggle-5',
    modelValue: true,
    disabled: true,
    noText: true,
  },
}
