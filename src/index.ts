import * as vueDsfrComponents from './components/index.js'
import type { App, Component } from 'vue'
import VIcon from './components/VIcon/VIcon.vue'

export type VueDsfrPluginOptions = {
  components?: 'all' | Component[]
}

export default {
  install: (app: App, { components }: VueDsfrPluginOptions = {}) => {
    Object.entries(vueDsfrComponents).forEach(([componentName, component]) => {
      if (components === undefined || components === 'all' || components.map(({ name }) => name).includes(componentName)) {
        app.component(componentName, component)
      }
    })
    app.component('VIcon', VIcon)
  },
}

export * from './components/index.js'
export * from './utils/random-utils'
export * from './composables/index'
export * from './meta/index'
export * from './common-types.js'
