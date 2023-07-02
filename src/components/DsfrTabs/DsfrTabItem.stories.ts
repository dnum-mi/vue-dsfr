import { setup } from '@storybook/vue3'

import DsfrTabItem from './DsfrTabItem.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

setup(app => {
  app.component('VIcon', VIcon)
})

export default {
  component: DsfrTabItem,
  title: 'Composants/DsfrTabs',
  argTypes: {
    tabTitle: {
      control: 'object',
      description: 'Props de `DsfrTabItem` : Titre de l’onglet `DsfrTabItem` - **Obligatoire**',
    },
    panelId: {
      control: 'text',
      description: 'Props de `DsfrTabItem` et `DsfrTabContent` : Identifiant de l’élément correspondant au contenu de l’onglet à afficher ; doit être identique à la props `tab-id` du `DsfrTabItem` correspondant - **Obligatoire**',
    },
    tabId: {
      control: 'text',
      description: 'Props de `DsfrTabItem` et `DsfrTabContent` : Identifiant du titre de l’onglet ̛ ; doit être identique à la props `panel-id` du `DsfrTabContent` correspondant - **Obligatoire**',
    },
    icon: {
      control: 'text',
      description: 'Props de `DsfrTabItem` : Nom de l’icône à afficher',
    },
    selected: {
      control: 'boolean',
      description: 'Indique si le titre de cet onglet est celui qui est actif',
    },
    click: {
      description: 'Événement déclenché au clic sur le titre de l’onglet. Passe en argument l’événement natif \'click\' (dans lequel on peut récuperer l’élément dans la propriété `target` et l’id dans `target.id`)',
    },
    next: {
      description: 'Événement déclenché à la pression sur la touche Flèche droite ou Flèche bas si le focus est sur le bouton de ce titre d’onglet',
    },
    previous: {
      description: 'Événement déclenché à la pression sur la touche Flèche gauche ou Flèche haut si le focus est sur le bouton de ce titre d’onglet',
    },
    first: {
      description: 'Événement déclenché à la pression sur la touche `Début` (`Home`) si le focus est sur le bouton de ce titre d’onglet',
    },
    last: {
      description: 'Événement déclenché à la pression sur la touche `End` (`Fin`) si le focus est sur le bouton de ce titre d’onglet',
    },
  },
}

export const TitreDOnglet = (args) => ({
  components: {
    DsfrTabItem,
  },

  data () {
    return args
  },

  template: `
    <div class="fr-tabs" style="overflow: visible">
      <ul
        class="fr-tabs__list"
        role="tablist"
      >
        <DsfrTabItem
          :panel-id="panelId"
          :tab-id="tabId"
          :icon="icon"
          :selected="true"
        >
          {{ tabTitle }}
        </DsfrTabItem>
      </ul>
    </div>
  `,

})
TitreDOnglet.args = {
  panelId: 'tab-content-0',
  tabId: 'tab-0',
  icon: 'ri-checkbox-circle-line',
  tabTitle: 'Titre onglet seul',
}
