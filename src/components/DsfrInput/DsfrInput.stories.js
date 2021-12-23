import DsfrInput from './DsfrInput.vue'
import DsfrInputGroup from './DsfrInputGroup.vue'

export default {
  component: DsfrInput,
  title: 'Composants/Champ de saisie/Champ simple - DsfrInput',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`). *N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: 'Label du champ de saisie',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Indique si le label doit être visible (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description: 'Contenu du champ à afficher lorsqu’il n’est pas rempli par l’utilisateur. *N’est pas déclaré en tant que props, mais fait partie des attributs qui seront passés à l’élément `input` natif**',
    },
    modelValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de désactiver le champ, la saisie sera impossible. *N’est pas déclaré en tant que props, mais fait partie des attributs qui seront passés à l’élément `input` natif*',
    },
    isValid: {
      control: 'boolean',
      description: 'Signale si le champ est en état validé (`true`) ou non (`false`, par défaut)',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Signale si le champ est en état d’erreur (`true`) ou non (`false`, par défaut)',
    },
    isTextarea: {
      control: 'boolean',
      description: 'Signale si le champ est de type textarea (`true`) ou non (`false`, par défaut)',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d’erreur à associer au champ. **Ne fait pas partie du composant. Il appartient à <a href="/?path=/story/composants-champ-de-saisie-champ-avec-message-associ%C3%A9-dsfrinputgroup--champ-en-erreur">DsfrInputGroup</a>**',
    },
    validMessage: {
      control: 'text',
      description: 'Message de validation à associer au champ. **Ne fait pas partie du composant. Il appartient à <a href="/?path=/story/composants-champ-de-saisie-champ-avec-message-associ%C3%A9-dsfrinputgroup--champ-valide">DsfrInputGroup</a>**',
    },
  },
}

export const LabelNotVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :label-visible="labelVisible"
        :disabled="disabled"
      />
    </div>
  `,
})
LabelNotVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: false,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}

export const LabelVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </div>
  `,
})
LabelVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}

export const ChampEnErreur = (args) => ({
  components: {
    DsfrInput,
    DsfrInputGroup,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInputGroup
        :error-message="errorMessage"
      >
        <DsfrInput
          :model-value="modelValue"
          :label="label"
          :label-visible="labelVisible"
          :placeholder="placeholder"
          :is-invalid="isInvalid"
        />
      </DsfrInputGroup>
    </div>
  `,
})
ChampEnErreur.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  errorMessage: 'Message d’erreur',
  isInvalid: true,
}

export const ChampValide = (args) => ({
  components: {
    DsfrInput,
    DsfrInputGroup,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInputGroup
        :valid-message="validMessage"
      >
        <DsfrInput
          :model-value="modelValue"
          :label="label"
          :label-visible="labelVisible"
          :placeholder="placeholder"
          :is-valid="isValid"
        />
      </DsfrInputGroup>
    </div>
  `,
})
ChampValide.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  validMessage: 'Message de validation',
  isValid: true,
}

export const ChampTextarea = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
        :disabled="disabled"
        :isTextarea="isTextarea"
      />
    </div>
  `,
})
ChampTextarea.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
}
