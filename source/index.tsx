import React, {
  FC,
  FormEvent,
  RefObject,
  TextareaHTMLAttributes,
  createRef,
  useCallback,
  useEffect,
} from 'react'
import withForwardedRef from 'react-with-forwarded-ref'

export const getHeight = (rows: number, el: HTMLTextAreaElement): number => {
  const {
    borderBottomWidth,
    borderTopWidth,
    fontSize,
    lineHeight,
    paddingBottom,
    paddingTop,
  } = window.getComputedStyle(el)

  const lh =
    lineHeight === 'normal'
      ? parseFloat(fontSize) * 1.2
      : parseFloat(lineHeight)

  const rowHeight =
    rows === 0
      ? 0
      : lh * rows +
        parseFloat(borderBottomWidth) +
        parseFloat(borderTopWidth) +
        parseFloat(paddingBottom) +
        parseFloat(paddingTop)

  const scrollHeight =
    el.scrollHeight + parseFloat(borderBottomWidth) + parseFloat(borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}

export const resize = (rows: number, el: HTMLTextAreaElement | null): void => {
  if (el) {
    let overflowY = 'hidden'
    const { maxHeight } = window.getComputedStyle(el)

    if (maxHeight !== 'none') {
      const maxHeightN = parseFloat(maxHeight)

      if (maxHeightN < el.scrollHeight) {
        overflowY = ''
      }
    }

    el.style.height = '0'
    el.style.overflowY = overflowY
    el.style.height = `${getHeight(rows, el)}px`
  }
}

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
  forwardedRef?: RefObject<HTMLTextAreaElement>
  onChange?: (evt: FormEvent<HTMLTextAreaElement>) => void
  onInput?: (evt: FormEvent<HTMLTextAreaElement>) => void
  rows?: string | number | undefined
  value?: string
}

const ExpandingTextarea: FC<TextareaProps> = ({
  forwardedRef,
  ...props
}: TextareaProps) => {
  const ref = forwardedRef || createRef<HTMLTextAreaElement>()
  const rows = props.rows ? parseInt('' + props.rows, 10) : 0
  const { onChange, onInput } = props

  useEffect(() => {
    resize(rows, ref.current)
  }, [ref, rows])

  const handleInput = useCallback(
    (e) => {
      if (onChange) {
        onChange(e)
      }
      if (onInput) {
        onInput(e)
      }
      resize(rows, ref.current)
    },
    [onChange, onInput, ref, rows]
  )

  return (
    <textarea
      {...props}
      onInput={handleInput}
      ref={ref}
      rows={rows}
    />
  )
}

export default withForwardedRef(ExpandingTextarea)
