import React, { createRef, useCallback, useEffect } from 'react'
import { func, number, object, oneOfType, string } from 'prop-types'
import withForwardedRef from 'react-with-forwarded-ref'

// getHeight :: (Integer, Element) -> Integer
export const getHeight = (rows, el) => {
  const {
    borderBottomWidth,
    borderTopWidth,
    lineHeight,
    paddingBottom,
    paddingTop
  } = window.getComputedStyle(el)

  const rowHeight =
    rows == null
      ? 0
      : parseFloat(lineHeight) * parseInt(rows, 10) +
        parseFloat(borderBottomWidth) +
        parseFloat(borderTopWidth) +
        parseFloat(paddingBottom) +
        parseFloat(paddingTop)

  const scrollHeight =
    el.scrollHeight + parseFloat(borderBottomWidth) + parseFloat(borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}

// resize :: (Integer, Element) -> ()
export const resize = (rows, el) => {
  if (el) {
    el.style.height = '0'
    el.style.overflowY = 'hidden'
    el.style.height = `${getHeight(rows, el)}px`
  }
}

// ExpandingTextarea :: Props -> <textarea />
const ExpandingTextarea = ({ forwardedRef, ...props }) => {
  const ref = forwardedRef || createRef(null)
  const { onChange, onInput, rows, value } = props

  useEffect(() => {
    resize(rows, ref.current)
  }, [rows, value, ref])

  const handleInput = useCallback(
    e => {
      onChange(e)
      onInput(e)
      resize(rows, ref.current)
    },
    [ref, onChange, onInput, rows]
  )

  return <textarea {...props} onInput={handleInput} ref={ref} />
}

ExpandingTextarea.propTypes = {
  onChange: func,
  onInput: func,
  forwardedRef: object,
  rows: oneOfType([number, string]),
  value: string
}

ExpandingTextarea.defaultProps = {
  onChange: Function.prototype,
  onInput: Function.prototype
}

export default withForwardedRef(ExpandingTextarea)
