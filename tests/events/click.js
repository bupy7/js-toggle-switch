describe('onClick', function () {
  it('should toggle', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox')
    var toggleSwitchEl = document.querySelector('.toggle-switch')

    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false

    var event = document.createEvent('HTMLEvents')
    event.initEvent('click', true, false)
    toggleSwitchEl.dispatchEvent(event)
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.true

    toggleSwitchEl.dispatchEvent(event)
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false
  })
})
