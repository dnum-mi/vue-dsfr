import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Story from './Story.vue'
import Icon from './Icon.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
    app.component('Story', Story)
  }
} satisfies Theme
