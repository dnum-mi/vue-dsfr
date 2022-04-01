// import './init-dsfr.js'
// import '@gouvfr/dsfr/dist/core/core.module.js'
import * as components from './components/index.js'
import { OhVueIcon } from 'oh-vue-icons'
import './icons.js'

export default {
  install: (app, options) => {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })

    app.component('VIcon', OhVueIcon)
  },
}

export * from './components/index.js'
export * from './utils/random-utils.js'
export * from './composables.js'
