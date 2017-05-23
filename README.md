# what-color-is


[![npm](https://img.shields.io/npm/v/what-color-is.svg)](https://www.npmjs.com/package/what-color-is)
[![license](https://img.shields.io/github/license/tommilligan/what-color-is.svg)](https://choosealicense.com/)

[![Travis branch](https://img.shields.io/travis/tommilligan/what-color-is/develop.svg)](https://travis-ci.org/tommilligan/what-color-is)
[![codecov](https://codecov.io/gh/tommilligan/what-color-is/branch/develop/graph/badge.svg)](https://codecov.io/gh/tommilligan/what-color-is)
[![David](https://img.shields.io/david/tommilligan/what-color-is.svg)](https://david-dm.org/tommilligan/what-color-is)


Look up colors from a terminal using [get-string-colors](https://www.npmjs.com/package/get-string-colors), [got](https://www.npmjs.com/package/got) and [terminal-kit](https://www.npmjs.com/package/terminal-kit).

## Installation

Install from `npmjs.org`
```
yarn add what-color-is
```


## Use

To interact with Google services, you will need to create a new [Custom Search Engine (CSE)](https://cse.google.com/cse/manage/all) and appropriate [API Key](https://console.developers.google.com/apis/dashboard).

Pass these to `what-color-is` as environment variables. Set these:
    * manually in your OS
    * by adding a `.env` file alongside the shipped `.env.example` file

```
# .env
GOOGLE_CSE_ID=01234567890123456789:a1b2c3d4e5f
GOOGLE_API_KEY=ABCDEFGHIJKLMNOPQRSTUVW-xyz0123456789
```

Once set up, you can just call it as

```
what-color-is 'lime green'
what-color-is 'a saxophone'
what-color-is 'heart'
```


## Development

Please ensure PRs are accompanied by comments and tests.
```
npm run test
```

