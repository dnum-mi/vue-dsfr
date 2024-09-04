import type { Page } from '../DsfrPagination/DsfrPagination.types'

export type DsfrDataTableRow = (string | number | boolean | bigint | symbol)[]
  | Record<string | symbol | number, unknown>

export type DsfrDataTableProps = {
  id?: string
  title: string
  rowKey?: string | number
  headersRow: (string | { key: string, label: string, headerAttrs?: Record<string, unknown> })[]
  rows: DsfrDataTableRow[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  selectableRows?: boolean
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  pages?: Page[]
  pagination?: boolean
  paginationOptions?: number[]
  currentPage?: number
  rowsPerPage?: number
  bottomActionBarClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
  paginationWrapperClass?: string | Record<string, boolean> | Array<string | Record<string, boolean>>
}
