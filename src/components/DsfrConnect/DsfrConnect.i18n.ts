import type { DsfrConnectI18n, DsfrConnectI18nKey } from './DsfrConnect.types'

// NOTE: Les traductions sont intentionnellement conservées en TypeScript plutôt qu'en fichiers YAML.
// Des fichiers YAML nécessiteraient un plugin Vite supplémentaire (@rollup/plugin-yaml) que les
// consumers de la lib devraient également configurer, et feraient perdre le typage natif TypeScript.
// Si la lib adopte un jour vue-i18n à l'échelle globale, migrer vers des fichiers YAML par langue
// (fr.yml, en.yml…) serait alors cohérent.
export const connectI18n: Record<string, Record<DsfrConnectI18nKey, DsfrConnectI18n>> = {
  fr: {
    default: { logotext: 'S’identifier avec', text: 'Qu\'est-ce que FranceConnect ?', newWindow: '- nouvelle fenêtre' },
    plus: { logotext: 'S’identifier avec', text: 'Qu\'est-ce que FranceConnect+ ?', newWindow: '- nouvelle fenêtre' },
    pro: { logotext: 'S’identifier avec', text: 'Qu\'est-ce que FranceConnect Pro ?', newWindow: '- nouvelle fenêtre' },
  },
  en: {
    default: { logotext: 'Sign in with', text: 'What is FranceConnect?', newWindow: '- new window' },
    plus: { logotext: 'Sign in with', text: 'What is FranceConnect+?', newWindow: '- new window' },
    pro: { logotext: 'Sign in with', text: 'What is FranceConnect Pro?', newWindow: '- new window' },
  },
  es: {
    default: { logotext: 'Iniciar sesión con', text: '¿Qué es FranceConnect?', newWindow: '- nueva ventana' },
    plus: { logotext: 'Iniciar sesión con', text: '¿Qué es FranceConnect+?', newWindow: '- nueva ventana' },
    pro: { logotext: 'Iniciar sesión con', text: '¿Qué es FranceConnect Pro?', newWindow: '- nueva ventana' },
  },
  de: {
    default: { logotext: 'Einloggen mit', text: 'Was ist FranceConnect?', newWindow: '- neues Fenster' },
    plus: { logotext: 'Einloggen mit', text: 'Was ist FranceConnect+?', newWindow: '- neues Fenster' },
    pro: { logotext: 'Einloggen mit', text: 'Was ist FranceConnect Pro?', newWindow: '- neues Fenster' },
  },
}
