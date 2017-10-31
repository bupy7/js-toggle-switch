describe('_configuration', function () {
  it('should set labels', function () {
    var toggleSwitch = new window.ToggleSwitch('.checkbox', {
      onLabel: 'Yes',
      offLabel: 'No'
    })

    // eslint-disable-next-line no-unused-expressions
    expect(document.querySelector('.toggle-switch__tongue').innerHTML).to.be.equals('No')

    toggleSwitch.toggle()
    // eslint-disable-next-line no-unused-expressions
    expect(document.querySelector('.toggle-switch__tongue').innerHTML).to.be.equals('Yes')
  })
})
