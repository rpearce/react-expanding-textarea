# react-expanding-textarea
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-) [![npm version](https://img.shields.io/npm/v/react-expanding-textarea.svg?style=flat-square)](https://www.npmjs.com/package/react-expanding-textarea) [![npm downloads](https://img.shields.io/npm/dm/react-expanding-textarea.svg?style=flat-square)](https://www.npmjs.com/package/react-expanding-textarea) [![bundlephobia size](https://flat.badgen.net/bundlephobia/minzip/react-expanding-textarea)](https://bundlephobia.com/result?p=react-expanding-textarea)

React textarea component to automatically expand and contract your textareas.

You can [view the demo here](http://rpearce.github.io/react-expanding-textarea/).

## Links
* [Installation](#installation)
* [Usage](#usage)
* [Using The `rows` Prop](#using-the-rows-prop)
* [Changelog](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

## Installation
Install the package:
```
$ npm i react-expanding-textarea
```
or
```
$ yarn add react-expanding-textarea
```

## Usage
Use this exactly like you would a normal `<textarea>`; the only
difference is that it is doing some simple expanding work behind the scenes for you!
```js
import React, { useCallback, useEffect, useRef } from 'react'
import Textarea from 'react-expanding-textarea'

const MyTextarea = () => {
  const textareaRef = useRef(null)

  const handleChange = useCallback(e => {
    console.log('Changed value to: ', e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current.focus()
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
        ref={textareaRef}
      />
    </>
  )
}
```

### Using The `rows` Prop
If you pass a `rows` prop, then this component will perform a calculation based
on computed `lineHeight`, `borderTopWidth`, `borderBottomWidth`, `paddingTop`
and `paddingBottom` to deduce what the minimum height-in-rows the component
should be.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://robertwpearce.com"><img src="https://avatars2.githubusercontent.com/u/592876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Pearce</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/commits?author=rpearce" title="Code">💻</a> <a href="https://github.com/rpearce/react-expanding-textarea/commits?author=rpearce" title="Documentation">📖</a> <a href="#example-rpearce" title="Examples">💡</a> <a href="#ideas-rpearce" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/rpearce/react-expanding-textarea/commits?author=rpearce" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://shuffle.do/@anuj"><img src="https://avatars2.githubusercontent.com/u/9633371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anuj</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Aoyeanuj" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://www.evilprofessor.co.uk"><img src="https://avatars0.githubusercontent.com/u/271622?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lloyd Watkin</b></sub></a><br /><a href="#ideas-lloydwatkin" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://603.nz"><img src="https://avatars2.githubusercontent.com/u/3821107?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jordan Hornblow</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Ajch254" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/visgotti"><img src="https://avatars0.githubusercontent.com/u/7028891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>visgotti</b></sub></a><br /><a href="#ideas-visgotti" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://blogg.leieting.no/om-oss"><img src="https://avatars1.githubusercontent.com/u/626954?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Sunde Nielsen</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Athomassnielsen" title="Bug reports">🐛</a> <a href="#ideas-thomassnielsen" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/cibulka"><img src="https://avatars2.githubusercontent.com/u/3989833?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cibulka</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Acibulka" title="Bug reports">🐛</a> <a href="#ideas-cibulka" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://brettsmith.me"><img src="https://avatars2.githubusercontent.com/u/6562559?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brett Smith</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Ajbsmith731" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://raunofreiberg.com"><img src="https://avatars1.githubusercontent.com/u/23662329?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rauno Freiberg</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Araunofreiberg" title="Bug reports">🐛</a> <a href="https://github.com/rpearce/react-expanding-textarea/commits?author=raunofreiberg" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tknuts"><img src="https://avatars3.githubusercontent.com/u/3716280?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Kristiansen</b></sub></a><br /><a href="#ideas-tknuts" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Puspendert"><img src="https://avatars0.githubusercontent.com/u/16055344?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Puspender</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3APuspendert" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/markathomas"><img src="https://avatars3.githubusercontent.com/u/488472?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mark Thomas</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Amarkathomas" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/1v"><img src="https://avatars0.githubusercontent.com/u/6566370?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Artem</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3A1v" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://twitter.com/EvaRaymie"><img src="https://avatars3.githubusercontent.com/u/25673419?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eva Raymond</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Aelitenoire" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/chrisdrackett"><img src="https://avatars3.githubusercontent.com/u/4378?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Drackett</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Achrisdrackett" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://simonsmith.io/"><img src="https://avatars0.githubusercontent.com/u/360703?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simon Smith</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Asimonsmith" title="Bug reports">🐛</a> <a href="#ideas-simonsmith" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/jordie23"><img src="https://avatars0.githubusercontent.com/u/712360?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jordie23</b></sub></a><br /><a href="https://github.com/rpearce/react-expanding-textarea/issues?q=author%3Ajordie23" title="Bug reports">🐛</a> <a href="#ideas-jordie23" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
