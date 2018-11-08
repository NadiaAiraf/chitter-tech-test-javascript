$(document).ready(function() {
  var peepHandler = new PeepHandler();

  function initialise() {
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        peepHandler.createPeep(data[i].body, i)
      }
    })
  }

  initialise();
})
