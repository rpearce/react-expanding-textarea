// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useEffect, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import '../.storybook/base.css'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Textarea from '../dist/esm'

const stories = storiesOf('react-expanding-textarea', module)

stories.addDecorator(withA11y)
stories.addDecorator(withKnobs)

stories.add('Fancy textarea', () => {
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
})

stories.add('Regular textarea', () => {
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
})

stories.add('Regular textarea with minimum 3 rows', () => {
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
})
