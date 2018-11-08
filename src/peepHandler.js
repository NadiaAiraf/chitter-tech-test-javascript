var PeepHandler = function() {

}

PeepHandler.prototype.createPeep = function (body, num) {
  newDiv = document.createElement('div')
  newDiv.setAttribute('id','peep' + num)
  text = document.createTextNode(body)
  newDiv.appendChild(text)
  form = document.getElementById('final-div')
  document.body.insertBefore(newDiv, form)
};
