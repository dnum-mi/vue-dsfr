import type { DsfrButtonGroupProps, DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type { Page } from '../DsfrPagination/DsfrPagination.types'

export type DsfrDataTableRow = (string | number | boolean | bigint | symbol)[]
  | Record<string | symbol | number, unknown>

export type DsfrDataTableHeaderCellObject = { key: string | number, label: string, headerAttrs?: Record<string, unknown> }
export type DsfrDataTableHeaderCell = (string | DsfrDataTableHeaderCellObject)

/**
 * Contrainte acceptée pour une ligne du tableau : un tableau de valeurs ou n’importe quel objet.
 * `object` (et non `Record<…, unknown>`) permet d’utiliser une `interface` métier,
 * qui n’a pas de signature d’index implicite.
 */
export type DsfrDataTableRowConstraint = DsfrDataTableRow | object

export type DsfrDataTableCommonProps<T extends DsfrDataTableRowConstraint = DsfrDataTableRow> = {
  id?: string
  title: string
  rowKey?: string | number
  rows?: T[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  selectableRows?: boolean
  sortableRows?: boolean | string[]
  sorted?: string
  sortFn?: (a: T, b: T) => number
  manualSort?: boolean
  copyableCells?: boolean
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  captionDetail?: string
  multilineTable?: boolean
  noScroll?: boolean
  size?: 'sm' | 'md' | 'lg'
  topBarDetail?: string
  topBarButtons?: Omit<DsfrButtonProps, 'tertiary'>[]
  topBarButtonsSize?: DsfrButtonGroupProps['size']
  pages?: Page[]
  pagination?: boolean
  paginationOptions?: number[]
  paginationAriaLabel?: string
  paginationSelectLabel?: string
  currentPage?: number
  rowsPerPage?: number
  bottomActionBarClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  paginationWrapperClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  bottomBarDetail?: string
  bottomBarButtons?: DsfrButtonProps[]
  bottomBarButtonsSize?: DsfrButtonGroupProps['size']
}

/**
 * `columns` et `headersRow` sont mutuellement exclusifs : fournir les deux
 * à la fois déclenche une erreur à l'exécution (voir DsfrDataTable.vue).
 *
 * Note : l'exclusivité n'est pas exprimée par une union de types
 * (`{ columns: T, headersRow?: never } | { headersRow: T, columns?: never }`)
 * car ce pattern empêche vue-tsc d'extraire les props de `defineProps<DsfrDataTableProps>()`,
 * qui retombe alors sur `Record<string, any>` (aucune prop vérifiée, y compris `title`).
 */
export interface DsfrDataTableProps<T extends DsfrDataTableRowConstraint = DsfrDataTableRow> extends DsfrDataTableCommonProps<T> {
  columns?: DsfrDataTableColumn[]
  headersRow?: DsfrDataTableHeaderCell[]
}

/**
 * Décrit une colonne du tableau.
 * key: identifiant de la colonne (optionnel, sera dérivé si absent)
 * label: texte affiché dans l'en-tête
 * fixed: active le mode colonne fixe.
 *   - `true` => classe `fr-cell--fixed`
 *   - `sm` | `md` | `lg` => classe `fr-cell--fixed@{breakpoint}`
 * isHeader: true si les cellules de cette colonne doivent être rendues en tant qu'en-têtes de ligne (<th scope="row">)
 */
export interface DsfrDataTableColumn {
  key?: string
  label: string
  attrs?: Record<string, unknown>
  fixed?: boolean | 'sm' | 'md' | 'lg'
  isHeader?: boolean
}
