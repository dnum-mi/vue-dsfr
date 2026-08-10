import type { IconifyJSON } from '@iconify/vue'

import { renderToString } from '@vue/server-renderer'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, h } from 'vue'

import { createVueDsfrIconPlugin } from '../../vue-dsfr-icon-plugin'

import VIcon from './VIcon.vue'

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

function renderIcon (props: Record<string, unknown>, preferOffline = true) {
  const application = createSSRApp({
    render: () => h(VIcon, props),
  })

  application.use(createVueDsfrIconPlugin(collections, { preferOffline }))
  return renderToString(application)
}

describe('VIcon (résolution offline en SSR)', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('rend le SVG résolu localement dès le SSR, même avec ssr=true', async () => {
    const html = await renderIcon({ name: 'ri:flag-line', ssr: true })

    expect(html).toContain('<svg')
    expect(html).toContain('<path d="M3 3h18v18H3z"')
    expect(html).not.toContain('vicon-loading')
  })

  it('rend le SVG résolu localement pour le format prefix-nom utilisé par DsfrButton/DsfrTag/etc.', async () => {
    const html = await renderIcon({ name: 'ri-flag-line', ssr: true })

    expect(html).toContain('<svg')
    expect(html).toContain('<path d="M3 3h18v18H3z"')
    expect(html).not.toContain('vicon-loading')
  })

  it('n’effectue aucun appel réseau pour une icône résolue localement', async () => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)

    await renderIcon({ name: 'ri:flag-line', ssr: true })

    expect(fetch).not.toHaveBeenCalled()
  })

  it('retombe sur le placeholder ssr si l’icône est absente des collections locales', async () => {
    const html = await renderIcon({ name: 'ri:missing-icon', ssr: true })

    expect(html).toContain('vicon-loading')
  })

  it('retombe sur le placeholder ssr si preferOffline n’est pas activé', async () => {
    const html = await renderIcon({ name: 'ri:flag-line', ssr: true }, false)

    expect(html).toContain('vicon-loading')
  })
})
