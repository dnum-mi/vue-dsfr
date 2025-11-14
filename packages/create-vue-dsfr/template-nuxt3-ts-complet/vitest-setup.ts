import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'

window.matchMedia = function () {
  return { matches: false } as MediaQueryList
}
