import { defineComponent } from 'vue'
import { app } from '@storybook/vue3'
import { FocusTrap } from 'focus-trap-vue'

import '../src/main.css'

import './theme.css'

import VIcon from '../src/icons.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Docs',
        // ['1. Introduction', '2. Guide d’utilisation', '3. Guide du développeur'],
        'Fondamentaux',
        'Composants',
        // [
        //   'Titres',
        //   'Titres Alternatifs',
        //   'Alertes',
        //   'Fil d’Ariane - Breadcrumb',
        //   'Logo Officiel - Official logo',
        //   'Boutons - Button',
        //   'Groupe de Boutons - ButtonGroup',
        //   'Champs de saisie - Input',
        //   'Case à cocher - Checkbox',
        //   'Boutons radio - Radio button',
        //   'Liste déroulante - Select',
        //   'Interrupteur - Toggle switch',
        //   'Étiquettes - Tags',
        // ],
        // 'Éléments',
        // [
        //   'Carte - Card',
        //   'Barre de recherche - Search bar',
        //   'En-tête - Header',
        //   'Lettres d’information et réseaux - Follow',
        //   'Pied de page - Footer',
        //   'Modale - Modal',
        //   'Onglets - Tabs', ['Onglets', 'Titre', 'Onglets'],
        //   'Table'
        // ],
      ],
    },
  }
}


const RouterLink = defineComponent({
  name: 'router-link',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
})

app.component('router-link', RouterLink);
app.component('VIcon', VIcon)
app.component('FocusTrap', FocusTrap)
