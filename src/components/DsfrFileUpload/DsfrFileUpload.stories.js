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
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50);">
    <DsfrFileUpload
      :dark="dark"
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
    />
  </div>
  `,
})
Televersement.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: undefined,
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
      :dark="dark"
      :id="id"
      :label="label"
      :hint="hint"
      :error="error"
    />
  </div>
  `,
})
TeleversementAvecErreur.args = {
  dark: false,
  id: undefined,
  label: 'Ajouter un fichier',
  hint: 'Pas trop volumineux svp',
  error: 'Message d’erreur',
}
