class ToggleSwitch {
  /**
   * @returns {String}
   */
  get CSS_CLASS_ON () {
    return 'toggle-switch--on'
  }

  /**
   * @returns {String}
   */
  get CSS_CLASS_OFF () {
    return 'toggle-switch--off'
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

    this._configuration(options || {})
    this._render()
    this._addListeners()
  }

  turnOn () {
    if (this._checkbox.checked !== false) {
      return
    }

    this._checkbox.checked = true

    this._renderTurnOn()
  }

  turnOff () {
    if (this._checkbox.checked !== true) {
      return
    }

    this._checkbox.checked = false

    this._renderTurnOff()
  }

  toggle () {
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

  /**
   * @param {Object} options
   * @private
   */
  _configuration (options) {
    let allowedOptionsMap = ['onLabel', 'offLabel']
    for (let name in options) {
      if (this[name] !== undefined && allowedOptionsMap.indexOf(name) !== -1) {
        this['_' + name] = options[name]
      }
    }
  }

  /**
   * @private
   */
  _addListeners () {
    let self = this
    this._container.addEventListener('click', () => {
      self.toggle()
    })
  }

  /**
   * @private
   */
  _render () {
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
  _renderTurnOn () {
    this._container.classList.remove(this.CSS_CLASS_OFF)
    this._container.classList.add(this.CSS_CLASS_ON)

    this._tongue.innerHTML = this._onLabel
  }

  /**
   * @private
   */
  _renderTurnOff () {
    this._container.classList.remove(this.CSS_CLASS_ON)
    this._container.classList.add(this.CSS_CLASS_OFF)

    this._tongue.innerHTML = this._offLabel
  }
}

export default ToggleSwitch
