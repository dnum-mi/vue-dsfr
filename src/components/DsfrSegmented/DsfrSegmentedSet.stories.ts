import { fn } from '@storybook/test'

import DsfrSegmentedSet from './DsfrSegmentedSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/controle-segmente)
 */
export default {
  component: DsfrSegmentedSet,
  title: 'Composants/DsfrSegmentedSet',
  tags: ['formulaire', 'bouton'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Indique si le bouton radio doit être désactivé (`true`) ou non (`false`, défaut)',
    },
    inline: {
      control: 'boolean',
      description:
        'Indique si la légende doit être alignée avec les boutons (`true`) ou chacun sur une ligne (`false`, défaut)',
    },
    name: {
      control: 'text',
      description: 'Valeur de l’attribut `name` de chaque bouton du groupe',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite des contrôles segmentés',
    },
    legend: {
      control: 'text',
      description: 'Titre du contrôle segmenté',
    },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrSegmented`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du contrôle actif',
    },
    'update:modelValue': {
      description: 'Événement émis à chaque changement de valeur',
    },
    onChange: { action: fn() },
  },
}

export const ContrôleSegmentéSimple = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-1"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéSimple.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: false,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const ContrôleSegmentéTailleSM = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-2"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéTailleSM.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: true,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const ContrôleSegmentéAvecLégendeEnLigne = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-3"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéAvecLégendeEnLigne.args = {
  legend: 'Légende des champs',
  inline: true,
  modelValue: '3',
  small: false,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const ContrôleSegmentéAvecHint = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-4"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéAvecHint.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: false,
  hint: 'Ceci est un hint',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const ContrôleSegmentéAvecIcônes = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-5"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéAvecIcônes.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: false,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Valeur 2',
      value: '2',
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Valeur 3',
      value: '3',
      icon: 'ri-checkbox-circle-line',
    },
  ],
}

export const ContrôleSegmentéSansLégende = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-6"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéSansLégende.args = {
  legend: null,
  inline: false,
  modelValue: '3',
  small: false,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const ContrôleSegmentéDésactivé = (args) => ({
  components: { DsfrSegmentedSet },
  data () {
    return args
  },
  template: `
    <DsfrSegmentedSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set-7"
      :options="options"
      :inline="inline"
      :small="small"
      :hint="hint"
      @update:model-value="onChange"
    />
  `,
})
ContrôleSegmentéDésactivé.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: false,
  hint: null,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}
