// Component resolver for the unplugin-vue-components plugin for VueDsfr components
export const vueDsfrComponentResolver = (componentName: string): { name: string, from: string } | undefined => {
  if (componentName.startsWith('Dsfr') || componentName === 'VIcon') {
    return {
      name: componentName,
      from: '@gouvminint/vue-dsfr',
    }
  }
}
