export interface BaseButtonProps {
  title: string
  color?: string
  width?: string
  height?: string
}

export interface BaseButtonEmits {
  (emit: 'click'): void
}
