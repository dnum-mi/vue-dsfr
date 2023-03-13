import * as jest from "@storybook/jest"
import { defineComponent } from 'vue'
import { setup } from '@storybook/vue3'
import { FocusTrap } from 'focus-trap-vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import '../src/assets/variables-fdr.css'
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css'

import './theme.css'

import {OhVueIcon as VIcon} from 'oh-vue-icons'

window.jest = jest

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {name: 'black', value: '#000'},
      {name: 'dark', value: '#222'},
      {name: 'light', value: '#eee'},
      {name: 'white', value: '#fff'},
    ]
  },
  viewport: {
    viewports: {
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
    }
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
  }
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
  app.component('RouterLink', RouterLink);
  app.component('VIcon', VIcon)
  app.component('FocusTrap', FocusTrap)
})
