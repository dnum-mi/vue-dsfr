import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import { config } from '@vue/test-utils'
import {
  VueRouterMock,
  createRouterMock,
  injectRouterMock,
} from 'vue-router-mock'

jest.mock('oh-vue-icons/dist/v3/icon.es', () => ({ add () {}, template: '<span />' }))
jest.mock('oh-vue-icons/icons/ri/index.js', () => ({}))

// create one router per test file
const router = createRouterMock()
beforeEach(() => {
  injectRouterMock(router)
})

// Add properties to the wrapper
config.plugins.VueWrapper.install(VueRouterMock)
