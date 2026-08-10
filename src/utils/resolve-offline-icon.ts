import type { IconifyIcon, IconifyJSON } from '@iconify/vue'

/**
 * Résout une icône `prefix:nom` depuis des collections Iconify locales.
 *
 * Retourne `null` si le nom est mal formé ou si l’icône n’est présente
 * dans aucune des collections fournies.
 */
export function resolveOfflineIcon (name: string, collections: readonly IconifyJSON[]): IconifyIcon | null {
  const separatorIndex = name.indexOf(':')
  if (separatorIndex <= 0 || separatorIndex === name.length - 1) {
    return null
  }

  const prefix = name.slice(0, separatorIndex)
  const iconName = name.slice(separatorIndex + 1)
  const collection = collections.find(item => item.prefix === prefix)
  const iconData = collection?.icons[iconName]

  if (!collection || !iconData) {
    return null
  }

  return {
    ...iconData,
    height: iconData.height ?? collection.height,
    left: iconData.left ?? collection.left ?? 0,
    top: iconData.top ?? collection.top ?? 0,
    width: iconData.width ?? collection.width,
  }
}
