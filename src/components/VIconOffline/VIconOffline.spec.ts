import type { IconifyJSON } from '@iconify/vue'

import { renderToString } from '@vue/server-renderer'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, h } from 'vue'

import { createVueDsfrIconPlugin } from '../../vue-dsfr-icon-plugin'

import VIconOffline from './VIconOffline.vue'

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

function renderIcon (name: string, properties: { label?: string, title?: string } = {}) {
  const application = createSSRApp({
    render: () => h(VIconOffline, { name, ...properties }),
  })

  application.use(createVueDsfrIconPlugin(collections))
  return renderToString(application)
}

describe('VIconOffline', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('rend le SVG avec les données locales pendant le SSR', async () => {
    const html = await renderIcon('ri:flag-line', { label: 'Drapeau' })

    expect(html).toContain('<svg')
    expect(html).toContain('<path d="M3 3h18v18H3z"')
    expect(html).toContain('aria-label="Drapeau"')
    expect(html).not.toContain('aria-hidden')
  })

  it('utilise le titre comme nom accessible si aucun libellé n’est fourni', async () => {
    const html = await renderIcon('ri:flag-line', { title: 'Drapeau français' })

    expect(html).toContain('aria-label="Drapeau français"')
    expect(html).not.toContain('aria-hidden')
  })

  it('n’effectue aucun appel réseau pendant le rendu SSR', async () => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)

    await renderIcon('ri:flag-line')

    expect(fetch).not.toHaveBeenCalled()
  })

  it('ne rend rien si l’icône n’est pas fournie par les collections locales', async () => {
    const html = await renderIcon('ri:missing-icon')

    expect(html).not.toContain('<svg')
  })
})
