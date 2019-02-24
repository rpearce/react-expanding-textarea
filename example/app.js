import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import Textarea from '../'

const App = () => {
  const handleChange = useCallback(e => {
    console.log(e.target.value)
  }, [])

  return (
    <Textarea
      className="textarea"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      maxLength="3000"
      name="pet[notes]"
      onChange={handleChange}
      placeholder="Enter additional notes..."
    />
  )
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
