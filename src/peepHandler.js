var PeepHandler = function() {

}

PeepHandler.prototype.createPeep = function (body) {
  newDiv = document.createElement('div')
  newContent = document.createTextNode(body)
  newDiv.appendChild(newContent)
  form = document.getElementById('final-div')
  document.body.insertBefore(newDiv, form)
};
