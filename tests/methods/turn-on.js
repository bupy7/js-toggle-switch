describe('.turnOn()', function() {
  it('should turn on', function() {
    var toggleSwitch = new ToggleSwitch('.checkbox');

    expect(toggleSwitch.getValue()).to.be.false;

    toggleSwitch.turnOn();
    expect(toggleSwitch.getValue()).to.be.true;
  });
});
