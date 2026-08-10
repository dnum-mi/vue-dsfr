import type { IconifyJSON } from '@iconify/vue'

import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { vueDsfrIconCollectionsKey, vueDsfrPreferOfflineIconsKey } from '../VIconOffline/injection-key'

import VIcon from './VIcon.vue'

// Mock du composant Icon d'Iconify
vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'MockedIcon',
    props: ['icon', 'ssr', 'style', 'aria-label', 'flip'],
    template: '<svg v-bind="$attrs"><title>Mocked Icon</title></svg>',
    inheritAttrs: false,
  },
}))

describe('VIcon', () => {
  beforeEach(() => {
    vi.mock('@iconify/vue', () => ({
      Icon: {
        name: 'MockedIcon',
        props: ['icon', 'ssr', 'style', 'aria-label', 'flip'],
        template: '<div data-testid="mocked-icon"></div>',
      },
    }))
  })

  describe('Gestion de l\'hydratation', () => {
    it('devrait afficher un fallback pendant l\'hydratation quand ssr=true', async () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          ssr: true,
        },
      })

      // Au début, devrait afficher le fallback car le composant n'est pas encore monté
      expect(wrapper.find('.vicon-loading').exists()).toBe(true)
      expect(wrapper.find('.vicon-loading').text()).toBe('⏳')

      // Déclencher onMounted en simulant le cycle de vie
      await flushPromises()

      // Après onMounted, devrait afficher l'icône réelle
      expect(wrapper.findComponent({ name: 'MockedIcon' }).exists()).toBe(true)
      expect(wrapper.find('.vicon-loading').exists()).toBe(false)
    })

    it('devrait afficher l\'icône immédiatement quand ssr=false', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          ssr: false, // défaut
        },
      })

      // Devrait afficher l'icône directement, pas de fallback
      expect(wrapper.findComponent({ name: 'MockedIcon' }).exists()).toBe(true)
    })

    it('devrait utiliser ssr=false par défaut', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
        },
      })

      // Devrait afficher l'icône directement avec ssr=false par défaut
      expect(wrapper.find('.vicon-loading').exists()).toBe(false)
      expect(wrapper.findComponent({ name: 'MockedIcon' }).exists()).toBe(true)
    })

    it('devrait passer les bonnes props au composant Icon', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          scale: 2,
          color: 'red',
          label: 'Home icon',
          flip: 'horizontal',
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      expect(iconComponent.exists()).toBe(true)

      const iconProps = iconComponent.props()
      expect(iconProps.icon).toBe('ri:home-line')

      // L'aria-label est transformé en ariaLabel dans les props Vue
      expect(iconProps.ariaLabel).toBe('Home icon')
      expect(iconProps.flip).toBe('horizontal')
    })

    it('devrait appliquer les styles calculés correctement', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          scale: 1.5,
          color: 'blue',
          verticalAlign: '-0.1em',
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      const style = iconComponent.props('style')

      expect(style.fontSize).toBe(`${1.5 * 1.2}rem`)
      expect(style.color).toBe('blue')
      expect(style.verticalAlign).toBe('-0.1em')
    })

    it('devrait gérer la transformation des noms d\'icônes vi-*', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'vi-file-icons',
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      expect(iconComponent.props('icon')).toBe('vscode-icons:file-icons')
    })
  })

  describe('Accessibilité', () => {
    it('devrait préserver l\'accessibilité avec aria-label', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          label: 'Accueil',
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      const iconProps = iconComponent.props()

      // L'aria-label est transformé en ariaLabel dans les props Vue
      expect(iconProps.ariaLabel).toBe('Accueil')
    })

    it('devrait avoir les attributs d\'accessibilité sur le fallback', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:home-line',
          label: 'Accueil',
          ssr: true,
        },
      })

      const fallback = wrapper.find('.vicon-loading')
      expect(fallback.attributes('aria-label')).toBe('Accueil')
      expect(fallback.attributes('role')).toBe('img')
    })
  })

  describe('Résolution offline (option globale preferOffline)', () => {
    const collections: IconifyJSON[] = [{
      height: 24,
      icons: {
        'flag-line': {
          body: '<path d="M3 3h18v18H3z" />',
        },
      },
      prefix: 'ri',
      width: 24,
    }]

    it('résout l\'icône depuis les collections locales quand preferOffline est actif', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:flag-line',
        },
        global: {
          provide: {
            [vueDsfrIconCollectionsKey as symbol]: collections,
            [vueDsfrPreferOfflineIconsKey as symbol]: true,
          },
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      expect(iconComponent.props('icon')).toEqual({
        body: '<path d="M3 3h18v18H3z" />',
        height: 24,
        left: 0,
        top: 0,
        width: 24,
      })
    })

    it('retombe silencieusement sur le nom de l\'icône si elle est absente des collections locales', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:missing-icon',
        },
        global: {
          provide: {
            [vueDsfrIconCollectionsKey as symbol]: collections,
            [vueDsfrPreferOfflineIconsKey as symbol]: true,
          },
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      expect(iconComponent.props('icon')).toBe('ri:missing-icon')
    })

    it('utilise le nom de l\'icône quand preferOffline n\'est pas actif, même si des collections sont fournies', () => {
      const wrapper = mount(VIcon, {
        props: {
          name: 'ri:flag-line',
        },
        global: {
          provide: {
            [vueDsfrIconCollectionsKey as symbol]: collections,
          },
        },
      })

      const iconComponent = wrapper.findComponent({ name: 'MockedIcon' })
      expect(iconComponent.props('icon')).toBe('ri:flag-line')
    })
  })
})
