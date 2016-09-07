# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog] and this project adheres to
[Semantic Versioning].

___

## [1.0.5] - 2016-09-07
### Changed
- Updated PostCSS to 5.2.0

## [1.0.4] - 2016-09-06
### Changed
- Removed linting in node 0.12 that caused errors

## [1.0.3] - 2016-09-05
### Changed
- File `.travis.yml`
    - Reverted to node 0.12 because i re-read the [PostCSS Guidelines] and i
    noticed that it's required to test node 0.12
    - Removed node 5
- Rewrote the core to not use ES2015 features to support node 0.12

## [1.0.2] - 2016-09-04
### Added
- This changelog, should have done it before *oops* 😅

## [1.0.1] - 2016-09-04
### Changed
- File `.travis.yml`
    - Removed node 0.12 since it doesn't support ES2015 features
    - Added node 5

## [1.0.0] - 2016-09-04
### Added
- Core plugin functionality
- Tests:
    - Tests for all properties and values
    - Tests for multiple values in a single property
    - Tests for the `!important` rule
    - Test to disallow equal translations\*

\* This means that if a value in the dictionary is the same in both languages,
it should be commented out to avoid useless computation

## [0.0.0] - 2016-09-04
Used the [postcss-plugin-boilerplate] as a starting point  
There's nothing working for now

[Keep a Changelog]: http://keepachangelog.com/
[PostCSS Guidelines]: https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md#21-plugin-must-be-tested
[postcss-plugin-boilerplate]: https://github.com/postcss/postcss-plugin-boilerplate
[Semantic Versioning]: http://semver.org/
