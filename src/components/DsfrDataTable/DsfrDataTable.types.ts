import type { Page } from '../DsfrPagination/DsfrPagination.types'

export type DsfrDataTableRow = (string | number | boolean | bigint | symbol)[]
  | Record<string | symbol | number, unknown>

export type DsfrDataTableHeaderCellObject = { key: string, label: string, headerAttrs?: Record<string, unknown> }
export type DsfrDataTableHeaderCell = (string | DsfrDataTableHeaderCellObject)

export type DsfrDataTableProps = {
  id?: string
  title: string
  rowKey?: string | number
  headersRow: DsfrDataTableHeaderCell[]
  rows: DsfrDataTableRow[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  selectableRows?: boolean
  sortableRows?: boolean
  sorted: string
  sortFn?: (a: unknown, b: unknown) => number
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  captionDetail?: string
  multilineTable?: boolean
  noScroll?: boolean
  size?: 'sm' | 'md' | 'lg'
  pages?: Page[]
  pagination?: boolean
  paginationOptions?: number[]
  currentPage?: number
  rowsPerPage?: number
  bottomActionBarClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  paginationWrapperClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
}
