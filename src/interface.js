$(document).ready(function() {
  // var peephandler = new PeepHandler();

  function initialise() {
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.write(data[i].body + "<br>")
      }
      return data
    })
  }

  initialise();
})
