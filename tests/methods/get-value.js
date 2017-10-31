describe('.getValue()', function () {
  it('should returns a value', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox')

    // eslint-disable-next-line no-unused-expressions
    expect(toggleSwitch.getValue()).to.be.false
  })
})
