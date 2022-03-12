import React, {
  CSSProperties,
  ChangeEvent,
  FC,
  MutableRefObject,
  RefObject,
  TextareaHTMLAttributes,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import withForwardedRef from 'react-with-forwarded-ref'
import { equal as isShallowEqual } from 'fast-shallow-equal'

// =============================================================================
export interface GetHeight {
  (rows: number, el: HTMLTextAreaElement): number
}

export const getHeight: GetHeight = (rows, el) => {
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
    el.scrollHeight +
    parseFloat(borderBottomWidth) +
    parseFloat(borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}

// =============================================================================
export interface Resize {
  (rows: number, el: HTMLTextAreaElement | null): void
}

export const resize: Resize = (rows, el) => {
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

    if (document.activeElement === el) {
      if (
        el.getBoundingClientRect().bottom > window.innerHeight &&
        el.selectionStart === el.value.length
      ) {
        window.scrollTo(el.scrollLeft, el.scrollTop + el.scrollHeight)
      }
    }
  }
}

// =============================================================================
const useShallowObjectMemo = <A,>(obj: A): A => {
  const refObject  = useRef<A>(obj)
  const refCounter = useRef(0)

  if (!isShallowEqual(obj, refObject.current)) {
    refObject.current   = obj
    refCounter.current += 1
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => refObject.current, [refCounter.current])
}

// =============================================================================
const useSSRLayoutEffect =
  typeof window === 'undefined' ? Function.prototype : useLayoutEffect

// =============================================================================
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
  const style = useShallowObjectMemo<CSSProperties | undefined>(props.style)
  const internalRef = useRef<HTMLTextAreaElement>()
  const ref = (
    isForwardedRefFn || !forwardedRef ? internalRef : forwardedRef
  ) as MutableRefObject<HTMLTextAreaElement>
  const rows = props.rows ? parseInt('' + props.rows, 10) : 0
  const { onChange, onInput, ...rest } = props

  useSSRLayoutEffect(() => {
    resize(rows, ref.current)
  }, [props.className, props.value, ref, rows, style])

  useSSRLayoutEffect(() => {
    if (!window.ResizeObserver) {
      return
    }

    const observer = new ResizeObserver(() => {
      resize(rows, ref.current)
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
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
