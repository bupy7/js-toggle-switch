js-toggle-switch
================

[![Build Status](https://travis-ci.org/bupy7/js-toggle-switch.svg?branch=master)](https://travis-ci.org/bupy7/js-toggle-switch)
[![Coverage Status](https://coveralls.io/repos/github/bupy7/js-toggle-switch/badge.svg?branch=master)](https://coveralls.io/github/bupy7/js-toggle-switch?branch=master)

A toggle switch on native Javascript.

[DEMO](https://bupy7.github.io/js-toggle-switch/)

Install
-------

Via [NPM](https://www.npmjs.com/):

```bash
$ npm install js-toggle-switch
```

Usage
-----

**Include:**

```html
// include style and script
<link href="dist/toggle-switch.min.css" rel="stylesheet">
<script type="text/javascript" src="dist/toggle-switch.min.js"></script>
```

**Add checkbox:**

```html
<input type="checkbox" name="some_chekbox_name">
```

**Initialize toggle switch:**

```html
<script type="text/javascript">
var toggleSwitch = new ToggleSwitch('input[name="some_chekbox_name"]');
</script>
```

Build
-----

### Using Docker

Run dev environment:

```bash
$ docker-compose up
```

Login, install packages and build:

```
$ docker-compose run ext bash
$ npm install
$ npm run build
```

### Using locale dev environment

```bash
$ npm install
$ npm run build
```

Options
-------

The options inject to the second argument of `ToggleSwitch`. Options is `object`.

```js
new ToggleSwitch('.some-checkbox', {
  onLabel: 'Yes', // [string] - Label for `true` value of checkbox. 
  offLabel: 'No' // [string] - Label for `false` value of checkbox. 
})
```

- `ToggleSwitch.defaultOptions` [object] - Default options for everything new instances.
    - onLabel [string]
    - offLabel [string]

Methods
-------

- getValue() [string] - Returns current value of the checkbox.
- turnOn() - Set to "true" the checkbox value.
- turnOff() - Set to "false" the checkbox value.
- toggle() - Set to "false"/"true" the checkbox value.
- destroy() - Destroy the toggle switch and restore the orginal checkbox.

Run tests
---------

### Using Docker

```bash
$ docker-compose run --rm ext npm run test:run-without-coverage
```

### Using locale dev environment

```bash
$ npm run test:run-without-coverage
```

License
-------

js-toggle-switch is released under the BSD-3-Clause License.
