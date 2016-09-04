# PostCSS Italian Stylesheets
[![Build Status][ci-img]][ci]

> [PostCSS] plugin for writing Italian Stylesheets 🇮🇹

## Installation
```bash
$ npm install postcss-italian-stylesheets
```

## Usage
Require / import:
```js
// ES5
var italianStyleSheets = require('postcss-italian-stylesheets');

// ES6
import italianStyleSheets from 'postcss-italian-stylesheets';
```

See [PostCSS#Usage] for usage for your environment.

## Example
Input:
```css
.foo {
    altezza: 300px;
    margine-sotto: 10px;
    carattere-dimensione: 20px !importante;
    sfondo-colore: nero;
    colore: bianco;
}
```

Output:
```css
.foo {
    height: 300px;
    margin-bottom: 10px;
    font-size: 20px !important;
    background-color: black;
    color: white;
}
```

## Documentation
- [All available properties]
- [All available values]

## Changelog
See [CHANGELOG.md].

## License
See [LICENSE].

## Attribution
This plugin is heavily inspired by the other [PostCSS] languages plugins such as:
- [postcss-andalusian-stylesheets] Andalusian Style Sheets.
- [postcss-australian-stylesheets] Australian Style Sheets.
- [postcss-canadian-stylesheets] Canadian Style Sheets.
- [postcss-chinese-stylesheets] Chinese Style Sheets.
- [postcss-czech-stylesheets] Czech Style Sheets.
- [postcss-german-stylesheets] German Style Sheets.
- [postcss-lolcat-stylesheets] Lolspeak Style Sheets.
- [postcss-russian-stylesheets] Russian Style Sheets.
- [postcss-spanish-stylesheets] Spanish Style Sheets.
- [postcss-swedish-stylesheets] Swedish Style Sheets.
- [postcss-tatar-stylesheets] Tatar Style Sheets

[postcss-andalusian-stylesheets]: https://github.com/bameda/postcss-andalusian-stylesheets
[postcss-australian-stylesheets]: https://github.com/dp-lewis/postcss-australian-stylesheets
[postcss-canadian-stylesheets]: https://github.com/chancancode/postcss-canadian-stylesheets
[postcss-chinese-stylesheets]: https://github.com/zhouwenbin/postcss-chinese-stylesheets
[postcss-czech-stylesheets]: https://github.com/HoBi/postcss-czech-stylesheets
[postcss-german-stylesheets]: https://github.com/timche/postcss-german-stylesheets
[postcss-lolcat-stylesheets]: https://github.com/sandralundgren/postcss-lolcat-stylesheets
[postcss-russian-stylesheets]: https://github.com/Semigradsky/postcss-russian-stylesheets
[postcss-spanish-stylesheets]: https://github.com/ismamz/postcss-spanish-stylesheets
[postcss-swedish-stylesheets]: https://github.com/johnie/postcss-swedish-stylesheets
[postcss-tatar-stylesheets]: https://github.com/azat-io/postcss-tatar-stylesheets
[CHANGELOG.md]: https://github.com/Pustur/postcss-italian-stylesheets/blob/master/CHANGELOG.md
[ci-img]: https://travis-ci.org/Pustur/postcss-italian-stylesheets.svg
[ci]: https://travis-ci.org/Pustur/postcss-italian-stylesheets
[LICENSE]: https://github.com/Pustur/postcss-italian-stylesheets/blob/master/LICENSE
[PostCSS]: https://github.com/postcss/postcss
[PostCSS#Usage]: https://github.com/postcss/postcss#usage
[All available properties]: https://github.com/Pustur/postcss-italian-stylesheets/blob/master/dictionary/properties.js
[All available values]: https://github.com/Pustur/postcss-italian-stylesheets/blob/master/dictionary/values.js
