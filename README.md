js-toggle-switch
================

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
