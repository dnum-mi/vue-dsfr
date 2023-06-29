import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/boutons-radio)
 */
export default {
  component: DsfrRadioButtonSet,
  title: 'Composants/DsfrRadioButtonSet',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Indique si le bouton radio doit être désactivé (`true`) ou non (`false`, défaut)',
    },
    inline: {
      control: 'boolean',
      description: 'Indique si les boutons doivent être affichés en ligne (`true`) ou chacun sur une ligne (`false`, défaut)',
    },
    name: {
      control: 'text',
      description: 'Valeur de l’attribut `name` de chaque bouton radio du groupe',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite des boutons radio',
    },
    // legend: {
    //   control: 'text',
    //   description: 'Titre du groupe de bouton',
    // },
    options: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    'update:modelValue': {
      description: 'Événement émis à chaque changement de valeur du groupe de même bouton radio',
    },
    onChange: { action: 'changed' },
  },
}

export const GroupeDeBoutonsRadio = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="modelValue"
      name="radio-set"
      :options="options"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadio.args = {
  legend: 'Légende des champs',
  inline: false,
  modelValue: '3',
  small: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const GroupeDeBoutonsRadioRequis = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      v-model="modelValue"
      :legend="legend"
      :required="required"
      name="radio-set"
      :options="options"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadioRequis.args = {
  legend: 'Légende des champs',
  inline: false,
  required: true,
  modelValue: '3',
  small: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const GroupeDeBoutonsRadioRequisPersonnalise = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      v-model="modelValue"
      :legend="legend"
      :required="required"
      name="radio-set"
      :options="options"
      :inline="inline"
      @update:model-value="onChange"
    >
      <template #required-tip>
        <em> (obligatoire)</em>
      </template>
    </DsfrRadioButtonSet>
  `,
})
GroupeDeBoutonsRadioRequisPersonnalise.args = {
  legend: 'Légende des champs',
  inline: false,
  required: true,
  modelValue: '3',
  small: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const GroupeDeBoutonsRadioEnErreur = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-errors"
      :options="options"
      :disabled="disabled"
      :error-message="error"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadioEnErreur.args = {
  error: 'Texte de l’erreur',
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
      hint: 'Description 3',
    },
  ],
}

export const GroupeDeBoutonsRadioEnSuccess = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-success"
      :options="options"
      :disabled="disabled"
      :valid-message="validMessage"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadioEnSuccess.args = {
  validMessage: 'Succès au chocolat',
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
      hint: 'Description 3',
    },
  ],
}

export const GroupeDeBoutonsRadioDisabled = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-disabled"
      :options="options"
      :disabled="disabled"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadioDisabled.args = {
  legend: 'Légende des champs',
  inline: false,
  selectedValue: 1,
  disabled: true,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}

export const GroupeDeBoutonsRadioInline = (args) => ({
  components: { DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet
      :legend="legend"
      v-model="selectedValue"
      name="radio-inline"
      :options="options"
      :disabled="disabled"
      :inline="inline"
      @update:model-value="onChange"
    />
  `,
})
GroupeDeBoutonsRadioInline.args = {
  legend: 'Légende des champs en ligne',
  selectedValue: 1,
  disabled: true,
  inline: true,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      value: '3',
    },
  ],
}
