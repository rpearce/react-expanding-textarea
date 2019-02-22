# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
