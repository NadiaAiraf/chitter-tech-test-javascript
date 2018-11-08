var PeepHandler = function() {

}

PeepHandler.prototype.createPeep = function (body, num) {
  newDiv = document.createElement('div')
  newDiv.setAttribute('id','peep' + num)
  newContent = document.createTextNode(body)
  newDiv.appendChild(newContent)
  form = document.getElementById('final-div')
  document.body.insertBefore(newDiv, form)
};
