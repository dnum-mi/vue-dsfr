export type VIconProps = {
  name?: string
  scale?: string | number
  verticalAlign?: string
  animation?: 'spin' | 'wrench' | 'pulse' | 'spin-pulse' | 'flash' | 'float' | 'ring'
  speed?: 'fast' | 'slow'
  flip?: 'horizontal' | 'vertical' | 'both'
  label?: string
  title?: string
  color?: string
  fill?: string
  inverse?: boolean
  ssr?: boolean
  display?: 'block' | 'inline-block' | 'inline'
}
