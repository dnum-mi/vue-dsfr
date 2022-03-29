// import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import './init-dsfr.js'
import '@gouvfr/dsfr/dist/core/core.module.js'

jest.mock('oh-vue-icons', () => ({ add () {}, template: '<span />' }))
jest.mock('oh-vue-icons/icons/ri/index.js', () => ({}))
