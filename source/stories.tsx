import React, { ChangeEvent, Component, FC, useCallback, useEffect, useRef } from 'react'
import { number, text } from '@storybook/addon-knobs'
import '../.storybook/base.css'

import Textarea from './'

export default {
  title: 'ExpandingTextarea',
  component: Textarea,
  parameters: {},
}

export const FancyTextarea: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  const handleChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Minimalist textarea</h1>
      <label htmlFor="my-textarea">Please Enter Some Details:</label>
      <Textarea
        className="textarea"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        id="my-textarea"
        maxLength={number('maxLength', 3000)}
        name="pet[notes]"
        onChange={handleChange}
        placeholder={text('placeholder', 'Enter details here...')}
        ref={textareaRef}
        rows={text('rows', '1')}
        style={{ display: 'block', width: '350px' }}
      />
    </main>
  )
}

export const RegularTextarea: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  const handleChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Regular textarea</h1>
      <label htmlFor="my-textarea">Please Enter Some Details:</label>
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        id="my-textarea"
        maxLength={number('maxLength', 3000)}
        name="pet[notes]"
        onChange={handleChange}
        placeholder={text('placeholder', 'Enter details here...')}
        ref={textareaRef}
        style={{ display: 'block', width: '300px' }}
      />
    </main>
  )
}

export const WithMinimum3Rows: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  const handleChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Regular textarea with minimum 3 rows</h1>
      <label htmlFor="my-textarea">Please Enter Some Details:</label>
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        id="my-textarea"
        maxLength={number('maxLength', 3000)}
        name="pet[notes]"
        onChange={handleChange}
        placeholder={text('placeholder', 'Enter details here...')}
        ref={textareaRef}
        rows={text('rows', '3')}
        style={{ display: 'block', width: '300px' }}
      />
    </main>
  )
}

export const WithMaxHeight: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  const handleChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Minimalist textarea</h1>
      <label htmlFor="my-textarea">Please Enter Some Details:</label>
      <Textarea
        className="textarea"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        id="my-textarea"
        maxLength={number('maxLength', 3000)}
        name="pet[notes]"
        onChange={handleChange}
        placeholder={text('placeholder', 'Enter details here...')}
        ref={textareaRef}
        rows={text('rows', '1')}
        style={{ display: 'block', maxHeight: '100px', width: '350px' }}
      />
    </main>
  )
}

type FunctionRefProps = Record<string, never>

interface FunctionRefState {
  value: string
}

class FunctionRef extends Component<FunctionRefProps, FunctionRefState> {
  el: HTMLTextAreaElement | null = null

  constructor(props: FunctionRefProps) {
    super(props)
    this.state = {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  }

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: e.currentTarget.value })
  }

  setRef = (node: HTMLTextAreaElement): void => {
    this.el = node
  }

  render() {
    console.log(this.el)

    return (
      <main>
        <h1>Regular textarea</h1>
        <label htmlFor="my-textarea">Please Enter Some Details:</label>
        <Textarea
          id="my-textarea"
          maxLength={number('maxLength', 3000)}
          name="pet[notes]"
          onChange={this.handleChange}
          placeholder={text('placeholder', 'Enter details here...')}
          ref={this.setRef}
          style={{ display: 'block', width: '300px' }}
          value={this.state.value}
        />
      </main>
    )
  }
}

export const WithFunctionRef: FC = () => {
  return <FunctionRef />
}
