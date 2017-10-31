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
<link href="build/toggle-switch.min.css" rel="stylesheet">
<script type="text/javascript" src="build/toggle-switch.min.js"></script>
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

Run Grunt:

```bash
$ docker-compose run --rm ext npm run build
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

Methods
-------

- getValue() [string] - Returns current value of the checkbox.
- turnOn() - Set true checkbox value.
- turnOn() - Set false checkbox value.
- toggle() - Set false/true checkbox value.

Run tests
---------

### Using Docker

```bash
$ docker-compose run --rm ext npm run test:run-without-coverage
```

### Using locale dev environment

```bash
$ npm run test
```

License
-------

js-toggle-switch is released under the BSD-3-Clause License.
