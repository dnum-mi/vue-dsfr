import * as components from './components/index.js'
import VIcon from './icons.js'

export default {
  install: (app, options) => {
    Object.values(components).forEach(component => {
      app.component(component.name, component)
    })
    app.component('VIcon', VIcon)
  },
}

export * from './components/index.js'

export { VIcon }
