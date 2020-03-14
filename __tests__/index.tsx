import React, { CSSProperties, createRef } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ExpandingTextarea, { getHeight, resize } from '../source'

test('renders with a minimum number of rows', () => {
  const wrapStyles: React.CSSProperties = {
    boxSizing: 'border-box',
    maxWidth: '500px'
  }
  const textareaStyles = {
    borderBottom: '4px solid',
    borderTop: '4px solid',
    lineHeight: '27.2px',
    padding: '10px',
    width: '100%'
  }
  const { getByText } = render(
    <div style={wrapStyles}>
      <ExpandingTextarea
        defaultValue="Some text"
        rows="3"
        style={textareaStyles}
      />
    </div>
  )

  expect(getByText('Some text')).toHaveStyle('height: 109.6px')
})

test('calls onChange & onInput when text changes', () => {
  const onChange = jest.fn()
  const onInput = jest.fn()
  const { getByText } = render(
    <ExpandingTextarea
      onChange={onChange}
      onInput={onInput}
      value="Some text"
    />
  )

  fireEvent.input(getByText('Some text'), {
    target: { value: 'Some text is here' }
  })

  expect(onChange).toBeCalled()
  expect(onInput).toBeCalled()
})

test('continues to work if no onChange and no onInput', () => {
  const onChange = jest.fn()
  const onInput = jest.fn()
  const { asFragment, getByText } = render(
    <ExpandingTextarea value="Some text" />
  )

  fireEvent.input(getByText('Some text'), {
    target: { value: 'Some text is here' }
  })

  expect(asFragment()).toMatchSnapshot()
})

test('getHeight: returns scroll height when no rows', () => {
  window.getComputedStyle = jest.fn().mockImplementation(() => ({
    borderBottomWidth: '4px',
    borderTopWidth: '4px',
    lineHeight: '27.2px',
    paddingBottom: '10px',
    paddingTop: '10px'
  }))
  const el = document.createElement('textarea')
  jest.spyOn(el, 'scrollHeight', 'get').mockImplementation(() => 129)

  expect(getHeight(0, el)).toEqual(137)
})

test('getHeight: returns scroll height when larger than row height', () => {
  window.getComputedStyle = jest.fn().mockImplementation(() => ({
    borderBottomWidth: '4px',
    borderTopWidth: '4px',
    lineHeight: '27.2px',
    paddingBottom: '10px',
    paddingTop: '10px'
  }))
  const el = document.createElement('textarea')
  jest.spyOn(el, 'scrollHeight', 'get').mockImplementation(() => 129)

  expect(getHeight(3, el)).toEqual(137)
})

test('getHeight: returns row height when larger than scroll height', () => {
  window.getComputedStyle = jest.fn().mockImplementation(() => ({
    borderBottomWidth: '4px',
    borderTopWidth: '4px',
    lineHeight: '27.2px',
    paddingBottom: '10px',
    paddingTop: '10px'
  }))
  const el = document.createElement('textarea')
  jest.spyOn(el, 'scrollHeight', 'get').mockImplementation(() => 129)

  expect(getHeight(5, el)).toEqual(164)
})

test('resize: sets style height when present', () => {
  window.getComputedStyle = jest.fn().mockImplementation(() => ({
    borderBottomWidth: '4px',
    borderTopWidth: '4px',
    lineHeight: '27.2px',
    paddingBottom: '10px',
    paddingTop: '10px'
  }))

  const el = document.createElement('textarea')
  jest.spyOn(el, 'scrollHeight', 'get').mockImplementation(() => 129)
  el.style.height = '100px'

  resize(0, null)

  expect(el.style.height).toEqual('100px')

  resize(0, el)

  expect(el.style.height).toEqual('137px')
})

test('accepts ref', () => {
  const ref = createRef<HTMLTextAreaElement>()
  render(<ExpandingTextarea defaultValue="Some text" ref={ref} />)
  expect(ref.current?.tagName).toEqual('TEXTAREA')
})
