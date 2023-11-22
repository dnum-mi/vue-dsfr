import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import VueDsfrTheme from './vue-dsfr-theme.js'

addons.setConfig({
  theme: { ...themes.normal, ...VueDsfrTheme },
})
