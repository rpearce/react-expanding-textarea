import React from 'react'
import { createPortal } from 'react-dom'

// =============================================================================

let elDialogContainer: HTMLDivElement

if (typeof document !== 'undefined') {
  elDialogContainer = document.createElement('div')
  elDialogContainer.setAttribute('data-ret-portal', '')
  document.body.appendChild(elDialogContainer)
}

// =============================================================================

interface GetHeight {
  (rows: number, el: HTMLTextAreaElement): number
}

const getHeight: GetHeight = (rows, el) => {
  const cs = window.getComputedStyle(el)

  const lh = cs.lineHeight === 'normal'
    ? parseFloat(cs.fontSize) * 1.2
    : parseFloat(cs.lineHeight)

  const rowHeight = rows === 0
    ? 0
    : lh * rows +
      parseFloat(cs.borderBottomWidth) +
      parseFloat(cs.borderTopWidth) +
      parseFloat(cs.paddingBottom) +
      parseFloat(cs.paddingTop)

  const scrollHeight =
    el.scrollHeight +
    parseFloat(cs.borderBottomWidth) +
    parseFloat(cs.borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}

// =============================================================================

type TextAreaRef =
    React.RefObject<HTMLTextAreaElement>
  | ((node: HTMLTextAreaElement) => void)
  | null

export interface TextAreaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardedRef: TextAreaRef
  onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
  onInput?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows: number
}

const TextAreaBase = (props: TextAreaBaseProps) => {
  const ref = React.useRef<HTMLTextAreaElement | null>(null)
  const refGhost = React.useRef<HTMLTextAreaElement | null>(null)
  const [isMounted, setIsMounted] = React.useState(false)

  const resize = React.useCallback(() => {
    if (ref.current && refGhost.current) {
      refGhost.current.value = ref.current.value
      refGhost.current.style.setProperty('width', `${ref.current.offsetWidth}px`, 'important')
      ref.current.style.setProperty('height', `${getHeight(props.rows, refGhost.current)}px`, 'important')
    }
  }, [props.rows])

  const setup = React.useCallback(() => {
    if (ref.current && refGhost.current) {
      ref.current.style.setProperty('overflow-y', 'hidden', 'important')
      refGhost.current.style.setProperty('position', 'absolute', 'important')
      refGhost.current.style.setProperty('visibility', 'hidden', 'important')
      refGhost.current.style.setProperty('height', '0', 'important')
      refGhost.current.style.setProperty('z-index', '-1', 'important')
    }
  }, [])

  const handleInput = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resize()
    props.onChange?.(e)
    props.onInput?.(e)
  }, [props.onChange, props.onInput, resize])

  const handleRef = React.useCallback((node: HTMLTextAreaElement) => {
    ref.current = node

    if (typeof props.forwardedRef === 'function') {
      props.forwardedRef(node)
    }
  }, [props.forwardedRef])

  React.useEffect(() => {
    resize()
  })

  React.useEffect(() => {
    setIsMounted(true)
  }, [resize])

  React.useEffect(() => {
    if (isMounted) {
      setup()
    }
  }, [isMounted])

  return <>
    <textarea
      {...props}
      onInput={handleInput}
      ref={handleRef}
    />
    {isMounted && elDialogContainer != null && createPortal(
      <textarea
        {...props}
        aria-hidden="true"
        readOnly
        ref={refGhost}
        tabIndex={-1}
        value=""
      />
      , elDialogContainer)}
  </>
}

// interface TextAreaBaseState {
//   isMounted: boolean
// }

// class TextAreaBase extends React.Component<TextAreaBaseProps, TextAreaBaseState> {
//   private ref = React.createRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>
//   private refGhost = React.createRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>
//   // private resizeObserver?: ResizeObserver
//   state: TextAreaBaseState = { isMounted: false }

//   render() {
//     const { forwardedRef, ...rest } = this.props // forwardedRef is discarded

//     return (
//       <>
//         <textarea
//           {...rest}
//           onInput={this.handleInput}
//           ref={this.handleRef}
//         />
//         {this.state.isMounted && elDialogContainer != null && createPortal(
//           <textarea
//             {...rest}
//             aria-hidden="true"
//             readOnly
//             ref={this.refGhost}
//             tabIndex={-1}
//             value=""
//           />
//         , elDialogContainer)}
//       </>
//     )
//   }

//   // ===========================================================================

//   componentDidMount() {
//     this.resize() 
//     this.setState({ isMounted: true })
//   }

//   componentDidUpdate(_prevProps: TextAreaBaseProps, prevState: TextAreaBaseState) {
//     if (!prevState.isMounted && this.state.isMounted) {
//       this.setup()
//     }

//     this.resize() 
//   }

//   // ===========================================================================

//   handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     this.resize()
//     this.props.onChange?.(e)
//     this.props.onInput?.(e)
//   }

//   handleRef = (node: HTMLTextAreaElement) => {
//     this.ref.current = node

//     if (typeof this.props.forwardedRef === 'function') {
//       this.props.forwardedRef(node)
//     }
//   }

//   resize = () => {
//     if (this.ref.current && this.refGhost.current) {
//       this.refGhost.current.value = this.ref.current.value
//       this.refGhost.current.style.setProperty('width', `${this.ref.current.offsetWidth}px`, 'important')
//       this.ref.current.style.setProperty('height', `${getHeight(this.props.rows, this.refGhost.current)}px`, 'important')
//     }
//   }

//   setup = () => {
//     if (this.ref.current && this.refGhost.current) {
//       this.ref.current.style.setProperty('overflow-y', 'hidden', 'important')
//       this.refGhost.current.style.setProperty('position', 'absolute', 'important')
//       this.refGhost.current.style.setProperty('visibility', 'hidden', 'important')
//       this.refGhost.current.style.setProperty('height', '0', 'important')
//       this.refGhost.current.style.setProperty('z-index', '-1', 'important')
//     }
//   }
// }

// =============================================================================

interface TextAreaProps extends Omit<TextAreaBaseProps, 'rows'> {
  rows?: number | string
}

const TextArea = React.forwardRef((props: TextAreaProps, ref: TextAreaRef) =>
  <TextAreaBase {...props} forwardedRef={ref} rows={Number(props.rows) || 0} />
)

export default React.memo(TextArea)
