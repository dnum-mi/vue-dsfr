import type { Preview } from "@storybook/vue3"
import { themes } from '@storybook/theming'
import { withThemeByDataAttribute } from "@storybook/addon-styling"

import VueDsfrTheme from './vue-dsfr-theme.js'
import '../src/assets/variables-fdr.css'
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css'

import '../src/main.css'

import './theme.css'
// import '@gouvfr/dsfr/dist/core/core.min.css'

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Clair: 'light',
      Sombre: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-fr-theme',
  })
]

const preview: Preview = {
  parameters: {
    docs: {
      theme: { ...themes.normal, ...VueDsfrTheme },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        DSFR_XS: {
          name: 'DSFR XS',
          styles: {
            width: '320px',
            height: '768px',
          },
        },
        DSFR_SM: {
          name: 'DSFR SM',
          styles: {
            width: '576px',
            height: '1024px',
          },
        },
        DSFR_MD: {
          name: 'DSFR MD',
          styles: {
            width: '768px',
            height: '1200px',
          },
        },
        DSFR_LG: {
          name: 'DSFR LG',
          styles: {
            width: '992px',
            height: '1600px',
          },
        },
        DSFR_XL: {
          name: 'DSFR XL',
          styles: {
            width: '1440px',
            height: '1900px',
          },
        },
      }
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Docs',
          'Fondamentaux',
          'Composables',
          'Composants',
        ],
      },
    },
  },
}

export default preview;
