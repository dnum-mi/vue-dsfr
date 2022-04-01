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
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du champ de saisie. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    descriptionId: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du paragraphe de description. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    label: {
      control: 'text',
      description: 'Label du champ de saisie',
    },
    type: {
      control: 'text',
      description: 'Type du champ de saisie cf. [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)',
    },
    hint: {
      control: 'text',
      description: 'Indice associé au champ de saisie',
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
      description: 'Valeur du champ de saisie',
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
    isWithWrapper: {
      control: 'boolean',
      description: 'Définit la présence d’une div englobant le champ de saisie et lui met automatiquement la classe `fr-input-wrap`',
    },
    wrapperClass: {
      control: 'text',
      description: 'Classe css du div englobant le champ de saisie si l’utilisateur y a recourt.',
    },
    'update:modelValue': {
      control: 'text',
      description: 'Événement émis lors du changement de la valeur du champ de saisie',
    },
  },
}

export const ChampSansLabel = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      :type="type"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ChampSansLabel.args = {
  dark: false,
  type: 'text',
  labelVisible: false,
  label: 'Label visible',
  hint: 'Indice visible',
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
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
LabelVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  hint: 'Indice de champ de saisie',
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
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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

export const ChampDeSaisieDeDate = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      type="date"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ChampDeSaisieDeDate.args = {
  dark: false,
  labelVisible: false,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}

export const ZoneDeTexte = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
      :is-textarea="isTextarea"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ZoneDeTexte.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
}
