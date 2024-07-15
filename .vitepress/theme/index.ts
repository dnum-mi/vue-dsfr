import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'
import { RouterLink } from 'vue-router'

import Story from './Story.vue'
import AppColors from './AppColors.vue'
import AppIcons from './AppIcons.vue'
import VIconLink from './VIconLink.vue'
import * as vpIcons from './icons'

import './official-icons.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.main.css'
import './style.css'

addIcons(...Object.values(vpIcons))

export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    app.component('VIcon', VIcon)
    app.component('VIconLink', VIconLink)
    app.component('Story', Story)
    app.component('RouterLink', RouterLink)
    app.component('AppColors', AppColors)
    app.component('AppIcons', AppIcons)
  },
} satisfies Theme
