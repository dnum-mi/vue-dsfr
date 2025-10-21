import type { Preview } from '@storybook/vue3-vite'

import { setup } from '@storybook/vue3-vite'
import { FocusTrap } from 'focus-trap-vue'
import { themes } from 'storybook/theming'
import { defineComponent } from 'vue'

import VIcon from '../src/components/VIcon/VIcon.vue'

import VueDsfrTheme from './vue-dsfr-theme.js'
import '../src/assets/variables-fdr.css'
import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/component/component.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css'

import '../src/main.css'

import './theme.css'
// import '@gouvfr/dsfr/dist/core/core.min.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      disabled: true,
    },
    docs: {
      theme: { ...themes.normal, ...VueDsfrTheme },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        DSFR_XS: {
          name: 'DSFR XS',
          styles: {
            width: '320px',
            height: '768px',
          },
        },
        DSFR_SM: {
          name: 'DSFR SM',
          styles: {
            width: '576px',
            height: '1024px',
          },
        },
        DSFR_MD: {
          name: 'DSFR MD',
          styles: {
            width: '768px',
            height: '1200px',
          },
        },
        DSFR_LG: {
          name: 'DSFR LG',
          styles: {
            width: '992px',
            height: '1600px',
          },
        },
        DSFR_XL: {
          name: 'DSFR XL',
          styles: {
            width: '1440px',
            height: '1900px',
          },
        },
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Docs',
          'Fondamentaux',
          'Composables',
          'Composants',
        ],
      },
    },
  },

  tags: ['autodocs'],

  // Gestion des thèmes clair et sombre des stories
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Thème',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['Thème clair', 'Thème sombre'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'Thème clair',
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme.includes('clair') ? 'light' : 'dark'
      document.documentElement.setAttribute('data-fr-theme', selectedTheme)
      return story()
    },
  ],
}

const RouterLink = defineComponent({
  name: 'RouterLink',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
})

setup(app => {
  app.component('RouterLink', RouterLink)
  app.component('VIcon', VIcon)
  app.component('FocusTrap', FocusTrap)
})

export default preview
