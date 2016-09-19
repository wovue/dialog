# Dialog

> Dialog (Modal) component for Vue.js

Create dialogs with different styles.

## Live examples & Docs

[https://wovue.github.io/dialog](https://wovue.github.io/dialog)

## Features

* a11y friendly
* Perfect vertical centering.

## Getting Started

Install the package using npm

```sh
$ npm install wovue-dialog --save
```

Install the plugin

```js
require('wovue-dialog/dist/dialog.css')

import Vue from 'vue'
import Dialog from 'wovue-dialog'

Vue.use(Dialog)
```

**Note** only with `webpack` you can import `CSS` in javascript.

## Basic Usage

```html
<button v-dialog:toggle="dialog">Open dialog</button>
<wv-dialog ref="dialog">
  <h1>Hello</h1>
  <button v-dialog:toggle="dialog">Close dialog</button>
</wv-dialog>
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload src-docs at localhost:8080
npm run dev

# build for production with minification src-docs and src
npm run build

# copy docs folder to gh-pages branch and push
npm run deploy-docs

# run unit tests
npm run unit

# run all tests
npm test
```
