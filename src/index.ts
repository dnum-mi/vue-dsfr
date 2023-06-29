import { addIcons, OhVueIcon, type CustomizeIconType } from 'oh-vue-icons'
import * as vueDsfrComponents from './components/index.js'
import * as defaultIcons from './icons.js'
import type { App, Component } from 'vue'

export type VueDsfrPluginOptions = {
  icons?: CustomizeIconType[]
  components?: 'all' | Component[]
}

export default {
  install: (app: App, { icons: ovicons, components }: VueDsfrPluginOptions = {}) => {
    Object.entries(vueDsfrComponents).forEach(([componentName, component]) => {
      if (components === undefined || components === 'all' || components.map(({ name }) => name).includes(componentName)) {
        app.component(componentName, component)
      }
    })
    addIcons(...Object.values(defaultIcons))
    if (ovicons) {
      addIcons(...ovicons)
    }
    app.component('VIcon', OhVueIcon)
  },
}

export * from './components/index.js'
export * from './utils/random-utils'
export * from './composables.js'
export * as icons from './icons.js'
