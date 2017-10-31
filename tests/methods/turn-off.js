describe('.turnOff()', function () {
  it('should turn off', function () {
    document.querySelector('.checkbox').checked = true

    var toggleSwitch = new window.ToggleSwitch('.checkbox')

    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.true

    toggleSwitch.turnOff()
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false
  })
})
