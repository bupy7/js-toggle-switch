beforeEach(function () {
  var container = document.getElementById('container')

  container.innerHTML = ''

  var checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.classList.add('checkbox')
  container.appendChild(checkbox)
})
