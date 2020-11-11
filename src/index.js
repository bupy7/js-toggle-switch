const CSS_CLASS_ON = 'toggle-switch--on'
const CSS_CLASS_OFF = 'toggle-switch--off'

export default class ToggleSwitch {
  /**
   * Through the this static property you can setting default options for everyone new instances.
   * @returns {Object}
   */
  static get defaultOptions () {
    if (!this._defaultOptions) {
      this._defaultOptions = {}
    }
    return this._defaultOptions
  }

  /**
   * @constructor
   * @param {HTMLInputElement|String} checkbox
   * @param {Object} [options]
   */
  constructor (checkbox, options) {
    /**
     * @type {HTMLInputElement}
     * @private
     */
    this._checkbox = typeof checkbox === 'string' ? document.querySelector(checkbox) : checkbox
    /**
     * @type {HTMLElement}
     * @private
     */
    this._container = null
    /**
     * @type {HTMLElement}
     * @private
     */
    this._tongue = null
    /**
     * @type {String}
     * @private
     */
    this._onLabel = 'On'
    /**
     * @type {String}
     * @private
     */
    this._offLabel = 'Off'
    /**
     * @type {Boolean}
     * @private
     */
    this._ready = false

    this._onClick = this._onClick.bind(this)

    this._configuration(ToggleSwitch.defaultOptions)
    this._configuration(options || {})
    this._render()
  }

  turnOn () {
    if (!this._ready || this._checkbox.checked) {
      return
    }

    this._checkbox.checked = true

    this._renderTurnOn()

    this._checkbox.dispatchEvent(createChangeEvent())
  }

  turnOff () {
    if (!this._ready || !this._checkbox.checked) {
      return
    }

    this._checkbox.checked = false

    this._renderTurnOff()

    this._checkbox.dispatchEvent(createChangeEvent())
  }

  toggle () {
    if (!this._ready) {
      return
    }

    if (this._checkbox.checked) {
      this.turnOff()
    } else {
      this.turnOn()
    }
  }

  /**
   * @returns {Boolean}
   */
  getValue () {
    return this._checkbox.checked
  }

  destroy () {
    if (!this._ready) {
      return
    }

    this._ready = false

    this._removeListeners()
    this._undraw()
  }

  /**
   * @private
   */
  _render () {
    if (this._ready) {
      return
    }

    this._draw()
    this._addListeners()

    this._ready = true
  }

  /**
   * @param {Object} options
   * @private
   */
  _configuration (options) {
    const allowedOptionsMap = ['onLabel', 'offLabel']
    for (let name in options) {
      if (this['_' + name] !== undefined && allowedOptionsMap.indexOf(name) !== -1) {
        this['_' + name] = options[name]
      }
    }
  }

  /**
   * @private
   */
  _addListeners () {
    this._container.addEventListener('click', this._onClick)
  }

  /**
   * @private
   */
  _removeListeners () {
    this._container.removeEventListener('click', this._onClick)
  }

  /**
   * @private
   */
  _draw () {
    this._container = document.createElement('div')
    this._container.classList.add('toggle-switch')

    this._checkbox.parentNode.insertBefore(this._container, this._checkbox.nextSibling)

    this._tongue = document.createElement('div')
    this._tongue.classList.add('toggle-switch__tongue')
    if (this._checkbox.checked) {
      this._renderTurnOn()
    } else {
      this._renderTurnOff()
    }
    this._container.appendChild(this._tongue)

    this._checkbox.classList.add('toggle-switch__checkbox')
    this._container.appendChild(this._checkbox)
  }

  /**
   * @private
   */
  _undraw () {
    this._checkbox.classList.remove('toggle-switch__checkbox')

    this._container.parentNode.insertBefore(this._checkbox, this._container.nextSibling)

    this._container.parentNode.removeChild(this._container)

    this._container = null
    this._tongue = null
  }

  /**
   * @private
   */
  _renderTurnOn () {
    this._container.classList.remove(CSS_CLASS_OFF)
    this._container.classList.add(CSS_CLASS_ON)

    this._tongue.innerHTML = this._onLabel
  }

  /**
   * @private
   */
  _renderTurnOff () {
    this._container.classList.remove(CSS_CLASS_ON)
    this._container.classList.add(CSS_CLASS_OFF)

    this._tongue.innerHTML = this._offLabel
  }

  /**
   * @private
   */
  _onClick () {
    this.toggle()
  }
}

/**
 * @returns {Event}
 */
function createChangeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('change', true, false)
  return event
}
