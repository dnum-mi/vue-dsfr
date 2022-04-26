import DsfrInput from './DsfrInput.vue'
import DsfrInputGroup from './DsfrInputGroup.vue'

export default {
  component: DsfrInput,
  title: 'Composants/Champ de saisie/Champ avec message associé - DsfrInputGroup',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).*N.B. : Ne fait pas partie du composant.*',
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
      description: 'Label du champ de saisie. Sera passé à DsfrInput si modelValue n’est pas `undefined`',
    },
    hint: {
      control: 'text',
      description: 'Indice associé au champ de saisie',
    },
    type: {
      control: 'text',
      description: 'Type du champ de saisie cf. [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Indique si le label doit être visible (`true`) ou non (`false`, défaut). Sera passé à DsfrInput si modelValue n’est pas `undefined`',
    },
    placeholder: {
      control: 'text',
      description: 'Contenu du champ à afficher lorsqu’il n’est pas rempli par l’utilisateur. Sera passé à DsfrInput si modelValue n’est pas `undefined`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du champ de saisie',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de désactiver le champ, la saisie sera impossible. Sera passé à DsfrInput si modelValue n’est pas `undefined`',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Message de validation',
    },
    isValid: {
      control: 'boolean',
      description: 'Signale si le champ est en état validé (`true`) ou non (`false`, par défaut)',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Signale si le champ est en état d’erreur (`true`) ou non (`false`, par défaut)',
    },
  },
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
      :model-value="modelValue"
      :type="type"
      :label="label"
      :hint="hint"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :is-invalid="isInvalid"
      />
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
  type: 'text',
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
      :error-message="errorMessage"
      :model-value="modelValue"
      :type="type"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ChampValide.args = {
  dark: false,
  type: 'text',
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  validMessage: 'Message de validation',
  errorMessage: '',
  isValid: true,
}
