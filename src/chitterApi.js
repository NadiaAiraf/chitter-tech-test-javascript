function ChitterApi() {
  this.returnData = function() {
    return new Promise(function(resolve, reject) {
      var articles;
      $.get("https://chitter-backend-api.herokuapp.com/peeps",function(data) {
        articles = data.response.results;
      })
      setTimeout(function(){
        resolve(articles);
      },500);
    });
  }
}
