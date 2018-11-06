function ChitterApi() {
  this.returnData = function() {
    return new Promise(function(resolve, reject) {
      var articles;
      $.get("https://chitter-backend-api.herokuapp.com/peeps",function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          document.write(data[i].body)
          document.write(" - " + data[i].user.handle)
          document.write('<br>')
        }
      })
    });
  }
}
