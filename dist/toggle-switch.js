(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('ToggleSwitch', ['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global['ToggleSwitch'] = mod.exports.default;
  }
})(this, function (exports) {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToggleSwitch = function () {
  _createClass(ToggleSwitch, [{
    key: 'CSS_CLASS_ON',

    /**
     * @returns {String}
     */
    get: function get() {
      return 'toggle-switch--on';
    }

    /**
     * @returns {String}
     */

  }, {
    key: 'CSS_CLASS_OFF',
    get: function get() {
      return 'toggle-switch--off';
    }

    /**
     * Through the this static property you can set up default options for everything new instances.
     * @returns {Object}
     */

  }], [{
    key: 'defaultOptions',
    get: function get() {
      if (!this._defaultOptions) {
        this._defaultOptions = {};
      }
      return this._defaultOptions;
    }

    /**
     * @constructor
     * @param {HTMLInputElement|String} checkbox
     * @param {Object} [options]
     */

  }]);

  function ToggleSwitch(checkbox, options) {
    _classCallCheck(this, ToggleSwitch);

    /**
     * @type {HTMLInputElement}
     * @private
     */
    this._checkbox = typeof checkbox === 'string' ? document.querySelector(checkbox) : checkbox;
    /**
     * @type {HTMLElement}
     * @private
     */
    this._container = null;
    /**
     * @type {HTMLElement}
     * @private
     */
    this._tongue = null;
    /**
     * @type {String}
     * @private
     */
    this._onLabel = 'On';
    /**
     * @type {String}
     * @private
     */
    this._offLabel = 'Off';

    this._configuration(ToggleSwitch.defaultOptions);
    this._configuration(options || {});
    this._render();
    this._addListeners();
  }

  _createClass(ToggleSwitch, [{
    key: 'turnOn',
    value: function turnOn() {
      if (this._checkbox.checked) {
        return;
      }

      this._checkbox.checked = true;

      this._renderTurnOn();
    }
  }, {
    key: 'turnOff',
    value: function turnOff() {
      if (!this._checkbox.checked) {
        return;
      }

      this._checkbox.checked = false;

      this._renderTurnOff();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this._checkbox.checked) {
        this.turnOff();
      } else {
        this.turnOn();
      }
    }

    /**
     * @returns {Boolean}
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this._checkbox.checked;
    }

    /**
     * @param {Object} options
     * @private
     */

  }, {
    key: '_configuration',
    value: function _configuration(options) {
      var allowedOptionsMap = ['onLabel', 'offLabel'];
      for (var name in options) {
        if (this['_' + name] !== undefined && allowedOptionsMap.indexOf(name) !== -1) {
          this['_' + name] = options[name];
        }
      }
    }

    /**
     * @private
     */

  }, {
    key: '_addListeners',
    value: function _addListeners() {
      var self = this;
      this._container.addEventListener('click', function () {
        self.toggle();
      });
    }

    /**
     * @private
     */

  }, {
    key: '_render',
    value: function _render() {
      this._container = document.createElement('div');
      this._container.classList.add('toggle-switch');

      this._checkbox.parentNode.insertBefore(this._container, this._checkbox.nextSibling);

      this._tongue = document.createElement('div');
      this._tongue.classList.add('toggle-switch__tongue');
      if (this._checkbox.checked) {
        this._renderTurnOn();
      } else {
        this._renderTurnOff();
      }
      this._container.appendChild(this._tongue);

      this._checkbox.classList.add('toggle-switch__checkbox');
      this._container.appendChild(this._checkbox);
    }

    /**
     * @private
     */

  }, {
    key: '_renderTurnOn',
    value: function _renderTurnOn() {
      this._container.classList.remove(this.CSS_CLASS_OFF);
      this._container.classList.add(this.CSS_CLASS_ON);

      this._tongue.innerHTML = this._onLabel;
    }

    /**
     * @private
     */

  }, {
    key: '_renderTurnOff',
    value: function _renderTurnOff() {
      this._container.classList.remove(this.CSS_CLASS_ON);
      this._container.classList.add(this.CSS_CLASS_OFF);

      this._tongue.innerHTML = this._offLabel;
    }
  }]);

  return ToggleSwitch;
}();

exports.default = ToggleSwitch;


});
