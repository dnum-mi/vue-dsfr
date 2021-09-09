import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiErrorWarningLine } from 'oh-vue-icons/icons'

import DsfrAlert from './DsfrAlert.vue'

OhVueIcon.add(RiErrorWarningLine)

export default {
  component: DsfrAlert,
  title: 'Basic/Alertes',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre* (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
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
      control: 'radio',
      options: ['error', 'success', 'info'],
      description: '**Type** de l\'alerte : `error` (Erreur), `success` (Succès), ou `info` (Information)',
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'],
      description: '**Taille de l\'alerte** : `medium` (Taille moyenne), `small` (Petite taille).',
    },
    closed: {
      control: 'boolean',
    },
    onClose: {
      action: 'close',
    },
  },
}

export const Alerte = (args) => ({
  components: { DsfrAlert },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrAlert
        :title="title"
        :description="description"
        :type="type"
        :size="size"
        closeable
        :closed="closed"
        @close="close"
      />
    </div>
  `,

  methods: {
    close () {
      this.closed = true
      this.onClose()
      setTimeout(() => { this.closed = false }, 2000)
    },
  },
})
Alerte.args = {
  dark: false,
  title: 'Titre alerte',
  description: 'Description du message',
  type: 'error',
  size: 'medium',
  closed: false,
}

export const Alertes = (args) => ({
  components: { DsfrAlert },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <div style="margin: 1rem 0;">
        <DsfrAlert
          title="Titre de l'info"
          description="Description de l'info"
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
    </div>
  `,
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <div style="margin: 1rem 0;">
        <DsfrAlert
          description="Description de l'info"
          sm
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          description="Description du succès"
          sm
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          description="Description de l'erreur"
          sm
        />
      </div>
    </div>
  `,
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <div style="margin: 1rem 0;">
        <DsfrAlert
          title="Titre de l'info"
          description="Description de l'info"
          :closed="closed[0]"
          closeable
          @close="close(0)"
          />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          description="Description de l'info"
          :closed="closed[1]"
          closeable
          @close="close(1)"
          sm
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          title="Titre du succès"
          description="Description du succès"
          :closed="closed[2]"
          @close="close(2)"
          closeable
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="success"
          description="Description du succès"
          :closed="closed[3]"
          @close="close(3)"
          closeable
          sm
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          title="Titre de l'erreur"
          description="Description de l'erreur"
          :closed="closed[4]"
          @close="close(4)"
          closeable
        />
      </div>
      <div style="margin: 1rem 0;">
        <DsfrAlert
          type="error"
          description="Description de l'erreur"
          :closed="closed[5]"
          @close="close(5)"
          closeable
          sm
        />
      </div>
    </div>
  `,

  methods: {
    close (idx) {
      this.closed[idx] = true
      this.onClose()
      setTimeout(() => { this.closed[idx] = false }, 3000)
    },
  },
})
AlertesFermables.args = {
  dark: false,
  title: 'Titre alerte',
  description: 'Description du message',
  type: 'error',
  size: 'medium',
}
