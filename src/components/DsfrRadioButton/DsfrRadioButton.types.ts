export type DsfrRadioButtonProps = {
  id?: string
  name?: string
  modelValue: string | number | boolean | undefined
  disabled?: boolean
  small?: boolean
  inline?: boolean
  value: string | number | boolean
  label?: string
  hint?: string
  rich?: boolean
  img?: string
  imgTitle?: string
  svgPath?: string
  svgAttrs?: Record<string, unknown>
}

export type DsfrRadioButtonOptions = (Omit<DsfrRadioButtonProps, 'modelValue'>)[]

export type DsfrRadioButtonSetProps = {
  titleId?: string
  disabled?: boolean
  required?: boolean
  small?: boolean
  inline?: boolean
  name?: string
  errorMessage?: string
  validMessage?: string
  legend?: string
  hint?: string
  modelValue?: string | number | boolean | undefined
  options?: Omit<DsfrRadioButtonProps, 'modelValue'>[]
  ariaInvalid?: boolean | 'grammar' | 'spelling'
}
