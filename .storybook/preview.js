import { defineComponent } from 'vue'
import { app } from '@storybook/vue3'

import '../src/assets/variables-dsfr.css'
import '../src/assets/fonts-dsfr.css'
import '../src/assets/reset-dsfr.css'
import '../src/assets/objects-dsfr.css'
import '../src/assets/utils-dsfr.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
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
