/**
 * Component resolver pour le plgin unplugin-vue-components pour les composants VueDsfr
 *
 * @function
 * @param {string} componentName - Nom du composant à chercher
 *
 * @returns {{ name: string, from: string } | undefined} Objet de retour pour le plugin unplugin-vue-components
 */
export const vueDsfrComponentResolver = (componentName) => {
  if (componentName.startsWith('Dsfr') || componentName === 'VIcon') {
    return {
      name: componentName,
      from: '@gouvminint/vue-dsfr',
    }
  }
}
