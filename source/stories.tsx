import React, {
  ChangeEvent,
  Component,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
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
        rows="1"
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

export const Minimum3Rows: FC = () => {
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
        rows="3"
        style={{ display: 'block', width: '300px' }}
      />
    </main>
  )
}

export const MaxHeight: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  const handleChange = useCallback((e) => {
    console.log(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Minimalist textarea with a max-height</h1>
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
        rows="1"
        style={{ display: 'block', maxHeight: '100px', width: '350px' }}
      />
    </main>
  )
}

type FunctionRefProps = Record<string, never>

interface FunctionRefState {
  value: string
}

class FunctionRefComp extends Component<FunctionRefProps, FunctionRefState> {
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
        <h1>Textarea component that receives a callback ref</h1>
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

export const FunctionRef: FC = () => {
  return <FunctionRefComp />
}

export const ValueFromProps: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>()

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>Minimalist textarea</h1>
      <label htmlFor="my-textarea">Please Enter Some Details:</label>
      <Textarea
        className="textarea"
        id="my-textarea"
        maxLength={number('maxLength', 3000)}
        name="pet[notes]"
        placeholder={text('placeholder', 'Enter details here...')}
        ref={textareaRef}
        rows="1"
        style={{ display: 'block', width: '350px' }}
        value={text('value', 'Lorem ipsum dolor sit amet...')}
      />
    </main>
  )
}

export const StyleChanges: FC = () => {
  const [isWide0, setIsWide0] = useState(false)
  const [isWide1, setIsWide1] = useState(false)

  const handleClickToggle0 = useCallback(() => {
    setIsWide0(x => !x)
  }, [])

  const handleClickToggle1 = useCallback(() => {
    setIsWide1(x => !x)
  }, [])

  return (
    <main>
      <h1>Textarea&apos;s width / style changes</h1>
      <section>
        <h2>Toggling the parent&apos;s width</h2>
        <p>
          When it goes from smaller to larger, there should not be any extra
          whitespace leftover at the bottom from its height when it was small.
          This will only work if <code>ResizeObserver</code> is available in
          your browser.
        </p>
        <button onClick={handleClickToggle0} type="button">
          Toggle textarea parent&apos;s width
        </button>
        <div>
          <label htmlFor="my-textarea0">Please Enter Some Details:</label>
          <div style={{ width: isWide0 ? 400 : 200 }}>
            <Textarea
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa
das
d
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor"
              id="my-textarea0"
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        </div>
      </section>
      <section>
        <h2>Toggling the textarea&apos;s width</h2>
        <button onClick={handleClickToggle1} type="button">
          Toggle textarea width
        </button>
        <div>
          <label htmlFor="my-textarea1">Please Enter Some Details:</label>
          <Textarea
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa
das
d
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor"
            id="my-textarea1"
            style={{ display: 'block', width: isWide1 ? 400 : 200 }}
          />
        </div>
      </section>
    </main>
  )
}
