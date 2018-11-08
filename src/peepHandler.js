'use strict';

var PeepHandler = function() {

}

PeepHandler.prototype.createPeep = function (body, num) {
  let newDiv = document.createElement('div')
  newDiv.setAttribute('id','peep' + num)
  let text = document.createTextNode(body)
  newDiv.appendChild(text)
  let form = document.getElementById('final-div')
  document.body.insertBefore(newDiv, form)
};

module.exports = PeepHandler;
