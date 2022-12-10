import DsfrFileUpload from './DsfrFileUpload.vue'

export default {
  component: DsfrFileUpload,
  title: 'Composants/Ajout de Fichier - DsfrFileUpload',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    id: {
      control: 'text',
      description: 'Valeur de l’attribut `id` de l’input (sera aussi utilisé pour l’attribut `for` du `<label>`), chaîne aléatoire par défaut (conseillé)',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du fichier sélectionné',
    },
    label: {
      control: 'text',
      description: 'Court texte mettant en avant l’input associé',
    },
    hint: {
      control: 'text',
      description: 'Court texte facultatif donnant des informations sur l’input associé (limitation de taille, unique ou multiple...)',
    },
    error: {
      control: 'text',
      description: 'Texte de l’erreur à afficher à l’utilisateur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du succès à afficher à l’utilisateur',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de désactiver visuellement l\'upload de fichier',
    },
    'update:modelValue': {
      description: 'Événement émis lors du changement de valeur de `modelValue` : le paramètre passé est la valeur de la propriété `value` de l’`input`',
    },
    change: {
      description: 'Événement émis lors du changement de valeur de `modelValue` : le paramètre passé est la valeur de la propriété `files` de l’input',
    },
  },
}

export const Televersement = (args, { argTypes }) => ({
  components: {
    DsfrFileUpload,
  },
  data () {
    return args
  },
  template: `
    <DsfrFileUpload
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
      :validMessage="validMessage"
      :disabled="disabled"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Televersement.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: undefined,
  validMessage: undefined,
  disabled: false,
}

export const TeleversementAvecErreur = (args, { argTypes }) => ({
  components: {
    DsfrFileUpload,
  },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50);">
    <DsfrFileUpload
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
    />
  </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
TeleversementAvecErreur.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: 'Message d’erreur',
}

export const TeleversementAvecSucces = (args, { argTypes }) => ({
  components: {
    DsfrFileUpload,
  },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50);">
    <DsfrFileUpload
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
      :validMessage="validMessage"
      :disabled="disabled"
    />
  </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
TeleversementAvecSucces.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: undefined,
  validMessage: 'Téléversement effectué !',
  disabled: false,
}

export const TeleversementDesactive = (args, { argTypes }) => ({
  components: {
    DsfrFileUpload,
  },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50);">
    <DsfrFileUpload
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
      :validMessage="validMessage"
      :disabled="disabled"
    />
  </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
TeleversementDesactive.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: undefined,
  validMessage: undefined,
  disabled: true,
}
