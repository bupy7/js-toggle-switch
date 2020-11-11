describe('.destroy()', function () {
  it('should stop existence', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox')

    // eslint-disable-next-line no-unused-expressions
    expect(document.querySelector('.toggle-switch')).not.to.be.null

    toggleSwitch.destroy()

    // eslint-disable-next-line no-unused-expressions
    expect(document.querySelector('.toggle-switch')).to.be.null
  })
})
