import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'vue'
import type VIcon from '../VIcon/VIcon.vue'

export type DsfrTableRowProps = {
  rowData?: (string | Record<string, any>)[]
  rowAttrs?: HTMLAttributes
}

export type DsfrTableHeaderProps = {
  header?: string
  headerAttrs?: ThHTMLAttributes & { onClick?: (e: MouseEvent) => void }
  icon?: string | InstanceType<typeof VIcon>['$props']
}

export type DsfrTableHeadersProps = (string | (DsfrTableHeaderProps & { text?: string }))[]

export type DsfrTableCellProps = {
  field: string | Record<string, unknown>
  cellAttrs?: TdHTMLAttributes
  component?: string
  text?: string
  title?: string
  class?: string
  onClick?: Promise<void>
}

export type DsfrTableProps = {
  title: string
  headers?: DsfrTableHeadersProps
  rows?: (DsfrTableRowProps | (DsfrTableCellProps | { component: string, [k: string]: unknown } | string)[])[]

  rowKey?: ((row: (string | Record<string, any>)[] | undefined) => string | number | symbol | undefined) | string
  noCaption?: boolean
  pagination?: boolean
  currentPage?: number
  resultsDisplayed?: number
}
