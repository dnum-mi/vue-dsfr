import * as components from './components/index.js'
import './main.css'
import './assets/fonts-dsfr.css'

export default {
  install: (app, options) => {
    Object.values(components).forEach(component => {
      app.component(component.name, component)
    })
  },
}

export * from './components/index.js'
