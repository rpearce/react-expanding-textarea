# API Documentation

## Installation
Install the package:
```
$ npm install --save react-expanding-textarea
```

## Usage
Use this exactly like you would a normal `<textarea>`; the only
difference is that it is doing some simple expanding work behind the scenes for you!
```js
import Textarea from 'react-expanding-textarea'

const MyTextarea = () => {
  const handleChange = useCallback(e => {
    console.log('Changed value to: ', e.target.value)
  }, [])

  return (
    <>
      <label for="my-textarea">
        Please Enter Some Details:
      </label>
      <Textarea
        className="textarea"
        defaultValue="Lorem ipsum dolor sit amet, ..."
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
        onChange={handleChange}
        placeholder="Enter additional notes..."
      />
    </>
  )
}
```

### `rows`
If you pass a `rows` prop, then this component will perform a calculation based
on computed `lineHeight`, `borderTopWidth`, `borderBottomWidth`, `paddingTop`
and `paddingBottom` to deduce what the minimum height-in-rows the component
should be.
