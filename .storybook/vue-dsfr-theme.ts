import { create } from '@storybook/theming'
import brandImage from '../src/assets/icone-marianne-seule.png'

export default create({
  base: 'light',

  colorPrimary: '#000091',
  colorSecondary: '#000091',

  // UI
  appBg: '#f0f0f0',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Marianne", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#3a3a3a',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#000091',
  barSelectedColor: '#000091',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#3a3a3a',
  inputBorderRadius: 4,

  brandTitle: 'Vue DSFR',
  brandUrl: 'https://vue-dsfr.netlify.app',
  brandImage,
});
