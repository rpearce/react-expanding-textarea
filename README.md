# react-expanding-textarea
![](https://img.shields.io/npm/dm/react-expanding-textarea.svg)
![](https://img.shields.io/npm/v/react-expanding-textarea.svg)

React textarea component to automatically expand and contract your textareas.

You can [view the demo here](http://rpearce.github.io/react-expanding-textarea/).

## Installation
Install the package via NPM:
```
$ npm install --save react-expanding-textarea
```

## Usage
Use this exactly like you would a normal `<textarea>`; the only
difference is that it is doing some simple expanding work behind the scenes for you!
```js
import Textarea from 'react-expanding-textarea'

function handleChange(e) {
  console.log('Changed value to: ', e.target.value)
}

const myComponent = () =>
  <Textarea
    rows="1"
    maxLength="3000"
    className="textarea"
    name="post[notes]"
    placeholder="Notes"
    onChange={ handleChange } />
```

## Contribute

1. Check out the [issues](https://github.com/rpearce/react-expanding-textarea/issues)
1. Fork this repository
1. Clone your fork
1. Check out a feature branch (`$ git checkout -b my-feature`)
1. Make your changes and push your branch to your GitHub repo
1. Create a pull request from your branch to this repo's master
1. When all is merged, pull down the upstream changes to your master
1. Delete your feature branch
