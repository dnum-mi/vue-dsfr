import type { DsfrButtonGroupProps, DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type { Page } from '../DsfrPagination/DsfrPagination.types'

export type DsfrDataTableRow = (string | number | boolean | bigint | symbol)[]
  | Record<string | symbol | number, unknown>

export type DsfrDataTableHeaderCellObject = { key: string, label: string, headerAttrs?: Record<string, unknown> }
export type DsfrDataTableHeaderCell = (string | DsfrDataTableHeaderCellObject)

export type DsfrDataTableCommonProps = {
  id?: string
  title: string
  rowKey?: string | number
  rows?: DsfrDataTableRow[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  selectableRows?: boolean
  sortableRows?: boolean | string[]
  sorted?: string
  sortFn?: (a: unknown, b: unknown) => number
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
 * Mutuellement exclusif : soit `columns` (et `headersRow` interdit),
 * soit `headersRow` (et `columns` interdit).
 */
export type DsfrDataTableProps =
  | (DsfrDataTableCommonProps & { columns: DsfrDataTableColumn[], headersRow?: never })
  | (DsfrDataTableCommonProps & { headersRow?: DsfrDataTableHeaderCell[], columns?: never })

/**
 * Décrit une colonne du tableau.
 * key: identifiant de la colonne (optionnel, sera dérivé si absent)
 * label: texte affiché dans l'en-tête
 * isHeader: true si les cellules de cette colonne doivent être rendues en tant qu'en-têtes de ligne (<th scope="row">)
 */
export interface DsfrDataTableColumn {
  key?: string
  label: string
  attrs?: Record<string, unknown>
  isHeader?: boolean
}
