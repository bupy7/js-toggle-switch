describe('onChange', function () {
  it('should response to change event', function (done) {
    var checkboxEl = document.querySelector('.checkbox')
    var toggleSwitch = new window.ToggleSwitch(checkboxEl)
    var checked = false

    checkboxEl.addEventListener('change', function () {
      checked = !checked
      // eslint-disable-next-line no-unused-expressions
      expect(toggleSwitch.getValue()).to.be.equal(checked)

      if (!checked) {
        done() // exit after second call of the toggle()
      }
    })

    toggleSwitch.toggle()
    toggleSwitch.toggle()
  })
})
