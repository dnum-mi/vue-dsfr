import '../src/assets/variables-dsfr.css'
import '../src/assets/fonts-dsfr.css'
import '../src/assets/reset-dsfr.css'
import '../src/assets/utils-dsfr.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
