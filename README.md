js-toggle-switch
================

[![Build Status](https://travis-ci.org/bupy7/js-toggle-switch.svg?branch=master)](https://travis-ci.org/bupy7/js-toggle-switch)
[![Coverage Status](https://coveralls.io/repos/github/bupy7/js-toggle-switch/badge.svg?branch=master)](https://coveralls.io/github/bupy7/js-toggle-switch?branch=master)

A toggle switch on native Javascript.

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

License
-------

js-toggle-switch is released under the BSD-3-Clause License.
