import DsfrAlert from './DsfrAlert.vue'

import { addIcons } from 'oh-vue-icons'

import { RiCloseLine } from 'oh-vue-icons/icons/ri/index.js'

addIcons(RiCloseLine)

export default {
  component: DsfrAlert,
  title: 'Composants/Alertes - DsfrAlert',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` de l’alerte. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    title: {
      control: 'text',
      description: '**Titre** de l\'alerte',
    },
    description: {
      control: 'text',
      description: '**Description** de l\'alerte',
    },
    type: {
      options: ['error', 'success', 'info', 'warning'],
      control: 'radio',
      description: '**Type** de l\'alerte : `error` (Erreur), `success` (Succès), `warning` (Avertissement), ou `info` (Information)',
    },
    small: {
      control: 'boolean',
      description: 'Permet d\'obtenir une version minimaliste de l\'alerte',
    },
    close: {
      description: 'Event de fermeture de l\'alerte',
    },
    closed: {
      control: 'boolean',
      description: 'Permet d\'alterner entre l\'état ouvert ou fermé de l\'alerte',
    },
    closeable: {
      control: 'boolean',
      description: 'Ajoute la possibilité de fermer l\'alerte via un bouton en forme de croix',
    },
  },
}

export const Alerte = (args) => ({
  components: { DsfrAlert },
  data () {
    return { ...args, type: args.type || 'error' }
  },

  template: `
    <DsfrAlert
      :title="title"
      :description="description"
      :type="type"
      :small="small"
      :closeable="closeable"
      :closed="closed"
      @close="close"
    />
  `,

  methods: {
    close () {
      this.closed = true
      setTimeout(() => { this.closed = false }, 2000)
    },
  },

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Alerte.args = {
  dark: false,
  title: 'Titre alerte',
  description: 'Description du message',
  type: 'error',
  small: false,
  closed: false,
  closeable: true,
}

export const Alertes = (args) => ({
  components: { DsfrAlert },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div style="margin: 1rem 0;">
        <DsfrAlert
          type="info"
          title="Titre de l'info"
          description="Description de l'info"
        />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
      type="warning"
        title="Titre de l'avertissement"
        description="Description de l'avertissement"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="success"
        title="Titre du succès"
        description="Description du succès"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="error"
        title="Titre de l'erreur"
        description="Description de l'erreur"
      />
    </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Alertes.args = {
  dark: false,
}

export const PetitesAlertes = (args) => ({
  components: { DsfrAlert },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="info"
        description="Description de l'info"
        small="small"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="warning"
        description="Description de l'avertissement"
        small="small"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="success"
        description="Description du succès"
        small="small"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="error"
        description="Description de l'erreur"
        small="small"
      />
    </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
PetitesAlertes.args = {
  dark: false,
}

export const AlertesFermables = (args) => ({
  components: { DsfrAlert },
  data () {
    return {
      ...args,
      closed: Array.from({ length: 6 }).map(() => false),
    }
  },
  template: `
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="info"
        title="Titre de l'info"
        description="Description de l'info"
        :closed="closed[0]"
        :closeable="closeable"
        @close="close(0)"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="info"
        description="Description de l'info"
        :closed="closed[1]"
        :closeable="closeable"
        :small="small"
        @close="close(1)"
      />
    </div>

    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="warning"
        title="Titre de l'avertissement"
        description="Description de l'avertissement"
        :closed="closed[4]"
        :closeable="closeable"
        @close="close(4)"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="warning"
        description="Description de l'avertissement"
        :closed="closed[5]"
        :closeable="closeable"
        :small="small"
        @close="close(5)"
      />
    </div>

    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="success"
        title="Titre du succès"
        description="Description du succès"
        :closed="closed[2]"
        :closeable="closeable"
        @close="close(2)"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="success"
        description="Description du succès"
        :closed="closed[3]"
        :closeable="closeable"
        :small="small"
        @close="close(3)"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="error"
        title="Titre de l'erreur"
        description="Description de l'erreur"
        :closed="closed[4]"
        :closeable="closeable"
        @close="close(4)"
      />
    </div>
    <div style="margin: 1rem 0;">
      <DsfrAlert
        type="error"
        description="Description de l'erreur"
        :closed="closed[5]"
        :closeable="closeable"
        :small="small"
        @close="close(5)"
      />
    </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

  methods: {
    close (idx) {
      this.closed[idx] = true
      setTimeout(() => { this.closed[idx] = false }, 3000)
    },
  },
})
AlertesFermables.args = {
  dark: false,
  title: 'Titre alerte',
  description: 'Description du message',
  type: 'error',
  closeable: true,
  small: true,
}
