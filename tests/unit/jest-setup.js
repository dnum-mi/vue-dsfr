// import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'

jest.mock('oh-vue-icons/dist/v3/icon.es', () => ({ add () {}, template: '<span />' }))
jest.mock('oh-vue-icons/icons/ri/index.js', () => ({}))
