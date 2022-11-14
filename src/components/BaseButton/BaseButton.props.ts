export interface BaseButtonProps {
  title: string
  color?: string
}

export interface BaseButtonEmits {
  (emit: 'click'): void
}
