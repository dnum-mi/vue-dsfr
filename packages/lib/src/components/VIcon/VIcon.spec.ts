import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

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
})
