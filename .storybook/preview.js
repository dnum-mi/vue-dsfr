import { defineComponent } from 'vue'
import { setup } from '@storybook/vue3'
import { FocusTrap } from 'focus-trap-vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import '../src/assets/variables-fdr.css'
import '../src/main.css'

import './theme.css'

import {OhVueIcon as VIcon} from 'oh-vue-icons'

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
