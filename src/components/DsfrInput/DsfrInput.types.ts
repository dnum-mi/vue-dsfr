export type DsfrInputProps = {
  id?: string
  descriptionId?: string
  hint?: string
  isInvalid?: boolean
  isValid?: boolean
  isTextarea?: boolean
  isWithWrapper?: boolean
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number | null
  wrapperClass?: string
}

export type DsfrInputGroupProps = {
  inputGroupId?: string
  descriptionId?: string
  hint?: string
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number | null
  placeholder?: string
  errorMessage?: string | string[]
  validMessage?: string | string[]
  wrapperClass?: string
}
