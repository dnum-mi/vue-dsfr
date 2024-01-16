import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'
import { hmrFix } from './plugins/hmrFix.js'

const minimalToc = [
  {
    text: 'Guide',
    items: []
  },
  {
    text: 'Tous les types',
    link: '/types',
    items: [],
  },
  {
    text: 'Tous les composants',
    link: '/composants',
    items: [],
  },
  {
    text: 'Tous les composables',
    link: '/composables',
    items: [],
  },
  {
    text: 'Recettes nuxt',
    link: '/nuxt/',
  },
]

const guideItems = [
  {
    text: 'Introduction',
    link: '/guide/',
  },
  {
    text: 'Commencer',
    link: '/guide/pour-commencer',
  },
  {
    text: 'L’écosystème',
    link: '/guide/ecosysteme',
  },
  {
    text: 'Les icônes',
    link: '/guide/icones',
  },
  {
    text: 'Guide du développeur',
    link: '/guide/guide-developpeur',
  },
]

const composables = [
  {
    text: 'useScheme',
    link: '/composables/useScheme.md',
  },
  {
    text: 'useTabs',
    link: '/composables/useTabs.md',
  },
]
const composants = [
  {
    text: 'DsfrAccordion',
    link: '/composants/DsfrAccordion.md',
  },
  {
    text: 'DsfrAlert',
    link: '/composants/DsfrAlert.md',
  },
  {
    text: 'DsfrBackToTop',
    link: '/composants/DsfrBackToTop.md',
  },
  {
    text: 'DsfrBadge',
    link: '/composants/DsfrBadge.md',
  },
  {
    text: 'DsfrBreadcrumb',
    link: '/composants/DsfrBreadcrumb.md',
  },
  {
    text: 'DsfrButton',
    link: '/composants/DsfrButton.md',
  },
  {
    text: 'DsfrButtonGroup',
    link: '/composants/DsfrButtonGroup.md',
  },
  {
    text: 'DsfrCard',
    link: '/composants/DsfrCard.md',
  },
  {
    text: 'DsfrConsent',
    link: '/composants/DsfrConsent.md',
  },
  {
    text: 'DsfrFieldset',
    link: '/composants/DsfrFieldset.md',
  },
  {
    text: 'DsfrRange',
    link: '/composants/DsfrRange.md',
  },
  {
    text: 'DsfrNotice',
    link: '/composants/DsfrNotice.md',
  },
  {
    text: 'DsfrSegmented',
    link: '/composants/DsfrSegmented.md',
  },
  {
    text: 'DsfrSegmentedSet',
    link: '/composants/DsfrSegmentedSet.md',
  },
  {
    text: 'DsfrTabs',
    link: '/composants/DsfrTabs.md',
  },
  {
    text: 'DsfrTag',
    link: '/composants/DsfrTag.md',
  },
  {
    text: 'DsfrTooltip',
    link: '/composants/DsfrTooltip.md',
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueDsfr",
  description: "Une documentation pour les utilisateurs de VueDsfr",

  cleanUrls: true,
  appearance: { listenToStorageChanges: false }, // handling this in Story.vue itself to avoid flickering

  rewrites: {
    'src/composables/:comp': 'composables/:comp',
    'src/components/DsfrButton/DsfrButtonGroup.md': 'composants/DsfrButtonGroup.md',
    'src/components/DsfrSegmented/DsfrSegmentedSet.md': 'composants/DsfrSegmentedSet.md',
    'src/components/:comp/:comp.md': 'composants/:comp.md',
    'docs/:splat*': ':splat*',
  },

  themeConfig: {
    docFooter: {
      next: 'Page suivante',
      prev: 'Page précédente',
    },
    darkModeSwitchLabel: 'Apparence',
    darkModeSwitchTitle: 'Passer en mode sombre',
    lightModeSwitchTitle: 'Passer en mode clair',
    logo: '/nouveau-logo-marianne-gouvernement.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide/pour-commencer',
      },
      {
        text: 'Références',
        items: [
          { text: 'Tous les composants', link: '/composants' },
          { text: 'Tous les composables', link: '/composables' },
          { text: 'Tous les types', link: '/types' }
        ],
      },
      {
        text: 'Liens',
        items: [
          {
            text: 'Système de Design Français',
            link: 'https://www.systeme-de-design.gouv.fr/',
            target: '_blank'
          },
          {
            text: 'Storybook de VueDsfr',
            link: 'https://vue-ds.fr/',
            target: '_blank'
          },
        ],
      },
    ],
    outline:{
      level: [2, 3],
      label: 'Sur cette page :',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher...',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            backButtonTitle: 'effacer la recherche',
            displayDetails: 'afficher les détails',
            noResultsText: 'Aucun résultat pour ',
            resetButtonTitle: 'resetButtonTitle',
            footer: {
              selectText: 'aller à ce texte',
              navigateText: 'naviguer dans les résultats',
              closeText: 'fermer'
            },
          },
        },
      }
    },
    sidebar: {
      '/composants': minimalToc.map(item => item.text === 'Tous les composants' ? { ...item, items: composants } : item),
      '/composables': minimalToc.map(item => item.text === 'Tous les composables' ? { ...item, items: composables } : item),
      '/': minimalToc.map(item => item.text === 'Guide' ? { ...item, items: guideItems } : item),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dnum-mi/vue-dsfr' },
      { icon: 'discord', link: 'https://discord.gg/jbBJ9769ZZ' },
    ]
  },

  vite: {
    plugins: [
      whyframe({ defaultSrc: '/_frame', components: [{ name: 'Story' }] }),
      whyframeVue({ include: /\.(vue|md)$/ }),
      hmrFix(),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../src', import.meta.url)),
      },
    },

    // not needed, just there to prevent reload on cold start
    optimizeDeps: {
      include: [
        '@vueuse/core',
      ],
    },
  },
})
