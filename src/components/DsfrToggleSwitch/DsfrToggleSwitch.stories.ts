import { fn } from '@storybook/test'

import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/interrupteur)
 */
export default {
  component: DsfrToggleSwitch,
  title: 'Composants/DsfrToggleSwitch',
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
      description: 'Positionne le label à gauche de l’interrupteur',
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
    },
    'update:modelValue': {
      description:
        'Evènement de mise à jour de la valeur contenue dans modelValue',
    },
  },
}

export const Interrupteur = (args) => ({
  components: { DsfrToggleSwitch },
  data () {
    return args
  },
  template: `
    <DsfrToggleSwitch
      v-model="modelValue"
      :label="label"
      :hint="hint"
      :disabled="disabled"
      :input-id="inputId"
    />
  `,
  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})
Interrupteur.args = {
  label: 'Interrupteur 1',
  hint: 'Indice',
  disabled: false,
  inputId: 'toggle-1',
  modelValue: true,
}

export const InterrupteurAvecLabelAGauche = (args) => ({
  components: { DsfrToggleSwitch },
  data () {
    return args
  },
  template: `
    <DsfrToggleSwitch
      v-model="modelValue"
      :label="label"
      :hint="hint"
      :disabled="disabled"
      :input-id="inputId"
      :labelLeft="labelLeft"
    />
  `,
  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})
InterrupteurAvecLabelAGauche.args = {
  label: 'Interrupteur 1',
  hint: 'Indice',
  disabled: false,
  inputId: 'toggle-2',
  modelValue: true,
  labelLeft: true,
}

export const InterrupteurAvecBordure = (args) => ({
  components: { DsfrToggleSwitch },
  data () {
    return args
  },
  template: `
    <DsfrToggleSwitch
      v-model="modelValue"
      :label="label"
      :hint="hint"
      :disabled="disabled"
      :input-id="inputId"
      :borderBottom="borderBottom"
    />
  `,
  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})
InterrupteurAvecBordure.args = {
  label: 'Interrupteur 1',
  hint: 'Indice',
  disabled: false,
  inputId: 'toggle-3',
  modelValue: true,
  borderBottom: true,
}
