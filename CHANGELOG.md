# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.2.2] - 2020-08-28

### Fixed
* textareas with `maxHeight` not having a scrollbar (#43)

## [2.2.2] - 2020-08-28

### Changed
* README update

## [2.2.1] - 2020-08-28

### Changed
* now building output using tsc instead of rollup

### Fixed
* now exporting the textarea interface (should resolve #47)

## [2.2.0] - 2020-03-14

### Added
* typescript support

### Changed
* license from ISC to BSD-3

### Fixed
* issue where `line-height` is `normal` and calculation breaks by falling back
  to `fontSize * 1.2`
* upgrades to fix vulnerabilities

## [2.1.2] - 2020-02-04

### Added
* Commonjs `react-expanding-textarea.min.js` build
* UMD `react-expanding-textarea.min.js` build

### Fixed
* auto-adjusting issue in firefox (#33)

### Changed
* changed `browser` field value in package.json to point to
  `dist/umd/react-expanding-textarea.min.js` suffix

## [2.1.1] - 2020-01-19

### Fixed
* README

## [2.1.0] - 2020-01-19

### Added
* support for forwarding a ref (#36)
* added `babel-plugin-transform-react-remove-prop-types`

## [2.0.4] - 2020-01-05

### Changed
* bumped devDependencies
* added UMD build
* changed build location for commonjs and esmodules to `dist/esm/` and
  `dist/cjs`.

## [2.0.3] - 2019-10-14

### Fixed
* Fixed textarea growing before it needed to (#31)

## [2.0.2] - 2019-09-11

### Fixed
* `prop-types` was being used but not included as a dependency

## [2.0.1] - 2019-09-10

### Changed
* fixed security issues for `sshpk`, `cached-path-relative` and `mixin-deep`

## [2.0.0] - 2019-09-07

### Added
* dependency on `prop-types`

### Changed
* build folder is now `dist/`
* now building with `rollup`
* now providing CJS & ESM dist files (`main` and `module` in `package.json`)

## [1.0.0] - 2019-02-24

### Added
* responds to both `onChange` and `onInput` callbacks now

### Changed
* complete rewrite using React hooks. Minimum react peer dependency is now
  `>= 16.8`.

### Fixed
* includes a fix for #18

## [0.2.0] - 2018-08-08

### Added / Fixed
* addressed #14 where the `rows` attribute was being disregarded. Now, it
  provides a means to provide a minimum/default number of `rows`. This is a
  minorversion bump because it will cause the component to behave differently
  for existing folks and is really more of an addition than a fix.

## [0.1.10] - 2018-04-29

### Fixed
* fixed #10 where a change in the value prop was not recalculating the size

## [0.1.9] - 2017-10-05

### Fixed
* support for react v16
