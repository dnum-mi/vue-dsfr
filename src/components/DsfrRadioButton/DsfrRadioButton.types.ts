export type DsfrRadioButtonProps = {
  id?: string
  name?: string
  modelValue: string | number | undefined
  small?: boolean
  inline?: boolean
  value: string | number
  label?: string
  hint?: string
  img?: string
}

export type DsfrRadioButtonSetProps = {
  titleId?: string,
  disabled?: boolean,
  required?: boolean,
  small?: boolean,
  inline?: boolean,
  name: string,
  errorMessage?: string,
  validMessage?: string,
  legend?: string,
  modelValue?: string | number | undefined,
  options?: Omit<DsfrRadioButtonProps, 'modelValue'>[]
}
