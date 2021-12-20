import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  RefObject,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
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

type RefFn = (node: HTMLTextAreaElement) => void

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
  forwardedRef?: RefObject<HTMLTextAreaElement> | RefFn
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void
  onInput?: (evt: ChangeEvent<HTMLTextAreaElement>) => void
  rows?: string | number | undefined
  value?: string
}

const ExpandingTextarea: FC<TextareaProps> = ({
  forwardedRef,
  ...props
}: TextareaProps) => {
  const isForwardedRefFn = typeof forwardedRef === 'function'
  const internalRef = useRef<HTMLTextAreaElement>()
  const ref = (
    isForwardedRefFn || !forwardedRef ? internalRef : forwardedRef
  ) as MutableRefObject<HTMLTextAreaElement>
  const rows = props.rows ? parseInt('' + props.rows, 10) : 0
  const { onChange, onInput, ...rest } = props

  useEffect(() => {
    resize(rows, ref.current)
  }, [ref, rows, props.value])

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

  const handleRef = useCallback(
    (node) => {
      ref.current = node

      if (isForwardedRefFn) {
        (forwardedRef as RefFn)(node)
      }
    },
    [forwardedRef, isForwardedRefFn, ref]
  )

  return (
    <textarea
      {...rest}
      onInput={handleInput}
      ref={handleRef}
      rows={rows}
    />
  )
}

export default withForwardedRef(ExpandingTextarea)
