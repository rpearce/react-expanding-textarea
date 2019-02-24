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

const handleChange = (e) => {
  console.log('Changed value to: ', e.target.value)
}

const myComponent = () =>
  <Textarea
    maxLength="3000"
    className="textarea"
    name="post[notes]"
    placeholder="Notes"
    onChange={ handleChange } />
```

### `rows`
If you pass a `rows` prop, then this component will perform a calculation based
on computed `lineHeight`, `borderTopWidth`, `borderBottomWidth`, `paddingTop`
and `paddingBottom` to deduce what the minimum height-in-rows the component
should be.
