import type { OhVueIcon as VIcon } from 'oh-vue-icons'
import type { TdHTMLAttributes, ThHTMLAttributes, HTMLAttributes } from 'vue'

export type DsfrTableRowProps = {
  rowData?: (string | Record<string, any>)[] // eslint-disable-line @typescript-eslint/no-explicit-any
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
  component?: string,
  text?: string,
  title?: string,
  class?: string,
  onClick?: Promise<void>,
}

export type DsfrTableProps = {
  title: string
  headers?: DsfrTableHeadersProps
  rows?: (DsfrTableRowProps | (DsfrTableCellProps | {component: string, [k: string]: unknown} | string)[])[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowKey?: ((row: (string | Record<string, any>)[] | undefined) => string | number | symbol | undefined) | string
  noCaption?: boolean
  pagination?: boolean
  currentPage?: number
  resultsDisplayed?: number
}
