import type { VNode } from 'vue'

export type DsfrMultiSelectProps<T> = {
  modelValue: (string | number)[]
  options: T[]
  label?: string
  labelVisible?: boolean
  labelClass?: string
  hint?: string
  legend?: string
  errorMessage?: string
  successMessage?: string
  buttonLabel?: string
  id?: string
  selectAll?: boolean
  search?: boolean
  selectAllLabel?: [string, string]
  idKey?: keyof {
    [K in keyof T as T[K] extends string | number ? K : never]: T[K];
  }
  labelKey?: keyof {
    [K in keyof T as T[K] extends string | number ? K : never]: T[K];
  }
  filteringKeys?: (keyof T)[]
  maxOverflowHeight?: CSSStyleDeclaration['maxHeight']
}

export type DsfrMultiSelectSlots<T> = {
  label: () => VNode
  'required-tip': () => VNode
  hint: () => VNode
  'button-label': () => VNode
  legend: () => VNode
  'checkbox-label': (props: { option: T }) => VNode
  'no-results': () => VNode
}
