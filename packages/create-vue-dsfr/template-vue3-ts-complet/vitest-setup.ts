// setupTests.ts
import '@testing-library/jest-dom/vitest'

window.matchMedia = function () {
  return { matches: false }
}
