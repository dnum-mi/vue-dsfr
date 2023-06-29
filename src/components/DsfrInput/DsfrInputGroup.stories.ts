import DsfrInput from './DsfrInput.vue'
import DsfrInputGroup from './DsfrInputGroup.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie)
 */
export default {
  component: DsfrInputGroup,
  title: 'Composants/DsfrInputGroup',
  argTypes: {
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
      description: 'Permet de désactiver le champ, la saisie sera impossible. Sera passé à DsfrInput s’il n’y a pas d’utilisation du slot par défaut',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Message de validation',
    },
  },
}

export const GroupeDeChampAvecPersonnalisation = (args) => ({
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
      :valid-message="validMessage"
    >
      <DsfrInput
        :id="id"
        :placeholder="placeholder"
        :readonly="readonly !== ''"
        :model-value="modelValue"
        :label="label"
        :type="type"
        :hint="hint"
        :label-visible="labelVisible"
      />
    </DsfrInputGroup>
  `,
})
GroupeDeChampAvecPersonnalisation.args = {
  type: 'text',
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Yo',
  modelValue: '',
  validMessage: 'Message de validation',
  errorMessage: '',
  hint: 'Texte d’indice du champ',
  id: '',
  readonly: '',
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
})
ChampEnErreur.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  errorMessage: 'Message d’erreur',
  isInvalid: true,
  type: 'text',
  hint: 'Texte d’indice du champ',
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
      :hint="hint"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
    />
  `,

})
ChampValide.args = {
  type: 'text',
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  validMessage: 'Message de validation',
  errorMessage: '',
  isValid: true,
  hint: 'Texte d’indice du champ',
}
