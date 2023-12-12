// Component resolver for the unplugin-vue-components plugin for VueDsfr components
export const vueDsfrComponentResolver = (componentName: string): { name: string, from: string } | undefined => {
  if (componentName === 'VIcon' || componentName === 'OhVueIcon') {
    return {
      name: 'OhVueIcon',
      from: 'oh-vue-icons',
    }
  }

  if (componentName.startsWith('Dsfr')) {
    return {
      name: componentName,
      from: '@gouvminint/vue-dsfr',
    }
  }
}
