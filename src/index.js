import '@gouvfr/dsfr/dist/core/core.module.js'
import * as components from './components/index.js'
import VIcon from './icons.js'

export default {
  install: (app, options) => {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })

    app.component('VIcon', VIcon)
  },
}

export * from './components/index.js'
export * from './utils/random-utils.js'
export * from './composables.js'

export { VIcon }
