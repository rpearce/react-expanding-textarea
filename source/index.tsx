import React from 'react'
import { createPortal } from 'react-dom'
import { getTextAreaHeight } from './getTextAreaHeight'

// =============================================================================

let elDialogContainer: HTMLDivElement

if (typeof document !== 'undefined' && !document.querySelector('[data-ret-portal]')) {
  elDialogContainer = document.createElement('div')
  elDialogContainer.setAttribute('data-ret-portal', '')
  document.body.appendChild(elDialogContainer)
}

// =============================================================================

type TextAreaRef =
    React.RefObject<HTMLTextAreaElement>
  | ((node: HTMLTextAreaElement) => void)
  | null

interface TextAreaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardedRef: TextAreaRef
  onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
  onInput?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows: number
}

interface TextAreaBaseState {
  isMounted: boolean
}

class TextAreaBase extends React.Component<TextAreaBaseProps, TextAreaBaseState> {
  private ref = React.createRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>
  private refGhost = React.createRef<HTMLTextAreaElement>() as React.MutableRefObject<HTMLTextAreaElement>
  state: TextAreaBaseState = { isMounted: false }

  render() {
    // NOTE: forwardedRef isn't used here, so...
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { forwardedRef, ...rest } = this.props

    return (
      <>
        <textarea
          {...rest}
          onInput={this.handleInput}
          ref={this.handleRef}
        />
        {this.state.isMounted && elDialogContainer != null && createPortal(
          <textarea
            {...rest}
            aria-hidden="true"
            readOnly
            ref={this.refGhost}
            tabIndex={-1}
            value=""
          />,
          elDialogContainer
        )}
      </>
    )
  }

  // ===========================================================================

  componentDidMount() {
    this.resize()
    this.setState({ isMounted: true })
  }

  componentDidUpdate(_prevProps: TextAreaBaseProps, prevState: TextAreaBaseState) {
    if (!prevState.isMounted && this.state.isMounted) {
      this.setup()
    }

    this.resize()
  }

  // ===========================================================================

  handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.resize()
    this.props.onChange?.(e)
    this.props.onInput?.(e)
  }

  handleRef = (node: HTMLTextAreaElement) => {
    this.ref.current = node

    if (typeof this.props.forwardedRef === 'function') {
      this.props.forwardedRef(node)
    }
  }

  resize = () => {
    if (this.ref.current && this.refGhost.current) {
      this.refGhost.current.value = this.ref.current.value
      this.refGhost.current.style.setProperty('width', `${this.ref.current.offsetWidth}px`, 'important')
      this.ref.current.style.setProperty('height', `${getTextAreaHeight(this.props.rows, this.refGhost.current)}px`, 'important')
    }
  }

  setup = () => {
    if (this.ref.current && this.refGhost.current) {
      this.ref.current.style.setProperty('overflow-y', 'hidden', 'important')
      this.refGhost.current.style.setProperty('position', 'absolute', 'important')
      this.refGhost.current.style.setProperty('visibility', 'hidden', 'important')
      this.refGhost.current.style.setProperty('height', '0', 'important')
      this.refGhost.current.style.setProperty('z-index', '-1', 'important')
    }
  }
}

// =============================================================================

export interface TextAreaProps extends Omit<TextAreaBaseProps, 'rows'> {
  rows?: number | string
}

const TextArea = React.forwardRef((props: TextAreaProps, ref: TextAreaRef) =>
  <TextAreaBase {...props} forwardedRef={ref} rows={Number(props.rows) || 0} />
)

export default React.memo(TextArea)
