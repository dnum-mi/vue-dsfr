import type { IconifyIcon, IconifyJSON } from '@iconify/vue'

/**
 * Résout une icône `prefix:nom` ou `prefix-nom` depuis des collections Iconify locales.
 *
 * Les deux formats sont acceptés pour rester cohérent avec `@iconify/vue`, qui accepte
 * lui aussi la syntaxe `prefix-nom` (utilisée notamment par `DsfrButton`, `DsfrTag`, etc.).
 *
 * Retourne `null` si le nom est mal formé ou si l’icône n’est présente
 * dans aucune des collections fournies.
 */
export function resolveOfflineIcon (name: string, collections: readonly IconifyJSON[]): IconifyIcon | null {
  const parsedName = parseIconName(name)
  if (!parsedName) {
    return null
  }

  const collection = collections.find(item => item.prefix === parsedName.prefix)
  const iconData = collection?.icons[parsedName.name]

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

function parseIconName (name: string): { name: string, prefix: string } | null {
  const colonIndex = name.indexOf(':')
  if (colonIndex > 0 && colonIndex < name.length - 1) {
    return {
      name: name.slice(colonIndex + 1),
      prefix: name.slice(0, colonIndex),
    }
  }

  const hyphenIndex = name.indexOf('-')
  if (hyphenIndex > 0 && hyphenIndex < name.length - 1) {
    return {
      name: name.slice(hyphenIndex + 1),
      prefix: name.slice(0, hyphenIndex),
    }
  }

  return null
}
