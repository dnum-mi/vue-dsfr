import * as components from './components/index.js'
import './main.css'

export default {
  install: (app, options) => {
    Object.values(components).forEach(component => {
      app.component(component.name, component)
    })
  },
}
