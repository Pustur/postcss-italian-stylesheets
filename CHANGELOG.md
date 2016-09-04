# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

___

## [1.0.2] - 2016-09-04
### Added
- This changelog, should have done it before *oops* 😅

## [1.0.1] - 2016-09-04
### Changed
- File `.travis.yml`
    - Removed node 0.12 from since it doesn't support ES2015 features
    - Added node 5

## [1.0.0] - 2016-09-04
### Added
- Core plugin functionality
- Tests:
    - Tests for all properties and values
    - Tests for multiple values in a single property
    - Tests for the `!important` rule
    - Test to disallow equal translations\*

\* This means that if a value in the dictionary is the same in both languages, it should be commented out to avoid useless computation.

## [0.0.0] - 2016-09-04
Used the [postcss-plugin-boilerplate](https://github.com/postcss/postcss-plugin-boilerplate) as a starting point.  
There's nothing working for now.
