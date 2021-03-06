import DsfrBadge from './DsfrBadge.vue'

export default {
  component: DsfrBadge,
  title: 'Composants/Badge - DsfrBadge',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: 'Label (texte) du badge',
    },
    type: {
      options: ['error', 'success', 'new', 'info', 'warning', undefined],
      control: 'radio',
      description: '(Optionnel) **Type** du badge : `error` (Erreur), `success` (Succès), `new` (Nouveau), `info` (Information), `warning` (Avertissement)',
    },
    noIcon: {
      control: 'boolean',
      description: 'Permet de ne pas afficher d’icône (si `true`)',
    },
    small: {
      control: 'boolean',
      description: 'Permet d’afficher une petite icône (si `true`)',
    },
  },
}

export const Badge = (args) => ({
  components: {
    DsfrBadge,
  },
  data () {
    return args
  },
  template: `
    <DsfrBadge :label="label" :small="small" :type="type" :no-icon="noIcon" />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Badge.args = {
  dark: false,
  small: false,
  type: 'success',
  label: 'Succès au chocolat vert',
  noIcon: false,
}

export const TousLesBadges = (args) => ({
  components: {
    DsfrBadge,
  },
  data () {
    return args
  },
  template: `
    <p>
      <DsfrBadge label="Simple" />
    </p>
    <p>
      <DsfrBadge style="width: 300px" ellipsis label="Label très long qui, normalement, devrait être coupé par une ellipse" />
    </p>
    <p>
      <DsfrBadge label="Succès" type="success" />
    </p>
    <p>
      <DsfrBadge label="Erreur" type="error" />
    </p>
    <p>
      <DsfrBadge label="Attention !" type="warning" />
    </p>
    <p>
      <DsfrBadge label="Information" type="info" />
    </p>
    <p>
      <DsfrBadge label="Nouveauté" type="new" />
    </p>
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
TousLesBadges.args = {
  dark: false,
}
