import { addIcons, OhVueIcon, type CustomizeIconType } from 'oh-vue-icons'
import * as components from './components/index.js'
import * as defaultIcons from './icons.js'

export default {
  install: (app, { icons }: { icons?: CustomizeIconType[] } = {}) => {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
    addIcons(...Object.values(defaultIcons))
    if (icons) {
      addIcons(...icons)
    }
    app.component('VIcon', OhVueIcon)
  },
}

export * from './components/index.js'
export * from './utils/random-utils'
export * from './composables.js'
export * as icons from './icons.js'