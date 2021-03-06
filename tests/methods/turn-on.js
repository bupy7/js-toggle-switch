describe('.turnOn()', function () {
  it('should turn on', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox')

    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false

    toggleSwitch.turnOn()
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.true
  })
})
