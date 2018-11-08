$(document).ready(function() {
  var peephandler = new PeepHandler();

  function initialise() {
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        newDiv = document.createElement('div')
        newContent = document.createTextNode(data[i].body)
        newDiv.appendChild(newContent)
        form = document.getElementById('final-div')
        document.body.insertBefore(newDiv, form)
      }
    })
  }

  initialise();
})
