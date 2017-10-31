describe('.toggle()', function () {
  it('should toggle', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox')

    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false

    toggleSwitch.toggle()
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.true

    toggleSwitch.toggle()
    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false
  })
})
