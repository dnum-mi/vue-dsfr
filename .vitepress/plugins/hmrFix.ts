import { fileURLToPath } from 'node:url'
import fullReload from 'vite-plugin-full-reload'
import type { Plugin } from 'vitepress'

const styles = fileURLToPath(
  new URL('../../src/styles/index.css', import.meta.url)
)

export const hmrFix = () => {
  return [
    {
      name: 'tw:hmr-fix',
      async handleHotUpdate({ file, modules, server }) {
        if (/[\\/]src[\\/].*\.vue$/.test(file)) {
          return [
            ...modules,
            ...(server.moduleGraph.getModulesByFile(styles) || [])
          ]
        }
      }
    } satisfies Plugin,
    fullReload(['./docs/_frame.md'])
  ]
}
